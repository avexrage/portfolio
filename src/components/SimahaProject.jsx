function SimahaProject() {
    const wireframes = [
        { src: '/landingpage.jpg', alt: 'SIMAHA Landing Page Wireframe', label: 'Landing Page' },
        { src: '/studentassoc.jpg', alt: 'Student Association Wireframe', label: 'Associations Index' },
        { src: '/faculty.jpg', alt: 'Faculty Page Wireframe', label: 'Faculty View' },
        { src: '/himahi.jpg', alt: 'HIMAHI Detail Wireframe', label: 'HIMAHI Detail' },
        { src: '/scholar.jpg', alt: 'Scholarship Page Wireframe', label: 'Scholarships' },
        { src: '/achieve.jpg', alt: 'Achievements Page Wireframe', label: 'Achievements' },
        { src: '/event.jpg', alt: 'Events Page Wireframe', label: 'Events Calendar' },
    ];

    const hiFiDesigns = [
        { src: '/landingpage.png', alt: 'SIMAHA Landing Page Hi-Fi', label: 'Landing (Hi-Fi)' },
        { src: '/studentassociationpage.png', alt: 'Student Association Hi-Fi', label: 'Associations Index (Hi-Fi)' },
        { src: '/facultyofbusinesspage.png', alt: 'Faculty Page Hi-Fi', label: 'Faculty View (Hi-Fi)' },
        { src: '/himahipage.png', alt: 'HIMAHI Detail Hi-Fi', label: 'HIMAHI Detail (Hi-Fi)' },
        { src: '/scholarshipspage.png', alt: 'Scholarship Page Hi-Fi', label: 'Scholarships (Hi-Fi)' },
        { src: '/achievementpage.png', alt: 'Achievements Page Hi-Fi', label: 'Achievements (Hi-Fi)' },
        { src: '/eventpage.png', alt: 'Events Page Hi-Fi', label: 'Events (Hi-Fi)' },
    ];

    return (
        <div className="border-t border-border-color">
            <div className="group py-16">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-10">
                    <div className="flex items-start gap-6">
                        <span className="font-mono text-swiss-red pt-2">03</span>
                        <div>
                            <h3 className="font-display text-5xl md:text-7xl uppercase mb-2 text-text-primary">Simaha</h3>
                            <div className="flex gap-2">
                                <span className="bg-accent-subtle text-text-primary text-[10px] font-bold uppercase px-2 py-0.5 tracking-wider">
                                    Curricular Project
                                </span>
                                <span className="bg-accent-subtle text-text-secondary text-[10px] font-bold uppercase px-2 py-0.5 tracking-wider">
                                    UI/UX Redesign
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                        <p className="font-serif italic text-xl text-text-primary">Lead UI/UX Designer</p>
                        <p className="font-mono text-xs text-text-secondary mt-1">University of Technology Yogyakarta</p>
                    </div>
                </div>

                <div className="flex flex-col gap-12">
                    {/* Hero Image */}
                    <div className="img-zoom-container w-full h-[500px] bg-bg-tertiary relative group overflow-hidden border border-border-color">
                        <img
                            src="/simaha_hero.png"
                            alt="SIMAHA Dashboard"
                            className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                        />
                    </div>

                    <div className="prose max-w-none w-full">
                        <h4 className="font-display text-2xl uppercase tracking-wide mb-4 text-text-primary">
                            Student Information System Overhaul
                        </h4>
                        <p className="text-text-secondary mb-8 leading-relaxed max-w-4xl">
                            A comprehensive redesign of the university's student information system. Collaborating with
                            the IT department, I focused on restructuring the accessibility of critical academic data.
                        </p>

                        {/* Original Interface */}
                        <div className="mb-12">
                            <strong className="text-swiss-red font-mono text-xs uppercase block mb-4">
                                00. The Starting Point
                            </strong>
                            <div className="grid md:grid-cols-12 gap-8 items-start">
                                <div className="md:col-span-7">
                                    <div className="group relative aspect-video overflow-hidden border border-border-color bg-bg-tertiary cursor-pointer hover:border-swiss-red transition-colors">
                                        <img
                                            src="/ui before.jpeg"
                                            alt="Original SIMAHA Interface"
                                            className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                        />
                                        <div className="absolute bottom-0 left-0 w-full bg-bg-primary/90 py-2 px-3 border-t border-border-color">
                                            <span className="text-[10px] font-mono text-text-secondary uppercase">
                                                Original Interface (Pre-Redesign)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-5 flex flex-col justify-center">
                                    <h5 className="text-text-primary font-bold mb-2">Legacy Challenges</h5>
                                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                        The original system suffered from cognitive overload, with a dense,
                                        unprioritized grid of icons that made navigation inefficient. Users struggled to
                                        distinguish between Faculty Associations (HMJ) and Activity Units (UKM) due to
                                        lack of visual hierarchy.
                                    </p>
                                    <div className="flex gap-2">
                                        <span className="text-[10px] bg-red-900/20 text-red-400 border border-red-900/30 px-2 py-1 uppercase">
                                            High Cognitive Load
                                        </span>
                                        <span className="text-[10px] bg-red-900/20 text-red-400 border border-red-900/30 px-2 py-1 uppercase">
                                            Poor Wayfinding
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* UX Development Cycle */}
                        <div className="mb-8 border border-border-color bg-bg-secondary p-6 md:p-8 rounded-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex h-3 w-3 relative">
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-subtle"></span>
                                </span>
                                <h5 className="font-display text-lg uppercase tracking-wider text-text-primary">
                                    UX Development Cycle
                                </h5>
                            </div>

                            {/* Research */}
                            <div className="mb-8">
                                <strong className="text-swiss-red font-mono text-xs uppercase block mb-2">
                                    01. Discovery & User Research
                                </strong>
                                <p className="text-sm text-text-secondary mb-4">
                                    Initiated the project by interviewing the lead engineer to define the core "Who" and
                                    "Why." Identified the primary user base as the entire student body of UTY.
                                </p>
                            </div>

                            {/* Define Objectives */}
                            <div className="mb-8">
                                <strong className="text-swiss-red font-mono text-xs uppercase block mb-3">
                                    02. Define Objectives
                                </strong>
                                <p className="text-sm text-text-secondary mb-4">
                                    Based on stakeholder interviews, I crystallized three main functional objectives for
                                    the system overhaul:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <div className="border-l-2 border-border-color pl-3">
                                            <strong className="text-text-primary text-xs uppercase block mb-1">Objective A</strong>
                                            <p className="text-xs text-text-secondary">
                                                Information related to student achievements and activities.
                                            </p>
                                        </div>
                                        <div className="border-l-2 border-border-color pl-3">
                                            <strong className="text-text-primary text-xs uppercase block mb-1">Objective B</strong>
                                            <p className="text-xs text-text-secondary">
                                                Scholarship Information (Internal & Partner opportunities).
                                            </p>
                                        </div>
                                        <div className="border-l-2 border-border-color pl-3">
                                            <strong className="text-text-primary text-xs uppercase block mb-1">Objective C</strong>
                                            <p className="text-xs text-text-secondary">
                                                General Information on Student Activity Units (UKM) and Students Association (HMJ).
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-bg-tertiary p-4 border border-border-color">
                                        <strong className="text-text-primary font-mono text-xs uppercase block mb-2 border-b border-border-color pb-2">
                                            Target Personas
                                        </strong>
                                        <ul className="text-xs text-text-secondary space-y-3">
                                            <li className="flex gap-2 items-start">
                                                <i className="fas fa-users text-accent-subtle mt-0.5"></i>
                                                <span>
                                                    <strong>The Organizational Student:</strong> Every student who wants to get information about the Student Association and Activity Units.
                                                </span>
                                            </li>
                                            <li className="flex gap-2 items-start">
                                                <i className="fas fa-graduation-cap text-accent-subtle mt-0.5"></i>
                                                <span>
                                                    <strong>The Opportunity Seeker:</strong> Students who wish to explore scholarship opportunities provided by the campus and campus partners.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Wireframe Gallery */}
                            <div className="mt-10 pt-8 border-t border-border-color">
                                <strong className="text-swiss-red font-mono text-xs uppercase block mb-6">
                                    03. Wireframing Phase (Balsamiq)
                                </strong>
                                <p className="text-sm text-text-secondary mb-6">
                                    Utilized low-fidelity wireframes to rapidly validate information architecture
                                    without the distraction of visual aesthetics. This phase allowed for quick iteration
                                    on layout and content placement.
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {wireframes.map((wireframe, index) => (
                                        <div
                                            key={index}
                                            className="group relative aspect-[3/4] overflow-hidden border border-border-color bg-bg-tertiary cursor-pointer hover:border-swiss-red transition-colors"
                                        >
                                            <img
                                                src={wireframe.src}
                                                alt={wireframe.alt}
                                                className="w-full h-full object-contain object-top opacity-75 group-hover:opacity-100 transition-opacity"
                                            />
                                            <div className="absolute bottom-0 left-0 w-full bg-bg-primary/90 py-2 px-3 border-t border-border-color">
                                                <span className="text-[10px] font-mono text-text-secondary uppercase">
                                                    {wireframe.label}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex items-center justify-center border border-dashed border-border-color bg-bg-tertiary/50">
                                        <span className="text-[10px] font-mono text-text-secondary uppercase text-center p-4">
                                            Lo-Fi<br />Iterations<br />Complete
                                        </span>
                                    </div>
                                </div>

                                <p className="mt-4 text-[10px] text-text-secondary italic">
                                    *Wireframes created in Balsamiq to rapidly test information hierarchy before
                                    high-fidelity visual design.
                                </p>
                            </div>

                            {/* Visual Design Gallery */}
                            <div className="mt-10 pt-8 border-t border-border-color">
                                <strong className="text-swiss-red font-mono text-xs uppercase block mb-6">
                                    04. Visual Design Phase (Figma Hi-Fi)
                                </strong>
                                <p className="text-sm text-text-secondary mb-6">
                                    Translated the approved wireframes into high-fidelity prototypes using Figma. This
                                    phase focused on applying the University's branding, refining typography, and
                                    establishing a consistent visual language ("Figma Interpretation") that enhanced
                                    usability and aesthetic appeal.
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {hiFiDesigns.map((design, index) => (
                                        <div
                                            key={index}
                                            className="group relative aspect-[3/4] overflow-hidden border border-border-color bg-bg-tertiary cursor-pointer hover:border-swiss-red transition-colors"
                                        >
                                            <img
                                                src={design.src}
                                                alt={design.alt}
                                                className="w-full h-full object-contain object-top opacity-90 group-hover:opacity-100 transition-opacity"
                                            />
                                            <div className="absolute bottom-0 left-0 w-full bg-bg-primary/90 py-2 px-3 border-t border-border-color">
                                                <span className="text-[10px] font-mono text-text-secondary uppercase">
                                                    {design.label}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex items-center justify-center border border-dashed border-border-color bg-bg-tertiary/50">
                                        <div className="text-center">
                                            <span className="text-[10px] font-mono text-swiss-red uppercase block mb-1">Status</span>
                                            <span className="text-xs font-bold text-text-primary uppercase">Ready for Handoff</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Final Lifecycle Stages */}
                            <div className="mt-10 pt-8 border-t border-border-color">
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div>
                                        <strong className="text-swiss-red font-mono text-xs uppercase block mb-3">
                                            05. Interactive Prototyping
                                        </strong>
                                        <p className="text-sm text-text-secondary mb-3">
                                            Utilized Figma's interactive components to simulate real user flows. Added
                                            micro-interactions for hover states and navigation transitions to test
                                            usability before code.
                                        </p>
                                        <div className="flex gap-2">
                                            <span className="text-[10px] bg-bg-tertiary border border-border-color px-2 py-1 text-text-secondary">
                                                Smart Animate
                                            </span>
                                            <span className="text-[10px] bg-bg-tertiary border border-border-color px-2 py-1 text-text-secondary">
                                                User Flows
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <strong className="text-swiss-red font-mono text-xs uppercase block mb-3">
                                            06. Testing & Iteration
                                        </strong>
                                        <p className="text-sm text-text-secondary mb-3">
                                            Conducted usability testing with student representatives and stakeholders.
                                            Iterated on navigation labels and button placement based on direct feedback loops.
                                        </p>
                                        <div className="flex gap-2">
                                            <span className="text-[10px] bg-bg-tertiary border border-border-color px-2 py-1 text-text-secondary">
                                                Usability Testing
                                            </span>
                                            <span className="text-[10px] bg-bg-tertiary border border-border-color px-2 py-1 text-text-secondary">
                                                A/B Testing
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <strong className="text-swiss-red font-mono text-xs uppercase block mb-3">
                                            07. Development Handoff
                                        </strong>
                                        <p className="text-sm text-text-secondary mb-3">
                                            Prepared comprehensive design specs, exported assets, and CSS snippets for
                                            the development team, ensuring pixel-perfect implementation of the product delivery.
                                        </p>
                                        <div className="flex gap-2">
                                            <span className="text-[10px] bg-bg-tertiary border border-border-color px-2 py-1 text-text-secondary">
                                                Design Specs
                                            </span>
                                            <span className="text-[10px] bg-bg-tertiary border border-border-color px-2 py-1 text-text-secondary">
                                                Asset Export
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-border-color mt-8">
                                <span className="font-mono text-[10px] text-text-secondary uppercase">
                                    Full Cycle: Research → Objectives → Wireframing → Visual Design → Prototyping →
                                    Testing → Handoff
                                </span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a
                                href="https://simaha.uty.ac.id/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 text-text-primary border border-border-color px-6 py-3 hover:bg-swiss-red hover:border-swiss-red hover:text-white transition-all text-sm uppercase tracking-widest font-bold"
                            >
                                Visit Live Platform <i className="fas fa-arrow-right group-hover:-rotate-45 transition-transform duration-300"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SimahaProject;
