import React from  'react';
import { requirementName, itemClassName } from './helpers/util';

const itemExtraAttributes = (extraAttributes) => extraAttributes.filter(attribute => !attribute.match(/required/));

const ItemSpecifications = ({item}) => {
    return <React.Fragment>
        <div className={'character-item'}>Item {itemClassName(item.itemClass)}</div>
        { itemExtraAttributes(item.extraAttributes).map( (attribute, index) => <div className={'item-requirement'} key={index}>
            { requirementName(attribute) }: { item[attribute] }
        </div> ) }
        { item.attributes.map( (attribute, index) => <div key={index}>{attribute}</div> ) }
    </React.Fragment>;
}

export default ItemSpecifications;