export default function Hero() {
    return (
        <section id="top" className="relative flex h-[68vh] min-h-[460px] w-full items-center md:h-[74vh]">         <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
                backgroundImage: "url('/images.jpg')",
            }}
        />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/65 via-slate-950/75 to-slate-950/90" />

            <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-5xl font-bold leading-tight text-white md:text-6xl">
                        Juhi Bhandari
                    </p>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                        Full-Stack Developer focused on clean architecture,
                        scalable APIs, and polished user experience.
                    </p>
                </div>

                <div className="mt-9 flex flex-wrap justify-center gap-3">
                    <a
                        href="https://www.linkedin.com/in/juhi-bhandari-4baa61261/"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-400"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/jabhandari"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-slate-300/40 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
