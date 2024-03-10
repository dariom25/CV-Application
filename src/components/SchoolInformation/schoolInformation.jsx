import "./schoolInformation.css";
import { Input } from "../Input/input";
import { Button } from "../Button/button";

function SchoolInformation({id, handleRemove}) {
  const handleRemoveNumberEducationalExperience = (e) => {
    e.preventDefault()
    handleRemove(id)
  }
  
  return (
    <div className="school-information" key={id} id={id}>
      <Input
        placeholder={"ABC School"}
        labelText={"School/University/Vocational Service: "}
        inputDescription={"school"}
      />
      <Input
        placeholder={"e.g. College degree"}
        labelText={"Title of Study: "}
        inputDescription={"study-title"}
      />
      <Input type="date" labelText={"From: "} inputDescription={"school-from"} />
      <Input type="date" labelText={"To: "} inputDescription={"school-to"} />
      <Button text={"X"} size="small" onClick={handleRemoveNumberEducationalExperience}/>
    </div>
  );
}

export { SchoolInformation };
