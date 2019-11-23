import React from  'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const UniqueItem = ({name, image}) => {
    return <div className={'unique-item'}>
            <figure className='item-image image'>
                <LazyLoadImage className={'item-image'} src={image} />
            </figure>
            <span className={'item-name orange-text is-heavy'}>{name}</span>
    </div>;
}

export default UniqueItem;