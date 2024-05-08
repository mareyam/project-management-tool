import { useState } from "react";

const useErrorSuccess = (
  title: string,
  handlePost: () => Promise<void>,
  onClose: () => void,
  showError: boolean,
  showSuccess: boolean,
  setShowError: (showError: boolean) => void,
  setShowSuccess: (showSuccess: boolean) => void
) => {
  if (!title) {
    setShowError(true);
    setTimeout(() => {
      setShowError(false);
      onClose();
    }, 2000);
    return showError;
  } else {
    handlePost();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 2000);
    return showSuccess;
  }
};

export default useErrorSuccess;
