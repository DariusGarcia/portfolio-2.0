import Head from 'next/head'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import ContactBtn from '../components/contactBtn'

const Skills = () => {
	return (
		<>
			<Head>
				<title>skills</title>
			</Head>
			<NavBar />
			<main className='bg-grey'>Skills</main>
			<Footer />
			<ContactBtn />
		</>
	)
}

export default Skills
