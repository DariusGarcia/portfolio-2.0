import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactBtn from '../components/contactBtn'
import { motion as m, AnimatePresence } from 'framer-motion'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Landing() {
  const cardVariants = {
    hidden: {
      y: 300,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.5,
        duration: 1,
      },
    },
  }
  return (
    <>
      <Head>
        <title>Darius Garcia Jr</title>
      </Head>
      <ContactBtn />
      <div className='bg-black2 text-white'>
        <Navbar />
        {/* <PageWrapper> */}
        <AnimatePresence>
          <m.div
            initial='hidden'
            animate='visible'
            viewport={{ once: true, amount: 0.8 }}
            className='relative isolate px-6 md:pt-56 lg:px-8 bg-black2 h-screen'
          >
            <m.div variants={cardVariants}>
              <div
                className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
                aria-hidden='true'
              ></div>
              <div className='mx-auto max-w-2xl py-32 lg:py-0'>
                <div className='text-center'>
                  <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                    Darius Garcia Jr
                  </h1>
                  <p className='mt-6 text-lg leading-8 text-gray-600'>
                    I'm an aspiring frontend developer. I currently work as a
                    coding instructor for Code Ninjas. I enjoy making fully
                    responsive and elegant web apps.
                  </p>
                  <div className='flex flex-col  gap-6 mt-10 items-center justify-center gap-x-6'>
                    <section className='flex flex-row gap-6'>
                      <Link
                        href='/projects'
                        className='rounded-md px-3.5 py-2.5 text-sm font-semibold text-white  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      >
                        Projects
                      </Link>
                      <Link
                        href='/experience'
                        className='text-sm font-semibold leading-6 '
                      >
                        Experience →
                      </Link>
                    </section>
                    <button>
                      <Link href='https://github.com/dariusgarcia'>
                        <BsGithub
                          size={20}
                          className='text-blue3 hover:opacity-70 transition ease-out'
                        />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </m.div>
          </m.div>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  )
}
