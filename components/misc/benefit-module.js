import Image from "next/image"
import Fade from 'react-reveal/Fade';

function Benefit({children, imgUrl, alt, title}) {
    return (
        <div className="flex items-center flex-column">
            <Fade>
                <Image
                    src={imgUrl}
                    alt={alt}
                    width="150"
                    height="150"
                    />
            </Fade>
            <Fade>
                <h3 className="white mr--lighter f4 f3-l">{title}</h3>
            </Fade>
            <Fade>
                <p className="white w-100 w-60-ns ma0 pa0 paragraph1 tj tc-ns">
                    {children}
                </p>
            </Fade>
        </div>
    )
}

export default Benefit;