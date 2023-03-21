import { useHistory } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Container, Form, Modal } from 'react-bootstrap';
import { uploadImage } from './server/firebaseConfig.js';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import axios from 'axios';

const Writing = styled(Container)`
  margin-top: 1vh;
`;

const Label = styled(Form.Label)`
  font-size: 24px;
  font-weight: 500;
  margin-top: 5vh;
  margin-bottom: 2vh;
`;

const Titlefield = styled(Form.Control)`
  padding: 12px 0 12px 12px;
  font-size: 18px;
`;

const Button = styled.button`
  margin-top: 5vh;
  text-decoration: none;
  border: none;
  border-radius: 12px;
  padding: 8px 14px;
  background-color: #2A66F1;
  color: #fff;
`;

const ModalHeader = styled(Modal.Header)`
  font-size: 24px;
  border-bottom: none;
`;

const ModalBody = styled(Modal.Body)`
  align-items: center;
`;

const ModalBodygame = styled(Modal.Body)`
  align-items: center;
`;

const Character = styled.div`
  margin-top: 5px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  margin-right: 12px;
`;

const Goal = styled.div`
  font-size: 14px;
  color: #4B4B4B;
  margin-top: 3vh;
  display: flex;
  align-items: center;
`;

const ModalFooter = styled(Modal.Footer)`
  margin-top: 5vh;
  padding-top: 3vh;
  display: flex;
  align-items: center;
`;

const Announcement = styled.div`
  margin-right: auto;
`;

const Register = styled.div`
  display: flex;
  align-items: center;
 
  color: #4B4B4B;
`;

const Buttons = styled(Button)`
  margin-top: 0;
`;

function BlogForm() {

  const [title, setTitle] = useState('');
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);

  const handleTitleChange = (e) => {
    const titleValue = e.target.value;
    setTitle(titleValue);
    setIsTitleEmpty(titleValue.trim() === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [content, setContent] = useState('');

  const handleEditorChange = (e, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  const history = useHistory();

  // Node.js axios post 요청 로직
  const onSubmit = (isPrivatresecret, isNotice, Steam, Console) => {
    const date = new Date().toISOString().slice(0, 10);

    axios.post('http://localhost:3001/posts', {
      titleImage: titleImage,
      title,
      content,
      date,
      isPrivatresecret,
      isNotice,
      Steam,
      Console
    }).then(res => {
      console.log(res);
      history.push('/gamebull-page/admin');
    });
  };

  // 이미지 업로드 로직
  const [titleImage, setTitleImage] = useState('');

  const handleImageUpload = useCallback(async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // 이미지를 uploadImage 함수를 통해 업로드하고, 업로드된 이미지의 URL을 가져오는 로직
    try {
      const imageURL = await uploadImage(file);
      setTitleImage(`<img src="${imageURL}" alt="${file.name}" />`);
    } catch (error) {
      console.log('Error uploading image:', error);
    }
  }, []);

  const [showModal, setShowModal] = useState(false);

  const onSubmitModal = () => {
    setShowModal(true);
  };

  return (
    <Writing>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBlogImage">
          <Label>이미지 업로드</Label>
          <Form.Control type="file" onChange={handleImageUpload} />
        </Form.Group>
      </Form>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBlogTitle">
          <Label>제목</Label>
          <Titlefield
            type="text"
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={handleTitleChange}
            isInvalid={isTitleEmpty}
          />
          <Form.Control.Feedback type="invalid">
            최소 1글자 이상 제목을 입력해주세요.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBlogContent">
          <Label>내용</Label>
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={handleEditorChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit"
          onClick={onSubmitModal}
          disabled={title.trim().length < 1}
          style={{ backgroundColor: title.trim().length < 1 ? '#BDBDBD' : '#2A66F1' }}
        >
          발행
        </Button>
        <PublishModal showModal={showModal} setShowModal={setShowModal} onSubmit={onSubmit} />
      </Form>
    </Writing>
  );
}

export function PublishModal({ showModal, setShowModal, onSubmit }) {

  const handleClick = () => {
    onSubmit(isPrivatresecret, isNotice, Steam, Console);
    setShowModal(false);
  };

  const [isPrivatresecret, setIsPrivatresecret] = useState(false);
  const [isNotice, setIsNotice] = useState(false);

  const [secretked, setSecret] = useState(false);
  const Secretcheckbox = (e) => {
    setSecret(e.target.checked);
    setIsPrivatresecret(e.target.checked);
  };

  const [noticeked, setNoticeked] = useState(false);
  const Noticecheckbox = (e) => {
    setNoticeked(e.target.checked);
    setIsNotice(e.target.checked);
  };

  const [disableSteam, setDisableSteam] = useState(false);
  const [disableConsole, setDisableConsole] = useState(false);

  const [Steam, setSteam] = useState(false);
  const Gamecheckbox = (e) => {
    setSteam(e.target.checked);
    setDisableConsole(e.target.checked);
  };

  const [Console, setConsole] = useState(false);
  const Consolecheckbox = (e) => {
    setConsole(e.target.checked);
    setDisableSteam(e.target.checked);
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <ModalHeader closeButton>
        <Modal.Title>설정</Modal.Title>
      </ModalHeader>
      <Character>
        <ModalBody>
          공개 설정

          <Goal>
            <HiddenCheckbox
              secretked={secretked}
              onChange={Secretcheckbox}
            />

            비공개
          </Goal>
        </ModalBody>
      </Character>

      <Character>
        <ModalBodygame>
          게임 설정

          <Goal>
            <HiddenCheckbox
              secretked={Steam}
              onChange={Gamecheckbox}
              disabled={disableSteam}
            />

            스팀
          </Goal>
          <Goal>
            <HiddenCheckbox
              secretked={Console}
              onChange={Consolecheckbox}
              disabled={disableConsole}
            />

            콘솔
          </Goal>
        </ModalBodygame>
      </Character>

      <ModalFooter>
        <Announcement>
          <Register>
            <HiddenCheckbox
              noticeked={noticeked}
              onChange={Noticecheckbox}
            />

            공지사항으로 등록
          </Register>
        </Announcement>
        <Buttons variant="secondary" onClick={handleClick}>
          발행
        </Buttons>
      </ModalFooter>
    </Modal>
  );
}

export default BlogForm;