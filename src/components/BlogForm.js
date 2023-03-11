import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Container, Form, Modal } from 'react-bootstrap';
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
  const [content, setContent] = useState('');
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleEditorChange = (e, editor) => {
    const data = editor.getData();
    setContent(data);
  };

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
      history.push('/gamebull-page');
    });
  };

  const onSubmitModal = () => {
    setShowModal(true);
    console.log(setShowModal);
  };

  return (
    <Writing>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBlogTitle">
          <Label>제목</Label>
          <Titlefield type="text" placeholder="제목을 입력해주세요" value={title}
            onChange={handleTitleChange}
          />
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
        >
          발행
        </Button>
        <Modaltop showModal={showModal} setShowModal={setShowModal} onSubmit={onSubmit} />
      </Form>
    </Writing>
  );
}

export function Modaltop({ showModal, setShowModal, onSubmit }) {

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
