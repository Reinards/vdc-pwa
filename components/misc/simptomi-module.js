import ArtisticLine from "./artistic-line";

function Simptomi({children, lineWidth, paddingRight, bottom}) {
    return (
        <div className="pa0-xl w-50 w-20-l pa3-l">
            <ArtisticLine width={lineWidth} height="2px" color="black" />
            <p className={"mt3 tl paragraph1 "+(bottom ? "mb0" : "mb3")}>{children}</p>
        </div>
    )
}

export default Simptomi;