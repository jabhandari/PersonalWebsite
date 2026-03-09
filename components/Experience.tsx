import experienceData from "@/data/experience.json"
import ExperienceCards from "./ExperienceCards"

export default function Experience(){
    return(
        <section id="experience" className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">Career</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Experience</h2>
        </div>
        <div className="grid gap-6">        
                {experienceData.map((job, index)=>(
                    <ExperienceCards key={index} job={job}/>
                    ))}
        </div>
        </section>
    )
}
