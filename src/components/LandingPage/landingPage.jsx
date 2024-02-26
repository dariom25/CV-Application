import "./landingPage.css";
import { Button } from "../Button/button";
import { Headline } from "../Headline/headline";

function LandingPage() {
  return (
    <div className="landing-page">
      <Headline text="+++ Create your own custom CV for FREE! +++" />
      <Button text="Create a new CV now" onClick={() => console.log("hello")} />
    </div>
  );
}

export { LandingPage };
