import css from "./contacts.module.scss"

function getCurrentDate () {
    let currentDate = new Date();
    let cDay = currentDate.getDate()
    let cMonth = currentDate.getMonth() + 1
    let cYear = currentDate.getFullYear()
    return cDay+"/"+cMonth+"/"+cYear;
}

let sendMail = () => {

    let proxyUrl = 'https://secret-ocean-49799.herokuapp.com/';
    let targetUrl = 'https://vdce.lv/mailer/index.php';
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Reinards', phone: '12132', email: "Email", message: "message"})
    };
    
    fetch(targetUrl, requestOptions)
    .then(res => {
        console.log(res);
    });
}

function Contacts() {


    return (
        <div id="contacts" className={css['contacts']+" cc"}>
            <h2 className="white uppercase mr--lighter f4 f2-l tc mb3 mt0">Piesakies individuālajiem seansiem</h2>
            <p className="script f0 brown-2 tc ma0 lh1">Un sac baudit dzivi</p>

            <div className="flex flex-column mt3">
                <div className="input-group flex flex-wrap mt4 mt0-l">
                    <div className="w-100 w-50-ns flex flex-column pr3-ns">
                        <label className="white uppercase paragraph1" htmlFor="name">Vārds</label>
                        <input className="mv3" id="name" type="text" placeholder="Vārds"/>
                    </div>
                    <div className="w-100 w-50-ns flex flex-column">
                        <label className="white uppercase paragraph1" htmlFor="email">E-pasts</label>
                        <input className="mv3" id="email" type="email" placeholder="E-pasts"/>
                    </div>
                </div>
                <div className="input-group flex flex-wrap">
                    <div className="w-100 w-50-ns flex flex-column pr3-ns">
                        <label className="white uppercase paragraph1" htmlFor="phone">Tālrunis</label>
                        <input className="mv3" id="phone" type="phone" placeholder="Tālrunis"/>
                    </div>
                    <div className="w-100 w-50-ns flex flex-column">
                        <label className="white uppercase paragraph1 no-click" htmlFor="date">Datums</label>
                        <input className="mv3 no-click" id="date" type="text" placeholder="Datums" value={getCurrentDate()}/>
                    </div>
                </div>
                <div className="input-group flex flex-wrap">
                    <div className="w-100 flex flex-column">
                        <label className="white uppercase paragraph1" htmlFor="message">Ziņa</label>
                        <textarea className="mv3" id="message" type="text" placeholder="Ziņa"/>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button onClick={sendMail} className="button--brown-2 w-100 w-20-l mt3 mt4-l paragraph1">Pieteikties</button>
                </div>
            </div>
        </div>
    )
}

export default Contacts