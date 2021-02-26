import Css from './header.module.scss'
import Image from 'next/image'
import Navbar from '../navbar/navbar'

function Header({headerUrl}) {
    return (
        <>
            <Navbar />
            <div 
                className={Css['header-img']} 
                style={{
                backgroundImage: `url(${headerUrl})`
                }}>
            </div>
        </>
    )
}

export default Header;