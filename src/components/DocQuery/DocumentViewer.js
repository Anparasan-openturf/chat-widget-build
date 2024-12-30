import React, { memo, useState } from "react";
import {
  CircularProgress,
  IconButton,
  Pagination,
  Skeleton,
} from "@mui/material";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { ZoomIn, ZoomOut } from "@mui/icons-material";
import { useOutletContext } from "react-router-dom";
import ConditionalRenderer from "../ConditionalRenderer";

function DocumentViewer() {
  const [reLoadPdf, setReLoadPDF] = useState(false);
  const [numPages, setNumPages] = useState(1);
  const [zoom, setZoom] = useState(1);

  const { files, pageNumber, setPageNumber, documentId } = useOutletContext();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleZoomIn = () => {
    setZoom((prevZoom) => prevZoom + 0.1);
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(0.1, prevZoom - 0.1));
  };

  return (
    <ConditionalRenderer
      condition={!!files?.[documentId]}
      defaultComponent={() => (
        <CircularProgress className="mt-3" style={{ color: "white" }} />
      )}
    >
      <div className="overflow-scroll h-[90vh] bg-white">
        <Document
          key={reLoadPdf}
          file={files[documentId]?.buffer}
          loading={<Skeleton variant="rect" />}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={() => {
            setReLoadPDF(!reLoadPdf);
          }}
        >
          <Page pageNumber={pageNumber} scale={zoom} />
        </Document>
        <div className="w-full flex justify-center absolute top-0 mt-2 z-20">
          <div className="flex border rounded-lg p-1 bg-[#f7ebf6] items-center">
            <IconButton onClick={handleZoomIn}>
              <ZoomIn />
            </IconButton>
            <Pagination
              count={numPages}
              onChange={(event, page) => setPageNumber(page)}
              page={pageNumber}
            />
            <input
              type="number"
              onChange={(e) => {
                if (e.target.value <= numPages && e.target.value > 0) {
                  setPageNumber(Number(e.target.value));
                }
              }}
              className="w-12 text-center bg-[#f7ebf6] border-b-2"
              value={pageNumber}
            />
            <IconButton onClick={handleZoomOut}>
              <ZoomOut />
            </IconButton>
          </div>
        </div>
      </div>
    </ConditionalRenderer>
  );
}

export default memo(DocumentViewer);
