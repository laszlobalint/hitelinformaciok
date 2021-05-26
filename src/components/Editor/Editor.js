import React, { useState } from 'react';
import ReactQuill from 'react-quill';

import 'react-quill/dist/quill.snow.css';

const Editor = (props) => {
  const { placeholder, changed } = props;

  const [html, setHtml] = useState('');

  const changeHandler = (data) => {
    setHtml(data);
    changed(data);
  };

  Editor.modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  Editor.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
  ];

  return (
    <div style={{ minHeight: '200px' }}>
      <ReactQuill
        placeholder={placeholder}
        value={html}
        modules={Editor.modules}
        formats={Editor.formats}
        onChange={(value) => changeHandler(value)}
        theme={'snow'}
        bounds={'.app'}
      />
    </div>
  );
};

export default Editor;
