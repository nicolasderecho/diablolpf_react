type GemProps = {
  code: string;
  name: string;
};

const titleFor = (code: string): string => code;

const Gem = ({ code, name }: GemProps) => {
  const [gemType, gemStatus = ''] = code.split('-');

  return (
    <span className="inline-flex flex-col items-center gap-1">
      <img
        src={`/assets/legacy/game_gems/${gemStatus.toLowerCase()}_${gemType.toLowerCase()}.png`}
        alt={name}
        title={titleFor(code)}
        className="w-8 h-8 gem-figure"
        width={32}
        height={32}
      />
      <span className="gem-name">{name}</span>
    </span>
  );
};

export default Gem;
