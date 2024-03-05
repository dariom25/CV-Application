function Fieldset({ legend, children, className }) {
  return (
    <fieldset className={`fieldset ${className}`}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}

export { Fieldset };
