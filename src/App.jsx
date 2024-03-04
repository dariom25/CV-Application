import { LandingPage } from "./components/LandingPage/landingPage";
import { Form } from "./components/Form/form";
import { useState } from "react";

export default function App() {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleMakeFormVisible = () => {
    setFormVisible(true);
  };

  return (
    <>
      {!isFormVisible && <LandingPage onButtonClick={handleMakeFormVisible} />}
      {isFormVisible && <Form />}
    </>
  );
}
