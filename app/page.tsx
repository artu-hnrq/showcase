
import Link from 'next/link'
import Scroll from '@/components/core/socialmedia'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      <Scroll />
      {/* <PageHeader className="pb-8">
        <PageHeaderHeading>Arthur Henrique</PageHeaderHeading>
        <PageHeaderDescription>
          Enthusiastic learner • Computer scientist • Python developer • Software business analyst • Unix-like system user
        </PageHeaderDescription>
        <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Icons.GitHub className='w-8 text-black' />
          <Icons.LinkedIn className='w-8 text-black' />
          <Icons.Twitter className='w-8 text-black' />
          <Icons.Gmail className='w-8 text-black' />
          <Icons.Codepen className='w-8 text-black' />
          <Icons.StackOverflow className='w-7 text-black' />
        </div>
      </PageHeader> */}
      <div className="w-full relative flex place-items-center items-center justify-center">

      </div>

    </main>
  )
}

export function FeaturedCallToAction() {
  return (
    <a
      href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
        Docs{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        Find in-depth information about Next.js features and API.
      </p>
    </a>
  )
}