import Gem from './Gem';
import Rune from './Rune';
import type { CubeRecipeItem } from '../types';

const TYPES = {
  gem: Gem,
  rune: Rune,
} as const;

const itemComponent = (itemType: CubeRecipeItem['type']) =>
  TYPES[itemType as keyof typeof TYPES];

type CubeRecipeProps = {
  items: CubeRecipeItem[];
};

const CubeRecipe = ({ items }: CubeRecipeProps) => {
  return (
    <div className="cube-recipe">
      {items.map((item, key) => {
        const Component = itemComponent(item.type);

        if (!Component) {
          return null;
        }

        return (
          <div className={`cube-item ${item.type}`} key={key}>
            <Component code={item.code} name={item.name} />
          </div>
        );
      })}
    </div>
  );
};

export default CubeRecipe;
