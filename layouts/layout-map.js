import Header from '../components/header/header'
import Footer from '../components/footer/footer'

function Default(props) {
    return (
        <div>
            <Header headerUrl={props.headerUrl} showMap/>
            {props.children}
            <Footer />
        </div>
    )
}

export default Default;