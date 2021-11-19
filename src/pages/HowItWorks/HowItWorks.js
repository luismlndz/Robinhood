import './HowItWorks.scss'
import Stats from '../../components/Stats/Stats'
import Hero2 from '../../components/Hero2/Hero2'

export default function HowItWorks(props) {
    return (
        <div>
            <Hero2/>
            <div className='crypto-section'>
                <h1 className='crypto-section-title' >Crypto doesn't have to be cryptic</h1>
                <p className='crypto-section-text'>Get the information you need to make informed and confident investment decisions.</p>
            </div>
            <Stats/>
        </div>
    );
}