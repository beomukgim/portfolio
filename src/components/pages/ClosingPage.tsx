import { Cover } from "@/data/schema";
import A4Page from "@/components/layout/A4Page";

interface ClosingPageProps {
  author: Cover["author"];
  pageNumber: number;
}

/* ─── Progress Bar ─── */
function SkillBar({
  label,
  percent,
}: {
  label: string;
  percent: number;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-a4-xs font-medium text-navy w-[110px] text-right flex-shrink-0">
        {label}
      </span>
      <div className="flex-1 h-[14px] bg-navy-50 rounded-full overflow-hidden relative">
        <div
          className="h-full rounded-full bg-accent"
          style={{ width: `${percent}%` }}
        />
        <span className="absolute inset-0 flex items-center justify-end pr-2 text-[8px] font-bold text-navy-300">
          {percent}%
        </span>
      </div>
    </div>
  );
}

/* ─── Skill Category ─── */
function SkillCategory({
  name,
  skills,
}: {
  name: string;
  skills: { label: string; percent: number }[];
}) {
  return (
    <div>
      <p className="text-a4-xs font-bold text-accent mb-1.5 tracking-wider">
        {name}
      </p>
      <div className="space-y-1">
        {skills.map((s) => (
          <SkillBar key={s.label} label={s.label} percent={s.percent} />
        ))}
      </div>
    </div>
  );
}

/* ─── Growth Goal ─── */
function GrowthGoal({
  phase,
  title,
  description,
}: {
  phase: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="text-a4-xs font-bold text-white bg-accent rounded-full px-2.5 py-0.5 flex-shrink-0 h-fit">
        {phase}
      </span>
      <div>
        <p className="text-a4-sm font-bold text-navy">{title}</p>
        <p className="text-a4-xs text-navy-400">{description}</p>
      </div>
    </div>
  );
}

export default function ClosingPage({ author, pageNumber }: ClosingPageProps) {
  const techStack = [
    {
      name: "BACKEND",
      skills: [
        { label: "Node.js / NestJS", percent: 80 },
        { label: "Java / Spring", percent: 70 },
      ],
    },
    {
      name: "FRONTEND",
      skills: [
        { label: "React / Next.js", percent: 80 },
        { label: "Vue / Nuxt.js", percent: 70 },
      ],
    },
    {
      name: "DATABASE",
      skills: [
        { label: "MySQL", percent: 80 },
        { label: "PostgreSQL", percent: 70 },
      ],
    },
    {
      name: "CLOUD",
      skills: [
        { label: "AWS", percent: 80 },
        { label: "GCP", percent: 60 },
      ],
    },
    {
      name: "AI TOOLS",
      skills: [
        { label: "Claude Code", percent: 80 },
        { label: "OpenCode", percent: 70 },
      ],
    },
  ];

  return (
    <A4Page pageNumber={pageNumber}>
      {/* Section Title */}
      <div className="mb-5">
        <h2 className="text-a4-2xl font-bold text-navy">
          TECH STACK & GROWTH
        </h2>
        <div className="h-[3px] w-16 bg-accent mt-2 mb-1" />
        <p className="text-a4-sm text-navy-300 font-medium">
          기술 스택 & 성장 방향
        </p>
      </div>

      {/* Tech Stack Proficiency */}
      <div className="mb-6">
        <h4 className="text-a4-lg font-semibold text-navy mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          기술 스택 숙련도
        </h4>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 pl-4">
          {techStack.slice(0, 4).map((cat) => (
            <SkillCategory key={cat.name} name={cat.name} skills={cat.skills} />
          ))}
        </div>
        {/* AI Tools - full width */}
        <div className="pl-4 mt-3 max-w-[48%]">
          <SkillCategory
            name={techStack[4].name}
            skills={techStack[4].skills}
          />
        </div>
      </div>

      {/* Growth Goals */}
      <div className="mb-6">
        <h4 className="text-a4-lg font-semibold text-navy mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          코일마스터에서의 성장 목표
        </h4>
        <div className="space-y-3 pl-4">
          <GrowthGoal
            phase="단기"
            title="전자부품 제조업 도메인 지식 습득 + 기존 시스템 파악"
            description="코일마스터의 제품 라인업, 고객 구조, 기존 웹/백엔드 시스템을 빠르게 이해하고 즉시 기여할 수 있는 영역을 파악합니다."
          />
          <GrowthGoal
            phase="중기"
            title="E-Service 플랫폼 고도화 + AI 기반 개발 프로세스 도입"
            description="제품 검색·비교 기능 개선, SEO/AEO 최적화, Schema Markup 적용 등 웹 플랫폼을 고도화하고, AI 도구를 활용한 효율적 개발 문화를 정착시킵니다."
          />
          <GrowthGoal
            phase="장기"
            title="스마트팩토리 시대의 디지털 전환을 이끄는 핵심 개발자"
            description="데이터 기반 의사결정 시스템, 고객 포털 고도화, 글로벌 디지털 마케팅 기반 구축 등 코일마스터의 디지털 경쟁력을 선도합니다."
          />
        </div>
      </div>

      {/* Closing Message */}
      <div className="bg-navy rounded-lg p-6 text-center">
        <p className="text-a4-lg font-bold text-white leading-relaxed mb-4">
          &ldquo;감사합니다.
          <br />
          <span className="text-accent-light">
            AI와 웹 기술로 코일마스터의 디지털 경쟁력
          </span>
          을
          <br />
          함께 만들어 가겠습니다.&rdquo;
        </p>
        <div className="border-t border-navy-400 pt-3 mt-3 flex justify-center gap-6 text-a4-xs text-navy-200">
          <span>{author.email}</span>
          <span>{author.phone}</span>
          {author.github && <span>{author.github}</span>}
        </div>
      </div>
    </A4Page>
  );
}
