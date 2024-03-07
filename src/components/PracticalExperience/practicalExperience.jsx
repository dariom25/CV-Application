import "./practicalExperience.css";
import { Input } from "../Input/input";

function PracticalExperience() {
  return (
    <div className="practical-information">
      <Input
        placeholder={"Example Comany SE"}
        labelText={"Company Name: "}
        inputDescription={"company"}
      />
      <Input
        placeholder={"e.g. Junior example role"}
        labelText={"Position Title: "}
        inputDescription={"position-title"}
      />
      <Input
        placeholder={"Description of your main responsibilities"}
        labelText={"Main responsibilities and tasks: "}
        inputDescription={"responsibilities"}
      />
      <Input
        type="date"
        labelText={"From: "}
        inputDescription={"practical-from"}
      />
      <Input type="date" labelText={"To: "} inputDescription={"practical-to"} />
    </div>
  );
}

export { PracticalExperience };
