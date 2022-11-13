import React, { useState } from "react";
import { createContext } from "react";

export const ModalCtx = createContext({ modal: false, toggleModal: () => {} });

const ModalContex = ({ children }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal((modal) => !modal);
  };

  return (
    <ModalCtx.Provider value={{ modal, toggleModal }}>
      {children}
    </ModalCtx.Provider>
  );
};

export default ModalContex;
