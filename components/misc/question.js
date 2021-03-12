import css from "./question.module.scss";
import { Component } from "react"

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
                <h2 onClick={this.toggleAnswer} className="f5 mt0 f4-l mb0 flex items-center pointer">
                    <img className={this.state.answerOpen ? css["arrow--invert"] : css["arrow"]} src="/carret-down.svg" alt="Izvērst"/>
                    {this.props.title} 
                </h2>
                <div id={"answer-"+this.tmpId} className={this.state.answerOpen ? css["answer-wrapper"] : css["answer-wrapper--closed"]}>
                    <p className="paragraph1 mt2 pl4 pr4 pr0-l">
                        {this.props.children}
                    </p>
                </div>
            </div>
        )
    }
}

export default Question;