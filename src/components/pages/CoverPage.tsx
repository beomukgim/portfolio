import { Cover } from "@/data/schema";

interface CoverPageProps {
  data: Cover & { techStack?: string[] };
}

const TECH_COLORS: Record<string, string> = {
  "Node.js": "#339933",
  "Java/Spring": "#6DB33F",
  "React": "#61DAFB",
  "Vue.js": "#4FC08D",
  "MySQL": "#4479A1",
  "PostgreSQL": "#4169E1",
  "AWS": "#FF9900",
  "GCP": "#4285F4",
};

export default function CoverPage({ data }: CoverPageProps) {
  const techStack = (data as { techStack?: string[] }).techStack ?? [];

  return (
    <section className="a4-page bg-navy">
      <div className="relative h-full flex flex-col text-white px-[76px]">
        {/* Decorative top accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent" />

        {/* Made with Claude Code */}
        <div className="flex items-center justify-center gap-2 mt-6 px-4 py-2 rounded-md bg-white/5 border border-white/10">
          <span className="text-a4-xs font-bold text-accent-light tracking-wide">
            이 포트폴리오는 Claude Code를 활용하여 Next.js · Tailwind CSS · TypeScript로 제작했습니다.
          </span>
        </div>

        {/* Top spacer */}
        <div className="pt-[90px]" />

        {/* Main title block */}
        <div>
          <h1 className="text-[52px] leading-[60px] font-extrabold tracking-tight">
            {data.title}
          </h1>
          <div className="w-20 h-[3px] bg-accent mt-5 mb-6" />
          <p className="text-a4-xl font-medium text-navy-100">
            {data.subtitle}
          </p>
        </div>

        {/* Tech stack badges */}
        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-2.5 mt-10">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-a4-sm font-medium bg-white/10 backdrop-blur-sm border border-white/15"
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: TECH_COLORS[tech] || "#3A7AB5" }}
                />
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Author info */}
        <div className="mb-6">
          <p className="text-a4-3xl font-bold mb-0.5">{data.author.name}</p>
          <p className="text-a4-sm font-medium tracking-[0.15em] text-navy-200 mb-1">
            {(data.author as { nameEn?: string }).nameEn ?? ""}
          </p>
          <p className="text-a4-base text-navy-200 mb-6">{data.author.title}</p>

          <div className="flex flex-col gap-1.5 text-a4-sm text-navy-200">
            <div className="flex items-center gap-2">
              <span className="text-accent-light">Email</span>
              <span>{data.author.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent-light">Phone</span>
              <span>{data.author.phone}</span>
            </div>
            {data.author.github && (
              <div className="flex items-center gap-2">
                <span className="text-accent-light">GitHub</span>
                <span>{data.author.github}</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom target company */}
        <div className="border-t border-navy-400 py-5 mb-4">
          <p className="text-a4-base font-semibold text-white">
            {data.targetCompany} 백엔드/웹 개발자 지원
          </p>
          <p className="text-a4-xs text-navy-300 mt-1">{data.date}</p>
        </div>

        {/* Decorative bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-accent" />
      </div>
    </section>
  );
}
