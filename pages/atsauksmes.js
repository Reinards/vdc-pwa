import Head from "next/head"

import Review from "../components/review/review"
import DefaultLayout from "../layouts/layout-default"

export default function Atsauksmes() {
  return (
    <DefaultLayout headerUrl="/img4.jpg">
    
      <Head>
        <title>TODO - VDC</title>
      </Head>
      
        <div className="pa5 ph7 mh7">
            <h1 className="tc pb4 f2">Atsauksmes</h1>
            <section>
                <p className="f4">
                    Pie Ivara vērsos pēc draudzenes ieteikuma, kad šķietami uzveiktā veģetatīvā distonija atkal lika par sevi manīt! Kaut arī neizgāju pilnu ārstēšanās kursu (jo braukšana no Kuldīgas uz Rīgu man bija ļoti liels pārbaudījums, jo tieši tad distonija visvairāk "uzdarbojās") , tomēr daži seansi pie Ivara bija ļoti, ļoti vērtīgi un nu jau gandrīz divus gadus esmu pilnībā brīva no šīs nepatīkamās slimības. Ļoti ceru, ka tā pie manis neatgriezīsies, bet ja nu tomēr... tad zinu, kur atkal vērsties pēc palīdzības!
                </p>
                <p className="f4 m2">/Elīna/</p>
            </section>

            <section className="mt5">
                <p className="f4">
                    Apmeklēju seansus pie I. Tilgaļa, lai cīnītos ar veģetatīvo distoniju, kas mani mocīja jau kādu laiku un neticēju, ka no šīs nelaimes var tikt vaļā. Pirmais seanss mani pārsteidz ar miera trieciendevu, kas tajā laikā bija tieši vajadzīgais. Un nākamajā reizē jau sākās nopietns darbs, kas soli pa solītim attālināja mani no visām mokošajām trīcēm, panikām utt. Esmu ļoti apmierināta ar rezultātu.
                </p>
                <p className="f4 m2">/Anete/</p>
            </section>

            <section className="mt5">
                <p className="f4">
                    Par Ivaru dzirdēju no meitas. Kad gāju uz pirmo seansu jau neticēju, ka iespējams man kā palīdzēt. Jutos kā bezdibeņa malā, kurā tūlīt, tūlīt iekritīšu un netikšu vairs ārā. Taču jau pēc pāris apmeklētiem seansiem atguvu iekšēju mieru, pazuda reiboņi, neizskaidrojamais satraukums. Nu jau pagājis vairāk kā gads un tālaika veselības problēmas palikušas tikai kā vājas atmiņas. Paldies!
                </p>
                <p className="f4 m2">/Linda/</p>
            </section>

            <section className="mt5">
                <p className="f4">
                    Tie, kas saskārušies ar veģetatīvo distoniju, zinās, cik bezpalīdzīgi, bailīgi un nesaprotami iespējams justies. Kad šķita, ka nekas nepalīdzēs atgriezt savu iekšējo pasauli līdzsvarā, aizgāju uz vizīti pie Ivara. Un jau pēc dažām reizēm sāku justies daudz labāk, un galvenais sāku saprast to, ko esmu darījusi nepareizi un ko darīt tālāk, lai neatgrieztos pie šīm sajūtām. Liels paldies Ivaram!
                </p>
                <p className="f4 m2">/Agnese/</p>
            </section>

            <section className="mt5">
                <p className="f4">
                    Par veģetatīvās distonijas centru dzirdēju no meitas. Kad gāju uz pirmo seansu jau neticēju, ka iespējams man kā palīdzēt. Jutos kā bezdibeņa malā, kurā varētu iekrist. Taču jau pēc pāris apmeklētiem seansiem atguvu iekšēju mieru, pazuda reiboņi, neizskaidrojamais satraukums. Paldies!
                </p>
                <p className="f4 m2">/Laura/</p>
            </section>
        </div>

        <Review />

      
    </DefaultLayout>
  )
}
