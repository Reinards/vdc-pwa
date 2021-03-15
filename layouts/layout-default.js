import Header from '../components/header/header'
import Footer from '../components/footer/footer'

function Default(props) {
    return (
        <div id="layout">
            <Header headerUrl={props.headerUrl}/>
            {props.children}
            <Footer />
        </div>
    )
}

export default Default;