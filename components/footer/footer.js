import Image from "next/image"
import Link from "next/link"
import Navbar from "../navbar/navbar"
import css from "./footer.module.scss"

import WebsiteData from '../../data/website.config.json'

function Footer() {
    return (
        <footer id="footer" className={css["footer"]+" pv4 pv4-l ph4 ph6-l flex flex-wrap white"}>
            <div className="w-70-l">
                <h2 className="f4 mr--lighter mt0">Kontakti</h2>
                
                <div className="flex">
                    <div className="w-20 f6 f5-l mt2">Adrese</div>
                    <div className="w-80 f6 f5-l mt2">{WebsiteData.address}</div>
                </div>
                <div className="flex">
                    <div className="w-20 f6 f5-l mt2">Tālrunis</div>
                    <div className="w-80 f6 f5-l mt2">{WebsiteData.phone}</div>
                </div>
                <div className="flex">
                    <div className="w-20 f6 f5-l mt2">E-pasts</div>
                    <div className="w-80 f6 f5-l mt2">{WebsiteData.email}</div>
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