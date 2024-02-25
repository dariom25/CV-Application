import "./headline.css"

function Headline({text, color = "--main-font-color", size = "xl"}) {
  return <h1 className={`headline ${color} ${size}`}>{text}</h1>;
}

export { Headline };
