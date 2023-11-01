import React from "react";
import CustomCalendar from "./Calendar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CustomCalendar
        maxWidth={380}
        onChange={(date) => console.log(date)}
        defaultView="month"
        showDoubleView
        selectRange
        onClickMonth={(value) => console.log("Clicked month: ", value)}
      />

      <CustomCalendar
        maxWidth={380}
        onChange={(date) => console.log(date)}
        selectRange
      />
    </div>
  );
}
