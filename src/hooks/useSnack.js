import { useState } from "react";

const useSnack = () => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState(null);
  const [message, setMessage] = useState(null);

  const getProps = { severity, message, open, setOpen };

  const showMessage = (severity, message) => {
    setSeverity(severity);
    setMessage(message);
    setOpen(true);
  };
  return { showMessage, getProps };
};

export default useSnack;
