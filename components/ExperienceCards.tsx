"use client"
import { useState } from "react";

type ExperienceData = {
  role: string;
  company: string;
  location: string;
  period: string;
  team: string;
  highlights: string[];
};

export default function ExperienceCards({
  job,
}:{
  job:ExperienceData,
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">{job.role}</h3>
      <p className="mt-2 text-sm text-slate-600">
        {job.company} | {job.location} | {job.period}
      </p>
      
      {job.team && (
        <p className="mt-1 text-sm font-medium text-cyan-700">
            {job.team}
        </p>
      )}
     

     
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {job.highlights.map((point,index)=>(
                <li key={index}>{point}</li>
            ))}
        </ul>
    
    </article>
  );
}
