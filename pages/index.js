import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactBtn from '../components/contactBtn'
import { BsBoxArrowInRight } from 'react-icons/bs'

// spline animation library
import Spline from '@splinetool/react-spline'

export default function Home() {
  return (
    <>
      <Head>
        <title>Darius Garcia</title>
        <meta name='description' content='Portfolio created by Darius Garcia' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/*       Nav bar     */}
      <Navbar />

      <div className='h-full flex flex-col items-center w-full py-12 selection:bg-blue3 bg-black2'>
        <main className='flex flex-col justify-center items-center h-full md:w-5/6 md:px-4 mb-24'>
          <header className='w-full flex flex-col items-center justify-center mx-4 md:mx-0'>
            <h1 className='mb-4 text-5xl'>Welcome</h1>
            <h1 className='mb-4 text-3xl'>
              My name is <span className='text-blue3'>Darius</span>
            </h1>
            <p className='md:w-1/4 mb-8'>
              I'm a front-end developer that is driven to uncover the "why" in
              how things work. I'm looking to contribute to interesting projects
              that will make a meaningful impact on people.
            </p>
            <Link href='/projects'>
              <a className='flex flex-row w-max shadow-2xl items-center gap-2 p-4 font-semibold bg-blue3 bg-opacity-20 border-2 border-blue3 text-blue3 transition ease-in-out delay-100 hover:scale-95 hover:opacity-75  rounded-lg'>
                <div>Check out my projects </div>
                <BsBoxArrowInRight size={25}></BsBoxArrowInRight>
              </a>
            </Link>
          </header>
        </main>
        {/* <div className='z-10 my-12 h-screen w-full shadow-xl  '>
          <Spline
						className='rounded-sm cursor-grab'
						// scene='https://prod.spline.design/jM7iJtkNdHonXjTv/scene.splinecode'
						scene='https://prod.spline.design/6IcN6I8oOqHh40BT/scene.splinecode'
					/> 
        </div>*/}
        <section className=' mx-4 md:mx-0 md:w-5/6 mt-12  '>
          <article className='md:flex md:items-center flex-col mb-12'>
            <h2 className='mb-4 text-4xl text-blue3'> About Me</h2>
            <p className='mb-4 md:w-3/5'>
              Aspiring frontend developer with a strong interest in creating
              applications that exceed clients' and customers' expectations and
              drive real business results. I can contribute towards the
              organizational goals through my analytical skills and knowledge
              acquired through my Economics degree at the University of
              California, Irvine, and also by working on MERN stack projects
              during the completion of my Fullstack Web Development bootcamp at
              the University of California, Irvine. I recently received a
              certificate in full stack development from UC Irvine Coding
              Bootcamp, where I acquired industry best practices to design,
              develop, test, and deploy full-stack applications to the cloud.
              JavaScript (ES6), CSS, HTML, React.js, Node.js, Express.js, HTML
              templating engines, Git, relational databases (mySQL),
              document-based databases (MongoDB), Bootstrap, Agile
              methodologies, SCRUM, PWA, SPA, Heroku, responsive web design, and
              other skills were among some of the technologies and skills I
              used.
            </p>
            <p className='md:w-3/5'>
              I'm always trying to learn new technologies to further advance my
              capabilities to see where my imagination leads me. As an
              innovative problem solver who is passionate about developing apps
              using mobile-first design and development, my current focus is to
              contribute to interesting projects that will have a meaningful
              impact on people. I enjoy creating best practice web applications
              that allow me to express my creativity, while also providing a
              positive user experience.
            </p>
          </article>
        </section>
      </div>
      <Footer />
      <ContactBtn />
    </>
  )
}
