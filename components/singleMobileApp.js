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
			className='relative mb-4 md:mb-0 h-max p-4 border-2 hover:border-blue3 text-white border-darkGrey rounded-md hover:scale-95 transition ease-in-out delay-110 shadow-xl'>
			{!open ? (
				<div className=''>
					<div className='flex flex-row justify-between cursor-pointer'>
						<h3 className='w-max font-bold'> {name}</h3>
						<p className=' cursor-pointer text-white'>
							<BsArrowsAngleExpand
								className='hover:text-blue3'
								size='20'></BsArrowsAngleExpand>
						</p>
					</div>
					<p className='w-max mt-2 text-darkGrey'>{description}</p>
				</div>
			) : (
				<div className='flex flex-col cursor-text '>
					<div className='flex flex-row justify-between'>
						<h3 className='font-bold text-blue3'> {name}</h3>
						<p className=' cursor-pointer'>
							<BsArrowsAngleExpand
								className='hover:text-blue3'
								size='20'></BsArrowsAngleExpand>
						</p>
					</div>
					<p className='mt-2 w-max'>Tech stack: {tech}</p>
					<p className='text-sm text-darkGrey mt-2 w-max'>{description}</p>
					<div className='flex justify-center items-center cursor-pointer mt-4'>
						<Image
							className='rounded-xl'
							src={image}
							alt={name}
							height={600}
							width={300}
						/>
					</div>
				</div>
			)}
		</article>
	)
}
