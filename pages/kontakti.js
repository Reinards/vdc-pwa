import Head from "next/head"
import Contacts from "../components/contacts/contacts"
import MapLayout from "../layouts/layout-map"
import WebsiteData from '../data/website.config.json'

export default function Kontakti() {
  return (
    <MapLayout headerUrl="/img4.jpg">
    
        <Head>
          <title>VDC - Kontakti</title>
          <meta name="title" content="VDC - Kontakti" />
          {/* <meta name="description" content="Description" /> */}
        </Head>

        <div className="flex flex-wrap">
          <div className="ph4 pv4 pv0-l ph0-l w-100 w-50-l flex items-center justify-center">
            <div>
              <p>Adrese: {WebsiteData.address}</p>
              <p>Tālrunis: <a className="link black b" href={`tel: ${WebsiteData.phone}`}>{WebsiteData.phone}</a></p>
              <p>E-pasts: <a className="link black b" href={`mailto: ${WebsiteData.phone}`}>{WebsiteData.email}</a></p>
            </div>
          </div>

          <div className="w-100 w-50-l">
            <div className="map-frame">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.593961393291!2d24.122901316087518!3d56.95575760603865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfccf851a03b%3A0x8c610630f38d1872!2sT%C4%93rbatas%20iela%2041%2F43%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1011!5e0!3m2!1sen!2slv!4v1614939207181!5m2!1sen!2slv" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>

      
        <Contacts />

      
    </MapLayout>
  )
}
