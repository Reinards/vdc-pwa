import css from "./certificate-modal.module.scss";
import { Component } from "react"

class CertificateModal extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        if(this.props.visible) {
            return (
                <div onClick={this.props.cb}>
                    <div className={css.overlay}></div>
                    <img className={css.certificateImg} src={"/certificates/c"+this.props.id+".jpg"} />
                </div>
            )
        }else {
            return "";
        }


    }
}

export default CertificateModal;