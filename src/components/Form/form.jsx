import { Input } from "../Input/input";
import { Button } from "../Button/button";
import { Fieldset } from "../Fieldset/fieldset";
import "./form.css";
import { useState } from "react";
import { SchoolInformation } from "../SchoolInformation/schoolInformation";

function Form() {
  const [formPage, setFormPage] = useState(1);
  const [numberOfEducationalExperiences, setNumberOfEducationalExperiences] =
    useState(1);
  const [numberOfPracticalExperiences, setNumberOfPracticalExperiences] = useState(1)

  const handleBackButtonClick = (e) => {
    e.preventDefault();
    setFormPage(formPage - 1);
  };

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    setFormPage(formPage + 1);
  };

  const handleSetNumberOfEducationalExperiences = (e) => {
    e.preventDefault();
    setNumberOfEducationalExperiences(numberOfEducationalExperiences + 1);
    console.log(numberOfEducationalExperiences);
  };

  const calculateEducationalExperiences = () => {
    let educationalExperiences = [];
    for (let i = 0; i < numberOfEducationalExperiences; i++) {
      educationalExperiences.push(<SchoolInformation />);
    }
    return educationalExperiences;
  };

  const calculateNumberOfPracticalExperiences = () => {
    let practicalExperiences = [];
    for (let i = 0; i < numberOfPracticalExperiences; i++) {
      practicalExperiences.push(<SchoolInformation/>)
    }
  }

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

      {formPage === 2 && (
        <Fieldset
          legend={"Educational Information"}
          className={"educational-information"}
        >
          {calculateEducationalExperiences()}
        </Fieldset>
      )}

      {formPage === 3 && (
        <Fieldset
          legend={"Practical Experience"}
          className={"practical-experience"}
        >
          {calculateEducationalExperiences()}
        </Fieldset>
      )}

      <div className="navigational-button-container">
        {formPage !== 1 && (
          <Button
            text={"Back"}
            size={"small"}
            onClick={handleBackButtonClick}
          />
        )}
        {formPage === 2 && (
          <Button
            text={"+"}
            size={"small"}
            onClick={handleSetNumberOfEducationalExperiences}
          />
        )}
        {formPage === 3 && <Button text={"+"} size={"small"} onClick={calculateNumberOfPracticalExperiences}/>}

        {formPage !== 3 && (
          <Button
            text={"Next"}
            size={"small"}
            onClick={handleNextButtonClick}
          />
        )}

        {formPage === 3 && <Button text={"Submit"} size={"small"} />}
      </div>
    </form>
  );
}

export { Form };
