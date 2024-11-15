import React from "react";
import ProjectCard from "./components/ProjectCard";
import Link from "next/link";
// import { projects } from '@/utils/data'

interface IProjectsProps {
  children?: React.ReactNode;
}

const Projects: React.FC<IProjectsProps> = (props) => {
  return (
    <section id="projects" className="container m-auto px-4 xl:px-0">
      {/* PROJECTS HEADER */}
      <div className="h-[25vh] border-b-2 border-slate-300 flex flex-col items-center justify-center mb-10 m-auto">
        <p className="text-slate-500 text-base mb-6">Nuestro Portafolio</p>

        <h1 className="text-4xl lg:text-5xl font-bold">Proyectos</h1>
      </div>

      {/* PROJECTS CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* {projects.slice(1, 7).map((p) => (
          <ProjectCard project={p} />
        ))} */}
      </div>

      <div className="w-full text-center my-12">
        <Link
          href={"/projects"}
          className="btn-outline block w-fit m-auto !border-blue-950 text-blue-950"
        >
          Conoce Más
        </Link>
      </div>
    </section>
  );
};

export default Projects;
