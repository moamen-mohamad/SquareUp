import {useState } from 'react';
import MmWorkCard from '../MmWorkCard/MmWorkCard';
import './MmWorkList.css';

const MmWorkList = () => {
    const [items] = useState(() => {
        const stored = localStorage.getItem("items");
        return stored ? JSON.parse(stored) : [];
    });

    return (
        <div className="work-list">
            {items.length === 0 ? (
                <h2>Soon..!</h2>
            ) : (
                items.map((item) => (
                    <MmWorkCard key={item.id} {...item} />
                ))
            )}
        </div>
    );
};

export default MmWorkList;
