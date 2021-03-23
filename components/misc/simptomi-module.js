import ArtisticLine from "./artistic-line";
import Fade from "react-reveal/Fade";

function Simptomi({children, lineWidth, paddingRight, bottom}) {
    return (
        <div className="pa0-xl w-50 w-20-l pa3-l">
            <Fade delay={50}>
                <ArtisticLine width={lineWidth} height="2px" color="black" />
            </Fade>
            <Fade delay={200}>
                <p className={"mt3 tl paragraph1 "+(bottom ? "mb0" : "mb3")}>{children}</p>
            </Fade>
        </div>
    )
}

export default Simptomi;