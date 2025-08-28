import { Link } from 'react-router-dom'
import './RDHero.css'

const RDHero = ({title , description  , btn1 , btn2}) => {
    return (
        <section className='RDHero lm_whitespacing_x'>
        <h1 className="RDtitle">{title}</h1>
        <p className="RDdescription">{description}</p>
        <div className='RDbtns'>
            <Link to={btn1.Link} className='RDBtn'>{btn1.text}</Link>
            <Link to={btn2.Link} className='RDGreenBtn'>{btn2.text}</Link>
        </div>
        </section>
    )
}

export default RDHero
