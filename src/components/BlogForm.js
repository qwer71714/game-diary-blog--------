import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Container, Form } from 'react-bootstrap';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';

const Conter = styled(Container)`
  margin-top: 1vh;
`

const Label = styled(Form.Label)`
  font-size: 24px;
  font-weight: 500;
  margin-top: 5vh;
  margin-bottom: 2vh;
`

const Titlefield = styled(Form.Control)`
  padding: 12px 0 12px 12px;
  font-size: 18px;
`

const Button = styled.button`
  margin-top: 5vh;
  text-decoration: none;
  border: none;
  border-radius: 12px;
  padding: 8px 14px;
  background-color: #2A66F1;
  color: #fff;
`;

function BlogForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // form submit 로직 추가
  }

  return (
    <Conter>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBlogTitle">
          <Label>제목</Label>
          <Titlefield type="text" placeholder="제목을 입력해주세요" value={title} onChange={handleTitleChange} />
        </Form.Group>

        <Form.Group controlId="formBlogContent">
          <Label>내용</Label>
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={handleEditorChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          작성 완료
        </Button>
      </Form>
    </Conter>
  );
}

export default BlogForm;
