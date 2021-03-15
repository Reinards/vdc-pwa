import Css from './header.module.scss'
import Image from 'next/image'
import Navbar from '../navbar/navbar'
import { Component } from "react"


class Header extends Component {

    constructor (props) {
        super(props);
    }

    render() {

        if (this.props.showMap == true) {

            return (
                <>
                    <Navbar />
                    <div className={Css['header-map']}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.593961393291!2d24.122901316087518!3d56.95575760603865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfccf851a03b%3A0x8c610630f38d1872!2sT%C4%93rbatas%20iela%2041%2F43%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1011!5e0!3m2!1sen!2slv!4v1614939207181!5m2!1sen!2slv" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </>
            )

        }

        return (
            <div>
                <Navbar />
                <div className={Css['header-img']}>
                    <Image src={this.props.headerUrl} width="1920" height="674" priority objectFit="cover" layout="responsive" />
                </div>
                
            </div>
        )
    }
}

export default Header;