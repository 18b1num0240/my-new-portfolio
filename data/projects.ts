export type Project = {
    title: string;
    description: string;
    tags: string[];
    year?: string;
    live?: string;
    github?: string;
    points?: string[];
    category?: string;
    subCategory?: string;
};

// Real data based on your recent work
export const projects: Project[] = [
    {
        title: "Travelport.mn | Corporate Website Development",
        description: "Official corporate website developed to present company services, improve online presence, and deliver a clean, user-friendly experience.",
        tags: ["WordPress", "HTML", "CSS", "JavaScript", "Responsive Design", "Frontend"],
        year: "2025",
        live: "https://www.travelport.mn/",
        category: "Web Development",
        subCategory: "Corporate Website",
        points: [
            "Designed and developed the official Travelport.mn website using WordPress",
            "Customized themes and layouts to match company branding and business needs",
            "Implemented responsive UI to ensure compatibility across desktop and mobile devices",
            "Optimized site structure and performance for better usability and maintainability"
        ],
    },
    {
        title: "e-bolovsrol.mn | Education Platform Development",
        description: "Education platform developed to support online learning, user authentication, and scalable content delivery for students and educators.",
        tags: ["Golang", "Oracle", "REST API", "PostgreSQL", "Backend"],
        year: "2025",
        live: "https://e-bolovsrol.mn/home",
        category: "Web Development",
        subCategory: "Education Platform",
        points: [
            "Developed backend services for the e-bolovsrol.mn education platform using Golang",
            "Implemented secure authentication and authorization mechanisms",
            "Designed and exposed RESTful APIs to support frontend applications",
            "Contributed to system scalability, security, and backend maintainability"
        ],
    },
    {
        title: "BananaMall.mn | E-commerce Platform",
        description: "E-commerce platform developed and customized using Odoo to manage products, orders, and business workflows for an online marketplace.",
        tags: ["PHP", "Symfony", "Sylius", "PostgreSQL", "E-commerce", "Backend"],
        year: "2025",
        live: "https://www.bananamall.mn/",
        category: "Web Development",
        subCategory: "E-commerce Platform",
        points: [
            "Customized and extended Symfony modules to support e-commerce business requirements",
            "Developed backend logic for product, order, and customer management",
            "Integrated and managed PostgreSQL database for transactional data",
            "Configured and improved system workflows to support scalable online sales operations"
        ],
    },
    // {
    //     title: "Test Project 4",
    //     description: "Test Project 4 Description",
    //     tags: ["Frontend", "Next.js", "Tailwind"],
    //     year: "2025",
    //     live: "https://gan-erdene-portfolio.vercel.app",
    // },
    // {
    //     title: "Test Project 5",
    //     description: "Test Project 5 Description",
    //     tags: ["Cyber Security", "Tool", "Python"],
    //     year: "2024",
    // },
    // {
    //     title: "Test Project 6",
    //     description: "Test Project 6 Description",
    //     tags: ["Algorithm", "Java", "Optimization"],
    //     year: "2024",
    // },
];
