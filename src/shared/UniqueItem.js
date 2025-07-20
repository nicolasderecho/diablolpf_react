import React from  'react';

const UniqueItem = ({name, image}) => {
    return <div className={'unique-item'}>
            <figure className='item-image image'>
                <img 
                    src={image} 
                    alt={name} 
                    loading="lazy"
                />
            </figure>
            <span className={'item-name orange-text is-heavy'}>{name}</span>
    </div>;
}

export default UniqueItem;