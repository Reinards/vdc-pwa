import Head from "next/head"
import DefaultLayout from "../layouts/layout-default"
import Question from "../components/misc/question"

export default function Buj() {

    let questionMargins = "mt3 mt4-l";

  return (
    <DefaultLayout headerUrl="/img4.jpg">
    
        <Head>
            <title>VDC - Biežāk Uzdotie Jautājumi - Pajautā</title>
            <meta name="title" content="VDC - Biežāk Uzdotie Jautājumi" />
            {/* <meta name="description" content="Description" /> */}
        </Head>
      
        <div className="mc">
            <h1 className="tc f4 f2-l">Biežāk uzdotie jautājumi</h1>

            <div className="mt0">
                <Question title="Vai seansus var apmeklēt, esot stāvoklī, vai tas ir droši?">
                    Sievietēm, kuras ir gaidībās, seansi ir ne tikai droši, bet arī ieteicami.
                </Question>
            </div>

            <div className={questionMargins}>
                <Question title="Vai seansa apmeklējumam ir vecuma ierobežojumi?">
                    Vecuma ierobežojumu seansu apmeklējumiem nav.
                </Question>
            </div>

            <div className={questionMargins}>
                <Question title="Vai seansus var apmeklēt arī bērni, un, ja jā, tad no kāda vecuma?">
                    Vecuma ierobežojumu seansu apmeklējumiem nav.
                </Question>
            </div>

            <div className={questionMargins}>
                <Question title="Cik seansu nepieciešams, lai varētu atveseļoties?">
                    Tas ir ļoti individuāli, taču ieteiktu rēķināties vidēji ar 5-10 seansiem trīs mēnešu laikā.
                </Question>
            </div>

            <div className={questionMargins}>
                <Question title="Vai, apmeklējot atveseļošanās seansus, ir iespējams atveseļoties arī no depresijas?">
                    Jā, apmeklējot atveseļošanās seansus, ir iespējams veiksmīgi atveseļoties arī no depresijas.
                </Question>
            </div>

            <div className={questionMargins}>
                <Question title="Ja ikdienā ir nepamatota trauksme, vai tā ir veģetatīvā distonija?">
                    Diagnozi veģetatīvā distonija var uzstādīt atbilstošs ārsts, taču, apmeklējot atveseļošanās seansus, iespējams veiksmīgi atveseļoties no trauksmes sajūtas.
                </Question>
            </div>

            <div className={questionMargins}>
                <Question title="Vai seansus var novadīt arī attālināti?">
                    Seansi var notikt gan klātienē, gan attālināti, kā arī ir iespēja atveseļošanas laikā pielietot abas metodes.
                </Question>
            </div>

            <div className={questionMargins}>
                <Question title="Vai seansi notiek sarunu veidā?">
                    Sarunai ar klientu vienmēr ir būtiska nozīme, taču atveseļošanas seansa laikā tiek atjaunota cilvēka enerģētika, un tas nenotiek sarunu veidā. Šis ir atsevišķs mijiedarbības process.
                </Question>
            </div>

            <div className={questionMargins}>
                <Question title="Vai var apmeklēt seansus, ja tiek lietoti medikamenti un antidepresanti?">
                    Jā, ievērojams skaits klientu seansus sāk apmeklēt brīdī, kad jau tiek lietoti antidepresanti. Brīdī, kad panākts jau vērā ņemams rezultāts - pašsajūtas uzlabošanās, medikamentu lietošana tiek samazināta un/vai pārtraukta tā speciālista uzraudzībā, kurš medikamentus ir izrakstījis.Sarunai ar klientu vienmēr ir būtiska nozīme, taču atveseļošanas seansa laikā tiek atjaunota cilvēka enerģētika, un tas nenotiek sarunu veidā. Šis ir atsevišķs mijiedarbības process.
                </Question>
            </div>

            <div className={questionMargins}>
                <Question title="Vai, apmeklējot seansus, var iegūt pretējo rezultātu, - vai pašsajūta vai pasliktināties?">
                    Atveseļošanas metode ir veidota tā, ka pašas metodes efekts var būt pozitīvs (atveseļojošs) vai neitrāls (bez izmaiņām). Diemžēl, ne visus gadījumus var atrisināt tikai ar energoterapeita atveseļošanas metodēm. Reizēm apmeklētājiem tiek ieteikts vērsties arī pēc profesionālas medicīniskas palīdzības, kā, piemēram, psihologa, psihoterapeita vai neirologa.
                </Question>
            </div>
        </div>

      
    </DefaultLayout>
  )
}
