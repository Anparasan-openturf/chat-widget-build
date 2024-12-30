import React, { useState } from "react";
import FileUploader from "./FileUploader";
import FileCard from "./FileCard";
import ConditionalRenderer from "../ConditionalRenderer";
import { docQueryService } from "../../services/docQuery.service";
import { CircularProgress } from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom";
import PointsCard from "../cards/PointsCard";

import { ReactComponent as Image1 } from "../../assets/images/up_image_1.svg";
import { ReactComponent as Image2 } from "../../assets/images/up_image_2.svg";
import { ReactComponent as Image3 } from "../../assets/images/up_image_3.svg";

const points = [
  {
    title: "Upload Your Documents",
    icon: Image1,
    points: [
      "Drop or upload documents not more than 300 pages",
      'After selecting docments click "Start"',
    ],
  },
  {
    title: "",
    icon: Image2,
    points: [
      "Wait for the platform to process your documents.",
      "This may take a few moments.",
    ],
  },
  {
    title: "",
    icon: Image3,
    points: [
      "You will be redirected to the query page.",
      "Where you can start querying on your documents.",
    ],
  },
];

function UploadScreen() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const { setId, showMessage } = useOutletContext();

  const handleDelete = (i) => {
    setFiles([...files.slice(0, i), ...files.slice(i + 1)]);
  };

  const handleUpload = async () => {
    const payload = new FormData();
    files.forEach((file) => {
      payload.append("files", file);
    });
    setIsUploading(true);
    docQueryService
      .uploadDocuments(payload)
      .then((res) => {
        if (res.status) setId(res.result.id);
        setIsUploading(false);
      })
      .catch((error) => {
        setIsUploading(false);
        showMessage(
          "error",
          error?.response?.data?.message
            ? error.response.data.message
            : error.message
        );
      });
  };

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <div className="m-auto max-w-[1280px]">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-[#2E0040] text-3xl">
            Experience Document Summary and Query
          </h1>
          <button
            type="submit"
            className="w-40 h-12 mt-4 bg-[#6A2588] rounded-lg shadow-xl text-white text-lg font-normal"
            onClick={handleOnClick}
          >
            Home
          </button>
        </div>
        <div className="flex justify-between my-4 space-x-20">
          {points.map((ele, i) => (
            <PointsCard
              key={i}
              Icon={ele.icon}
              title={ele.title}
              points={ele.points}
            />
          ))}
        </div>
      </div>
      <FileUploader setFiles={setFiles} />
      <ConditionalRenderer condition={files?.length > 0}>
        <div className="w-full bg-[#e1c5ee] mt-4 rounded-md py-4">
          <div className="flex gap-2 overflow-x-auto justify-center mx-4">
            {files.map((file, index) => (
              <FileCard
                key={index}
                file={file}
                handleDelete={() => handleDelete(index)}
              />
            ))}
          </div>
        </div>
      </ConditionalRenderer>
      <div className="flex justify-end">
        <button
          type="submit"
          className="w-40 h-12 mt-4 bg-[#6A2588] rounded-lg shadow-xl text-white text-lg font-normal disabled:bg-gray-400 mr-4 flex justify-center items-center"
          onClick={handleUpload}
          disabled={isUploading || files.length === 0}
        >
          {isUploading ? (
            <CircularProgress size={25} style={{ color: "#2b233d" }} />
          ) : (
            "Start"
          )}
        </button>
      </div>
    </div>
  );
}

export default UploadScreen;
