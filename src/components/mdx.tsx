import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'

type MdxProps = {
  code: string
}

const components = {
  Image,
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose prose-zinc font-sans">
      <Component components={components} />
    </article>
  )
}
