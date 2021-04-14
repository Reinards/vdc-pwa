import Head from "next/head"
import Image from "next/image"
import Modal from "../components/misc/certificate-modal/certificate-modal"
import { Component } from "react"

import DefaultLayout from "../layouts/layout-default"

class Ivars extends Component {

  constructor(props) {
    super(props);

    this.state = {
      certId: 1,
      showModal: false
    }
  }

  openCertificate = (id) => {
    this.setState({showModal: true, certId: id});
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  render() {
    return (
      <DefaultLayout headerUrl="/img4.jpg">
      
        <Head>
          <title>VDC - Ivars Tilgalis - Energoterapeits</title>
          <meta name="title" content="VDC - Energoterapeits Ivars Tilgalis" />
          {/* <meta name="description" content="Description" /> */}
        </Head>
        
          <div className="mc">
              <h1 className="tc f4 f2-l pt0 mt0">Ivars Tilgalis - Energoterapeits</h1>
  
              <p className="paragraph1 mt0 pt0">
                Esmu "Veģetatīvās Distonijas Centrs" dibinātājs un vadītājs Ivars Tilgalis. Kā to parāda mana prakse, strādājot ar cilvēkiem, varu teikt, ka lielākajā vairumā slimības fiziskās izpausmes ir tikai gala projekcija procesiem, kuru sākumu varam meklēt daudz smalkākā sfērā - cilvēka enerģētikā un tajā notiekošajos energoinformatīvajos procesos.
              </p>
  
              <p className="paragraph1 mt0 pt0">
                  Kopš sevi atceros, man ir bijusi interese par alternatīvām, netradicionālām atveseļošanas metodēm. Šīs intereses vadīts, devos uz Krieviju, kur vairāk nekā astoņus gadus apguvu zināšanas par cilvēka enerģētisko uzbūvi, par tās ietekmi uz cilvēka veselību un dzīvi kopumā. Praktiski visu brīvo laiku veltīju praktizēšanai, un ieguldītais laiks atmaksājās.
              </p>
  
              <p className="paragraph1">
                  Pašlaik mana ikdienas darbība ir saistīta ar tādu veselības problēmu kā veģetatīvās distonijas, depresijas, dzīvesprieka zuduma, izdegšanas sindroma, nepamatotas trauksmes, panikas lēkmju, pašpārliecinātības trūkuma un nedrošības atveseļošanu.
              </p>
  
              <p className="paragraph1">
                  Izvēlējos šo darbības virzienu, jo pie minētajiem simptomiem netiek konstatētas novirzes no normas cilvēka fiziskajā ķermenī. Medicīniski veiktās analīzes ir atbilstošas, taču cilvēks turpina izjust diskomfortu.
              </p>
  
              <p className="paragraph1">
                  Tradicionālā medicīna lielākoties šādos gadījumos ir bezspēcīga. Taču, pieejot ar energoterapijas metodi, kuru pielietoju cilvēka atveseļošanai, tiek novērota pozitīva atveseļošanās dinamika. Problēmas, par kurām ir bijušas sūdzības gadiem, tiek atrisinātas pāris nedēļu vai mēnešu laikā. Rezultāts un atzinīgās atsauksmes ir dzinulis, kurš dod degsmi turpināt darīt iesākto un attīstīt centra darbību, lai palīdzību varētu sniegt pēc iespējas vairāk cilvēkiem.
              </p>
  
              <p className="paragraph1">
              Cenšos saglabāt to smalko robežu starp pilnvērtīgu atdevi darbā, brīvo laiku un atpūtu, kur vides maiņai ir būtiska loma. No pilsētas dunoņas - pie dabas.
              </p>
  
              <p className="paragraph1">
                  Pārgājieni, fiziskās aktivitātes, nakts teltī, ugunskura radītā noskaņa... Un, kad visa ir par daudz, tad dodos kalnos vai garākos, vairāku dienu pārgājienos neatkarīgi no gadalaika.
              </p>
  
              <p className="paragraph1">
                  Vidē, kuru klāj sniegs un ledus, plaušās nokļūst tikai retināts gaiss, kur nav izdīdzis ne mazākais zāles asns gadsimtiem ilgi, pārņem bezgalības sajūta. Viss ir tik tīrs un neskarts, tik tālu no ierastās ikdienas.
              </p>
  
              <p className="paragraph1 mb5">
              Tā ir vide, kur attīros, kur pārdzimstu, lai atgrieztos un turpinātu sevi jau ar lielāku jaudu un skaidrāku prātu.
              </p>
              
              <h2>Sertifikāti</h2>
              
              <div className="flex flex-wrap">
                <div className="w-50 w-20-ns">
                  <img src="/certificates/c6.png" alt="Sertifikāts" onClick={() => this.openCertificate(6)}/>
                </div>
                <div className="w-50 w-20-ns">
                  <img src="/certificates/c7.png" alt="Sertifikāts" onClick={() => this.openCertificate(7)}/>
                </div>
                <div className="w-50 w-20-ns">
                  <img src="/certificates/c9.png" alt="Sertifikāts" onClick={() => this.openCertificate(9)}/>
                </div>
                <div className="w-50 w-20-ns">
                  <img src="/certificates/c1.png" alt="Sertifikāts" onClick={() => this.openCertificate(1)}/>
                </div>
                <div className="w-50 w-20-ns">
                  <img src="/certificates/c8.png" alt="Sertifikāts" onClick={() => this.openCertificate(8)}/>
                </div>
                <div className="w-50 w-20-ns">
                  <img src="/certificates/c4.png" alt="Sertifikāts" onClick={() => this.openCertificate(4)}/>
                </div>
                <div className="w-50 w-20-ns">
                  <img src="/certificates/c2.png" alt="Sertifikāts" onClick={() => this.openCertificate(2)}/>
                </div>
                <div className="w-50 w-20-ns">
                  <img src="/certificates/c5.png" alt="Sertifikāts" onClick={() => this.openCertificate(5)}/>
                </div>
                <div className="w-50 w-20-ns">
                  <img src="/certificates/c3.png" alt="Sertifikāts" onClick={() => this.openCertificate(3)}/>
                </div>
              </div>
  
              <Modal cb={this.closeModal} id={this.state.certId} visible={this.state.showModal}/>
  
          </div>
  
        
      </DefaultLayout>
    )
  }

}

export default Ivars;