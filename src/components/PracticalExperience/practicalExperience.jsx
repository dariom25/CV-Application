import "./practicalExperience.css";
import { Input } from "../Input/input";
import { Button } from "../Button/button";

function PracticalExperience({id, handleRemove}) {
  const removePracticalExperience = (e) => {
    e.preventDefault();
    handleRemove(id)
  }
  
  return (
    <div className="practical-information" key={id} id={id}>
      <Input
        placeholder={"Example Company SE"}
        labelText={"Company Name: "}
        inputDescription={"company"}
      />
      <Input
        placeholder={"e.g. Junior example role"}
        labelText={"Position Title: "}
        inputDescription={"position-title"}
      />
      <Input
        placeholder={"Your main responsibilities"}
        labelText={"Main responsibilities and tasks: "}
        inputDescription={"responsibilities"}
      />
      <Input
        type="date"
        labelText={"From: "}
        inputDescription={"practical-from"}
      />
      <Input type="date" labelText={"To: "} inputDescription={"practical-to"} />
      <Button text={"X"} size="small" onClick={removePracticalExperience}/>
    </div>
  );
}

export { PracticalExperience };
