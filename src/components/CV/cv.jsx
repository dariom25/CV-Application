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
      <h1 className="name">
        {firstName} {lastName}
      </h1>
      <div className="personal-info-container">
        <div className="personal-info">
          {birthday}
          {phone}
          {mail}
        </div>
        <div className="contact-info">
          {address}
          {zipCode}
          {city}
          {country}
        </div>
      </div>
      <div>
        <div className="education">
          {schoolFrom} - {schoolTo}: {school} {studyTitle}
        </div>
        <div className="work">
          {practicalFrom} - {practicalTo}: {company} {positionTitle} {responsibilities}
        </div>
      </div>
    </div>
  );
}

export { CV };
