import React from 'react'
import Link from 'next/link'


//4 Spalten Layout links Logo + copyright darunter; Discover Spalte, Company spalte, Products
const Footer = () => {
  return (
    <footer className='m-5 pt-5'>
        <div className='flex flex-row align-top justify-around'>
            <div className='flex flex-col justify-start'>
                <Link href="/"><img src="/Logo_v14.png" alt="Logo" className=' cursor-pointer'/></Link>
                <p>&copy; {new Date().getFullYear()} Cryptoeducating</p>
                <Link href="https://www.etherscan.io"><a>Donate &#128151;</a></Link>
            </div>
            <div className='flex flex-col'>
                <h3 className='font-semibold'>Discover</h3>
                <Link href="/category/crypto-basics"><a className='cursor-pointer'>Beginner Posts</a></Link>
                <Link href="/tools"><a className='cursor-pointer'>Tools</a></Link>
                <Link href="/promocodes"><a className='cursor-pointer'>Promo Codes</a></Link>
            </div>
            <div className='flex flex-col'>
                <h3 className='font-semibold'>Team</h3>
                <Link href="/about"><a>About us</a></Link>
                <a href='https://forms.gle/5Kt2GV2Sa5dzuaxLA'>Request Topics/Feedback</a>
                <a href='mailto:business@cryptoeducating.net'> Advertise</a>
                <p>Terms of Services</p>
            </div>
            <div className='flex flex-col'>
                <a href="https://www.twitter.com">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
                </a>
                <a href='https://www.youtube.com'>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="5" width="18" height="14" rx="4" />
                    <path d="M10 9l5 3l-5 3z" />
                </svg>
                </a>
                <a href="https://www.instagram.com">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
                </a>
                <a href="https://www.facebook.com">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer