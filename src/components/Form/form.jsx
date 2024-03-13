import { Input } from "../Input/input";
import { Button } from "../Button/button";
import { Fieldset } from "../Fieldset/fieldset";
import "./form.css";
import { useState } from "react";
import { SchoolInformation } from "../SchoolInformation/schoolInformation";
import { PracticalExperience } from "../PracticalExperience/practicalExperience";
import { v4 as uuidv4 } from "uuid";
import { inputConfigsPersonalInformation } from "../Input/inputConfig";
import { inputConfigsContactDetails } from "../Input/inputConfig";

function Form() {
  const [formPage, setFormPage] = useState(1);

  const [numberOfEducationalExperiences, setNumberOfEducationalExperiences] =
    useState([{ id: uuidv4() }]);
  const [numberOfPracticalExperiences, setNumberOfPracticalExperiences] =
    useState([{ id: uuidv4() }]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    phone: "",
    mail: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    school: "",
    studyTitle: "",
    schoolFrom: "",
    schoolTo: "",
    company: "",
    responsibilities: "",
    practicalFrom: "",
    practicalTo: "",
  });

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
  };

  const handleRemoveNumberEducationalExperience = (id) => {
    setNumberOfEducationalExperiences(
      numberOfEducationalExperiences.filter(
        (experience) => experience.id !== id,
      ),
    );
  };

  const handleSetNumberOfPracticalExperiences = (e) => {
    e.preventDefault();
    setNumberOfPracticalExperiences([
      ...numberOfPracticalExperiences,
      { id: uuidv4() },
    ]);
  };

  const handleRemoveNumberPracticalExperience = (id) => {
    setNumberOfPracticalExperiences(
      numberOfPracticalExperiences.filter((experience) => experience.id !== id),
    );
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
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
          {inputConfigsPersonalInformation.map((information) => {
            return (
              <Input
                key={information.inputDescription}
                placeholder={information.placeholder}
                id={information.id}
                labelText={information.labeltext}
                type={information.type}
                value={formData[information.id]}
                onChange={handleInputChange}
              />
            );
          })}
        </Fieldset>
      )}
      {formPage === 1 && (
        <Fieldset legend={"Contact Details"} className={"contact-details"}>
          {inputConfigsContactDetails.map((information) => {
            return (
              <Input
                key={information.inputDescription}
                placeholder={information.placeholder}
                id={information.id}
                labelText={information.labeltext}
                type={information.type}
                value={formData[information.id]}
                onChange={handleInputChange}
              />
            );
          })}
        </Fieldset>
      )}

      {formPage === 2 && (
        <Fieldset
          legend={"Educational Information"}
          className={"educational-information"}
        >
          {numberOfEducationalExperiences.map((experience) => {
            return (
              <SchoolInformation
                key={experience.id}
                id={experience.id}
                handleRemove={handleRemoveNumberEducationalExperience}
              />
            );
          })}
        </Fieldset>
      )}

      {formPage === 3 && (
        <Fieldset
          legend={"Practical Experience"}
          className={"practical-experience"}
        >
          {numberOfPracticalExperiences.map((experience) => {
            return (
              <PracticalExperience
                key={experience.id}
                id={experience.id}
                handleRemove={handleRemoveNumberPracticalExperience}
              />
            );
          })}
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
