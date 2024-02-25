import "./button.css"

function Button({text, onClick, size = "medium"}) {
  return (
    <button onClick={onClick} className={`button ${size}`}>
      {text}
    </button>
  );
}

export { Button };
