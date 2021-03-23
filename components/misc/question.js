import css from "./question.module.scss";
import { Component } from "react"
import Fade from "react-reveal/Fade";

class Question extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            answerOpen: false,
            id: Math.floor((Math.random() * 50000) + 1)
        }
    }

    toggleAnswer = () => {
        this.setState({answerOpen: !this.state.answerOpen});
    }

    render() {
        return (
            <div className="ph3-ns">
                <Fade delay={200} duration={1500}>
                    <h3 onClick={this.toggleAnswer} className="ntc f4 mt0 f4-l mb2 pb0 flex items-center pointer">
                        <img className={this.state.answerOpen ? css["arrow--invert"] : css["arrow"]} src="/carret-down.svg" alt="Izvērst"/>
                        {this.props.title} 
                    </h3>
                    <div id={"answer-"+this.tmpId} className={this.state.answerOpen ? css["answer-wrapper"] : css["answer-wrapper--closed"]}>
                        <p className="paragraph1 mt0 pl4 pr4 pr0-l">
                            {this.props.children}
                        </p>
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Question;