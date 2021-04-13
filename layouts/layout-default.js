import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { Component } from "react"
import React from "react"


class Default extends Component {
    
    constructor(props) {
        super(props);

        this.headerRef = React.createRef();

        this.state = {
            left: 0,
            originalOffset: 0,
            velocity: 0,
            timeOfLastDragEvent: 0,
            touchStartX: 0,
            prevTouchX: 0,
            beingTouched: false,
            height: 0
        }
    }

    handleStart = (clientX) => {
        this.setState({
          originalOffset: this.state.left,
          velocity: 0,
          timeOfLastDragEvent: Date.now(),
          touchStartX: clientX,
          beingTouched: true
        });
      }
      
      handleMove = (clientX) => {
        if (this.state.beingTouched) {
          const touchX = clientX;
          const currTime = Date.now();
          const elapsed = currTime - this.state.timeOfLastDragEvent;
          const velocity = 20 * (touchX - this.state.prevTouchX) / elapsed;
          let deltaX = touchX - this.state.touchStartX + this.state.originalOffset;
          if (deltaX < -120) {
            this.headerRef.current.toggleNavbar();
            this.handleEnd();
            } else if (deltaX > 120) {
            this.headerRef.current.toggleNavbar();
            this.handleEnd();
          } else if (deltaX > 0) {
            deltaX = 0;
          }
          this.setState({
            left: deltaX,
            velocity,
            timeOfLastDragEvent: currTime,
            prevTouchX: touchX
          });
        }
      }
      
      handleEnd = () => {
        this.setState({
            left: 0,
            originalOffset: 0,
            velocity: 0,
            timeOfLastDragEvent: 0,
            touchStartX: 0,
            prevTouchX: 0,
            beingTouched: false,
            height: 0
        });
      }

    handleTouchStart = (touchStartEvent) => {
        this.handleStart(touchStartEvent.targetTouches[0].clientX);
    }

    handleTouchMove = (touchMoveEvent) => {
        this.handleMove(touchMoveEvent.targetTouches[0].clientX);
    }

    handleTouchEnd = () => {
        this.handleEnd();
    }

    render() {
        return (
            <div id="layout"
            onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
            onTouchMove={touchMoveEvent => this.handleTouchMove(touchMoveEvent)}
            onTouchEnd={() => this.handleTouchEnd()}>
                <Header ref={this.headerRef} headerUrl={this.props.headerUrl}/>
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Default;