import ArtisticLine from "./artistic-line";

function Simptomi({children, lineWidth, paddingRight}) {
    return (
        <div className="pa0-xl w-50 w-20-l pa2 pa3-l">
            <ArtisticLine width={lineWidth} height="2px" color="black" />
            <p className="mt3 tl paragraph1">{children}</p>
        </div>
    )
}

export default Simptomi;