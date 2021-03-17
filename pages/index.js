import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

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
        <title>VDC - Sākumlapa - Atgūsti mieru</title>
        <meta name="title" content="Veģetatīvās Distonijas Centrs. Atgūsti mieru!" />
        {/* <meta name="description" content="Description" /> */}
      </Head>
      
      {/* Landing header banner */}
      
      <div className={css["promise-banner"]}>
        <div className="flex justify-center items-center h-100 ">
          <div className="flex items-top ">
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
              <h2 className="mr--lighter uppercase ma0 ">Mēs palīdzēsim tev atgūt</h2>
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
              <small className="mr--lighter uppercase mt0">Bez medikamentiem</small>
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
      <div className="wc tc flex flex-column items-center">
        <h2 className="pv3 mr--light f4 f2-l w-80 w-50-l">Vai tev kaut reizi bez acīmredzama iemesla ir traucējuši šie simptomi?</h2>

        <div>
          <div className="flex flex-wrap justify-between">
            <Simptomi lineWidth="35%" paddingRight="5">Spiedošas sajūtas sirds apvidū</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5">Panikas lēkmes, baiļu sajūta, bailes no nāves</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5">Galvassāpes un reiboņi, bezsamaņas stāvoklis</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5">Spiedoša sajūta kuņģī, slikta dūša</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5">Svīšana, spiediena maiņa, drebuļi</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5">Zarnu funkcionālie traucējumi</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5">Garastāvokļu maiņas, uzbudinātība, raudulība</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5">Bezmiegs, koncentrēšanāās trūkums</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5" bottom>Vājums, ātra fiziska un garīga pārslodzes sajūta</Simptomi>
            <Simptomi lineWidth="35%" paddingRight="5" bottom>Sirdsklauves</Simptomi>
          </div>
        </div>
      </div>
      
      {/* Benefits */}
      <div className={css["benefit-banner"]+" wc pt4 pb4 pb5-l tc"}>
        <h2 className="pv5-l mr--lighter white f4 f2-l uppercase">Ko tu iegūsi apmeklējot seansus</h2>
        
        <div className="flex flex-wrap">
          <div className="w-100 w-third-l mb4 mb0-l">
            <Benefit
              imgUrl="/illustration1.png"
              alt="Iekšējs miers"
              title="Iekšējs miers"
            >
              Līdz ar cilvēka energo struktūras atjaunošanu tiek novērsta trauksmes sajūta, panika, nemiers, tiek atgūts dzīves prieks.
            </Benefit>
          </div>
          
          <div className="w-100 w-third-l mb4 mb0-l">
            <Benefit
              imgUrl="/illustration2.png"
              alt="Emocionāla stabilitāte"
              title="Emocionāla stabilitāte"
            >
              Tiek stabilizēta nervu sistēmas darbība un apturētas emocionālās svārstības - pēkšņas garstāvokļa maiņas, eocionāli izvirdumi vai depresīvi stāvokļi.
            </Benefit>
          </div>
          
          <div className="w-100 w-third-l">
            <Benefit
              imgUrl="/illustration3.png"
              alt="Enerģija"
              title="Enerģija"
            >
              Tiek atjaunots enerģijas pieplūdums, atgūts spēks pilnvērtīgai dzīvei un novērsts izdegšanas sindroms, uzlabojas fiziskā veselība, izzūd nepatīkamie simptomi.
            </Benefit>
          </div>
        </div>
      </div>
      
      {/* BIO */}
      <div className="flex flex-wrap">
        <div className="w-100 w-70-l flex flex-column justify-center items-center wc">
          <p className="script brown-1 f0--smaller fw1 mv0 pt3 lh05">Ivars Tilgalis</p>
          <p className="tj paragraph1">
            Esmu "Veģetatīvās Distonijas Centrs" dibinātājs un vadītājs Ivars Tilgalis. Kā to parāda mana prakse, strādājot ar cilvēkiem, varu teikt, ka lielākajā vairumā slimības fiziskās izpausmes ir tikai gala projekcija procesiem, kuru sākumu varam meklēt daudz smalkākā sfērā - cilvēka enerģētikā un tajā notiekošajos energoinformatīvajos procesos...
          </p>
          <Link href="/energoterapeits"><button className="button--brown mt1 mt3-l w-100 w-auto-l paragraph1">Lasīt vairāk</button></Link>
        </div>
        
        <div className="w-100 dn-m w-30-l">
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
