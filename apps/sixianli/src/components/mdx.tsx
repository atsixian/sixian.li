import clsx from 'clsx'
import { useMDXComponent } from 'next-contentlayer/hooks'
import NextImage from 'next/image'
import NextLink from 'next/link'
import type { AnchorHTMLAttributes, ComponentProps } from 'react'

function Link(
  props: ComponentProps<typeof NextLink> &
    AnchorHTMLAttributes<HTMLAnchorElement>
) {
  const href = props.href

  if (href.startsWith('/')) {
    return (
      <NextLink {...props} href={href}>
        {props.children}
      </NextLink>
    )
  }

  if (href.startsWith('#')) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} className="break-words" />
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={clsx('break-words', props.className)}
    />
  )
}

function Image(props) {
  return (
    <div className="relative aspect-video w-full">
      <NextImage fill className="m-0 object-contain" {...props} />
    </div>
  )
}

interface MdxProps {
  code: string
}

const components = {
  Image,
  a: Link,
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose prose-zinc mb-10 max-w-none font-sans dark:prose-invert">
      <Component components={components} />
    </article>
  )
}
