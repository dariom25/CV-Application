//import "./schoolInformation.css";
import { Input } from "../Input/input";

function SchoolInformation() {
  return (
    <div className="school-information">
      <Input
        placeholder={"ABC School"}
        labelText={"School/University/Vocational Service: "}
        inputDescription={"school"}
      />
      <Input
        placeholder={"e.g. "}
        labelText={"Title of Study: "}
        inputDescription={"study-title"}
      />
      <Input type="date" labelText={"From: "} inputDescription={"school-from"} />
      <Input type="date" labelText={"To: "} inputDescription={"school-to"} />
    </div>
  );
}

export { SchoolInformation };
