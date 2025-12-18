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
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
                {tabs.map((t) => {
                    const active = t === activeTab;
                    return (
                        <button
                            key={t}
                            onClick={() => setActiveTab(t)}
                            className={[
                                "rounded-full px-4 py-2 text-sm transition border",
                                active
                                    ? "bg-white text-black border-white"
                                    : "bg-white/5 text-neutral-300 border-white/10 hover:border-white/20 hover:bg-white/10",
                            ].join(" ")}
                        >
                            {t}
                        </button>
                    );
                })}
            </div>

            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects..."
                className="w-full sm:w-[280px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3
                   text-sm text-white placeholder:text-neutral-500 outline-none
                   focus:border-white/20"
            />
        </div>
    );
}
