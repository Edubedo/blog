export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  img: string;
}

export const projects: Project[] = [
  {
    title: "Oxyfender",
    year: 2024,
    description: "Educational game developed in Python using Pygame. This project is designed to raise awareness about the importance of climate restoration and oxygen preservation on our planet.",
    url: "https://github.com/Edubedo/OxyFender",
    img: 'project-oxyfender.png'
  },
  {
    title: "Logística Woodward",
    year: 2024,
    description: "I gained experience in customs software development, where I worked on various framework modules and developed innovative solutions to complex challenges. I utilized technologies such as React, Node.js, Tailwind, PostgreSQL, Git, GitHub, Trello, and other tools to deliver efficient and scalable solutions",
    url: "#",
    img: 'project-logistica-woodward.png'
  },
  {
    title: "Compudc",
    year: 2024,
    description: "Siswebcc es un avanzado sistema de manejo de equipos de cómputo diseñado para facilitar la gestión eficiente y organizada de recursos tecnológicos en diversas instituciones y empresas. Desarrollado con tecnologías web como HTML, CSS, JavaScript y PHP, Siswebcc se adapta tanto a usuarios comunes como a administradores, ofreciendo interfaces personalizadas según el rol.",
    url: "https://github.com/Edubedo/compudc-project",
    img: 'project-compudc.png'
  },
  {
    title: "Misdek",
    year: 2023,
    description: "Misdek es un robusto sistema de gestión de notas y tareas pendientes desarrollado con C#. Esta aplicación ofrece una solución integral para organizar y administrar eficientemente las responsabilidades diarias, tanto personales como profesionales.",
    url: "https://github.com/Edubedo/misdek",
    img: 'project-misdek.png'
  },{
    title: "HMBModel",
    year: 2024,
    description: "HMBModel es una aplicación mobile desarrollada con java enfocada a registrar gimnasios y sus clientes. Esta aplicación permite a los gimnasios gestionar de manera eficiente su base de datos de clientes, facilitando el seguimiento de sus actividades y progreso.",
    url: "https://github.com/Edubedo/hmbmodel",
    img: 'eab.jfif'
  },
];
