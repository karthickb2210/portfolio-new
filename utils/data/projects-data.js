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
    {
        id: 3,
        name: 'Project Management App',
        description: 'Created a site that manages the project that are assigned to a team and the projects will aslo contains many micro-tasks that can be checked and marked within the inside of the project. It is created using basic frontend react and hooks for state management',
        tools: ['React','Node Js', 'Express', 'MongoDb', 'Tailwind Css', 'Javscript','Mongoose'],
        code: '',
        role: 'Full Stack Developer',
        link:"https://react-projectmanagement-app.netlify.app/",
        demo: '',
        image: realEstate,
    }
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
