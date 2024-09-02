import React from "react";
import { UploadIcon } from "../../assets/icons";
import { useDropzone } from "react-dropzone";

function FileUploader({ setFiles }) {
  const onDrop = async (acceptedFiles) => {
    if (acceptedFiles.length) setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true,
    accept: `image/*, application/pdf`,
  });

  return (
    <div
      className="w-full h-[22.7rem] flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-md"
      {...getRootProps()}
    >
      <UploadIcon />
      <input {...getInputProps()} />
      <div className="text-center">
        <p className="text-[#2E0040] text-2xl font-normal">
          Drag and drop files or
          <em style={{ cursor: "pointer" }} className="text-2xl font-bold">
            {" Click here to browse "}
          </em>
          to begin
        </p>
        <p className="text-base text-gray-600">(File limit upto 300 pages)</p>
      </div>
    </div>
  );
}

export default FileUploader;
