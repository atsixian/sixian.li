import clsx from 'clsx'

export function Video({
  src,
  caption,
  className,
  style,
}: {
  src: string
  caption?: string
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div className="flex flex-col items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={clsx('m-0 rounded-md', className)}
        style={style}
      >
        <source src={src} type="video/mp4" />
      </video>
      <p className="mt-0 text-sm text-fg-secondary-color">{caption}</p>
    </div>
  )
}
