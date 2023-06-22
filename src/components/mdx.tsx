import NextImage from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import NextLink from 'next/link'
import clsx from 'clsx'

// @ts-ignore
const Link = props => {
  const href = props.href

  if (href.startsWith('/')) {
    return (
      <NextLink href={href} {...props}>
        {props.children}
      </NextLink>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} className="break-words" />
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={clsx('break-words', props.className)}
    />
  )
}

// @ts-ignore
const Image = props => (
  <div className="relative aspect-video w-full">
    <NextImage fill className="m-0 object-contain" {...props} />
  </div>
)

type MdxProps = {
  code: string
}

const components = {
  Image,
  a: Link,
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose prose-zinc mb-10 font-sans dark:prose-invert">
      <Component components={components} />
    </article>
  )
}
