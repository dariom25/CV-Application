function Input({ type="text", placeholder, labelText, inputDescription }) {
  return (
    <div className={`input-container ${inputDescription}`}>
      <label>{labelText}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export { Input };
