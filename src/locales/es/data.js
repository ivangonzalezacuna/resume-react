export const translation_ES = {
  navBar: [
    {
      title: 'Trabajo',
      link: 'work'
    },
    {
      title: 'Educación',
      link: 'education'
    },
    {
      title: 'Skills',
      link: 'skills'
    },
    {
      title: 'Sobre Mi',
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
    title: 'Ponte en contacto conmigo',
    nameLabel: 'Nombre',
    namePlaceholder: 'Indica tu nombre',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'Indica tu correo',
    subjectLabel: 'Asunto',
    subjectPlaceholder: 'Indica el asunto',
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Escribe el mensaje',
    submit: 'Enviar',
    successMsg: 'Tu petición ha sido recibida',
    successImg: require('../../images/img-3.svg').default,
  },
  header: {
    name: 'Ivan Gonzalez',
    description: 'Desarrollador Software',
    contactButton: 'Contactar'
  },
  about: {
    img: require('../../images/profilepic.png').default,
    name1: 'Soy',
    name2: 'Ivan Gonzalez',
    description: 'Buen trabajador en equipo. Eager to have new work experiences where I can have the opportunity to learn more in the technological field, grow personally and professionally, and thus be able to contribute positively to the achievement of the objectives',
    resumeLink: 'http://www.google.es',
    resumeBtn: 'Descargar CV',
    contactTitle: 'Detalles de contacto',
    phoneTitle: 'Teléfono',
    phoneItem: '+34 654 46 26 02',
    mailTitle: 'Correo',
    mailItem: 'ivangonzalezacuna@gmail.com',
    addressTitle: 'Dirección',
    addressItem: 'Casal, Gulans nº 52',
    contactBtn: 'Contactar'
  },
  work: {
    id: 'work',
    lightBg: false,
    lightText: true,
    sectionTitle: 'Trabajo',
    imgStart: false,
    darkText: false,
    icon: true,
    data: [
      {
        company: 'Universidad de Vigo',
        jobTitle: 'I + D',
        dates: 'Febrero 2020 - Actualidad',
        description: 'Investigación y desarrollo usando Golang y Python entre otras cosas. Además de Qt y así.',
        fadeLeft: true,
        fadeRight: false
      },
      {
        company: 'Muutech Monitoring Solutions SL',
        jobTitle: 'Prácticas de empresa',
        dates: 'Junio 2019 - Julio 2019',
        description: 'Investigación y desarrollo de un sistema de detección de anomalías industrial usando inteligencia artificial.',
        fadeLeft: false,
        fadeRight: true
      }
    ]
  },
  education: {
    id: 'education',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    sectionTitle: 'Educación',
    imgStart: false,
    darkText: true,
    icon: false,
    data: [
      {
        company: 'Universidad de Vigo',
        jobTitle: 'Grado de Teleco',
        dates: 'Agosto 2016 - Junio 2020',
        description: 'Especialidad de telemática, where I could learn not only a lot about programming, but also several communication protocols over Internet and other networks.',
        fadeLeft: true,
        fadeRight: false
      },
      {
        company: 'Oulu University of Applied Sciences',
        jobTitle: 'Desarrollo de Software',
        dates: 'Agosto 2019 - Diciembre 2019',
        description: "Intercambio Erasmus+ during my last year's semester.Where I learned a lot about the MEAN Stack (MongoDB, Express, Angular8, Node.js), Android & iOS App Development and also improved my skills in Java, CSS or Javascript.",
        fadeLeft: false,
        fadeRight: true
      }
    ]
  },
  skills: {
    id: 'skills',
    sectionTitle: 'Skills',
    data: [
      {
        technology: 'Android',
        icon: require('../../images/android.svg').default,
        description: 'Android desciption Android desciption Android desciption',
        level: '50%',
      },
      {
        technology: 'Golang',
        icon: require('../../images/golang.svg').default,
        description: 'Golang description Golang description Golang description',
        level: '80%',
      },
      {
        technology: 'Java',
        icon: require('../../images/java.svg').default,
        description: 'Java description Java description Java description Java description',
        level: '86%',
      },
      {
        technology: 'HTML5',
        icon: require('../../images/html5.svg').default,
        description: 'Golang description Golang description Golang description',
        level: '25%',
      },
      {
        technology: 'Javascript',
        icon: require('../../images/javascript.svg').default,
        description: 'Javascript description Golang description Golang description',
        level: '22%',
      },
      {
        technology: 'Swift',
        icon: require('../../images/swift.svg').default,
        description: 'Swift description Golang description Golang description',
        level: '76%',
      },
      {
        technology: 'Windows',
        icon: require('../../images/windows.svg').default,
        description: 'Windows description Golang description Golang description',
        level: '55%',
      },
      {
        technology: 'Linux',
        icon: require('../../images/linux.svg').default,
        description: 'Linux description Golang description Golang description',
        level: '90%',
      }
    ]
  },
  notFound: {
    button: "Página Principal",
    message: "Página No Encontrada"
  }
}