import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Balu Weeder Services',
        description: "Took the business online by building a eCommerce site that showcases the 30 plus products, description and availability of the goods. Implemented google login authentication and deployed backend withhelp of render enabling flow of dynamic data based on routes.",
        tools: ['React Js', 'MongoDB', 'Render', 'Node Js', 'Netlify', 'Node Mailer', 'Google-O-Auth', 'React-Router', 'Firebase'],
        role: 'Fullstack Developer',
        code: '',
        link:"https://balu-weeder-services.netlify.app/",
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Employee Track App',
        description: 'Designed and developed a robust Employee Management System facilitating efficient organization and retrieval of employee details. Developed RESTful APIs for seamless communication between client and server, enabling easy integration with frontend applications.',
        tools: ['React Js', "Java", "Bootstrap" ,  "Spring Boot" ,"Hibernate", "JPA","axios" , "MySQL", "Docker", "Netlify", "Render"],
        role: 'Full Stack Developer',
        code: '',
        link:"https://spring-employee-management.netlify.app/",
        demo: '',
        image: travel,
    },
    // {
    //     id: 3,
    //     name: 'AI Powered Real Estate',
    //     description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
    //     tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
    //     code: '',
    //     role: 'Full Stack Developer',
    //     demo: '',
    //     image: realEstate,
    // },
    // {
    //     id: 4,
    //     name: 'Newsroom Management',
    //     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
    //     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
    //     code: '',
    //     demo: '',
    //     image: ayla,
    //     role: 'Full Stack Developer',
    // }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },