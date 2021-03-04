import Head from "next/head"
import Image from "next/image"

import DefaultLayout from "../layouts/layout-default"

import css from "../styles/page-atveselosanas.module.scss"

export default function Atveselosanas() {
  return (
    <DefaultLayout headerUrl="/img1.jpg">
    
      <Head>
        <title>TODO - VDC</title>
      </Head>
      
        <div className="pa4 pa5-l ph7-l mh7-l">
            <h1 className="tc pb4 f2">Atveseļošanās</h1>
           
            <div className="flex items-center f3">
                <div className="w-50">
                    <p>Cilvēks sastāv no ķermeņa, prāta un enerģētikas.</p>
                </div>
                <div className="w-50">
                    <Image src="/tris.png" alt="Cilvēks" width="200" height="200" layout="responsive" />
                </div>
            </div>

            <p className="f3 mt5">
                Tad, kad visas trīs daļas darbojas saskaņoti, sev pieļaujamo normu robežās, - šādu sistēmu sauc par veselu, mūsu gadījumā - veselu cilvēku.
                <br/><br/>
                Tikko kādā no sistēmas veidojošajām daļām parādās darbības traucējumi, - šādu sistēmu jeb cilvēku mēs apzīmējam ar vārdu slims. Atkarībā no tā, kurā daļā radusies problēma:

                <ul>
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

                <div className="flex">
                    <div className="w-third pa4">
                        <div className={css["rectangle"]+" flex flex-column pa3 items-center tc justify-center h-100"}>
                            <span>Trauksme</span>
                            <span>Apātija</span>
                            <span>Bezmiegs</span>
                            <span>Noslēgtība</span>
                            <span>Hipo</span>
                        </div>
                    </div>
                    <div className="w-third pa3 flex items-center">
                        <div style={{
                            display: "block"
                        }} className="w-100">
                            <Image src="/arrow.png" alt="Bulta pa labi" width="500" height="500" layout="responsive" />
                        </div>
                    </div>
                    <div className="w-third pa4">
                        <div className={css["rectangle"]+" flex flex-column pa3 items-center tc justify-center h-100"}>
                            <span>Iekšējs miers</span>
                            <span>Dzīvesprieka</span>
                            <span>Optimisms</span>
                            <span>Vesselīgs miegs</span>
                            <span>Sociāli aktīvs</span>
                            <span>Objektīvs veselības novērtējums</span>
                        </div>
                    </div>
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
