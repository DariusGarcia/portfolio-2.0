import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Spline from '@splinetool/react-spline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Disclosure
      as='nav'
      className='bg-black2 shadow-lg py-3 border-darkGrey border-opacity-80 top-0 sticky z-50'
    >
      {({ open }) => (
        <div className='md:flex md:justify-center'>
          <div className='w-full  px-2 md:px-4 lg:w-5/6 md:pl-8 lg:pl-4 '>
            <div className='relative flex items-center justify-between h-16'>
              {/* Mobile menu button*/}
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-darkGrey focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              {/* Navbar links */}
              <div className='flex-1 md:-ml-2 flex items-center justify-center sm:items-center sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'></div>
                <div className='hidden sm:block '>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <li
                        key={item.name}
                        className=' py-2 rounded-md text-sm font-medium list-none'
                      >
                        <Link href={item.href}>
                          <a className='text-white hover:bg-blue3 hover:opacity-80 hover:text-black2 p-3 hover:shadow-xl hover:scale-110 transition ease-in-out rounded-lg'>
                            {item.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex h-max w-max items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                {/* Profile dropdown */}
                <Menu as='div' className='ml-3 relative'>
                  <div>
                    <Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      <span className='sr-only'>Open user menu</span>
                      <div className='flex items-center justify-center h-16 w-16 border-2 border-darkGrey hover:bg-darkGrey rounded-full font-bold hover:scale-110 transition ease-in-out delay-75'>
                        <Spline
                          className='flex justify-center items-center pt-4 pr-2 rounded-full'
                          scene='https://prod.spline.design/R7z1cyl4nheotwR9/scene.splinecode'
                        />
                      </div>
                      {/* <div className='flex items-center text-blue3 justify-center h-16 w-16 border-2 border-darkGrey hover:bg-blue3 hover:text-white rounded-full font-bold hover:scale-110 transition ease-in-out delay-75'>
												DG
											</div> */}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-grey ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item>
                        <Link href='/api/resume'>
                          <a
                            target='_blank'
                            className='block px-4 py-2 text-sm text-gray-700 hover:border-b-2 w-max  hover:border-white transition delay-75 ease-in-out'
                          >
                            Resume
                          </a>
                        </Link>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}

export default Navbar
