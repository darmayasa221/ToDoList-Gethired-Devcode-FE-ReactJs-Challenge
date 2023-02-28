import React, { useEffect } from "react";
import { Global } from "@emotion/react";
import Header from "./components/Header/Header";
import { globalStyle } from "./globalStyle/globalStyle";
import Main from "./components/Main/Main";

function App() {
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://todo.api.devcode.gethired.id/activity-groups/38880`,
      );
      const responseJson = await response.json();
      console.log(responseJson);
    })();
  }, []);
  return (
    <>
      <Global styles={globalStyle} />
      <Header />
      <Main />
    </>
  );
}

export default App;
