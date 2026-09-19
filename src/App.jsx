import React from "react";
import { useState, useRef } from "react";
import "./App.css";

const App = () => {
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");

  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);

  function handleSubmit() {
    const otp = otp1 + otp2 + otp3 + otp4;
    console.log(otp);
  }

  function handleBackspace2(e) {
    if (e.key === "Backspace" && otp2 === "") {
      input1.current.focus();
    }
  }
  function handleBackspace3(e) {
    if (e.key === "Backspace" && otp3 === "") {
      input2.current.focus();
    }
  }
  function handleBackspace4(e) {
    if (e.key === "Backspace" && otp4 === "") {
      input3.current.focus();
    }
  }

  function handlePaste(e) {
    // console.log(e);
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const digits = pastedText.replace(/[^0-9]/g, "").slice(0, 4);

    if (digits.length === 0) return;
    const digitArray = digits.split("");

    setOtp1(digitArray[0] || "");
    setOtp2(digitArray[1] || "");
    setOtp3(digitArray[2] || "");
    setOtp4(digitArray[3] || "");

    const refs = [input1, input2, input3, input4];
    const nextIndex = digitArray.length < 4 ? digitArray.length : 3;
    refs[nextIndex].current.focus();
  }

  return (
    <div className="container">
      <h1> Verify with OTP</h1>
      <p>
        please enter the one-time password sent to your registered mobile number
      </p>

      <div className="otp-container">
        <input
          ref={input1}
          type="text"
          inputMode="numeric"
          maxLength="1"
          value={otp1}
          onChange={(e) => {
            setOtp1(e.target.value);
            if (e.target.value.length === 1) {
              input2.current.focus();
            }
          }}
          onPaste={handlePaste}
        />
        <input
          ref={input2}
          type="text"
          inputMode="numeric"
          maxLength="1"
          value={otp2}
          onChange={(e) => {
            setOtp2(e.target.value);
            if (e.target.value.length === 1) {
              input3.current.focus();
            }
          }}
          onKeyDown={handleBackspace2}
          onPaste={handlePaste}
        />
        <input
          ref={input3}
          type="text"
          inputMode="numeric"
          maxLength="1"
          value={otp3}
          onChange={(e) => {
            setOtp3(e.target.value);
            if (e.target.value.length === 1) {
              input4.current.focus();
            }
          }}
          onKeyDown={handleBackspace3}
          onPaste={handlePaste}
        />
        <input
          ref={input4}
          type="text"
          inputMode="numeric"
          maxLength="1"
          value={otp4}
          onChange={(e) => setOtp4(e.target.value)}
          onKeyDown={handleBackspace4}
          onPaste={handlePaste}
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
