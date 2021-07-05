import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClockButton = () => alert("test");
  const contentLedyStyle = {
    color: "pink",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">オゲンキデスカ？</ColorfulMessage>
      <ColorfulMessage color="pink">ゲンキデス！</ColorfulMessage>
      <button onClick={onClockButton}>ボタン</button>
    </>
  );
};
export default App;
