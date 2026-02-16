import React from 'react';

const Rune = ({ code, name }) => (
  <span className="inline-flex items-center gap-2">
    <img
      src={`/assets/legacy/runes/${code.toLowerCase()}.png`}
      alt={name}
      title={name}
      className="w-8 h-8"
      width={32}
      height={32}
    />
    <span>{name}</span>
  </span>
);

export default Rune;
