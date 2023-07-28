import { Project } from "../interfaces/Project";

export const projects: Project[] = [
    {
        id: 1,
        name: 'Oscar Benito',
        description: 'Es mi propia web donde albergo toda la experiencia en el mundo laboral del desarrollo de aplicaciones.<br/> Es una web creada en <strong>React 18 con Vite y Redux Toolkit</strong>.<br/> Utilizo <strong>Firebase</strong> como almacenamiento de datos para servir<br/> El diseño corre a mi cargo al 100%',
        technologies: ['React', 'Vite', 'Redux Toolkit', 'HTML/CSS', 'Typescript', 'Firebase'],
        img: 'https://uizard.io/static/productivity_app_cover-7d1c524200bba1b647248be1a0ade601.png',
        gitUrl: ''
    },
    {
        id: 2,
        name: 'Argos',
        description: 'Aplicación para la monitorización de la plataforma de datos de <strong>Datio</strong> para <strong>BBVA.<br/></strong> Está desarrollada en <strong>Angular 14</strong>.<br/>El diseño corre a mi cargo al 100%',
        technologies: ['Angular', 'RXJS', 'HTML/CSS', 'Typescript'],
        img: 'https://themeforest.img.customer.envatousercontent.com/files/423554644/theme-preview/03.png?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=6c66aca13ca7eda0fd2dfacad82432d8',
        gitUrl: ''
    },
    {
        id: 3,
        name: 'OPS-UI',
        description: 'Aplicación destinada al equipo de <strong>Operaciones</strong> para que puedan desempeñar su labor de manera más friendly y agrupada.<br/>Está desarrollada en <strong>Angular 15</strong>.<br/>El diseño corre a mi cargo al 100%',
        technologies: ['Angular', 'RXJS', 'HTML/CSS', 'Typescript'],
        img: 'https://static.vecteezy.com/system/resources/previews/008/295/041/original/dating-chat-ui-design-template-suitable-designing-application-for-android-and-ios-clean-style-app-mobile-free-vector.jpg',
        gitUrl: ''
    },
    {
        id: 4,
        name: 'Analítica Sandbox',
        description: 'Plataforma de Datio para la creación de Sandboxes y modelos de datos.',
        technologies: ['React', 'ExtJS', 'Redux', 'Sagas', 'HTML/CSS', 'Javascript'],
        img: 'https://img.freepik.com/free-vector/realistic-glassmorphism-mobile-app-template_23-2149443264.jpg',
        gitUrl: ''
    }
]