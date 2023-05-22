import * as React from 'react'
import { Github, Twitter, Youtube } from 'lucide-react'
import NextLink from 'next/link'
import Me from './me.mdx'

function Sidebar() {
  return (
    <nav className="w-full max-w-[58ch] p-6 md:w-auto md:p-0">
      <ul className="flex flex-row items-center gap-3 md:flex-col">
        <li>
          <NextLink href="/">
            <div className="h-8 w-8 rounded-full bg-green-700 md:h-14 md:w-14"></div>
          </NextLink>
        </li>
        <li>
          <NextLink href="/writing">写作</NextLink>
        </li>
        <li>
          <NextLink href="/talk">演讲</NextLink>
        </li>
        <div className="grow"></div>
        <li>
          <NextLink href="#">
            <Twitter />
          </NextLink>
        </li>
        <li>
          <NextLink href="#">
            <Youtube />
          </NextLink>
        </li>
        <li>
          <NextLink href="#">
            <Github />
          </NextLink>
        </li>
      </ul>
    </nav>
  )
}

function MainContent() {
  return (
    <div className="max-w-[58ch] px-6 text-neutral-800">
      <article>
        <Me />
      </article>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex max-h-fit flex-col items-center justify-start md:mt-32 md:flex-row md:items-start md:justify-center md:gap-6">
      <Sidebar />
      <MainContent />
    </div>
  )
}
