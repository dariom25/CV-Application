import { Input } from "../Input/input";
import { Button } from "../Button/button";
import { Fieldset } from "../Fieldset/fieldset";
import "./form.css";
import { useState } from "react";
import { SchoolInformation } from "../SchoolInformation/schoolInformation";
import { PracticalExperience } from "../PracticalExperience/practicalExperience";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [formPage, setFormPage] = useState(1);
  const [numberOfEducationalExperiences, setNumberOfEducationalExperiences] =
    useState([{ id: uuidv4() }]);
  const [numberOfPracticalExperiences, setNumberOfPracticalExperiences] =
    useState([<PracticalExperience key={uuidv4()} />]);

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
    setNumberOfEducationalExperiences([
      ...numberOfEducationalExperiences,
      { id: uuidv4() },
    ]);
    console.log(numberOfEducationalExperiences);
  };

  const handleSetNumberOfPracticalExperiences = (e) => {
    e.preventDefault();
    setNumberOfPracticalExperiences([
      ...numberOfPracticalExperiences,
      <PracticalExperience key={uuidv4()} />,
    ]);
  };

  return (
    <form className={"form"}>
      <div className={"formheader"}>
        <h2>Please enter your data here: </h2>
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
          {numberOfEducationalExperiences.map((experience) => {
            return <SchoolInformation key={experience.id} id={experience.id} />;
          })}
        </Fieldset>
      )}

      {formPage === 3 && (
        <Fieldset
          legend={"Practical Experience"}
          className={"practical-experience"}
        >
          {numberOfPracticalExperiences}
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
        {formPage === 3 && (
          <Button
            text={"+"}
            size={"small"}
            onClick={handleSetNumberOfPracticalExperiences}
          />
        )}

        {formPage !== 3 && (
          <Button
            text={"Next"}
            size={"small"}
            onClick={handleNextButtonClick}
          />
        )}

        {formPage === 3 && <Button text={"Display CV"} size={"small"} />}
      </div>
    </form>
  );
}

export { Form };
