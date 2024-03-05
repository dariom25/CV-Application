function Fieldset({ legend, children, className }) {
  return (
    <fieldset className={className}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}

export { Fieldset };
