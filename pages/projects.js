import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactBtn from '../components/contactBtn'

const Projects = () => {
	return (
		<div className='bg-grey'>
			<Navbar />

			<main className='flex justify-center my-24  h-screen bg-grey '>
				<div className='w-3/5'>
					<header className='mb-12'>
						<h1 className='text-4xl text-links'>Projects</h1>
					</header>
					<section className='mb-12 '>
						<h2 className='text-2xl mb-4'>Websites and Web Apps</h2>
						<div className='flex flex-wrap gap-12'>
							<article className='shadow-xl p-4 border-2 border-darkGrey rounded-md '>
								<h3 className=''> Fix It Credit Inc.</h3>
								<p className='text-darkGrey'>Freelance project</p>
							</article>
						</div>
					</section>
					<section className=''>
						<h2 className='text-2xl'>Mobile Apps</h2>
						<article className=''></article>
					</section>
				</div>
			</main>
			<Footer />
			<ContactBtn />
		</div>
	)
}

export default Projects
