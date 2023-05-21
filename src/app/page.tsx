import * as React from 'react'
import Image from 'next/image'
import { Github, Twitter, Youtube } from 'lucide-react'
import NextLink from 'next/link'

function Sidebar() {
  return (
    <nav className="w-full max-w-[58ch] p-6 md:w-auto md:p-0">
      <ul className="flex flex-row items-center gap-3 md:flex-col">
        <li><NextLink href="/"><div className="h-8 w-8 rounded-full bg-green-700 md:h-14 md:w-14"></div></NextLink></li>
        <li><NextLink href="/writing">写作</NextLink></li>
        <li><NextLink href="/talk">演讲</NextLink></li>
        <div className='grow'></div>
        <li><NextLink href="#"><Twitter /></NextLink></li>
        <li><NextLink href="#"><Youtube /></NextLink></li>
        <li><NextLink href="#"><Github /></NextLink></li>
      </ul>
    </nav>
  )
}

function MainContent() {
  const years = new Date().getFullYear() - 2018
  return (
    <div className="max-w-[58ch] px-6 text-neutral-800">
      <article>
        <h1 className="mb-4 text-3xl font-bold">Sixian Li</h1>
        <p className="mb-4">
          你好，我是 Sixian，1999 年出生于山城重庆。我在大学时与编程相遇，随后毅然决然地从营养学转至计算机专业，至今已有 {years} 年时间。
        </p>
        <p className='mb-4'>
          从 McGill University 毕业后，我加入苏州微软从事前端开发。两年后，我选择辞职，目前正在创造一款符合我价值与审美的产品。
        </p>
        <p className="mb-4">
          除了编程之外，我还热爱攀岩。对我来说，它是一场绝佳的动态冥想，让我得以从纷繁的思绪中抽离出来，去感受身体，重新掌控身体。
        </p>
        <div className='mb-4 flex items-center gap-4'>
          <Image src="/me.png" alt="Picture of the author"
            width={120}
            height={120}
            placeholder="blur"
            className="rounded-full"
            blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABXAFsDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAQIEAwAFBv/EABwQAQEBAQEBAAMAAAAAAAAAAAABAgMRIQQxQf/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwCuk0ek0566GWiNNESHRpkkaZXE08GhBqiZ6T9FG0/RNCbbNptmyoe0SmLWq2einpfCwgjTJIeKkSeDQg1RM9J+ijafomwJds2nRj6zsD3ArnNFlpLGlLYeJpfDQDRWEaCEE8JntN0U7TdSwknSsfWvWsPWdhvfcAxUXXBYYKuRFIMc48I0EIIJntN1U7S9RhIutT2tu1TWpsPX0gwp4Ua0Qouq4zpK4aCiGCEEEz2l7KtpOwJB3qW36p7o7fpYH1EPHOZxvTBXOaRlS0HOMhgucAz2k7f1zjS878hHf25wD//Z'
          >
          </Image>
          <p>
            我理想中的人生状态是「野生」。
          </p>
        </div>
        <h2 className='mb-4 text-2xl font-bold'>找到我</h2>
        <p className='mb-2'>
          我相信记录的价值，正在并将持续不断地记录生活。如果你喜欢我的内容，欢迎写信给 hi@sixian.li。
        </p>

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
