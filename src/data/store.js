	
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