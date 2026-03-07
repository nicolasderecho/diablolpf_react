import BaseItems from '../data/json/base_items.json';
import ObjectTypes from '../data/json/object_types.json';
import Sets from '../data/json/set_items.json';
import UniqueItems from '../data/json/unique_items.json';
import type { BaseItemData, ObjectTypeMap, SetData, UniqueItemData } from '../types';

declare global {
  interface Window {
    uniqueItems: UniqueItemData[];
    setsDiablo: SetData[];
    baseItems: BaseItemData[];
    ObjectTypes: ObjectTypeMap;
  }
}

window.uniqueItems = UniqueItems as UniqueItemData[];
window.setsDiablo = Sets as SetData[];
window.baseItems = BaseItems as BaseItemData[];
window.ObjectTypes = ObjectTypes as ObjectTypeMap;

export const Test = () => {
  return <div>Testing Page</div>;
};

export default Test;
