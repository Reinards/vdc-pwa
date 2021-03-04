import Head from "next/head"

import DefaultLayout from "../layouts/layout-default"

export default function Buj() {
  return (
    <DefaultLayout headerUrl="/img4.jpg">
    
      <Head>
        <title>TODO - VDC</title>
      </Head>
      
        <div className="pa4 pa5-l ph7-l mh7-l">
            <h1 className="tc pb4 f2">Biežāk uzdotie jautājumi</h1>

            <div className="">
                <h2 className="f3">
                    Vai seansus var apmeklēt, esot stāvoklī, vai tas ir droši?
                </h2>
                <p className="f4">
                    Sievietēm, kuras ir gaidībās, seansi ir ne tikai droši, bet arī ieteicami.
                </p>
            </div>

            <div className="mt5">
                <h2 className="f3">
                    Vai seansa apmeklējumam ir vecuma ierobežojumi?
                </h2>
                <p className="f4">
                    Vecuma ierobežojumu seansu apmeklējumiem nav.
                </p>
            </div>

            <div className="mt5">
                <h2 className="f3">
                    Vai seansus var apmeklēt arī bērni, un, ja jā, tad no kāda vecuma?
                </h2>
                <p className="f4">
                    Vecuma ierobežojumu seansu apmeklējumiem nav.
                </p>
            </div>

            <div className="mt5">
                <h2 className="f3">
                    Cik seansu nepieciešams, lai varētu atveseļoties?
                </h2>
                <p className="f4">
                    Tas ir ļoti individuāli, taču ieteiktu rēķināties vidēji ar 5-10 seansiem trīs mēnešu laikā.
                </p>
            </div>

            <div className="mt5">
                <h2 className="f3">
                    Vai, apmeklējot atveseļošanās seansus, ir iespējams atveseļoties arī no depresijas?
                </h2>
                <p className="f4">
                    Jā, apmeklējot atveseļošanās seansus, ir iespējams veiksmīgi atveseļoties arī no depresijas.
                </p>
            </div>

            <div className="mt5">
                <h2 className="f3">
                    Ja ikdienā ir nepamatota trauksme, vai tā ir veģetatīvā distonija?
                </h2>
                <p className="f4">
                    Diagnozi veģetatīvā distonija var uzstādīt atbilstošs ārsts, taču, apmeklējot atveseļošanās seansus, iespējams veiksmīgi atveseļoties no trauksmes sajūtas.
                </p>
            </div>

            <div className="mt5">
                <h2 className="f3">
                    Vai seansus var novadīt arī attālināti?
                </h2>
                <p className="f4">
                    Seansi var notikt gan klātienē, gan attālināti, kā arī ir iespēja atveseļošanas laikā pielietot abas metodes.
                </p>
            </div>

            <div className="mt5">
                <h2 className="f3">
                    Vai seansi notiek sarunu veidā?
                </h2>
                <p className="f4">
                    Sarunai ar klientu vienmēr ir būtiska nozīme, taču atveseļošanas seansa laikā tiek atjaunota cilvēka enerģētika, un tas nenotiek sarunu veidā. Šis ir atsevišķs mijiedarbības process.
                </p>
            </div>

            <div className="mt5">
                <h2 className="f3">
                    Vai var apmeklēt seansus, ja tiek lietoti medikamenti un antidepresanti?
                </h2>
                <p className="f4">
                    Jā, ievērojams skaits klientu seansus sāk apmeklēt brīdī, kad jau tiek lietoti antidepresanti. Brīdī, kad panākts jau vērā ņemams rezultāts - pašsajūtas uzlabošanās, medikamentu lietošana tiek samazināta un/vai pārtraukta tā speciālista uzraudzībā, kurš medikamentus ir izrakstījis.
                </p>
            </div>

            <div className="mt5">
                <h2 className="f3">
                    Vai, apmeklējot seansus, var iegūt pretējo rezultātu, - vai pašsajūta vai pasliktināties?
                </h2>
                <p className="f4">
                    Atveseļošanas metode ir veidota tā, ka pašas metodes efekts var būt pozitīvs (atveseļojošs) vai neitrāls (bez izmaiņām). Diemžēl, ne visus gadījumus var atrisināt tikai ar energoterapeita atveseļošanas metodēm. Reizēm apmeklētājiem tiek ieteikts vērsties arī pēc profesionālas medicīniskas palīdzības, kā, piemēram, psihologa, psihoterapeita vai neirologa.
                </p>
            </div>
        </div>

      
    </DefaultLayout>
  )
}
