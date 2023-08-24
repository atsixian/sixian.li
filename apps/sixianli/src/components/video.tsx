import clsx from 'clsx'

export function Video({
  src,
  caption,
  className,
}: {
  src: string
  caption?: string
  className?: string
}) {
  return (
    <div className="flex flex-col items-center">
      <video autoPlay loop muted playsInline className={clsx('m-0', className)}>
        <source src={src} type="video/mp4" />
      </video>
      <p className="mt-0 text-sm text-fg-secondary-color">{caption}</p>
    </div>
  )
}
