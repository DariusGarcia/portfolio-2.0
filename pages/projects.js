import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navbar from '../components/navbar'
import SingleWebsite from '../components/singleWebsite'
import SingleMobileApp from '../components/singleMobileApp'
import ContactBtn from '../components/contactBtn'
import Footer from '../components/footer'
import { MdComputer, MdPhoneIphone } from 'react-icons/md'
import projects from '../projectsList'

const Projects = () => {
  const [websiteOpen, setWebsiteOpen] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleStatusChange = (status) => {
    setIsOpen((prev) => [...prev, status])
  }

  return (
    <>
      <Head>
        <title>Darius Garcia Jr - Projects</title>
      </Head>
      <div className='bg-black2'>
        <Navbar />

        <main className='flex justify-center mx-4 lg:mx-0 md:pt-12 mb-12 bg-black2 '>
          <div className='md:grid md:grid-cols-3 w-full lg:w-5/6'>
            <div>
              <div className='md:fixed px-8 md:ml-4 pb-8 row-span-1 md:mt-4 flex flex-col items-center border-darkGrey md:border-[1px] md:bg-opacity-20 md:mr-8 h-max rounded-lg'>
                <div className='flex flex-row gap-2 items-center mb-4 mt-4 md:mb-8'>
                  <h1 className=' text-3xl font-semibold'>Projects</h1>
                </div>
                <div className='flex flex-col items-start gap-4'>
                  {/*------------logic to check if the project article has been toggled to open or not ------------ */}
                  <button
                    onClick={() => {
                      if (mobileOpen) {
                        setWebsiteOpen(!websiteOpen)
                        setMobileOpen(false)
                        window.scrollTo(0, 0)
                      } else {
                        window.scrollTo(0, 0)
                      }
                    }}
                    className={
                      !websiteOpen
                        ? 'bg-darkGrey bg-opacity-50 text-sm w-full font-semibold p-4 rounded-lg transition ease-in-out delay-55 hover:scale-95 opacity-75'
                        : 'text-sm w-full font-semibold p-4 rounded-lg transition ease-in-out delay-55 hover:scale-95 hover:opacity-75 bg-blue3 bg-opacity-20 hover:bg-opacity-100 hover:text-white border-2 border-blue3 text-blue3 '
                    }
                  >
                    WEB APPS & WEBSITES
                  </button>
                  <button
                    onClick={() => {
                      if (websiteOpen) {
                        setWebsiteOpen(false)
                        setMobileOpen(!mobileOpen)
                        window.scrollTo(0, 0)
                      } else {
                        window.scrollTo(0, 0)
                      }
                    }}
                    className={
                      !mobileOpen
                        ? 'bg-darkGrey bg-opacity-50 text-sm w-full font-semibold p-4 rounded-lg transition ease-in-out delay-55 hover:scale-95 opacity-75'
                        : 'text-sm w-full font-semibold p-4 rounded-lg transition ease-in-out delay-55 hover:scale-95 hover:opacity-75 bg-blue3 bg-opacity-20 hover:bg-opacity-100 hover:text-white border-2 border-blue3 text-blue3 '
                    }
                  >
                    MOBILE APPS
                  </button>
                </div>
              </div>
              <div className='hidden sm:block '>
                <h1 className=''></h1>
              </div>
            </div>
            {/*  2nd column of the on medium sized screen grid container */}
            {/* containers the individual projects to be displayed */}
            <div className=' row-span-2 col-span-2  md:mr-2'>
              <header className='mb-8 md:mb-12'>
                <p className='mt-2 md:text-lg '>
                  Here are some of the recent projects I have completed.
                </p>
              </header>
              {websiteOpen ? (
                <section className=''>
                  <div className='flex flex-row items-start gap-4'>
                    <h2 className=' text-xl font-bold md:text-2xl mb-4'>
                      WEBSITES AND WEB APPS
                    </h2>
                    <span className=''>
                      <MdComputer size={30} className='text-white'></MdComputer>
                    </span>
                  </div>
                  <div className='flex flex-col md:gap-8 justify-between cursor-pointer mb-24'>
                    {projects?.webApps?.map((project) => (
                      <SingleWebsite
                        key={project.name}
                        name={project.name}
                        description={project.description}
                        tech={project.tech}
                        image={project.image}
                        link={project.link}
                        github={project.github}
                        setOpen={handleStatusChange}
                      />
                    ))}
                  </div>
                </section>
              ) : (
                <section className=''>
                  <div className='flex flex-row items-start gap-4'>
                    <h2 className='text-xl md:text-2xl mb-4 font-bold'>
                      MOBILE APPS
                    </h2>
                    <MdPhoneIphone
                      size={25}
                      className='text-white'
                    ></MdPhoneIphone>
                  </div>
                  <div className='flex flex-col md:gap-8 justify-between cursor-pointer mb-24'>
                    {projects?.mobileApps?.map((project) => (
                      <SingleMobileApp
                        key={project.name}
                        name={project.name}
                        description={project.description}
                        tech={project.tech}
                        image={project.image}
                        link={project.link}
                      />
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </main>
        <Footer />
        <ContactBtn />
      </div>
    </>
  )
}

export default Projects
