// components/SpinningStar.tsx
import React from 'react'
import Image from 'next/image'

const SpinningStar = () => {
  const starShape =
    'polygon(100% 50%,78.98% 57.76%,93.3% 75%,71.21% 71.21%,75% 93.3%,57.76% 78.98%,50% 100%,42.24% 78.98%,25% 93.3%,28.79% 71.21%,6.7% 75%,21.02% 57.76%,0% 50%,21.02% 42.24%,6.7% 25%,28.79% 28.79%,25% 6.7%,42.24% 21.02%,50% 0%,57.76% 21.02%,75% 6.7%,71.21% 28.79%,93.3% 25%,78.98% 42.24%)'

  return (
    <div
      className="relative h-30 w-30 overflow-hidden"
      style={{
        clipPath: starShape,
        animation: 'spin 50s linear infinite',
      }}
    >
      <Image
        src="/me.jpeg"
        alt="picture of me"
        fill
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          animation: 'spin 50s linear infinite reverse',
        }}
        priority
      />
    </div>
  )
}

export default SpinningStar
