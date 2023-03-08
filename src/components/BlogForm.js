import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Container, Form, Modal } from 'react-bootstrap';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import axios from 'axios';

const Conter = styled(Container)`
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

function BlogForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showModal, setShowModal] = useState(false);
  /* const history = useHistory(); */

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  const onSubmit = () => {
    const date = new Date().toISOString().slice(0, 10);

    axios.post('http://localhost:3001/posts', {
      title,
      content,
      date
    }).then(res => {
      console.log(res);
      /* history.push('/gamebull-page'); */
    });
  };

  const onSubmitModal = () => {
    setShowModal(true);
  };

  return (
    <Conter>
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
          작성완료
        </Button>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <ModalHeader closeButton>
          <Modal.Title>발행전 설정</Modal.Title>
        </ModalHeader>
        <Modal.Body>작성이 완료되었습니다!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </Conter>
  );
}


export default BlogForm;
