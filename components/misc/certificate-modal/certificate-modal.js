import css from "./certificate-modal.module.scss";
import { Component } from "react"

class CertificateModal extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            imgId: 1
        }
    }

    render() {

        return (
            <>
                <div className={css.overlay}></div>
            </>
        )

    }
}

export default CertificateModal;