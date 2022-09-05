import { useState } from 'react'
import Image from 'next/image'
import { GrExpand } from 'react-icons/gr'
import { BsArrowsAngleExpand } from 'react-icons/bs'

export default function SingleWebsite({
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
			id={name}
			key={name}
			className='relative mb-4 md:mb-0 min-h-96 h-max p-4 border-2 hover:border-blue3 text-white border-darkGrey rounded-md transition  ease-in-out delay-110 shadow-xl'>
			{!open ? (
				<div className=''>
					<div className='flex flex-row justify-between'>
						<h3 className='font-bold'> {name}</h3>
						<p className='hover:scale-125 transition ease-in-out delay-25 cursor-pointer text-white'>
							<BsArrowsAngleExpand
								className='hover:text-blue3'
								size='20'></BsArrowsAngleExpand>
						</p>
					</div>
					<p className='mt-2 text-darkGrey'>{description}</p>
				</div>
			) : (
				<div className=' top-20 flex flex-col cursor-text '>
					<div className='flex flex-row justify-between'>
						<h3 className='font-bold text-blue3'> {name}</h3>

						<p className='hover:scale-75 transition ease-in-out delay-25 cursor-pointer'>
							<BsArrowsAngleExpand
								className='hover:text-blue3'
								size='20'></BsArrowsAngleExpand>
						</p>
					</div>
					<p className='mt-2'>Tech stack: {tech}</p>
					<p className='mt-2 text-sm text-darkGrey'>{description}</p>

					<div className='flex justify-center items-center cursor-pointer mt-4 '>
						<video
							autoPlay
							muted
							loop
							controls
							className='rounded-lg md:w-5/6 '>
							<source src={image} />
						</video>
					</div>
				</div>
			)}
		</article>
	)
}
