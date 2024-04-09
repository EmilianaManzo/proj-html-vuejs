	
import { reactive } from 'vue'

export const store = reactive({
  header_nav:[
    {
      title: 'Home',
      url: '#',
      navlink:[
        'Home',
        'Home',
        'Home',
      ]
    },
    {
      title: 'Pages',
      url: '#',
      navlink:[
        'Pages',
        'Pages',
        'Pages',
      ]
    },
    {
      title: 'Courses',
      url: '#',
      navlink:[
        'Courses',
        'Courses',
        'Courses',
      ]
    },
    {
      title: 'Features',
      url: '#',
      navlink:[
        'Features',
        'Features',
        'Features',
      ]
    },
    {
      title: 'Blog',
      url: '#',
      navlink:[
        'Blog',
        'Blog',
        'Blog',
      ]
    },
    {
      title: 'Shop',
      url: '#',
      navlink:[
        'Shop',
        'Shop',
        'Shop',
      ]
    }
  ],
  
  service:
    {
      statisticNumber:[
        {
          number:'1.926',
          type: 'finished sessions'
        },
        {
          number:'3.092+',
          type: 'enrolled leaners'
        },
        {
          number:'200',
          type: 'online instructors'
        },
        {
          number:'100%',
          type: 'satisfaction rate '
        },
      ],

      services:[
      [
        {
          img:'home-6-service-image-01.png',
          service: 'Graphic Design',
          description:'Have a passion for graphics and arts? Show your with confidence and self-assertiveness'
        },
        {
          img:'home-6-service-image-03.png',
          service: 'Idea Discussion',
          description:'Get teamed up with the specialists who work and teach coding for years at famous universities.'
        },
        
      ],
      [ 
        {
          img:'home-6-service-image-02.png',
          service: 'Business Administration',
          description:'Learners are encouraged to study the mechanism and structure of system administration.'
        },
        {
          img:'home-6-service-image-04.png',
          service: 'Web Development',
          description:'Learn to start building a webpage from scratch. You decide your own pace, course and speed.'
        }
      ],
    ],

   

      services_info:[
        'Select & customize courses to your preferences',
        'Change the tutor and make arrangements',
        'Participate in events to join others',
        'Get the desired certificate delivered at house',
      ]
    },

  courses:[
    {
      img: 'course-02-480x298.jpg',
      price: '$40.00',
      course: 'Learning to Write as a Professional Author',
      lesson: ' 20 Lessons',
      students: '50 Students'
    },
    {
      img: 'stock-full-hd-03-480x298.jpg',
      price: 'Free',
      course: 'Customer-centric Info-Tech Strategies',
      lesson: ' 2 Lessons',
      students: '769 Students'
    },
    {
      img: 'stock-full-hd-04-480x298.jpg',
      price: '$19.00',
      course: 'Open Programming Courses for Everyone: Python',
      lesson: ' 17 Lessons',
      students: '62 Students'
    },
    {
      img: 'stock-full-hd-06-480x298.jpg',
      price: '$26.00',
      course: 'Academic Listening and Note- taking',
      lesson: ' 14 Lessons',
      students: '67 Students'
    },
    {
      img: 'course-featured-image-01-480x298.jpg',
      price: '$39.00',
      course: 'Master jQuery in a Short Period of Time',
      lesson: ' 6 Lessons',
      students: '51 Students'
    },
    {
      img: 'stock-full-hd-05-480x298.jpg',
      price: '$59.00',
      course: 'Introduction to Javascript for Beginners',
      lesson: ' 14 Lessons',
      students: '76 Students'
    },
  ],


  footernav: 
    {
      address :[
        '382 NE 191st St # 87394 Miami, FL 33179-3899',
        '+1 (305)547-9909 (9am-5pm EST, Monday-Friday)',
        'support@maccoach.com'
      ],
      icons: [
        {
        name : 'fa-brands fa-square-facebook',
        href: '#'
        },
        {
        name: 'fa-brands fa-x-twitter',
        href: '#'
        },
        {
        name : 'fa-brands fa-instagram',
        href: '#'
        },
        {
        name : 'fa-brands fa-linkedin',
        href: '#'
        }
      ],
      explore :[
        'Start here',
        'Blog',
        'About us',
        'Success story',
        'Courses',
        'Contact us',
      ],

      information :[
      'Membership',
      'Purchase guide',
      'Privacy police',
      'Terms of services'
      ]
  },

})