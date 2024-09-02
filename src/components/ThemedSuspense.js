import { CircularProgress } from "@mui/material";
import React from "react";

function ThemedSuspense() {
  return (
    <div className="w-full h-screen flex items-center justify-center p-6 text-lg font-medium text-gray-600">
      <CircularProgress />
    </div>
  );
}

export default ThemedSuspense;
