import Image from "next/image"

function Benefit({children, imgUrl, alt, title}) {
    return (
        <div className="flex items-center flex-column">
            <Image
                src={imgUrl}
                alt={alt}
                width="150"
                height="150"
                />
            <h3 className="white mr--lighter f4 f3-l">{title}</h3>
            <p className="white w-100 w-60-ns ma0 pa0 paragraph1 tj tc-ns">
                {children}
            </p>
        </div>
    )
}

export default Benefit;