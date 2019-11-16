import React from  'react';
import {Image} from 'tenpines-bulma-react';

const UniqueItem = ({name, image}) => {
    return <div className={'unique-item'}>
            <Image className={'item-image'} src={image} />
            <span className={'item-name orange-text is-heavy'}>{name}</span>
    </div>;
}

export default UniqueItem;