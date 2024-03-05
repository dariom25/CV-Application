function Input({
  type = "text",
  placeholder,
  labelText,
  inputDescription,
  value = "",
}) {
  return (
    <div className={`input-container ${inputDescription}`}>
      <label htmlFor={inputDescription}>{labelText}</label>
      <input id={inputDescription} type={type} placeholder={placeholder} value={value} />
    </div>
  );
}

export { Input };
