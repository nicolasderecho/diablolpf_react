import React from  'react';
import { GEM_IMAGES } from './gem_images';
import {Image} from 'tenpines-bulma-react';

const titleFor = (code) => code;

const Gem = ({code, name}) => {
    return <React.Fragment>
        <Image is={'32x32'} src={GEM_IMAGES[code]} alt={name} title={titleFor(code)} className={'gem-figure'}/>
        <div className={'gem-name'}>{ name }</div>
    </React.Fragment>;
}

export default Gem;