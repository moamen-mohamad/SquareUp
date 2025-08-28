import RDCard from '../RDCard/RDCard';
import './RDContainer.css';

const RDContainer = ({ Cards = [], titleColor }) => {
    return (
        <div className='RD_Container'>
            {Array.isArray(Cards) && Cards.length > 0 ? (
                Cards.map((card) => (
                    <RDCard
                        key={card.id}
                        number={card.number}
                        title={card.title}
                        description={card.description}
                        titleStyle={titleColor ? { color: titleColor } : undefined}
                    />
                ))
            ) : (
                <p className='RDNoData'>No data found</p>
            )}
        </div>
    );
};

export default RDContainer;


