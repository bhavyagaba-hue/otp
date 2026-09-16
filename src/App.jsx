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
        />
        <input
          ref={input4}
          type="text"
          inputMode="numeric"
          maxLength="1"
          value={otp4}
          onChange={(e) => setOtp4(e.target.value)}
          onKeyDown={handleBackspace4}
        />
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
