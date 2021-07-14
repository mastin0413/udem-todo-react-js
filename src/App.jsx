/* eslint react-hooks/exhaustive-deps: off*/
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  const onClockCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlg || setFaceShowFlg(true);
      } else {
        faceShowFlg && setFaceShowFlg(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">オゲンキデスカ？</ColorfulMessage>
      <ColorfulMessage color="pink">ゲンキデス！</ColorfulMessage>
      <button onClick={onClockCountUp}>Count Up!</button>
      <br />
      <button onClick={onClickSwitchShowFlg}>Face On/Off</button>
      <p>{num}</p>
      {faceShowFlg && <p>( ﾟдﾟ)</p>}
    </>
  );
};
export default App;
