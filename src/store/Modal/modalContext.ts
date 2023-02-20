import { createContext } from "react";

type TypeModalContext = {
  isModalVisible: boolean;
  isModalChangeChildrenElement: boolean;
  setModalOn: () => void;
  setModalOff: () => void;
  setModalChangeChildrenElementOn: () => void;
  setModalChangeChildrenElementOff: () => void;
};

const ModalContext = createContext<TypeModalContext>({} as TypeModalContext);

export default ModalContext;
