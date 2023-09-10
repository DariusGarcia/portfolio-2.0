// import mp4/gif media
import fixit from './public/videos/fixitcredit.mp4'
// import bullbear from './public/videos/bullbear.mp4'
import kvl from './public/videos/kvl.mp4'
import tweeter from './public/videos/tweeter.gif'
import instapic from './public/videos/instapic.gif'
import flixter from './public/videos/flixter.gif'
// import image assets
import bookhub from './public/images/BookHub.png'
import calendar from './public/images/calendar-scheduler.png'
import contactPWA from './public/images/contact-PWA.png'
import JATE from './public/images/JATE.png'
import bullbear from './public/images/laptop.png'
import foodAndNews from './public/images/food-and-news.png'
import weatherDashboard from './public/images/weather-dashboard.png'
import blogCMS from './public/images/BlogCMS.png'
import ecommerceAPI from './public/images/ecommerce-API.png'
import imHungry from './public/images/im-hungry.png'
import firstProperty from './public/images/first-property.png'
import bankroll from './public/images/bankroll.png'
import nutrivalue from './public/images/nutrivalue.png'

const projects = {
  webApps: [
    // {
    //   name: 'Bankroll',
    //   description:
    //     'Full-stack React web app with a Node.js backend server that lets users keep track of their gambling wins and losses. Uses mySQL as the database.',
    //   tech: 'React, TypeScript, Tailwind CSS, node.js, express.js, mySQL, SQL, REST APIs, user Auth, JWT, Chart.js',
    //   image: bankroll,
    //   link: 'https://bankroll.vercel.app/',
    //   github: 'https://github.com/DariusGarcia/gambling-tracker',
    // },
    {
      name: 'BullBear Market',
      description:
        'Full-stack MERN web app that lets users add stocks from the S&P500 index to their own personal watch list.',
      tech: 'React, TypeScript, Tailwind CSS, node.js, express.js, MongoDB, Context API, REST APIs, user Auth, JWT',
      image: bullbear,
      link: 'https://bullbearmarket.net/',
      github: 'https://github.com/dariusgarcia/bullbear-TYPESCRIPT',
    },
    {
      name: "I'm Hungry",
      description:
        "I'm Hungry is a fullstack web app built with Next.js using MySQL as the database. It utilizes OpenAI's API to allow users to search for recipes based on different ingredients they have on hand.",
      tech: 'React, Next.js, Tailwind CSS, MySQL, Sequelize ORM, REST APIs, user Auth, JWT',
      image: imHungry,
      link: 'https://imhungry.herokuapp.com/',
      github: 'https://github.com/monysary/i-m-hungry-recipe-app',
    },
    // {
    //   name: 'First Property',
    //   description:
    //     'Full-stack Next.js app with a Supabase DB backend. First Property is a startup idea where clients can see pending permits in the surrounding area for home building projects. ',
    //   tech: 'React, Next.js, JavaScript, Google Maps API, Supabase DB, Tailwind CSS, user Auth, JWT',
    //   image: firstProperty,
    //   link: 'https://first-property.vercel.app/',
    //   github: 'https://github.com/dariusgarcia/first-property',
    // },
    // {
    //   name: 'NutriValue',
    //   description:
    //     'Full-stack Next.js app that lets users keep track of their daily calories, search recipes, and add their own recipes. Express.js + mySQL backend.',
    //   tech: 'React, TypeScript, Next,js, Tailwind CSS, node.js, express.js, mySQL, REST APIs, user Auth, JWT',
    //   image: nutrivalue,
    //   link: 'https://nutrivalue.vercel.app/',
    //   github: 'https://github.com/DariusGarcia/nutrivalue',
    // },
    {
      name: 'J.A.T.E Text Editor',
      description:
        "J.A.T.E. is a progressive web app that lets users enters text into a text editor where the data persists even when offline. Utilizes service workers and webpack plugins to be able to store the data to the browser's indexDb and also be installable.",
      tech: 'React, Tailwind CSS, node.js, express.js, MongoDB, Context API, REST APIs, user Auth, JWT',
      image: JATE,
      link: 'https://stark-basin-30756.herokuapp.com/',
      github: 'https://github.com/DariusGarcia/text-editor',
    },
    {
      name: 'Food & News',
      description:
        'Food & News is a web app that allows users to search for a wide range of recipes and news articles.',
      tech: 'Next.js, React, Tailwind CSS',
      image: foodAndNews,
      link: 'https://food-and-news.vercel.app/',
      github: 'https://github.com/DariusGarcia/food-and-news',
    },
    {
      name: 'BookHub',
      description:
        'BookHub is Node.js app that allows users to view books stored in our library database. They can add to their reading list or to just browse a variety of different books.',
      tech: 'Next.js, React, Tailwind CSS',
      image: bookhub,
      link: 'https://book-hub.herokuapp.com/',
      github: 'https://github.com/DariusGarcia/bookhub',
    },
    {
      name: 'Social Network API',
      description: 'Express.js/ MongoDB backend server for a social network.',
      tech: 'Node.js, MongoDB, Rest API, Express.js',
      image: fixit,
      link: 'https://book-hub.herokuapp.com/',
      github: 'https://github.com/DariusGarcia/bookhub',
    },
    // {
    //   name: 'Contact Card PWA',
    //   description:
    //     'PWA using Webpack and Babel that allows users to save contact info of people.',
    //   tech: 'Node.js, MongoDB, Rest API, Express.js, Progressive Web App, service workers, webpack',
    //   image: contactPWA,
    //   link: 'https://limitless-wave-70136.herokuapp.com/',
    //   github: 'https://github.com/DariusGarcia/contact-card-PWA',
    // },
    {
      name: 'Ecommerce Express Server',
      description:
        'This express app acts as a server an ecommerce application that allows users to view all products, categories, and product tags. Utilizes mySQL.',
      tech: 'Next.js, React, Tailwind CSS',
      image: ecommerceAPI,
      link: 'https://github.com/DariusGarcia/ecommerce-server',
      github: 'https://github.com/DariusGarcia/ecommerce-server',
    },
    // {
    //   name: 'Blog Content Management System (CMS)',
    //   description:
    //     'CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts as well.',
    //   tech: 'Next.js, React, Tailwind CSS',
    //   image: blogCMS,
    //   link: 'https://github.com/DariusGarcia/blog-CMS',
    //   github: 'https://github.com/DariusGarcia/blog-CMS',
    // },
    {
      name: 'Calendar Scheduler',
      description: 'Web app where you can log events to a work calendar.',
      tech: 'Vanilla JavaScript, Local storage, HTML5, CSS3',
      image: calendar,
      link: 'https://dariusgarcia.github.io/calendar-scheduler/',
      github: 'https://github.com/DariusGarcia/calendar-scheduler',
    },
    {
      name: 'Weather Dashboard',
      description:
        "Freelance Next.js project for a client that lets customers send payments utilizing Stripe's payment API.",
      tech: 'Next.js, React, Tailwind CSS',
      image: weatherDashboard,
      link: 'https://dariusgarcia.github.io/weather-dashboard/',
      github: 'https://github.com/DariusGarcia/weather-dashboard',
    },
    {
      name: 'Fix It Credit Inc.',
      description:
        "Freelance Next.js project for a client that lets customers send payments utilizing Stripe's payment API.",
      tech: 'Next.js, React, Tailwind CSS',
      image: fixit,
      link: 'https://fixitcreditinc.com/',
      github: 'https://github.com/dariusgarcia/fixitcreditinc',
    },
    {
      name: 'KVL Communications',
      description:
        "Freelance marketing website for a small business that's built with Next.js.",
      tech: 'Next.js, React, Tailwind CSS',
      image: kvl,
      link: 'https://kvlcommunications.com/',
      github: 'https://github.com/dariusgarcia/',
    },
  ],

  /**
   * mobile apps
   *
   */
  mobileApps: [
    {
      name: 'Tweeter',
      description:
        'Full-stack Android mobile app that lets users login to their Twitter account and compose new Tweets.',
      tech: 'Kotlin, REST APIs, user Auth',
      image: tweeter,
      link: 'https://github.com/dariusgarcia/tweeter',
    },
    {
      name: 'Instapic',
      description:
        'Full-stack Android mobile photo-sharing app similar to Instagram.',
      tech: 'Kotlin, REST APIs, user Auth',
      image: instapic,
      link: 'https://github.com/dariusgarcia/instapic',
    },
    {
      name: 'Flixter',
      description:
        'Android mobile app that allows users to browse movies from the The Movie Database API.',
      tech: 'Kotlin, REST APIs, user Auth',
      image: flixter,
      link: 'https://github.com/dariusgarcia/flixter',
    },
  ],
}

export default projects
