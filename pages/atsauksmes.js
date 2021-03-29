import Head from "next/head"
import Fade from "react-reveal/Fade";
import Review from "../components/review/review"
import DefaultLayout from "../layouts/layout-default"
import React from "react"
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json());

function useReviews () {
    const { data, error } = useSWR('http://localhost/cockpit-master/api/collections/get/atsauksmes?token=b0e77e9caa3e5a931e59e7a00a5b90', fetcher)
  
    return {
      entries: data,
      isError: error
    }
  }

function Atsauksmes () {

    // const { entries, isError } = useReviews();

    // if(!entries) {
    //     return (<div></div>)
    // }

    // let atsauksmes = entries.entries.map((item, index) => {
    //     if(item.Redzams) {
    //         return(
    //             <section id={item._id}>
    //                 <p className="paragraph1 mb1 pt0 mt0">
    //                     {item.Atsauksme}
    //                 </p>
    //                 <p className="paragraph1 mt0">/{item.Vards}/</p>
    //             </section>
    //         )
    //     }
    // });

// render() {
    return (
      <DefaultLayout headerUrl="/img4.jpg">
      
        <Head>
          <title>TODO - VDC</title>
        </Head>
        
          <div className="mc">
              <Fade cascade duration={1000}>
              <h1 className="tc f4 f2-l mv0 pv0">Atsauksmes</h1>

              {/* {atsauksmes} */}

              <section>
                  <p className="paragraph1 mb1 pt0 mt0">
                      Pie Ivara vērsos pēc draudzenes ieteikuma, kad šķietami uzveiktā veģetatīvā distonija atkal lika par sevi manīt! Kaut arī neizgāju pilnu ārstēšanās kursu (jo braukšana no Kuldīgas uz Rīgu man bija ļoti liels pārbaudījums, jo tieši tad distonija visvairāk "uzdarbojās") , tomēr daži seansi pie Ivara bija ļoti, ļoti vērtīgi un nu jau gandrīz divus gadus esmu pilnībā brīva no šīs nepatīkamās slimības. Ļoti ceru, ka tā pie manis neatgriezīsies, bet ja nu tomēr... tad zinu, kur atkal vērsties pēc palīdzības!
                  </p>
                  <p className="paragraph1 mt0">/Elīna/</p>
              </section>
    
              <section className="mt4 mb1 mt5-l mb0-l">
                  <p className="paragraph1 mb1 pt0 mt0">
                      Apmeklēju seansus pie I. Tilgaļa, lai cīnītos ar veģetatīvo distoniju, kas mani mocīja jau kādu laiku un neticēju, ka no šīs nelaimes var tikt vaļā. Pirmais seanss mani pārsteidza ar miera trieciendevu, kas tajā laikā bija tieši vajadzīgais. Un nākamajā reizē jau sākās nopietns darbs, kas soli pa solītim attālināja mani no visām mokošajām trīcēm, panikām utt. Esmu ļoti apmierināta ar rezultātu.
                  </p>
                  <p className="paragraph1 mt0">/Anete/</p>
              </section>
    
              <section className="mt4 mb1 mt5-l mb0-l">
                  <p className="paragraph1 mb1 pt0 mt0">
                      Par Ivaru dzirdēju no meitas. Kad gāju uz pirmo seansu jau neticēju, ka iespējams man kā palīdzēt. Jutos kā bezdibeņa malā, kurā tūlīt, tūlīt iekritīšu un netikšu vairs ārā. Taču jau pēc pāris apmeklētiem seansiem atguvu iekšēju mieru, pazuda reiboņi, neizskaidrojamais satraukums. Nu jau pagājis vairāk kā gads un tālaika veselības problēmas palikušas tikai kā vājas atmiņas. Paldies!
                  </p>
                  <p className="paragraph1 mt0">/Linda/</p>
              </section>
    
              <section className="mt4 mb1 mt5-l mb0-l">
                  <p className="paragraph1 mb1 pt0 mt0">
                      Tie, kas saskārušies ar veģetatīvo distoniju, zinās, cik bezpalīdzīgi, bailīgi un nesaprotami iespējams justies. Kad šķita, ka nekas nepalīdzēs atgriezt savu iekšējo pasauli līdzsvarā, aizgāju uz vizīti pie Ivara. Un jau pēc dažām reizēm sāku justies daudz labāk, un galvenais sāku saprast to, ko esmu darījusi nepareizi un ko darīt tālāk, lai neatgrieztos pie šīm sajūtām. Liels paldies Ivaram!
                  </p>
                  <p className="paragraph1 mt0">/Agnese/</p>
              </section>
    
              <section className="mt4 mb1 mt5-l mb0-l">
                  <p className="paragraph1 mb1 pt0 mt0">
                      Mana dzīve bija sagriezusies kājām gaisā. 3 mēnešus mocījos ar trakām lēkmēm dienu no dienas, vairākas reizes dienā bija man viņas visu 3 mēnešu garumā. Bija traki, turklāt vēl pie šī depresija un emocionālā pārslodze. Vēl ļoti nokritos svarā, nebija apetītes vispār un visi parējie veģetatīvās distonijas simptomi. Likās, ka netikšu arā no šīs dziļās bedres. Bija jau visādas domas galvā. Bet tad uzsāku kursu pie Ivara pirms Ziemassvētkiem un šodien teikšu - jūtos ļoti ļoti labi. Visi simptomi ir pametuši mani un varu uzelpot un mierīgi sākt dzīvot bez bailēm, bez trankvilizatoriem. Ivar, tu tiešām dari brīnumus un ar tavu palīdzību tu man loti, loti palīdzēji. Vēlreiz, paldies Tev!
                  </p>
                  <p className="paragraph1 mt0">/Liene/</p>
              </section>
    
              <section className="mt4 mb1 mt5-l mb0-l">
                  <p className="paragraph1 mb1 pt0 mt0">
                      Baidīties no nezināmā ir cilvēka dabā, bet nekad nemēģinot savu dzīvi mainīt, mieru un labsajūtu tā arī var neizjust. Pēc negaisa vienmēr ir vissvaigākais gaiss! Paldies, Ivaram, par iespēju to svaigumu just ikdienā arī bez lietus lāsēm!
                  </p>
                  <p className="paragraph1 mt0">/Aiga/</p>
              </section>
    
              <section className="mt4 mb1 mt5-l mb0-l">
                  <p className="paragraph1 mb1 pt0 mt0">
                      Milzīgs paldies par rūpēm un palīdzību. Sajūta, ka beidzot var dziļi ievilkt elpu un pasmaidīt. Ir vienkārši labi justies mierpilni. Paldies!
                  </p>
                  <p className="paragraph1 mt0">/Anna/</p>
              </section>
              </Fade>
          </div>
    
          <Review />
    
        
      </DefaultLayout>
    )
// }

}

export async function getServerSideProps(context) {
    return {
      props: {
        // props for your component
      }
    }
  }

export default Atsauksmes;

// b0e77e9caa3e5a931e59e7a00a5b90