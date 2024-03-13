import { Input } from "../Input/input";
import { Button } from "../Button/button";
import { Fieldset } from "../Fieldset/fieldset";
import "./form.css";
import { useState } from "react";
import { inputConfigsPersonalInformation } from "../Input/inputConfig";
import { inputConfigsContactDetails } from "../Input/inputConfig";
import { inputConfigsEducationalExperience } from "../Input/inputConfig";
import { inputConfigsPracticalExperience } from "../Input/inputConfig";

function Form() {
  const [formPage, setFormPage] = useState(1);

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
    positionTitle: "",
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

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
    console.log(formData)
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
          {inputConfigsEducationalExperience.map((information) => {
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

      {formPage === 3 && (
        <Fieldset
          legend={"Practical Experience"}
          className={"practical-experience"}
        >
          {inputConfigsPracticalExperience.map((information) => {
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

      <div className="navigational-button-container">
        {formPage !== 1 && (
          <Button
            text={"Back"}
            size={"small"}
            onClick={handleBackButtonClick}
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
