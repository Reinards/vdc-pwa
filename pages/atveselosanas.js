import Head from "next/head"
import Image from "next/image"
import Fade from "react-reveal/Fade";
import DefaultLayout from "../layouts/layout-default"

import css from "../styles/page-atveselosanas.module.scss"

export default function Atveselosanas() {
  return (
    <DefaultLayout headerUrl="/img1.jpg">
    
        <Head>
            <title>VDC - Atveseļošanās</title>
            <meta name="title" content="VDC - Atveseļošanās" />
            {/* <meta name="description" content="Description" /> */}
        </Head>
      
        <div className="mc">
            <h1 className="tc f4 f2-l mt0 pt0">Atveseļošanās</h1>
           
            <div className="flex justify-center paragraph1">
                <div className="w-50 w-40-l mb4 mb0-l">
                    <Fade delay={200}>
                    <Image src="/tris.png" alt="Cilvēks" width="150" height="150" layout="responsive" />
                    </Fade>
                </div>
            </div>

            <p className="paragraph1 mt1 mt4-l pb0 mb0">
                Cilvēks sastāv no ķermeņa, prāta un enerģētikas.
                Tad, kad visas trīs daļas darbojas saskaņoti, sev pieļaujamo normu robežās, - šādu sistēmu sauc par veselu, mūsu gadījumā - veselu cilvēku.
                <br/><br/>
                Tikko kādā no sistēmas veidojošajām daļām parādās darbības traucējumi, - šādu sistēmu jeb cilvēku mēs apzīmējam ar vārdu slims. Atkarībā no tā, kurā daļā radusies problēma:

                <ul className={css.list}>
                    <li className="mt3">
                        ja fiziskajā ķermenī, tad par fiziski slims
                    </li>
                    <li className="mt3">
                        ja prāta darbībā, tad par garīgi slims
                    </li>
                    <li className="mt3">
                        ja enerģētiski veidojošajā daļā, tad šādu stāvokli apzīmējam ar vārdiem - veģetatīvā distonija,, depresija, izdegšanas sindroms, trauksme, panikas lēkmes, dzīvesprieka zudums, apātija. Šīs nepatīkamās sajūtas ir energoinformatīvo procesu darbības traucējumu sekas.
                    </li>
                </ul>

                Cilvēka enerģētiski veidojošā daļa sastāv no vairākām savstarpēji saistītām sistēmām. Šo sistēmu darbība nodrošina gan cilvēka mijiedarbību ar apkārtējo vidi, gan regulē energoinformatīvo procesu norisi cilvēka fiziskajā ķermenī, gan arī ārpus tā - biolaukā.
                <br/><br/>

                <div className="flex relative flex-wrap">
                    <div className={css["rectangle-wrapper"]+" w-100 w-50-l pa1-ns pa4-l"}>
                        <div className={css["rectangle"]+" uppercase flex flex-column items-center tc justify-center h-100 pv4"}>
                            <span className="pa2 paragraph1">Trauksme</span>
                            <span className="pa2 paragraph1">Apātija</span>
                            <span className="pa2 paragraph1">Bezmiegs</span>
                            <span className="pa2 paragraph1">Noslēgtība</span>
                            <span className="pa2 paragraph1">Hipohondrija</span>
                        </div>
                    </div>
                    <div className="w-100 w-50-l pa1-ns pa4-l">
                        <div className={css["rectangle"]+" uppercase flex flex-column items-center tc justify-center h-100 pv4"}>
                            <span className="pa2 paragraph1">Iekšējs miers</span>
                            <span className="pa2 paragraph1">Dzīvesprieks</span>
                            <span className="pa2 paragraph1">Optimisms</span>
                            <span className="pa2 paragraph1">Vesselīgs miegs</span>
                            <span className="pa2 paragraph1">Sociāli aktīvs</span>
                            <span className="pa2 paragraph1">Objektīvs veselības novērtējums</span>
                        </div>
                    </div>
                    <img className={css.arrow} src="/arrow.png" alt="Bulta pa labi"/>
                </div>
                <br/>

                Atveseļo savu enerģētiku - aizmirsti par nepatīkamajiem simptomiem!
                <br/><br/>

                Energoterapeits, vadoties no informācijas, kura iegūta diagnostikas laikā, veic nepieciešamās korekcijas cilvēka enerģētiskajā darbībā, tādējādi normalizējot tās darbību, atgriežot to ierastajā stāvoklī.
                <br/><br/>

                Par seansu rezultātu iespējams spriest, vadoties pēc uzlabojumiem, kuri notiek no seansa uz seansu, novērojot, kā samazinās un pazūd traucējošie, diskomfortu radošie simptomi.
            </p>
        </div>
      
    </DefaultLayout>
  )
}
