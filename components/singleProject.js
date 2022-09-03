import { useState } from 'react'
import Image from 'next/image'
import { GrExpand } from 'react-icons/gr'
import { BsArrowsAngleExpand } from 'react-icons/bs'

export default function SingleProject({
	name,
	description,
	tech,
	image,
	type,
}) {
	const [open, setOpen] = useState(false)

	return (
		<article
			onClick={() => {
				setOpen(!open)
			}}
			key={name}
			className='relative mb-4 md:mb-0 min-h-96 h-max p-4 border-2 hover:border-blue3 text-white border-darkGrey rounded-md hover:scale-95 transition ease-in-out delay-110 shadow-xl'>
			{!open ? (
				<div className=''>
					<h3 className='font-bold'> {name}</h3>
					<div className='flex flex-row justify-between'>
						<p className='text-darkGrey'>{description}</p>
						<p className=' cursor-pointer text-white'>
							<BsArrowsAngleExpand
								className='hover:text-blue3'
								size='20'></BsArrowsAngleExpand>
						</p>
					</div>
				</div>
			) : (
				<div className='flex flex-col cursor-text '>
					<div className='flex justify-center items-center cursor-pointer mb-4'>
						<video autoplay muted loop controls className=''>
							<source src={image} />
						</video>
					</div>
					<h3 className='font-bold text-blue3'> {name}</h3>
					<p className=''>Tech stack: {tech}</p>
					<div className='flex flex-row justify-between'>
						<p className='text-sm text-darkGrey'>{description}</p>

						<p className=' cursor-pointer'>
							<BsArrowsAngleExpand
								className='hover:text-blue3'
								size='20'></BsArrowsAngleExpand>
						</p>
					</div>
				</div>
			)}
		</article>
	)
}
