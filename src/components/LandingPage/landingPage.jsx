import "./landingPage.css";
import { Button } from "../Button/button";
import { Headline } from "../Headline/headline";

function LandingPage() {
  return (
    <>
      <Headline text="+++ Create your own custom CV for FREE! +++" />
      <Button text="Create a new CV" onClick={() => console.log("hello")} />
    </>
  );
}

export { LandingPage };
