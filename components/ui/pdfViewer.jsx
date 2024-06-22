import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

const PdfViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <h3 className="text-xl mb-2">Resume</h3>
      {file && (
        <Document
          file={file ? URL.createObjectURL(file) : ''}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={1} width={600} />
        </Document>
      )}
    </div>
  );
};

export default PdfViewer;
