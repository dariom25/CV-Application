const inputConfigsPersonalInformation = [
  {
    id: "firstName",
    placeholder: "Max",
    labeltext: "First name: ",
    inputDescription: "first-name",
    type: "text",
  },
  {
    id: "lastName",
    placeholder: "Mustermann",
    labeltext: "Last name: ",
    inputDescription: "last-name",
    type: "text",
  },
  {
    id: "birthday",
    labeltext: "Date of birth: ",
    inputDescription: "birthday",
    type: "date",
  },
  {
    id: "phone",
    placeholder: "+49 3842 93938",
    labeltext: "Phone number: ",
    inputDescription: "phone-number",
    type: "text",
  },
  {
    id: "mail",
    placeholder: "example@mail.com",
    labeltext: "Mail address: ",
    inputDescription: "mail",
    type: "email",
  },
];

const inputConfigsContactDetails = [
  {
    id: "address",
    placeholder: "Exampleroad 45",
    labeltext: "Address: ",
    inputDescription: "address",
    type: "text",
  },
  {
    id: "zipCode",
    placeholder: "493842",
    labeltext: "ZIP-Code: ",
    inputDescription: "zip-code",
    type: "text",
  },
  {
    id: "city",
    placeholder: "Cityname",
    labeltext: "City: ",
    inputDescription: "city",
    type: "text",
  },
  {
    id: "country",
    placeholder: "Country",
    labeltext: "Country: ",
    inputDescription: "country",
    type: "text",
  },
];

const inputConfigsEducationalExperience = [
  {
    placeholder: "ABC School",
    labeltext: "School/University/Vocational Service: ",
    inputDescription: "school",
    type: "text",
  },
  {
    placeholder: "e.g. College degree",
    labeltext: "Title of Study: ",
    inputDescription: "study-title",
    type: "text",
  },
  {
    labeltext: "From: ",
    inputDescription: "school-from",
    type: "date",
  },
  {
    labeltext: "To: ",
    inputDescription: "school-to",
    type: "date",
  },
];

const inputConfigsPracticalExperience = [
  {
    placeholder: "Example Company SE",
    labeltext: "Company Name: ",
    inputDescription: "company",
    type: "text",
  },
  {
    placeholder: "e.g. Junior example role",
    labeltext: "Position Title: ",
    inputDescription: "position-title",
    type: "text",
  },
  {
    placeholder: "Your main responsibilities",
    labeltext: "Main responsibilities and tasks: ",
    inputDescription: "responsibilities",
    type: "text",
  },
  {
    labeltext: "From: ",
    inputDescription: "practical-from",
    type: "date",
  },
  {
    labeltext: "To: ",
    inputDescription: "practical-to",
    type: "date",
  },
];

export {
  inputConfigsContactDetails,
  inputConfigsEducationalExperience,
  inputConfigsPersonalInformation,
  inputConfigsPracticalExperience,
};
