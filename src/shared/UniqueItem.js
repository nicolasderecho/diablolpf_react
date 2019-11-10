import React from  'react';
import {Image} from 'tenpines-bulma-react';

const UniqueItem = ({name, image}) => {
    return <div className={'unique-item'}>
            <Image className={'item-image'} src={image} />
            <span className={'item-name unique-name'}>{name}</span>
    </div>;
}

export default UniqueItem;