import ArtisticLine from "./artistic-line";

function Simptomi({children, lineWidth, paddingRight}) {
    return (
        <div className="w-15">
            <ArtisticLine width={lineWidth} height="2px" color="black" />
            <p className="mt3 tl">{children}</p>
        </div>
    )
}

export default Simptomi;