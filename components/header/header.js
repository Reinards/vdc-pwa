import Css from './header.module.scss';
import Image from 'next/image';
import Navbar from '../navbar/navbar';
import { Component } from "react";
import Fade from "react-reveal/Fade";


class Header extends Component {

    constructor (props) {
        super(props);

        this.navbarRef = React.createRef();
    }

    toggleNavbar = () => {
        this.navbarRef.current.onSwipe();
    }

    render() {

        if (this.props.onlyNav == true) {

            return (
                <>
                    <Navbar ref={this.navbarRef} />
                </>
            )

        }

        return (
            <div>
                <Navbar ref={this.navbarRef} />
                <Fade duration={1500}>
                <div className={Css['header-img']}>
                        <Image src={this.props.headerUrl} width="1920" height="674" priority objectFit="cover" layout="responsive" />
                </div>
                </Fade>
                
            </div>
        )
    }
}

export default Header;