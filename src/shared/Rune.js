import React from  'react';
import {Image} from 'tenpines-bulma-react';

const Rune = ({code, name}) => {
    return <React.Fragment>
        <Image is={'32x32'} src={`/assets/legacy/runes/${code.toLowerCase()}.png`} alt={name} title={name} />
        <span>{ name }</span>
    </React.Fragment>;
}

export default Rune;