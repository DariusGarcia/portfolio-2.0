import { useState } from 'react'
import Image from 'next/image'
import { GrExpand } from 'react-icons/gr'
import Link from 'next/link'
import { BsArrowsAngleExpand, BsGithub } from 'react-icons/bs'

export default function SingleProject({
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
			className='relative mb-4 md:mb-0 min-h-96 h-max p-4 border-[1px] hover:border-blue3 text-white border-darkGrey rounded-md transition ease-in-out delay-110 shadow-xl'>
			{!open ? (
				<div className=''>
					<div className='px-2 flex flex-row justify-between cursor-pointer'>
						<h3 className='w-max text-xl font-bold'>{name}</h3>
						<p className='hover:scale-125 transition ease-in-out delay-25 cursor-pointer text-white'>
							<BsArrowsAngleExpand
								className='hover:text-blue3'
								size='20'></BsArrowsAngleExpand>
						</p>
					</div>
					<p className='mt-2 px-2 text-darkGrey w-full'>{description}</p>
					<div className='flex flex-row items-center gap-2 hover:bg-blue3 hover:bg-opacity-40 rounded-lg p-2 w-max'>
						<button className=' text-blue3'>
							<Link href={link}>
								<a target='_blank'>source code</a>
							</Link>
						</button>
						<BsGithub
							className='hover:scale-125 ease-in-out transition delay-75 hover:text-blue3'
							size={20}
						/>
					</div>
				</div>
			) : (
				<div className='flex flex-col cursor-text '>
					<div className='flex flex-row px-2 justify-between'>
						<h3 className='font-bold text-xl'> {name}</h3>
						<p className=' hover:scale-75 transition ease-in-out delay-25 cursor-pointer'>
							<BsArrowsAngleExpand
								className=' hover:text-blue3'
								size='20'></BsArrowsAngleExpand>
						</p>
					</div>
					<p className='mt-2 mx-2'>Tech stack: {tech}</p>
					<p className='mx-2 text-darkGrey mt-2 '>{description}</p>
					<div className='flex mt-2 flex-row items-center gap-2 hover:bg-blue3 hover:bg-opacity-40 rounded-lg p-2 w-max'>
						<button className=' text-blue3 '>
							<Link href={link}>
								<a target='_blank'>source code</a>
							</Link>
						</button>
						<BsGithub
							className='cursor-pointer hover:scale-125 ease-in-out transition delay-75 hover:text-blue3'
							size={20}
						/>
					</div>
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
