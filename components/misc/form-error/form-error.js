import css from "./form-error.module.scss";
import { Component } from "react"

class FormError extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        if(this.props.errorType == "incorrectVal") {
            return (
                <span className={css.error}>
                    Lauks nav pareizi aizpildīts
                </span>
            )
        }

        return "";

    }
}

export default FormError;