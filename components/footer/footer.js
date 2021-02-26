import Image from "next/image"
import Link from "next/link"
import Navbar from "../navbar/navbar"
import css from "./footer.module.scss"

import WebsiteData from '../../data/website.config.json'

function Footer() {
    return (
        <footer id="footer" className={css["footer"]+" pv5 ph6 flex white"}>
            <div class="w-70">
                <h2 className="f2 mr--lighter mt0">Kontakti</h2>
                
                <div class="flex">
                    <div class="w-20 f4 mt2">Adrese</div>
                    <div class="w-80 f4 mt2">{WebsiteData.address}</div>
                </div>
                <div class="flex">
                    <div class="w-20 f4 mt2">Tālrunis</div>
                    <div class="w-80 f4 mt2">{WebsiteData.phone}</div>
                </div>
                <div class="flex">
                    <div class="w-20 f4 mt2">E-pasts</div>
                    <div class="w-80 f4 mt2">{WebsiteData.email}</div>
                </div>
            </div>
            <div class="w-30 flex justify-end">
                <div className="flex items-center w-50 flex-column">
                    <h2 className="f2 mr--lighter mt0">Seko mums</h2>
                    <div className="flex">
                        <div className="mr3">
                            <Link href={WebsiteData.facebook}>
                                <a>
                                    <Image src="/fb.svg" alt="Facebook" width="50" height="50" />
                                </a>
                            </Link>
                        </div>
                        <Link href={WebsiteData.instagram}>
                            <a>
                                <Image src="/ig.svg" alt="Instagram" width="50" height="50" />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;