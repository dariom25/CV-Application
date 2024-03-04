import { Input } from "../Input/input"; 
import { Button } from "../Button/button";
import "./form.css"

function Form() {

    return(
        <form className={"form"}>
            <div className={"formheader"}>
                <p>Enter your data here: </p>
                <Button text={"X"} size={"small"}/>
            </div>
            <Input/>
            <Input/>
            <Input/>
            <Input/>
            <Button text={"Submit"} size={"small"}/>
        </form>
    )
}

export { Form };
