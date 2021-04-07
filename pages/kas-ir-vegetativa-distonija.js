import Head from "next/head"

import DefaultLayout from "../layouts/layout-default"

export default function AboutVD() {
  return (
    <DefaultLayout headerUrl="/img4.jpg">
    
      <Head>
        <title>VDC - Kas ir veģetatīvā distonija?</title>
        <meta name="title" content="VDC - Kas ir veģetatīvā distonija?" />
        {/* <meta name="description" content="Description" /> */}
      </Head>
      
        <div className="mc">
            <h1 className="tc f4 f2-l mt0 pt0">Kas ir veģetatīvā distonija un simptomi, kuri ir tās priekšvēstneši</h1>

            <p className="paragraph1 mt0 pt0">
                Veģetatīvajai distonijai jeb somatoformai veģetatīvai disfunkcijai ir raksturīgi simptomi, kuri citkārt liecinātu par nopietnām veselības problēmām. Tādi simptomi kā sirdsklauves, trauksme, galvassāpes un reiboņi, pastiprināta svīšana, miega traucējumi, apetītes zudums un vēdera darbības traucējumi. Taču vēršoties pie ģimenes ārsta un veicot visus nepieciešamos izmeklējumus, lielākajā vairumā gadījumu nekāādas fiziska rakstura problēmas ķermenī netiek atklātas.
            </p>

            <p className="paragraph1 mb0">
                Šī iemesla dēļ varam apzīmēt veģetatīvo distoniju kā diskomfortu radošu stāvokli, kurā diskomfortu radošie simptomi izpaužas fiziskā veidā, taču medicīniski pamatots iemesls tam netiek atrasts.
            </p>
        </div>

      
    </DefaultLayout>
  )
}
