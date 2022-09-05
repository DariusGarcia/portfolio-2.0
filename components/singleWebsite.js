import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GrExpand } from 'react-icons/gr'
import { BsArrowsAngleExpand, BsGithub } from 'react-icons/bs'

export default function SingleWebsite({
	name,
	description,
	tech,
	image,
	link,
}) {
	const [open, setOpen] = useState(false)

	return (
		<article
			onClick={() => {
				setOpen(!open)
			}}
			id={name}
			key={name}
			className='relative mb-4 md:mb-0 min-h-96 h-max p-4 border-[1px] hover:border-blue3 text-white border-darkGrey rounded-md transition hover:bg-opacity-20 ease-in-out delay-110 shadow-xl'>
			{!open ? (
				<div className=''>
					<div className='flex flex-row px-2 justify-between'>
						<div className='flex flex-row items-center gap-2'>
							<h3 className='text-xl font-bold'> {name}</h3>
							<Link href={link}>
								<a></a>
							</Link>
							<BsGithub
								className='hover:scale-125 ease-in-out transition delay-75 hover:text-blue3'
								size={20}
							/>
						</div>
						<p className='hover:scale-125 transition ease-in-out delay-25 cursor-pointer text-white'>
							<BsArrowsAngleExpand
								className='hover:text-blue3'
								size='20'></BsArrowsAngleExpand>
						</p>
					</div>
					<p className='mt-2 px-2 text-darkGrey'>{description}</p>
					<button className=' text-blue3 hover:bg-blue3 hover:bg-opacity-40 rounded-lg p-2'>
						<Link href={link}>
							<a target='_blank'>Link to {name}</a>
						</Link>
					</button>
				</div>
			) : (
				<div className=' top-20 flex flex-col cursor-text '>
					<div className='flex flex-row justify-between'>
						<div className='flex flex-row items-center gap-2'>
							<h3 className='text-xl font-bold ml-2'> {name}</h3>
							<Link href={link}>
								<a></a>
							</Link>
							<BsGithub
								className='cursor-pointer hover:scale-125 ease-in-out transition delay-75 hover:text-blue3'
								size={20}
							/>
						</div>

						<p className='hover:scale-75 transition ease-in-out delay-25 cursor-pointer'>
							<BsArrowsAngleExpand
								className='hover:text-blue3'
								size='20'></BsArrowsAngleExpand>
						</p>
					</div>
					<p className='ml-2 mt-2'>Tech stack: {tech}</p>
					<p className='mt-2 ml-2 text-sm text-darkGrey'>{description}</p>
					<button className='w-max text-blue3 hover:bg-blue3 hover:bg-opacity-40 rounded-lg p-2'>
						<Link href={link}>
							<a target='_blank'>Link to {name}</a>
						</Link>
					</button>
					<div className='flex justify-center items-center cursor-pointer mt-12 '>
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
