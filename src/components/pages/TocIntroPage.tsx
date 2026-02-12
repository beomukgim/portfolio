import A4Page from "@/components/layout/A4Page";
import { Introduction } from "@/data/schema";

interface TocIntroPageProps {
  data: Introduction;
}

const tocItems = [
  { page: 2, label: "목차 및 자기소개" },
  { page: 3, label: "경력 사항" },
  { page: 4, label: "AI 도구 활용 사례" },
  { page: 5, label: "프로젝트 1 — 숙박업 중복예약 방지 시스템" },
  { page: 7, label: "프로젝트 2 — 요가파이어 (온라인 강의 플랫폼)" },
  { page: 9, label: "프로젝트 3 — Who Am I, Jesus? (성격유형 테스트)" },
  { page: 11, label: "코일마스터 홈페이지 분석 (SEO · AEO)" },
  { page: 13, label: "교육 및 자격" },
  { page: 14, label: "기술 스택 & 성장 방향" },
];

export default function TocIntroPage({ data }: TocIntroPageProps) {
  return (
    <A4Page pageNumber={2}>
      {/* Table of Contents */}
      <div className="mb-10">
        <h2 className="text-a4-2xl font-bold text-navy mb-3">CONTENTS</h2>
        <div className="h-[3px] w-16 bg-accent mb-6" />
        <div className="space-y-2">
          {tocItems.map((item) => (
            <div
              key={item.page}
              className="flex items-center gap-3 text-a4-base"
            >
              <span className="font-bold text-accent w-6 text-right">
                {String(item.page).padStart(2, "0")}
              </span>
              <span className="flex-1 border-b border-dotted border-navy-100" />
              <span className="text-navy font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-navy-100 my-8" />

      {/* Introduction */}
      <div>
        <h2 className="text-a4-2xl font-bold text-navy mb-3">ABOUT ME</h2>
        <div className="h-[3px] w-16 bg-accent mb-6" />

        <p className="text-a4-xl font-semibold text-navy mb-4">
          {data.headline}
        </p>

        <div className="space-y-3 mb-8">
          {data.summary.map((para, i) => (
            <p key={i} className="text-a4-base text-navy-400 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-4 gap-4">
          {data.highlights.map((h, i) => (
            <div
              key={i}
              className="text-center p-4 bg-navy-50 rounded-lg"
            >
              <p className="text-a4-2xl font-bold text-accent">{h.metric}</p>
              <p className="text-a4-sm font-semibold text-navy mt-1">
                {h.label}
              </p>
              <p className="text-a4-xs text-navy-300 mt-1">{h.description}</p>
            </div>
          ))}
        </div>
      </div>
    </A4Page>
  );
}
