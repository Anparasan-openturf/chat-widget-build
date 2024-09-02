import React, { memo } from "react";
import SwitchCaseRenderer from "../../components/SwitchCaseRenderer";
import UploadScreen from "../../components/DocQuery/UploadScreen";
import { CircularProgress } from "@mui/material";
import DocumentViewer from "../../components/DocQuery/DocumentViewer";
import ChatInterface from "../../components/DocQuery/ChatInterface";

function Layout({ isLoading, id }) {
  return (
    <div className="h-[100vh] w-full background-gradient relative">
      <div className="h-full mx-auto max-w-[1680px] p-4">
        <SwitchCaseRenderer
          defaultComponent={() => <UploadScreen />}
          cases={[
            {
              condition: isLoading,
              component: () => (
                <div className="w-full h-[87vh] flex justify-center items-center">
                  <CircularProgress />
                </div>
              ),
            },
            {
              condition: !isLoading && id,
              component: () => (
                <div className="flex flex-1 h-full">
                  <div className="w-[500px] xl:w-[600px] relative">
                    <DocumentViewer />
                  </div>
                  <div className="flex-1">
                    <ChatInterface id={id} />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default memo(Layout);
