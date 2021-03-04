import Head from "next/head"

import DefaultLayout from "../layouts/layout-default"

export default function AboutVD() {
  return (
    <DefaultLayout headerUrl="/img4.jpg">
    
      <Head>
        <title>TODO - VDC</title>
      </Head>
      
        <div className="pa4 pa5-l ph7-l mh7-l">
            <h1 className="tc pb4 f2">Kas ir VEĢETATĪVĀ DISTONIJA un simptomi, kuri ir tās priekstvēstneši</h1>

            <p className="f4">
                Veģetatīvajai distonijai jeb somatoformai veģetatīvai disfunkcijai ir raksturīgi simptomi, kuri citkārt liecinātu par nopietnām veselības problēmām. Tādi simptomi kā sirdsklauves, trauksme, galvassāpes un reiboņi, pastiprināta svīšana, miega traucējumi, apetītes zudums un vēdera darbības traucējumi. Taču vēršoties pie ģimenes ārsta un veicot visus nepieciešamos izmeklējumus, lielākajā vairumā gadījumu nekāādas fiziska rakstura problēmas ķermenī netiek atklātas.
            </p>

            <p className="f4">
                Šī iemesla dēļ varam apzīmēt veģetatīvo distoniju kā diskomfortu radošu stāvokli, kurā diskomfortu radošie simptomi izpaužas fiziskā veidā, taču medicīniski pamatots iemesls tam netiek atrasts.
            </p>
        </div>

      
    </DefaultLayout>
  )
}
