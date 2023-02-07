import React from "react";
import { Global } from "@emotion/react";
import Header from "./components/Header/Header";
import { globalStyle } from "./globalStyle/globalStyle";
import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";
import FormDetailActivity from "./components/Form/DetailActivity/FormDetailActivity";
import ConfirmAlert from "./components/Alert/ConfirmAlert";
import InformAlert from "./components/Alert/InformAlert";

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Modal>
        <InformAlert />
      </Modal>
      {/* <Header />
      <Main /> */}
    </>
  );
}

export default App;
