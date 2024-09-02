import React, { useEffect, useState } from "react";
import { docQueryService } from "../../services/docQuery.service";
import Layout from "./Layout";
import { Outlet, Route, Routes } from "react-router-dom";
import useSnack from "../../hooks/useSnack";
import SnackAlert from "../../components/SnackAlert";

function Context({ id, setId, setLoading, isLoading }) {
  const [files, setFiles] = useState({});
  const [messages, setMessages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [documentId, setDocumentId] = useState(null);

  const { showMessage, getProps } = useSnack();

  useEffect(() => {
    const fetchChats = () => {
      setLoading(true);
      docQueryService
        .getChats(id)
        .then(({ result }) => {
          setPageNumber(1);
          setDocumentId(result.files[0].id);
          result.files.forEach((file) => {
            setFiles((old) => ({ ...old, [file.id]: file }));
          });

          if (result?.conversation?.length) {
            const transformData = (data) => {
              const transformed = [];
              data.forEach((item) => {
                if (item.role === "user") {
                  let text =
                    item.parts.length > 1
                      ? item.parts[item.parts.length - 1].text
                      : item.parts[0].text;
                  text = text.split(":");
                  if (text.length > 1) {
                    text = text.reduce((acc, curr, i) => {
                      if (!i) acc = "";
                      else acc += curr;
                      return acc;
                    }, "");
                  } else text = text[0];
                  transformed.push({ isUser: true, text });
                } else {
                  transformed.push({ isUser: false, text: item.parts[0].text });
                }
              });
              return transformed;
            };

            setMessages(transformData(result.conversation));
          }
          showMessage("success", "Document Loaded");
          setLoading(false);
        })
        .catch((error) => {
          showMessage(
            "error",
            error?.response?.data?.message
              ? error.response.data.message
              : error.message
          );
        });
    };

    if (id?.length > 8) fetchChats();
  }, [id]);

  return (
    <>
      <Outlet
        context={{
          id,
          setId,
          files,
          setFiles,
          messages,
          setMessages,
          pageNumber,
          setPageNumber,
          isLoading,
          setLoading,
          documentId,
          setDocumentId,
          showMessage,
        }}
      />
      <SnackAlert {...getProps} />
    </>
  );
}

function DocQuery() {
  const [id, setId] = useState();
  const [isLoading, setLoading] = useState(false);

  return (
    <Routes>
      <Route
        element={<Context id={id} setId={setId} setLoading={setLoading} />}
      >
        <Route path="/" element={<Layout id={id} isLoading={isLoading} />} />
      </Route>
    </Routes>
  );
}

export default DocQuery;
