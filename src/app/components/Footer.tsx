import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t-2 py-6 px-16 font-sans tracking-wide">
    <div className="flex justify-center items-center max-lg:flex-col text-center flex-wrap gap-4">
    <Link href={'/'}><p className="text-2xl  leading-loose">© Foody.ko</p></Link>
    </div>
  </footer>
  )
}
