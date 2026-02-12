import A4Page from "@/components/layout/A4Page";
import SectionTitle from "@/components/shared/SectionTitle";

/* ─── AI Workflow SVG Diagram ─── */
function AiWorkflowDiagram() {
  const steps = [
    { x: 0, label: "요구사항", sub: "정의", ai: "AI 요건 분석" },
    { x: 97, label: "AI 협업", sub: "설계", ai: "아키텍처 제안" },
    { x: 194, label: "코드", sub: "생성", ai: "AI 코드 생성" },
    { x: 291, label: "AI 코드", sub: "리뷰", ai: "버그·보안 탐지" },
    { x: 388, label: "리팩토링", sub: "", ai: "패턴 최적화" },
    { x: 485, label: "문서화", sub: "", ai: "API 문서 생성" },
  ];

  return (
    <svg
      viewBox="0 0 580 120"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {steps.map((s, i) => (
        <g key={i}>
          {/* Step box */}
          <rect
            x={s.x}
            y="0"
            width="85"
            height="42"
            rx="6"
            fill={i % 2 === 0 ? "#1B3A5C" : "#2C5F8A"}
          />
          <text
            x={s.x + 42.5}
            y={s.sub ? 17 : 24}
            textAnchor="middle"
            className="text-[9px] font-bold"
            fill="white"
          >
            {s.label}
          </text>
          {s.sub && (
            <text
              x={s.x + 42.5}
              y={32}
              textAnchor="middle"
              className="text-[8px]"
              fill="#A3BBD3"
            >
              {s.sub}
            </text>
          )}

          {/* Arrow between steps */}
          {i < steps.length - 1 && (
            <line
              x1={s.x + 85}
              y1={21}
              x2={s.x + 97}
              y2={21}
              stroke="#2C5F8A"
              strokeWidth="1.5"
              markerEnd="url(#aiArrow)"
            />
          )}

          {/* AI involvement line down */}
          <line
            x1={s.x + 42.5}
            y1={42}
            x2={s.x + 42.5}
            y2={62}
            stroke="#E53E3E"
            strokeWidth="1"
            strokeDasharray="3 2"
          />

          {/* AI label box */}
          <rect
            x={s.x}
            y="64"
            width="85"
            height="28"
            rx="4"
            fill="#FFF5F5"
            stroke="#E53E3E"
            strokeWidth="0.8"
          />
          <text
            x={s.x + 42.5}
            y={82}
            textAnchor="middle"
            className="text-[7.5px] font-medium"
            fill="#E53E3E"
          >
            {s.ai}
          </text>
        </g>
      ))}

      {/* Arrow defs */}
      <defs>
        <marker
          id="aiArrow"
          markerWidth="6"
          markerHeight="5"
          refX="6"
          refY="2.5"
          orient="auto"
        >
          <polygon points="0 0, 6 2.5, 0 5" fill="#2C5F8A" />
        </marker>
      </defs>
    </svg>
  );
}

/* ─── Before/After Card ─── */
interface CompareCardProps {
  title: string;
  before: string;
  after: string;
}

function CompareCard({ title, before, after }: CompareCardProps) {
  return (
    <div className="bg-white border border-navy-100 rounded-lg overflow-hidden">
      <div className="bg-navy px-3 py-1.5">
        <p className="text-a4-sm font-bold text-white">{title}</p>
      </div>
      <div className="grid grid-cols-2 divide-x divide-navy-100">
        <div className="p-3">
          <p className="text-[9px] font-bold text-navy-300 mb-1 tracking-wider">
            BEFORE
          </p>
          <p className="text-a4-xs text-navy-400 leading-relaxed">{before}</p>
        </div>
        <div className="p-3 bg-accent/5">
          <p className="text-[9px] font-bold text-accent mb-1 tracking-wider">
            AFTER (AI 활용)
          </p>
          <p className="text-a4-xs text-navy leading-relaxed font-medium">
            {after}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function AiToolsPage({ pageNumber }: { pageNumber: number }) {
  const comparisons: CompareCardProps[] = [
    {
      title: "레거시 코드 리팩토링",
      before: "수작업 분석에 수 주 소요, 기술 부채 파악이 어려움",
      after:
        "AI로 코드베이스를 체계적으로 분석하고, 리팩토링 전략 수립 시간을 대폭 단축",
    },
    {
      title: "아키텍처 구조 설계",
      before: "설계 패턴 비교·검토에 많은 시간 소요",
      after:
        "AI와 협업하여 다양한 패턴의 장단점을 빠르게 비교하고, 최적 구조를 도출",
    },
    {
      title: "코드 리뷰",
      before: "수동 리뷰로 놓치는 버그 존재, 일관성 부족",
      after:
        "AI 사전 스크리닝으로 잠재적 버그·보안 취약점을 조기 발견",
    },
    {
      title: "문서 작성",
      before: "API 문서·주석 수동 작성에 많은 시간 소요",
      after:
        "AI 활용으로 효율적 생성, 팀 지식 공유 수준 향상",
    },
  ];

  return (
    <A4Page pageNumber={pageNumber}>
      <SectionTitle title="AI TOOLS" subtitle="AI 도구 활용 사례" />

      {/* Tools */}
      <div className="flex gap-2 mb-5">
        {["Claude Code", "OpenCode"].map((tool) => (
          <span
            key={tool}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-a4-sm font-semibold bg-navy text-white"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-light" />
            {tool}
          </span>
        ))}
      </div>

      {/* Workflow Diagram */}
      <div className="mb-5">
        <h4 className="text-a4-lg font-semibold text-navy mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          AI 협업 워크플로우
        </h4>
        <div className="pl-4">
          <AiWorkflowDiagram />
        </div>
      </div>

      {/* Before / After */}
      <div className="mb-5">
        <h4 className="text-a4-lg font-semibold text-navy mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Before / After 비교
        </h4>
        <div className="grid grid-cols-2 gap-3 pl-4">
          {comparisons.map((c) => (
            <CompareCard key={c.title} {...c} />
          ))}
        </div>
      </div>

      {/* Key Message */}
      <div className="bg-navy rounded-lg p-5 text-center">
        <p className="text-a4-lg font-bold text-white leading-relaxed">
          &ldquo;AI가 코드를 대신 짜는 것이 아니라,
          <br />
          <span className="text-accent-light">
            개발자의 판단력을 증폭시키는 도구
          </span>
          로 사용합니다&rdquo;
        </p>
      </div>
    </A4Page>
  );
}
