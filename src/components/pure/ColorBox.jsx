import React, { useState } from "react";

let red = 0,
  green = 0,
  blue = 0;
let colorRgb;
const ColorBox = () => {
  const [rgbColor, setRgbColor] = useState(`${red},${green},${blue}`);
  const changeColor = () => {
    colorRgb = setInterval(() => {
      const randomRed = Math.round(Math.random() * 256);
      const randomGreen = Math.round(Math.random() * 256);
      const randomBlue = Math.round(Math.random() * 256);

      red = randomRed;
      green = randomGreen;
      blue = randomBlue;
      setRgbColor(`${red},${green},${blue}`);
    }, 1000);
  };

  const clear = () => {
    clearInterval(colorRgb);
  };

  return (
    <div
      style={{
        width: 255,
        height: 255,
        backgroundColor: `rgb(${rgbColor})`,
      }}
      onMouseOver={changeColor}
      onMouseOut={clear}
      onDoubleClick={clear}
    >
      ColorBox
    </div>
  );
};

export default ColorBox;
