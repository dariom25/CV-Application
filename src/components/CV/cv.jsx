function CV({
  firstName,
  lastName,
  birthday,
  phone,
  mail,
  address,
  zipCode,
  city,
  country,
  school,
  studyTitle,
  schoolFrom,
  schoolTo,
  company,
  positionTitle,
  responsibilities,
  practicalFrom,
  practicalTo,
}) {
  return (
    <div className="cv-container">
        <h1 className="name">{firstName}{lastName}</h1>
    </div>
  );
}

export { CV };
