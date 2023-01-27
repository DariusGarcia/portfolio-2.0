/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/dariusgarcia',
      icon: <BsGithub size={20}></BsGithub>,
    },
    // {
    // 	name: 'LinkedIn',
    // 	href: 'https://www.linkedin.com/in/darius-garcia/',
    // 	icon: <BsLinkedin size={20}></BsLinkedin>,
    // },
  ],
}

export default function Example() {
  return (
    <footer className='bg-black2  border-t-[1px] border-darkGrey shadow-xl text-grey'>
      <div className='mx-auto md:w-3/5 overflow-hidden py-12'>
        <nav
          className='-mx-5 -my-2 flex flex-wrap justify-center'
          aria-label='Footer'
        >
          {navigation.main.map((item) => (
            <div key={item.name} className='px-5 py-2'>
              <Link href={item.href}>
                <a className='text-base text-darkGrey hover:text-white hover:bg-blue3  p-3 hover:shadow-xl hover:scale-110 transition ease-in-out rounded-lg items-none'>
                  {item.name}
                </a>
              </Link>
            </div>
          ))}
        </nav>
        <div className='mt-8 flex justify-center space-x-6'>
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href}>
              <a
                target='_blank'
                key={item.name}
                className='text-darkGrey hover:bg-blue3 hover:text-white  p-3 hover:shadow-xl hover:scale-110 transition ease-in-out delay-50 rounded-lg items-none'
              >
                <span className='sr-only'>{item.name}</span>
                {item.icon}
                {/* <item.icon className='h-6 w-6' aria-hidden='true' /> */}
              </a>
            </Link>
          ))}
        </div>
        <p className='mt-8 text-center font-bold hover:text-blue3'>
          Darius Garcia
        </p>
        <p className='mt-8 text-sm text-center font-bold hover:text-blue3'>
          Site built with Next.js
        </p>
      </div>
    </footer>
  )
}
