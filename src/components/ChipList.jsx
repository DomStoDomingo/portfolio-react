import React from 'react';
import { Chip } from 'primereact/chip';

const ChipList = ({ details }) => {
    return(
        <div className='left-container-bottom flex gap-2 p-2'>
            {details.map((detail, index) => (
                <Chip key={index} icon={detail.icon} label={detail.label} />
            ))}
        </div>
    );
}

export default ChipList;