import "./input.css"

/*muss hier nen state hin statt value=""?*/

function Input({
  type = "text",
  placeholder,
  labelText = "",
  inputDescription,
}) {
  return (
    <div className={`input-container ${inputDescription}`}>
      <label htmlFor={inputDescription}>{labelText}</label>
      <input id={inputDescription} type={type} placeholder={placeholder}/>
    </div>
  );
}

export { Input };
