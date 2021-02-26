import Head from "next/head"
import Image from "next/image"

import DefaultLayout from "../layouts/layout-default"
import Simptomi from "../components/misc/simptomi-module"
import Benefit from "../components/misc/benefit-module"
import Contacts from "../components/contacts/contacts"

import { motion } from 'framer-motion';


import css from "../styles/page-index.module.scss"

export default function Home() {
  return (
    <DefaultLayout headerUrl="/img5.jpg">
    
      <Head>
        <title>TODO - VDC</title>
      </Head>
      
      {/* Landing header banner */}
      
      <div className={css["promise-banner"]}>
        <div className="flex justify-center">
          <div className="w-50 flex">
            <div className="">
              <motion.div
                  transition= {{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: 0
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ x: 0, opacity: 0 }}
                >
              <h2 className="mr--lighter f1 uppercase ma0">Mēs palīdzēsim tev atgūt</h2>
              </motion.div>
              <motion.div
                  transition= {{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: 0.2
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ x: 0, opacity: 0 }}
                >
              <span className="mr--lighter uppercase f2 mt0">Bez medikamentiem</span>
              </motion.div>
            </div>
            <motion.div
                  transition= {{
                    type: "spring",
                    damping: 20,
                    stiffness: 100,
                    delay: 0.1
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ x: 0, opacity: 0 }}
                >
            <span className="f0 script white ma0 ml4 lh05">mieru</span>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Causes */}
      <div className="ph7 pb5 pt0 tc flex flex-column items-center">
        <h2 className="pv5 mr--light f2 w-50">Vai tevi kaut reizi, vai vairākkārt, bez pamatota iemesla ir traucējuši šie simptomi?</h2>

        <div>
          <div className="flex flex-wrap justify-between">
            <Simptomi lineWidth="35%" paddingRight="5">Spiedošas sajūas sirds apvidū</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5">Panikas lēkmes, baiļu sajūta, bailes no nāves</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5">Galvassāpes un reiboņi, bezsamaņas stāvoklis</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5">Spiedoša sajūta kuņģī, slikta dūša</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5">Svīšana, spiediena maiņa, drebuļi</Simptomi>
          </div>
          
          <div className="flex flex-wrap mt4 justify-between">
            <Simptomi lineWidth="35%" paddingRight="5">Zarnu funkcionālie traucējumi</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5">Garastāvokļu maiņas, uzbudinātība, raaudulība</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5">Bezmiegs, koncentrēšanāās trūkums</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5">Vājums, ātra fiziska un garīga pārslodzes sajūta</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5">Sirdsklauves</Simptomi>
          </div>
        </div>
      </div>
      
      {/* Benefits */}
      <div className={css["benefit-banner"]+" ph6 pb5 pt0 tc"}>
        <h2 className="pv5 mr--lighter white f2 uppercase">Ko tu iegūsi</h2>
        
        <div className="flex flex-wrap">
          <div class="w-third">
            <Benefit
              imgUrl="/illustration1.png"
              alt="Iekšējs miers"
              title="Iekšējs miers"
            >
              Līdz ar cilvēka iekšējo energo struktūras atjaunošanu tiek novērsta trauksmes sajūta, panika, nemiers, tiek atgūts dzīves prieks.
            </Benefit>
          </div>
          
          <div class="w-third">
            <Benefit
              imgUrl="/illustration2.png"
              alt="Emocionāla stabilitāte"
              title="Emocionāla stabilitāte"
            >
              Tiek stabilizēta nervu sistēmas darbība un apturētas emocionālās svārstības - pēkšņas garstāvokļa maiņas, eocionāli izvirdumi vai depresīvi stāvokļi.
            </Benefit>
          </div>
          
          <div class="w-third">
            <Benefit
              imgUrl="/illustration3.png"
              alt="Enerģija"
              title="Enerģija"
            >
              Tiek atjaunots enerģijas pieplūdums, atgūts spēks pilnvērtīgai dzīvei un novērsts izdegšanas sindroms.
            </Benefit>
          </div>
        </div>
      </div>
      
      {/* BIO */}
      <div className="flex">
        <div class="w-70 flex flex-column justify-center items-center pv6 ph6">
          <h1 className="script brown-1 f0--smaller fw1 mb0">Ivars Tilgalis</h1>
          <p className="ph7 tj">
            Esmu "Veģetatīvās Distonijas Centrs" dibinātājs un vadītājs Ivars Tilgalis. Kā to parāda mana prakse, strādājot ar cilvēkiem, varu teikt, ka lielākajā vairumā slimības fiziskās izpausmes ir tikai gala projekcija procesiem, kuru sākumu varam meklēt daudz smalkākā sfērā - cilvēka enerģētikā un tajā notiekošajos energoinformatīvajos procesos...
          </p>
          <button className="button--brown mt3">Lasīt vairāk</button>
        </div>
        
        <div class="w-30">
          <Image 
            src="/img2.jpg"
            alt="Ivars Tilgalis"
            layout="responsive"
            width="4978px"
            height="6338px"
          />
        </div>
      </div>
      
      {/* Contacts */}
      <Contacts/>

      {/* Footer */}
      
      
    </DefaultLayout>
  )
}
