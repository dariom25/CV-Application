import { Input } from "../Input/input";
import { Button } from "../Button/button";
import { Fieldset } from "../Fieldset/fieldset";
import "./form.css";
import { useState } from "react";
import { SchoolInformation } from "../SchoolInformation/schoolInformation";

function Form() {
  const [formPage, setFormPage] = useState(1);

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    setFormPage(formPage + 1);
  };

  return (
    <form className={"form"}>
      <div className={"formheader"}>
        <h2>Enter your data here: </h2>
        <Button text={"X"} size={"small"} />
      </div>
      {formPage === 1 && (
        <Fieldset
          className={"personal-information"}
          legend={"Personal Information"}
        >
          <Input
            placeholder={"Max"}
            labelText={"First name: "}
            inputDescription={"first-name"}
          />
          <Input
            placeholder={"Mustermann"}
            labelText={"Last name: "}
            inputDescription={"last-name"}
          />
          <Input
            type="date"
            labelText={"Date of birth: "}
            inputDescription={"birthday"}
          />
          <Input
            placeholder={"+49 3842 93938"}
            labelText={"Phone number: "}
            inputDescription={"phone-number"}
          />
          <Input
            type={"email"}
            placeholder={"example@name.com"}
            labelText={"Mail address: "}
            inputDescription={"mail"}
          />
        </Fieldset>
      )}
      {formPage === 1 && (
        <Fieldset legend={"Contact Details"} className={"contact-details"}>
          <Input
            placeholder={"Exampleroad 45"}
            labelText={"Address: "}
            inputDescription={"address"}
          />
          <Input
            placeholder={"493842"}
            labelText={"ZIP-Code: "}
            inputDescription={"zip-code"}
          />
          <Input
            placeholder={"Cityname"}
            labelText={"City: "}
            inputDescription={"city"}
          />
          <Input
            placeholder={"Country"}
            labelText={"Country:"}
            inputDescription={"country"}
          />
        </Fieldset>
      )}



      {formPage !== 3 && (
        <Button text={"Next"} size={"small"} onClick={handleNextButtonClick} />
      )}
    </form>
  );
}

export { Form };
