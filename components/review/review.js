import css from "./review.module.scss"

export default function Review() {
    return (
        <div className={css['review-form']+" pa5 pv6"}>
            <h2 className="white uppercase mr--lighter f2 tc mb6 mt0">Būsim pateicīgi, ja atstāsi arī savu atsauksmi</h2>

            <div className="flex flex-column ph7 mh5">
                <div className="input-group flex flex-wrap">
                    <div className="w-50 flex flex-column pr3">
                        <label className="white uppercase f3" htmlFor="name">Vārds</label>
                        <input className="mv3" id="name" type="text" placeholder="Vārds"/>
                    </div>
                    <div className="w-50 flex flex-column">
                        <label className="white uppercase f3" htmlFor="date">Datums</label>
                        <input className="mv3" id="date" type="date" placeholder="Datums"/>
                    </div>
                </div>
                <div className="input-group flex flex-wrap">
                    <div className="w-100 flex flex-column">
                        <label className="white uppercase f3" htmlFor="review">Atsauksme</label>
                        <textarea className="mv3" id="review" type="text" placeholder="Atsauksme"/>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button className="button--brown-2 w-20 mt4">Nosūtīt</button>
                </div>
            </div>
        </div>
    )
}