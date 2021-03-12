import css from "./review.module.scss"
import Image from "next/image"

export default function Review() {
    return (
        <div className={css['review-form']+" cc"}>
            <h2 className="white uppercase mr--lighter f4 f2-l tc mt0">Būsim pateicīgi, ja atstāsi arī savu atsauksmi</h2>
 
            <div className={css.leaves}>
                <Image src="/koks.png"
                width="1000"
                height="1000"
                alt="Lapas"
                className={css.leaves}/>  
            </div>  
            
            <div className="flex flex-column">
                <div className="input-group flex flex-wrap">
                    <div className="w-100 w-50-ns flex flex-column pr3-ns">
                        <label className="white uppercase paragraph1" htmlFor="name">Vārds</label>
                        <input className="mv3" id="name" type="text" placeholder="Vārds"/>
                    </div>
                    <div className="w-100 w-50-ns flex flex-column">
                        <label className="white uppercase paragraph1" htmlFor="date">Datums</label>
                        <input className="mv3" id="date" type="date" placeholder="Datums"/>
                    </div>
                </div>
                <div className="input-group flex flex-wrap">
                    <div className="w-100 flex flex-column">
                        <label className="white uppercase paragraph1" htmlFor="review">Atsauksme</label>
                        <textarea className="mv3" id="review" type="text" placeholder="Atsauksme"/>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="button--brown-2 w-100 w-20-l mt3 mt4-l paragraph1">Nosūtīt</button>
                </div>
            </div>
        </div>
    )
}