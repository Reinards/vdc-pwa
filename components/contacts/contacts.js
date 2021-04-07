import css from "./contacts.module.scss"
import Image from "next/image"
import FormError from "../misc/form-error/form-error";
import { Component } from "react"
import Fade from "react-reveal/Fade";

import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

function getCurrentDate () {
    let currentDate = new Date();
    let cDay = currentDate.getDate()
    let cMonth = currentDate.getMonth() + 1
    let cYear = currentDate.getFullYear()
    return cDay+"/"+cMonth+"/"+cYear;
}

class Contacts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nameErrorType: "none",
            phoneErrorType: "none",
            emailErrorType: "none",
            messageErrorType: "none",
            request: "",
            name: "Name",
            email: "",
            phone: ""
        }
        init("user_xp8w6pUvz1SXbMloDrvEP");
    }

    verifyFields = (field, val) => {
        
        if(field == "name") {
            if(val.length > 3) {
                this.setState({nameErrorType: "none"});
                return true;
            } 
            
            this.setState({nameErrorType: "incorrectVal"});
            return false;
        }
        
        if(field == "message") {
            if(val.length > 10) {
                this.setState({messageErrorType: "none"});
                return true;
            } 

            this.setState({messageErrorType: "incorrectVal"});
            return false;
        }

        if(field == "phone") {
            let isnum = /^\d+$/.test(val);

            if(val.length < 5 || val.length > 16 || !isnum) {
                this.setState({phoneErrorType: "incorrectVal"});
                return false;
            } 
            
            this.setState({phoneErrorType: "none"});
            return false;
        }

        if(field == "email") {
            if(val.length < 6 || !val.includes("@")) {
                this.setState({emailErrorType: "incorrectVal"});
                return false;
            } 
            
            this.setState({emailErrorType: "none"});
            return false;
        }
    
    }
    
    sendMail = (e) => {
        e.preventDefault();
    
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let message = document.getElementById("message").value;
        let date = document.getElementById("date").value;
    
        this.verifyFields("name", name);
        this.verifyFields("message", message);
        this.verifyFields("phone", phone);
        this.verifyFields("email", email);

        // if(this.state.nameErrorType=="none"
        // && this.state.phoneErrorType=="none"
        // && this.state.emailErrorType=="none"
        // && this.state.messageErrorType=="none") {
        //     let proxyUrl = 'https://secret-ocean-49799.herokuapp.com/';
        //     let targetUrl = 'https://vdce.lv/mailer/index.php';
            
        //     const requestOptions = {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({ name: name, phone: phone, email: email, message: message, date:date}),
        //         mode: 'no-cors'
        //     };
            
        //     fetch(targetUrl, requestOptions)
        //     .then(res => {
        //         console.log(res);
        //     });
        // }
    }

    realTimeVerify = (e) => {
        this.verifyFields(e.target.id, e.target.value);
    }

    render(){
    return (
        <div id="contacts" className={css['contacts']+" cc relative"}>
            <h2 className="white uppercase mr--lighter f4 f2-l tc mb3 mt0">Piesakies individuālajiem seansiem</h2>
            <div className="flex justify-center items-center flex-column">
                <img className="w-80 w-60-ns db h-auto" src="/contacts-cta.png" alt="Sāc Baudīt Dzīvi"/>
            </div>

            <Fade delay={200}>
                <div className={css.leaves}>
                    <Image src="/koks.png"
                    width="1000"
                    height="1000"
                    alt="Lapas"/>  
                </div> 
            </Fade>

            <form id="contacts-form" onSubmit={this.handleSubmit} className="flex flex-column mt3">
                <div className="input-group flex flex-wrap mt4 mt0-l">
                    <div className="w-100 w-50-ns flex flex-column pr3-ns">
                        <label className="white uppercase paragraph1" htmlFor="name">Vārds</label>
                        <input className="mt3" id="name" type="text" placeholder="Vārds" onChange={this.handleNameChange}/>
                        <div className="mb4">
                            <FormError id="name-error" visible="true" errorType={this.state.nameErrorType}/>
                        </div>
                    </div>
                    <div className="w-100 w-50-ns flex flex-column">
                        <label className="white uppercase paragraph1" htmlFor="email">E-pasts</label>
                        <input className="mt3" id="email" type="email" placeholder="E-pasts" onChange={this.handleEmailChange}/>
                        <div className="mb4">
                            <FormError id="email-error" visible="true" errorType={this.state.emailErrorType}/>
                        </div>
                    </div>
                </div>
                <div className="input-group flex flex-wrap">
                    <div className="w-100 w-50-ns flex flex-column pr3-ns">
                        <label className="white uppercase paragraph1" htmlFor="phone">Tālrunis</label>
                        <input className="mt3" id="phone" type="phone" placeholder="Tālrunis" onChange={this.handlePhoneChange}/>
                        <div className="mb4">
                            <FormError id="phone-error" visible="true" errorType={this.state.phoneErrorType}/>
                        </div>
                    </div>
                    <div className="w-100 w-50-ns flex flex-column">
                        <label className="white uppercase paragraph1 no-click" htmlFor="date">Datums</label>
                        <input className="mt3 no-click" id="date" type="text" placeholder="Datums" defaultValue={getCurrentDate()}/>
                    </div>
                </div>
                <div className="input-group flex flex-wrap pt4 pt0-ns">
                    <div className="w-100 flex flex-column">
                        <label className="white uppercase paragraph1" htmlFor="message">Ziņa</label>
                        <textarea className="mt3" id="message" type="text" placeholder="Ziņa" onChange={this.handleRequestChange}/>
                        <div className="mb4">
                            <FormError id="message-error" visible="true" errorType={this.state.messageErrorType}/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button type="submit" onClick={this.handleSubmit} className="button--brown-2 w-100 w-20-l mt3 mt4-l paragraph1">Pieteikties</button>
                </div>
            </form>
        </div>
    )
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value});
    }
    handleEmailChange = (e) => {
        this.setState({email: e.target.value});
    }
    handleRequestChange = (e) => {
        this.setState({request: e.target.value});
    }
    handlePhoneChange = (e) => {
        this.setState({phone: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        
        let name = this.state.name;
        let email = this.state.email;
        let request = this.state.request;
        let phone = this.state.phone;

        this.sendMail("template_0yt4x06",{from_name: name, reply_to: email, message: request, phone: phone});
        document.getElementById("contacts-form").reset();
    }
    sendMail = (templateId, variables) => {
        emailjs.send( 'service_0d0a6io', templateId, variables ).then(res => {
                alert("Ziņa nosūtīta veiksmīgi!");
            })
            .catch(err => {
                alert("Ziņu neizdevās nosūtīt. Pārliecinies, ka visi lauki aizpildīti un internets ieslēgts.");
                console.error('Oh well, you failed. Here some thoughts on the error that occured:', err);
            })
    }
    messageSentCallback = () => {
        alert("Ziņa nosūtīta veiksmīgi!");
    }
    messageErrorCallback = () => {
        alert("Ziņu neizdevās nosūtīt. Pārliecinies, ka visi lauki aizpildīti un internets ieslēgts.");
    }
}

export default Contacts