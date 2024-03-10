import { useState } from "react";
import "./input.css"



function Input({
  type = "text",
  placeholder,
  labelText = "",
  inputDescription,
}) {

  const [value, setValue] = useState("")

  return (
    <div className={`input-container ${inputDescription}`}>
      <label htmlFor={inputDescription}>{labelText}</label>
      <input value={value} id={inputDescription} type={type} placeholder={placeholder} onChange={event => setValue(event.target.value)}/>
    </div>
  );
}

export { Input };
