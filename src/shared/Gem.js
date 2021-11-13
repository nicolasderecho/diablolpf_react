import React from  'react';
import {Image} from 'tenpines-bulma-react';

const titleFor = (code) => code;

const Gem = ({code, name}) => {
    const [gemType, gemStatus] = code.split("-")

    return <React.Fragment>
        <Image is={'32x32'} src={`/assets/legacy/game_gems/${gemStatus.toLowerCase()}_${gemType.toLowerCase()}.png`} alt={name} title={titleFor(code)} className={'gem-figure'}/>
        <div className={'gem-name'}>{ name }</div>
    </React.Fragment>;
}

export default Gem;