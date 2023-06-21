'use client'

import { Email } from 'react-obfuscate-email'

export function MyEmail({ children }: { children: React.ReactNode }) {
  return <Email email="hello@sixian.li">{children}</Email>
}
