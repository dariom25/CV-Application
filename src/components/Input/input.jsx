import "./input.css";

function Input({ inputDescription, id, labelText, type, placeholder, value }) {
  return (
    <div className={`input-container ${inputDescription}`} id={id}>
      <label htmlFor={inputDescription}>{labelText}</label>
      <input
        value={value}
        id={inputDescription}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export { Input };
