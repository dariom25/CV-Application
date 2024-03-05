import { Input } from "../Input/input";
import { Button } from "../Button/button";
import { Fieldset } from "../Fieldset/fieldset";
import "./form.css";

function Form() {
  return (
    <form className={"form"}>
      <div className={"formheader"}>
        <h2>Enter your data here: </h2>
        <Button text={"X"} size={"small"} />
      </div>
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

      <Button text={"Next"} size={"small"} />
    </form>
  );
}

export { Form };
