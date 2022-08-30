import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Contact = () => {
	return (
		<div className='bg-grey '>
			<Navbar />
			<div className='flex justify-center'>
				<main className='h-screen md:w-3/5 my-24'>
					<h1 className='text-4xl'> Contact Me</h1>
				</main>
			</div>
			<Footer />
		</div>
	)
}

export default Contact
