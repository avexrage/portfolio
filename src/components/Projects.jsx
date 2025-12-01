import HavengurtProject from './HavengurtProject';
import SimahaProject from './SimahaProject';

function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
            <h2 className="font-display font-bold text-8xl md:text-[10rem] opacity-5 mb-4 select-none -ml-4 text-text-primary">
                PORTFOLIO
            </h2>
            <p className="text-text-secondary max-w-2xl mb-16 font-mono text-sm border-l border-swiss-red pl-4">
                Selected works representing the intersection of entrepreneurial strategy, technological implementation, and
                user-centered design.
            </p>

            <HavengurtProject />
            <SimahaProject />

            <div className="border-t border-border-color"></div>
        </section>
    );
}

export default Projects;
