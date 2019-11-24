import React from  'react';
import LazyLoad from 'react-lazyload';

const UniqueItem = ({name, image}) => {
    return <div className={'unique-item'}>
            <figure className='item-image image'>
                <LazyLoad once={true} height={115} debounce={false} offset={400} >
                  <img src={image} alt={name} />
                </LazyLoad>
            </figure>
            <span className={'item-name orange-text is-heavy'}>{name}</span>
    </div>;
}

export default UniqueItem;