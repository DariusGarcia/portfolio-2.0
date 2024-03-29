import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ContactBtn from '../components/contactBtn'
import Head from 'next/head'

export default function Experience() {
  return (
    <>
      <Head>
        <title>Darius Garcia Jr - Experience</title>
      </Head>
      <ContactBtn />
      <Navbar />
      <div className='bg-black2 py-12 px-2 md:px-0 sm:py-16'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl'>
            <h2 className='text-3xl font-bold tracking-tight text-blue3 sm:text-4xl'>
              Experience
            </h2>
            <p className='mt-2 text-lg leading-8 text-gray-600'>
              My current and past work experience
            </p>
            <div className='mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-12 sm:pt-12'>
              {jobs.map((job) => (
                <article
                  key={job.id}
                  className='flex max-w-xl flex-col items-start justify-between'>
                  <div className='flex items-center gap-x-4 text-md'>
                    <p
                      href={job.category.href}
                      className='relative z-10 rounded-full bg-gray-50 py-1.5 font-medium text-blue3 hover:bg-gray-100'>
                      {job.category.title}
                    </p>
                    <time dateTime={job.datetime} className='text-sm'>
                      {job.date}
                    </time>
                  </div>
                  <div className='group relative'>
                    <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                      <p>
                        <span className='absolute inset-0' />
                        {job.title}
                      </p>
                    </h3>
                    <ul className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
                      {job.description.map((content) => (
                        <>
                          <li className='my-2 list-disc'> {content}</li>
                        </>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

const jobs = [
  {
    id: 1,
    title: 'Coding Instructor',
    href: '#',
    description: [
      ' Curated a web developing lesson plan that teaches kids the fundamentals of JS, CSS, and HTML',
      'Instruct kids (ages 5-14) to code through their love of video games and technology utilizing technologies such as JavaScript, C#, Unity, and Lua',
      'Lead coding camps at Sherman Oaks Elementary Schools to help students learn a wide variety of curriculum',
      'Learned to be flexible in adapting to new programs and handle new situations quickly that may arise',
    ],
    date: 'Mar 2023 - Present',
    category: { title: 'Code Ninjas' },
  },
  {
    id: 2,
    title: 'Freelance Web Developer',
    href: '#',
    description: [
      'Collaborated with clients to define project requirements, objectives, and scope, ensuring a clear understanding of their vision and goals.',
      'Designed, developed, tested, and deployed responsive and user-friendly websites using JavaScript, HTML, CSS and other front-end and back-end libraries.',
      ' Leveraged strong problem-solving skills to address technical challenges and find innovating solutions that aligned with clients’ goals.',
    ],
    date: 'Mar 2022 - Mar 2023',
    category: { title: 'Freelance' },
  },
  {
    id: 3,
    title: 'Outbound Associate',
    href: '#',
    description: [
      'Monitored and processed customer orders that had to be delivered in less than two hours, and less than one hour for ugent orders',
      'Communicated effectively with floor managers to make sure customer orders were filled in a concise and timely manner',
      'Maintained highly organized and efficient if a fast-paced environment; able to prioritize to accomplish objectives in a timely manner',
      'Conducted inventory counts, quality checked goods, and replenished items to specific locations',
      'Received weekly satisfactory reports of being in the 90% percentile of most goods processed and delivered',
    ],
    date: 'April 2020 - May 2021',
    category: { title: 'Amazon Fresh' },
  },
]
