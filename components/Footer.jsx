import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


//4 Spalten Layout links Logo + copyright darunter; Discover Spalte, Company spalte, Products
const Footer = () => {
  return (
    <footer className='m-5 pt-5 '>
        <div className='flex md:flex-row align-top justify-between flex-col'>
            <div className='flex flex-col justify-start'>
                <Link href="/"><a><Image src="/Logo_v14-min.png" alt="Logo" className='cursor-pointer'  width={265} height={75}/></a></Link>
                <p>&copy; {new Date().getFullYear()} Cryptoeducating</p>
                <Link href="https://www.etherscan.io"><a>Donate &#128151;</a></Link>
            </div>
            <div className='flex flex-col mb-3'>
                <h3 className='font-semibold'>Discover</h3>
                <br />
                <Link href="/category/crypto-basics"><a className='cursor-pointer'>Beginner Posts</a></Link>
                <Link href="/tools"><a className='cursor-pointer'>Tools</a></Link>
                <Link href="/promocodes"><a className='cursor-pointer'>Promo Codes</a></Link>
            </div>
            <div className='flex flex-col mb-3'>
                <h3 className='font-semibold'>Team</h3>
                <br />
                <Link href="/about"><a>About us</a></Link>
                <a href='https://forms.gle/5Kt2GV2Sa5dzuaxLA'>Request Topics</a>
                <a href='mailto:business@cryptoeducating.net'> Advertise</a>
                <Link href="/terms"><a>Terms of Services</a></Link>
                <Link href="/privacy"><a>Privacy</a></Link>
            </div>
            <div className='flex md:flex-col flex-row'>
                <a href="https://www.twitter.com/cryptoedxcating" aria-label='Twitter'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
                </a>
                <a href='https://www.youtube.com/channel/UC7zCAlm7nmh2jyHiDcjZbxQ' aria-label='Youtube'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="5" width="18" height="14" rx="4" />
                    <path d="M10 9l5 3l-5 3z" />
                </svg>
                </a>
                <a href="https://www.instagram.com/cryptoeducating" aria-label='Instagram'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
                </a>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer