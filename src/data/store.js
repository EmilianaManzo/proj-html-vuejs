	
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