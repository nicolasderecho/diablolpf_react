import React from  'react';
import { RUNE_IMAGES } from './rune_images';
import {Image} from 'tenpines-bulma-react';

const Rune = ({code, name}) => {
    return <React.Fragment>
        <Image is={'32x32'} src={RUNE_IMAGES[code]} alt={name} title={name} />
        <span>{ name }</span>
    </React.Fragment>;
}

export default Rune;