import React, { useState } from "react";

import Spline from "@splinetool/react-spline";

function Projects() {
  const [projectsToShow, setProjectsToShow] = useState(3);

  const projects = [
    {
      title: "MERN workout-app",
      description:
        "The MERN workout-app is a web application developed using the MERN stack, which includes MongoDB, Express.js, React, and Node.js The app allows users to create workout cards, to follow there progress. Everything is saved in MongoDB database.",
      tags: ["React", "JavaScript", "Express.js", "Node.js"],
      liveDemoLink: "https://example.com/demo1",
      githubRepoLink: "https://github.com/example/repo1",
      imageSrc: "/assets/project-img1.png",
    },
    {
      title: "MERN todo-app",
      description:
        "The MERN todo app is a web application built using the MERN stack, comprising MongoDB, Express.js, React, and Node.js. It serves as a task management tool that enables users to create, organize, and track their to-do lists. With this app, users can add tasks, set due dates, mark tasks as completed.",
      tags: ["React", "JavaScript", "Express.js", "Node.js"],
      liveDemoLink: "https://example.com/demo2",
      githubRepoLink: "https://github.com/example/repo2",
      imageSrc: "/assets/project-img1.png",
    },
    {
      title: "Food recipes app",
      description:
        "Introducing a delightful food recipes app crafted with ReactJS and powered by an API",
      tags: ["Vue.js", "JavaScript", "API"],
      liveDemoLink: "https://example.com/demo3",
      githubRepoLink: "https://github.com/example/repo3",
      imageSrc: "/assets/project-img1.png",
    },
    {
      title: "Project 4",
      description: "Description of Project 3",
      tags: ["React", "JavaScript", "Api"],
      liveDemoLink: "https://example.com/demo3",
      githubRepoLink: "https://github.com/example/repo3",
      imageSrc: "/assets/project-img1.png",
    },
    {
      title: "Project 5",
      description: "Description of Project 3",
      tags: ["Vue.js", "JavaScript"],
      liveDemoLink: "https://example.com/demo3",
      githubRepoLink: "https://github.com/example/repo3",
      imageSrc: "/assets/project-img1.png",
    },
    {
      title: "Project 5",
      description: "Description of Project 3",
      tags: ["Vue.js", "JavaScript"],
      liveDemoLink: "https://example.com/demo3",
      githubRepoLink: "https://github.com/example/repo3",
      imageSrc: "/assets/project-img1.png",
    },
    {
      title: "Project 5",
      description: "Description of Project 3",
      tags: ["Vue.js", "JavaScript"],
      liveDemoLink: "https://example.com/demo3",
      githubRepoLink: "https://github.com/example/repo3",
      imageSrc: "/assets/project-img1.png",
    },
    {
      title: "Project 5",
      description: "Description of Project 3",
      tags: ["Vue.js", "JavaScript"],
      liveDemoLink: "https://example.com/demo3",
      githubRepoLink: "https://github.com/example/repo3",
      imageSrc: "/assets/project-img1.png",
    },
    {
      title: "Project 5",
      description: "Description of Project 3",
      tags: ["Vue.js", "JavaScript"],
      liveDemoLink: "https://example.com/demo3",
      githubRepoLink: "https://github.com/example/repo3",
      imageSrc: "/assets/project-img1.png",
    },
    {
      title: "Project 5",
      description: "Description of Project 3",
      tags: ["Vue.js", "JavaScript"],
      liveDemoLink: "https://example.com/demo3",
      githubRepoLink: "https://github.com/example/repo3",
      imageSrc: "/assets/project-img1.png",
    },
  ];

  const loadMoreProjects = () => {
    setProjectsToShow(projectsToShow + 3);
  };

  // Function to generate random tag colors
  const getRandomTagColor = () => {
    const colors = [
      "bg-teal-300",
      "bg-blue-300",
      "bg-red-300",
      "bg-purple-300",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Function to get a color based on the tag name
  const getTagColor = (tagName) => {
    const tagColors = {
      React: "bg-teal-300",
      JavaScript: "bg-blue-300",
      "Express.js": "bg-red-300",
      "Node.js": "bg-purple-300",
      // Add more tag-color mappings as needed
    };
    return tagColors[tagName] || getRandomTagColor();
  };

  return (
    <section className="projects" id="projects">
      <div className="bg-black py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-3 text-center mb-6">
            <h1 className="text-center text-4xl md:text-6xl font-extrabold text-teal-400 shadow-2xl leading-tight p-8 md:p-12">
              Projects
            </h1>
          </div>
          {projects.slice(0, projectsToShow).map((project, index) => (
            <div
              className="bg-black rounded-lg overflow-hidden shadow-md border border-gray-600 transform hover:scale-105 transition duration-300"
              key={index}
            >
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="spline-icon">
                <a
                  href={project.githubRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <Spline scene="https://prod.spline.design/1U7lkFOXA6tBGEqT/scene.splinecode" /> */}
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-white bg-gradient-to-r from-teal-400 to-teal-600 py-2 px-4 rounded">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-black py-1 px-2 rounded-full text-sm font-semibold mr-2 mb-2 ${getTagColor(
                        tag
                      )}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {projectsToShow < projects.length && (
          <div className="flex justify-center my-8">
            <div className="w-12 h-12">
              <Spline
                scene="https://prod.spline.design/4KIwxMyoWkStvWcR/scene.splinecode"
                onClick={loadMoreProjects}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;