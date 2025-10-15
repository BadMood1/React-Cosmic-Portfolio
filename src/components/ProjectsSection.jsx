import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "ToDo Project",
        description: "Not a big project. One of my first solo projects",
        image: "/public/projects/todoProj.png",
        tags: ["JavaScript"],
        demoUrl: "https://badmood1.github.io/todoProject/",
        githubUrl: "https://github.com/BadMood1/todoProject",
    },
    {
        id: 1,
        title: "Sushi Project",
        description: "Similar to ToDo but more advanced.",
        image: "/public/projects/SushiProj.png",
        tags: ["JavaScript"],
        demoUrl: "https://badmood1.github.io/sushiPROJECT/",
        githubUrl: "https://github.com/BadMood1/sushiPROJECT",
    },
    {
        id: 1,
        title: "Weather Project",
        description: "First async project. I'm dealing with the API here",
        image: "/public/projects/weatherProj.png",
        tags: ["JavaScript", "HTML/CSS"],
        demoUrl: "https://badmood1.github.io/weatherPROJECT/",
        githubUrl: "https://github.com/BadMood1/weatherPROJECT",
    },
    {
        id: 1,
        title: "MovieSearch Project",
        description: "A really large JS project. Summing up all the knowledges here",
        image: "/public/projects/movieProj.png",
        tags: ["JavaScript", "HTML/CSS"],
        demoUrl: "https://badmood1.github.io/sidebarPRACTICING/",
        githubUrl: "https://github.com/BadMood1/sidebarPRACTICING",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center mb-12 max-w-2xl mx-auto">
                    These are my projects. I'd say my way to a Junior Frontend Developer. Here you can see
                    some beginner projects and advanced ones [ relatively advanced :) ]
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="bg-card group rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4 justify-center ">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full border bg-primary/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className=" text-xl font-semibold mb-2"> {project.title} </h3>
                                <p className="text-sm mb-4 ">{project.description}</p>
                                <div className="flex justify-between">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/BadMood1"
                        target="_blank"
                        className="cosmic-button flex w-fit items-center mx-auto gap-2 "
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};
