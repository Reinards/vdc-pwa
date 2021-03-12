import Image from "next/image"
import Link from "next/link"
import Navbar from "../navbar/navbar"
import css from "./footer.module.scss"

import WebsiteData from '../../data/website.config.json'

function Footer() {
    return (
        <footer id="footer" className={css["footer"]+" fc flex flex-wrap white"}>
            <div className="w-70-l">
                <h2 className="f4 mr--lighter mt0">Kontakti</h2>
                
                <div className="flex">
                    <div className="w-40 w-20-l f6 paragraph1 mt2-l">Adrese</div>
                    <div className="w-60 w-80-l f6 paragraph1 mt2-l">{WebsiteData.address}</div>
                </div>
                <div className="flex">
                    <div className="w-40 w-20-l f6 paragraph1 mt2">Tālrunis</div>
                    <div className="w-60 w-80-l f6 paragraph1 mt2">{WebsiteData.phone}</div>
                </div>
                <div className="flex">
                    <div className="w-40 w-20-l f6 paragraph1 mt2">E-pasts</div>
                    <div className="w-60 w-80-l f6 paragraph1 mt2">{WebsiteData.email}</div>
                </div>
            </div>
            <div className="w-30-l flex justify-end mt4 mt0-l">
                <div className="flex items-center-l w-50-l flex-column">
                    <h2 className="f4 mr--lighter mt0-l">Seko mums</h2>
                    <div className="flex">
                        <div className="mr3">
                            <a href={WebsiteData.facebook} target="blank" noreferrer="true" noopener="true">
                                <img src="/fb.svg" alt="Facebook" width="30" height="30" />
                            </a>
                        </div>
                            <a href={WebsiteData.instagram} target="blank" noreferrer="true" noopener="true">
                                <img src="/ig.svg" alt="Instagram" width="30" height="30" />
                            </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;