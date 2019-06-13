import React from  'react';
import Rune from './Rune';
import Gem from './Gem';

const TYPES = { gem: Gem, rune: Rune };

const itemComponent = (itemCode) => TYPES[itemCode]; 

const CubeRecipe = ({items}) => {
    return <div className='cube-recipe'>
        { items.map( (item, key) => {
            const Component = itemComponent(item.type);
            return <div className={`cube-item ${item.type}`} key={key}><Component code={item.code} name={item.name} /></div>
        })}
    </div>;
}

export default CubeRecipe;