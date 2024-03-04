import "./landingPage.css";
import { Button } from "../Button/button";
import { Headline } from "../Headline/headline";

function LandingPage({onButtonClick}) {
  return (
    <div className="landing-page">
      <Headline text="+++ Create your own custom CV for FREE! +++" />
      <Button text="Create a new CV now" onClick={onButtonClick} />
    </div>
  );
}

export { LandingPage };
