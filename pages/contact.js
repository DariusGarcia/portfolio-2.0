import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
const Contact = () => {
	return (
		<div className='bg-black2  '>
			<Navbar />
			<div className='md:mb-0 mb-24 flex justify-center '>
				<div className='relative bg-black2 md:w-5/6'>
					<div className='absolute inset-0 '>
						<div className='absolute inset-y-0 left-0 w-1/2 ' />
					</div>
					<div className='relative mx-auto max-w-7xl lg:grid lg:grid-cols-5'>
						<div className='bg-black2 bg-opacity-95  py-16 px-4  lg:col-span-2 lg:py-24 '>
							<div className='mx-auto max-w-lg'>
								<h2 className='text-2xl font-bold tracking-tight  sm:text-3xl'>
									Get in touch
								</h2>
								<p className='mt-3 text-lg leading-6 text-gray-500'>
									Send me a message and I will get back to you shortly!
								</p>
								<dl className='mt-8 text-base text-gray-500'>
									<div>
										<dt className='sr-only'>Postal address</dt>
										<dd>
											<p>Greater Los Angeles Metropolitan Area</p>
										</dd>
									</div>
									<div className='mt-6'>
										<dt className='sr-only'>Phone number</dt>
										<dd className='flex'>
											<BsTelephoneFill
												className='h-6 w-6 flex-shrink-0 text-gray-400'
												aria-hidden='true'
											/>
											<span className='ml-3'>+1 (562) 392-2931</span>
										</dd>
									</div>
									<div className='mt-3'>
										<dt className='sr-only'>Email</dt>
										<dd className='flex'>
											<MdOutlineMarkEmailRead
												className='h-6 w-6 flex-shrink-0 text-gray-400'
												aria-hidden='true'
											/>
											<span className='ml-3'>dariusgarcia@hotmail.com</span>
										</dd>
									</div>
								</dl>
							</div>
						</div>
						<div className='bg-orange-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12'>
							<div className='mx-auto max-w-lg lg:max-w-none'>
								<form
									action='#'
									method='POST'
									className='grid grid-cols-1 gap-y-6'>
									<div>
										<label htmlFor='full-name' className='sr-only'>
											Full name
										</label>
										<input
											type='text'
											name='full-name'
											id='full-name'
											autoComplete='name'
											className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
											placeholder='Full name'
										/>
									</div>
									<div>
										<label htmlFor='email' className='sr-only'>
											Email
										</label>
										<input
											id='email'
											name='email'
											type='email'
											autoComplete='email'
											className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
											placeholder='Email'
										/>
									</div>

									<div>
										<label htmlFor='message' className='sr-only'>
											Message
										</label>
										<textarea
											id='message'
											name='message'
											rows={4}
											className='block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
											placeholder='Message'
											defaultValue={''}
										/>
									</div>
									<div>
										<button
											type='submit'
											className='inline-flex justify-center rounded-md border-transparent bg-blue3 bg-opacity-20 border-2 border-blue3 text-blue3 transition ease-in-out delay-100 hover:scale-95 hover:bg-opacity-100 hover:text-white py-3 px-16 text-base font-medium  shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Contact
