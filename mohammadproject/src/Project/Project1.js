import React from "react";

let curDate = new Date(2022, 5, 6, 10);
curDate = curDate.getHours();
let greeting = "";
const cssStyle = {};
if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "black";
}
const aqua = {
  textAlign: "center",
  backgroundColor: "#10403B",
  padding: "350px 0",
};
const bg = {
  backgroundColor: "#10403B",
};
const head = {
  backgroundColor: "#BFBFBF",
  color: "#127369",
  boxShadow: "1px 5px 20px rgba(255, 255, 255, .300)",
  padding: "20px 0",
};
export default function Project1() {
  return (
    <>
      <div className="container-fluidbg" style={bg}>
        <div className="container" style={aqua}>
          <div>
            <h1 style={head}>
              Hello Sir , <span style={cssStyle}>{greeting}</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
