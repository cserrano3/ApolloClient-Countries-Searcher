import React from 'react';

interface EmojiProps {
  ariaLabel?: string;
  symbol: string;
  className?: string,
  dataTest?: string;
}

export default function Emoji({ ariaLabel, symbol, className, dataTest }: EmojiProps) {
  return (
    <span
      data-testid={dataTest}
      className={className}
      role="img"
      aria-label={ariaLabel}>
      {symbol}
    </span>
  )
}
