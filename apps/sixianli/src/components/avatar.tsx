import Image from 'next/image'
import profilePic from '../../public/me.png'

export function Avatar() {
  return (
    <Image
      src={profilePic}
      alt="Picture of the author"
      width={120}
      height={120}
      placeholder="blur"
      className="m-0 rounded-full"
    />
  )
}
