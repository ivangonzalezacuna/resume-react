export const translation_EN = {
  navBar: [
    {
      title: 'Work',
      link: 'work'
    },
    {
      title: 'Education',
      link: 'education'
    },
    {
      title: 'Skills',
      link: 'skills'
    },
    {
      title: 'About',
      link: 'about'
    }
  ],
  social: {
    linkedinLabel: 'Linkedin',
    linkedinLink: "https://www.linkedin.com/in/ivangonzalezacuna/",
    githubLabel: 'Github',
    githubLink: "https://github.com/ivangonzalezacuna",
    skypeLabel: 'Skype',
    skypeLink: "https://github.com/ivangonzalezacuna",
    instagramLabel: 'Instagram',
    instagramLink: "https://www.instagram.com/ivanglez98/",
    facebookLabel: 'Facebook',
    facebookLink: "https://www.facebook.com/ivan.gonzalezacuna/",
  },
  contactForm: {
    title: 'Get in touch with me',
    nameLabel: 'Name',
    namePlaceholder: 'Enter your name',
    emailLabel: 'Email',
    emailPlaceholder: 'Enter your email',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'Enter the subject',
    messageLabel: 'Message',
    messagePlaceholder: 'Enter your message',
    submit: 'Submit',
    successMsg: 'Your request has been received',
    //successImg: require('../../images/success.svg').default,
  },
  header: {
    name: 'Ivan Gonzalez',
    description: 'Software Developer',
    contactButton: 'Contact Me'
  },
  about: {
    //img: require('../../images/profilepic.png').default,
    name1: 'I am',
    name2: 'Ivan Gonzalez',
    description: 'Good team worker. Eager to have new work experiences where I can have the opportunity to learn more in the technological field, grow personally and professionally, and thus be able to contribute positively to the achievement of the objectives',
    resumeLink: 'https://drive.google.com/file/d/1jZ011bvJoe-n7Z39u89znTIA7NAWHph8/view?usp=sharing',
    resumeBtn: 'Download CV',
    contactTitle: 'Contact Details',
    phoneTitle: 'Phone Number',
    phoneItem: '+34 654 46 26 02',
    mailTitle: 'Email',
    mailItem: 'ivangonzalezacuna@gmail.com',
    addressTitle: 'Address',
    addressItem: 'Casal, Gulans nº 52',
    contactBtn: 'Contact Me'
  },
  work: {
    id: 'work',
    lightBg: false,
    lightText: true,
    sectionTitle: 'Work Experience',
    imgStart: false,
    darkText: false,
    icon: true,
    data: [
      {
        company: 'Universidad de Vigo',
        jobTitle: 'Research and Development',
        dates: 'February 2020 - Present',
        description: 'Research of different technologies to demonstrate if they are implementable in a final product.'
      },
      {
        company: 'Muutech Monitoring Solutions SL',
        jobTitle: 'Internship',
        dates: 'June 2019 - July 2019',
        description: 'Research and development of an anomaly detector using an Artificial Intelligence and Machine Learning systems.'
      }
    ]
  },
  education: {
    id: 'education',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    sectionTitle: 'Education',
    imgStart: false,
    darkText: true,
    icon: false,
    data: [
      {
        company: 'Universidad de Vigo',
        jobTitle: 'Degree in Telecommunications Technology Engineering',
        dates: 'August 2016 - June 2020',
        description: 'Specialization in Telematics, where I could learn not only a lot about programming, but also several communication protocols over Internet and other networks.'
      },
      {
        company: 'Oulu University of Applied Sciences',
        jobTitle: 'Software Development',
        dates: 'August 2019 - December 2019',
        description: "Erasmus+ exchange during my last year's semester.Where I learned a lot about the MEAN Stack (MongoDB, Express, Angular8, Node.js), Android & iOS App Development and also improved my skills in Java, CSS or Javascript."
      }
    ]
  },
  skills: {
    id: 'skills',
    sectionTitle: 'Skills',
    data: [
      {
        technology: 'Android',
        //icon: require('../../images/skills/android.svg').default,
        description: 'Android desciption Android desciption Android desciption',
        level: '50%',
      },
      {
        technology: 'Golang',
        //icon: require('../../images/skills/golang.svg').default,
        description: 'Golang description Golang description Golang description',
        level: '80%',
      },
      {
        technology: 'Java',
        //icon: require('../../images/skills/java.svg').default,
        description: 'Java description Java description Java description Java description',
        level: '86%',
      },
      {
        technology: 'HTML5',
        //icon: require('../../images/skills/html5.svg').default,
        description: 'Golang description Golang description Golang description',
        level: '25%',
      },
      {
        technology: 'Javascript',
        //icon: require('../../images/skills/javascript.svg').default,
        description: 'Javascript description Golang description Golang description',
        level: '22%',
      },
      {
        technology: 'Swift',
        //icon: require('../../images/skills/swift.svg').default,
        description: 'Swift description Golang description Golang description',
        level: '76%',
      },
      {
        technology: 'Windows',
        //icon: require('../../images/skills/windows.svg').default,
        description: 'Windows description Golang description Golang description',
        level: '55%',
      },
      {
        technology: 'Linux',
        //icon: require('../../images/skills/linux.svg').default,
        description: 'Linux description Golang description Golang description',
        level: '90%',
      }
    ]
  },
  notFound: {
    button: "Home Page",
    message: "Page Not Found"
  }
}
