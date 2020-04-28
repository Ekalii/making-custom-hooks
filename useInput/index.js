import React, { useState } from "react";
import "./styles.css";

const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default function App() {
  const max_len = value => value.includes("@");
  const name = useInput("Mr.", max_len);
  return (
    <div className="App">
      <input placeholder="name" {...name} />
    </div>
  );
}
