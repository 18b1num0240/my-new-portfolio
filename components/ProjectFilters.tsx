"use client";

export default function ProjectFilters({
    tabs,
    activeTab,
    setActiveTab,
    search,
    setSearch,
}: {
    tabs: string[];
    activeTab: string;
    setActiveTab: (v: string) => void;
    search: string;
    setSearch: (v: string) => void;
}) {
    return (
        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
                {tabs.map((t) => {
                    const active = t === activeTab;
                    return (
                        <button
                            key={t}
                            onClick={() => setActiveTab(t)}
                            className={[
                                "relative px-6 py-2.5 text-sm font-medium transition-all duration-300 rounded-full",
                                active
                                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                                    : "bg-white/5 text-neutral-400 border border-white/10 hover:bg-white/10 hover:border-white/20",
                            ].join(" ")}
                        >
                            {t}
                        </button>
                    );
                })}
            </div>

            <div className="relative group w-full lg:max-w-xs">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search projects..."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5
                       text-sm text-white placeholder:text-neutral-500 outline-none
                       transition-all duration-300 group-hover:bg-white/10 focus:bg-white/10 
                       focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20"
                />
            </div>
        </div>
    );
}
