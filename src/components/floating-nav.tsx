'use-client'

import clsx from 'clsx'
import { ChevronUp } from 'lucide-react'
import NextLink from 'next/link'
import { useState } from 'react'
import { NAV_LINKS, SOCIAL_LINKS } from './sidebar'

export function FloatingNav() {
  const [checked, setChecked] = useState(false)

  const delay = (order: number) => order * 50 + (checked ? 100 : 0)

  return (
    <div className="md:hidden">
      <div
        className={clsx(
          'fixed inset-0 z-[98] h-full w-full bg-bg-color/80 backdrop-blur-md ease-in-out',
          checked ? 'opacity-100' : 'opacity-50',
          checked
            ? '[transition:clip-path_400ms,opacity_400ms_100ms]'
            : // on leaving, list items leave first
              '[transition:clip-path_400ms_200ms,opacity_700ms_100ms]'
        )}
        style={{
          clipPath: checked
            ? `circle(150% at 95% 95%)`
            : 'circle(0% at 95% 95%)',
        }}
      >
        <nav className="absolute bottom-20 right-7 z-[99]">
          <ul className="flex flex-col items-end gap-3">
            {NAV_LINKS.map((link, idx) => (
              <li
                key={link.href}
                className={clsx(
                  'transition-transform duration-500 ease-in-out',
                  checked ? 'translate-x-0 opacity-100' : 'translate-x-[30vw]'
                )}
                style={{
                  transitionDelay: `${delay(idx)}ms`,
                }}
              >
                <NextLink href={link.href} className="text-2xl">
                  {link.node}
                </NextLink>
              </li>
            ))}
          </ul>
          <ul
            className={clsx(
              'mt-3 flex gap-2',
              'transition-transform duration-500 ease-in-out',
              checked ? 'translate-x-0 opacity-100' : 'translate-x-[50vw]'
            )}
            style={{
              transitionDelay: `${delay(NAV_LINKS.length)}ms`,
            }}
          >
            {SOCIAL_LINKS.map((link, idx) => (
              <li key={link.href}>{link.node}</li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="fixed bottom-4 right-4 z-[99] flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 drop-shadow-md">
        <input
          id="menu"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(prev => !prev)}
          className="peer/menu appearance-none"
        />
        <label
          htmlFor="menu"
          className="text-zinc-100 transition-transform peer-checked/menu:rotate-180"
        >
          <ChevronUp strokeWidth={1} size={28} />
        </label>
      </div>
    </div>
  )
}
