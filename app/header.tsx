'use client'
import SpinningStar from '@/components/ui/spinning-star'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-4 flex items-center gap-3">
      <div>
        <SpinningStar />
      </div>
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Taine Buchan
        </Link>

        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Front End Developer
        </TextEffect>
      </div>
    </header>
  )
}
