import Head from 'next/head'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import ContactBtn from '../components/contactBtn'
import skills from '../skillsList'

const Skills = () => {
  return (
    <>
      <Head>
        <title>Darius Garcia Jr - Skills</title>
      </Head>
      <NavBar />
      <main className='py-12 flex flex-col items-center  bg-black2'>
        <div className='px-6 flex flex-col md:w-5/6 mb-8'>
          <h1 className='text-3xl font-bold mb-4'>Skills</h1>
          <h2 className='text-md font-semibold'>
            Current tech stack that I use to develop web applications:
          </h2>
        </div>
        <section className='md:w-5/6 md:px-6 grid grid-cols-2 md:grid-cols-6 gap-8 '>
          {skills.current.map((skill) => (
            <article
              className='flex justify-center items-center p-8 font-bold bg-blue3 bg-opacity-20 border-2 border-blue3 text-blue3 rounded-xl selection:bg-darkGrey selection:text-black hover:scale-105 transition ease-in-out hover:bg-opacity-100 hover:text-white'
              key={skill}
            >
              {skill}
            </article>
          ))}
        </section>
        <div className='px-6 flex flex-col md:w-5/6 mt-12'>
          <h2 className='text-md font-semibold mb-8'>
            Other technologies I have worked with in the past:
          </h2>
        </div>
        <section className='md:w-5/6 md:px-6 grid grid-cols-6  gap-8'>
          {skills.previous.map((skill) => (
            <article
              className='flex justify-center items-center p-8 font-bold bg-blue3 bg-opacity-20 border-2 border-blue3 text-blue3 rounded-xl selection:bg-darkGrey selection:text-black hover:scale-105 transition ease-in-out hover:bg-opacity-100 hover:text-white'
              key={skill}
            >
              {skill}
            </article>
          ))}
          <article
            className='col-span-2 flex justify-center items-center p-8 font-bold bg-blue3 bg-opacity-20 border-2 border-blue3 text-blue3 rounded-xl selection:bg-darkGrey selection:text-black hover:scale-105 transition ease-in-out delay-100 hover:bg-opacity-100 hover:text-white'
            key='android'
          >
            Android Mobile Development
          </article>
        </section>
      </main>
      <Footer />
      <ContactBtn />
    </>
  )
}

export default Skills
