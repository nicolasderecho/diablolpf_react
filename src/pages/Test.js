import React from 'react';

import UniqueItems from '../data/json/unique_items.json';
import Sets from '../data/json/set_items.json';
import BaseItems from '../data/json/base_items.json';
import ObjectTypes from '../data/json/object_types.json';

window.uniqueItems = UniqueItems
window.setsDiablo = Sets 
window.baseItems = BaseItems
window.ObjectTypes = ObjectTypes

export const Test = () => {
    return <div>
        Testing Page
    </div>
}

export default Test;