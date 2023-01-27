import Link from 'next/link'
import { MdMessage } from 'react-icons/md'

export default function ContactBtn() {
	return (
		<div>
			{' '}
			<Link href='/contact'>
				<a className=' flex flex-row fixed z-50 bottom-7 p-3 justify-center items-center gap-2 bg-blue3 bg-opacity-20 hover:bg-opacity-100 hover:text-white border-2 border-blue3 text-blue3 md:right-10 md:bottom-10 right-4  rounded-xl shadow-md hover:shadow-lg hover:scale-95 outline-grey transition ease-in-out delay-10 '>
					Contact Me <MdMessage size='30'></MdMessage>
				</a>
			</Link>
		</div>
	)
}
