import Image from "next/image"

function Benefit({children, imgUrl, alt, title}) {
    return (
        <div className="flex items-center flex-column">
            <Image
                src={imgUrl}
                alt={alt}
                width="200"
                height="200"
                />
            <h3 className="white mr--lighter f3">{title}</h3>
            <p className="white w-60 mt0">
                {children}
            </p>
        </div>
    )
}

export default Benefit;