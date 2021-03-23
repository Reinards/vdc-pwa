import Link from "../misc/active-link"
import Image from "next/image"
import { Component } from "react"
import React from "react"
import css from "./navbar.module.scss"
import { Link as ScrollLink } from "react-scroll"
import WebsiteData from '../../data/website.config.json'

let lastScrollY = 0;

class Navbar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            navbarOpen: false,
            navbarEnter: false,
            navbarExit: false,
            navbarExitComplete: false
        }

    }

    navbarReference = React.createRef;

    
    toggleState = () => {
        this.setState({navbarOpen: !this.state.navbarOpen});
    }
    
    handleScroll = () => {
        lastScrollY = window.scrollY;

        if(lastScrollY > 600 && !this.state.navbarEnter) {
            this.setState({navbarEnter: true});
            this.setState({navbarExit: false});
            
            console.log("Enter", this.state);
        }
        
        if(lastScrollY < 600 && this.state.navbarEnter && !this.state.navbarExit) {
            this.setState({navbarExit: true});
            
            console.log("Exit", this.state);
            
            window.setTimeout(()=>{
                this.setState({navbarEnter: false});
                this.setState({navbarExit: false});                
                console.log("Exit Complete", this.state);
            },300);
        }
    }
    
    // Called when swipe action occures
    onSwipe = () => {
        this.toggleState();
    }

    render() {
        return (
            <div className={css.staticWrapper}>
                <div className={css.toggle+" flex justify-around pa4"}>
                    <a href={`https://wa.me/${WebsiteData.phoneInternational}`}><img className="animate-shake" src="/phone.svg" alt="Zvanīt"/></a>
                    <img className={this.state.navbarOpen ? "dn": ""} src="/hamburger.svg" alt="Izvēlne" onClick={this.toggleState}/>
                    <img className={!this.state.navbarOpen ? "dn": ""} src="/hamburger-close.svg" alt="Izvēlne" onClick={this.toggleState}/>
                </div>
                
                <div ref={this.navbarReference} 
                className={this.state.navbarOpen ? css.listWrapper+" "+css.onNavbarOpen : css["listWrapper--floating"]}>
                
                    <ul className="flex justify-center flex-wrap pa0 ma0">
                        <li className={css.link+" hover"}>
                            <Link activeClassName={css.active} href="/"><a>Sākums</a></Link>
                        </li>
                        <li className={css.link+" hover"}>
                            <Link activeClassName={css.active} href="/kas-ir-vegetativa-distonija"><a>Kas ir veģetatīvā distonija</a></Link>
                        </li>
                        <li className={css.link+" hover"}>
                            <Link activeClassName={css.active} href="/atveselosanas"><a>Atveseļošanās</a></Link>
                        </li>
                        <li className={css.link+" hover"}>
                            <Link activeClassName={css.active} href="/energoterapeits"><a>Energoterapeits</a></Link>
                        </li>
                        <li className={css.link+" hover"}>
                            <Link activeClassName={css.active} href="/buj"><a>BUJ</a></Link>
                        </li>
                        <li className={css.link+" hover"}>
                            <Link activeClassName={css.active} href="/atsauksmes"><a>Atsauksmes</a></Link>
                        </li>
                        <li className={css.link+" hover"}>
                            <Link activeClassName={css.active} href="/kontakti"><a>Kontakti</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;