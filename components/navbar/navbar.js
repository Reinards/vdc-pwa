import Link from "next/link"
import Image from "next/image"
import { Component } from "react"
import Styles from "./navbar.module.scss"
import { Link as ScrollLink } from "react-scroll"

class Navbar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            navbarOpen: false
        }
    }
    
    toggleState = () => {
        console.log(this.state.navbarOpen);
        this.setState({navbarOpen: !this.state.navbarOpen});
    }

    scrollToBotttom = () => {
        return;
    }
    
    render() {
        return (
            <div className={Styles.staticWrapper}>
                <div className={Styles.toggle+" flex justify-end pa4"}>
                    <p className="white pa0 ma0" onClick={this.toggleState}>===</p>
                </div>
                
                <div className={this.state.navbarOpen==true ? Styles.listWrapper+" "+Styles.onNavbarOpen : Styles.listWrapper}>
                    <ul className="flex justify-center flex-wrap pa0 ma0">
                        <li className={Styles.link+" hover"}>
                            <Link href="/"><a>Sākums</a></Link>
                        </li>
                        <li className={Styles.link+" hover"}>
                            <Link href="/kas-ir-vegetativa-distonija"><a>Kas ir veģetatīvā distonija</a></Link>
                        </li>
                        <li className={Styles.link+" hover"}>
                            <Link href="/atveselosanas"><a>Atveseļošanās</a></Link>
                        </li>
                        <li className={Styles.link+" hover"}>
                            <Link href="/energoterapeits"><a>Energoterapeits</a></Link>
                        </li>
                        <li className={Styles.link+" hover"}>
                            <Link href="/buj"><a>BUJ</a></Link>
                        </li>
                        <li className={Styles.link+" hover"}>
                            <Link href="/atsauksmes"><a>Atsauksmes</a></Link>
                        </li>
                        <li className={Styles.link}>
                            <ScrollLink to='footer' smooth={true}>
                                Kontakti
                            </ScrollLink> 
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;