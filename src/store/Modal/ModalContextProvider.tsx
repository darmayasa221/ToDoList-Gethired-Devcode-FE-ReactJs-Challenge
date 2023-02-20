import React, { FC, ReactNode, useState } from "react";
import ModalContext from "./modalContext";

const ModalContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [modal, setModal] = useState<boolean>(false);
  const [modalChangeChildrenElement, setModalChangeChildrenElement] =
    useState<boolean>(false);
  const onHandlerModalOn = () => setModal(true);
  const onHandlerModalOff = () => setModal(false);
  const onHandlerModalChangeChildrenElementOn = () =>
    setModalChangeChildrenElement(true);
  const onHandlerModalChangeChildrenElementOff = () =>
    setModalChangeChildrenElement(false);
  return (
    <ModalContext.Provider
      value={{
        isModalVisible: modal,
        isModalChangeChildrenElement: modalChangeChildrenElement,
        setModalOn: onHandlerModalOn,
        setModalOff: onHandlerModalOff,
        setModalChangeChildrenElementOn: onHandlerModalChangeChildrenElementOn,
        setModalChangeChildrenElementOff:
          onHandlerModalChangeChildrenElementOff,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
