import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
    const [activeId, setActiveId] = useState<string>('intro');

    useEffect(() => {
        const sections = sectionIds
            .map(id => document.getElementById(id))
            .filter(Boolean) as HTMLElement[];

        const observer = new IntersectionObserver(
            entries => {
                const visible = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                
                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }

            },
            {
                threshold: [0.25, 0.5, 0.75],
                rootMargin: "-30% 0px -30% 0px",
            }
        );

        sections.forEach(section => observer.observe(section));

        const onScroll = () => {
            if (window.scrollY < 100) {
              setActiveId("intro");
            }
        };
      
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", onScroll);
        };
    }, [sectionIds]);

    return activeId;
}