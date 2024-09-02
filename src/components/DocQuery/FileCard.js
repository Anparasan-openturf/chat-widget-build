import React from "react";
import { DeleteIcon, FileIcon } from "../../assets/icons";

function FileCard({ file, handleDelete }) {
  return (
    <div className="flex p-4 border border-gray-500 rounded-md min-w-[200px] max-w-[300px] h-14 bg-white justify-between items-center">
      <div className="flex items-center">
        <FileIcon />
        <p className="mx-2 font-medium text-[12px]">{file.name}</p>
      </div>
      <DeleteIcon
        className="text-red-800 cursor-pointer"
        onClick={handleDelete}
      />
    </div>
  );
}

export default FileCard;
