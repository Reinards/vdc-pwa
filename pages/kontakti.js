import Head from "next/head"
import Contacts from "../components/contacts/contacts"
import MapLayout from "../layouts/layout-map"

export default function Kontakti() {
  return (
    <MapLayout headerUrl="/img4.jpg">
    
        <Head>
          <title>VDC - Kontakti</title>
          <meta name="title" content="VDC - Kontakti" />
          {/* <meta name="description" content="Description" /> */}
        </Head>
      
        <Contacts />

      
    </MapLayout>
  )
}
