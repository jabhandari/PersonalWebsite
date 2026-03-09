import projects from "@/data/projects.json"
import ProjectCards from "./ProjectsCards"

export default function Projects(){
    return(
        <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">Portfolio</p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    Projects
                </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">

                {projects.map((project,index)=>(
                    <ProjectCards key={index} project={project}/>
                ))}

            </div>
        </section>
    )
}
