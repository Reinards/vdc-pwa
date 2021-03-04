import Link from "next/link"
import Image from "next/image"
import { Component } from "react"
import Styles from "./navbar.module.scss"
import { Link as ScrollLink } from "react-scroll"
import WebsiteData from '../../data/website.config.json'

class Navbar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            navbarOpen: false
        }
    }
    
    toggleState = () => {
        this.setState({navbarOpen: !this.state.navbarOpen});
    }

    scrollToBotttom = () => {
        return;
    }
    
    render() {
        return (
            <div className={Styles.staticWrapper}>
                <div className={Styles.toggle+" flex justify-around pa4"}>
                    <a href={`tel:${WebsiteData.phone}`}><img className="animate-shake" src="/phone.svg" alt="Zvanīt"/></a>
                    <img className={this.state.navbarOpen ? "dn": ""} src="/hamburger.svg" alt="Izvēlne" onClick={this.toggleState}/>
                    <img className={!this.state.navbarOpen ? "dn": ""} src="/hamburger-close.svg" alt="Izvēlne" onClick={this.toggleState}/>
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
                            <ScrollLink offset={-50} onClick={this.toggleState} to='contacts' smooth={true}>
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