import "./input.css";

function Input({
  inputDescription,
  id,
  labelText,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className={`input-container`}>
      <label htmlFor={inputDescription}>{labelText}</label>
      <input
        value={value}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export { Input };
