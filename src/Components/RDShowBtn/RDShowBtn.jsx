import './RDShowBtn.css'
import  { useState } from 'react'
import RDCard from '../RDCard/RDCard'

const RDShowBtn = ({ initialCount = 4, Cards = [] }) => {
    const [show, setShow] = useState(false)

    if (!Cards || Cards.length === 0) {
        return <p className='RDNoData'>No data found</p>
    }

    const visibleCards = show ? Cards : Cards.slice(0, initialCount)

    return (
        <div>
            <div className='RD_Container lm_whitespacing_x'>
                {visibleCards.map((Card, index) => (
                    <RDCard 
                        key={index} 
                        number={Card.number} 
                        title={Card.title} 
                        description={Card.description} 
                    />
                ))}
            </div>
            
            {Cards.length > initialCount && (
                <button 
                    className='RDShowBtn' 
                    onClick={() => setShow(!show)}
                >
                    {show ? "Show Less" : "Show More"}
                </button>
            )}
        </div>
    )
}

export default RDShowBtn
