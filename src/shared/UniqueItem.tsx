type UniqueItemProps = {
  name: string;
  image: string;
};

const UniqueItem = ({ name, image }: UniqueItemProps) => (
  <div className="flex flex-col items-center text-center unique-item">
    <figure className="my-2">
      <img src={image} alt={name} loading="lazy" className="w-auto" />
    </figure>
    <span className="text-diablo-orange font-medium">{name}</span>
  </div>
);

export default UniqueItem;
