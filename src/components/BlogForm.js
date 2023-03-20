import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Container, Form, Modal } from 'react-bootstrap';
import { uploadImage } from './firebaseConfig';
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
    setTitle(e.target.value);
    if (e.target.value.trim() === "") {
      setIsTitleEmpty(true);
    } else {
      setIsTitleEmpty(false);
    }
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

  const onSubmit = (isPrivatresecret, isNotice) => {
    const date = new Date().toISOString().slice(0, 10);

    axios.post('http://localhost:3001/posts', {
      title,
      content,
      date,
      isPrivatresecret,
      isNotice
    }).then(res => {
      console.log(res);
      history.push('/gamebull-page/admin');
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = await uploadImage(file);
    const imageTag = `<img src="${imageURL}" alt="${file.name}" />`;
    setContent(content + imageTag);
  };

  const [showModal, setShowModal] = useState(false);

  const onSubmitModal = () => {
    setShowModal(true);
  };

  return (
    <Writing>
      <Form onSubmit={handleSubmit}>

        {/* 이미지 업로드 input 추가 */}
        <Form.Group controlId="formBlogImage">
          <Label>이미지 업로드</Label>
          <Form.Control type="file" onChange={handleImageUpload} />
        </Form.Group>

        {/* ... 기존 코드 ... */}
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
    onSubmit(isPrivatresecret, isNotice);
    setShowModal(false);
  };

  const [secretked, setSecret] = useState(false);
  const [noticeked, setNoticeked] = useState(false);

  const [isPrivatresecret, setIsPrivatresecret] = useState(false);
  const [isNotice, setIsNotice] = useState(false);

  const Secretcheckbox = (e) => {
    setSecret(e.target.checked);
    setIsPrivatresecret(e.target.checked);
    console.log(secretked);
  };

  const Noticecheckbox = (e) => {
    setNoticeked(e.target.checked);
    setIsNotice(e.target.checked);
    console.log(noticeked);
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
            <HiddenCheckbox secretked={secretked} onChange={Secretcheckbox} />
            비공개
          </Goal>
        </ModalBody>
      </Character>

      <ModalFooter>
        <Announcement>
          <Register>
            <HiddenCheckbox noticeked={noticeked} onChange={Noticecheckbox} />
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