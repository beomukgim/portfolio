import A4Page from "@/components/layout/A4Page";
import SectionTitle from "@/components/shared/SectionTitle";

/* ════════════════════════════════════════════════
   Page 1 — PART A: 현황 분석
   ════════════════════════════════════════════════ */

/* ─── Google Search Mockup ─── */
function SearchMockup({
  type,
}: {
  type: "before" | "after";
}) {
  const isBefore = type === "before";
  return (
    <div className="border border-navy-100 rounded-lg overflow-hidden text-left">
      {/* Search bar */}
      <div className="bg-white px-3 py-1.5 border-b border-navy-100 flex items-center gap-2">
        <span className="text-[9px] text-navy-300 font-medium">Google</span>
        <div className="flex-1 bg-navy-50 rounded-full px-3 py-0.5 text-[9px] text-navy">
          coilmaster SMD inductor
        </div>
      </div>
      <div className="px-3 py-2 space-y-1.5">
        {isBefore ? (
          <>
            <SearchResult
              url="coilmaster.com.tw"
              title="Coilmaster Electronics — Taiwan"
              desc="Since 1995, professional manufacturer of inductors..."
              highlight={false}
            />
            <SearchResult
              url="coilmaster.com.tw/products"
              title="SMD Power Inductors — Coilmaster TW"
              desc="Wide range of SMD inductors for automotive..."
              highlight={false}
            />
            <SearchResult
              url="coilmaster.com"
              title="Coilmaster -"
              desc="(No meta description)"
              highlight
              isKorea
            />
          </>
        ) : (
          <>
            <SearchResult
              url="coilmaster.com"
              title="CoilMaster Korea — No.1 SMD Inductor Manufacturer"
              desc="Since 1996. 4,100+ products. Global 11 offices. Power inductors, RF coils..."
              highlight
              isKorea
            />
            <SearchResult
              url="coilmaster.com/faq"
              title="FAQ: How to Select Power Inductors — CoilMaster"
              desc="Expert guide: shielded vs semi-shielded, DCR, Isat..."
              highlight
              isKorea
            />
          </>
        )}
      </div>
    </div>
  );
}

function SearchResult({
  url,
  title,
  desc,
  highlight,
  isKorea,
}: {
  url: string;
  title: string;
  desc: string;
  highlight: boolean;
  isKorea?: boolean;
}) {
  return (
    <div className={highlight ? "opacity-100" : "opacity-50"}>
      <p className="text-[8px] text-green-700">{url}</p>
      <p className={`text-[10px] font-semibold ${isKorea ? "text-accent" : "text-blue-700"}`}>
        {title}
      </p>
      <p className="text-[8px] text-navy-300">{desc}</p>
    </div>
  );
}

/* ─── Severity Badge ─── */
function Badge({ level }: { level: "critical" | "warning" | "info" | "good" }) {
  const styles = {
    critical: "bg-red-100 text-red-700 border-red-200",
    warning: "bg-orange-50 text-orange-700 border-orange-200",
    info: "bg-yellow-50 text-yellow-700 border-yellow-200",
    good: "bg-green-50 text-green-700 border-green-200",
  };
  const labels = { critical: "심각", warning: "주의", info: "개선", good: "양호" };
  return (
    <span
      className={`inline-block px-1.5 py-0.5 rounded text-[8px] font-bold border ${styles[level]}`}
    >
      {labels[level]}
    </span>
  );
}

/* ─── Issue Item ─── */
function Issue({ text }: { text: string }) {
  return (
    <li className="text-a4-xs text-navy-400 flex items-start gap-1.5">
      <span className="text-accent mt-0.5 flex-shrink-0 text-[8px]">&#9654;</span>
      <span>{text}</span>
    </li>
  );
}

export function CoilmasterAnalysisPage1({
  pageNumber,
}: {
  pageNumber: number;
}) {
  return (
    <A4Page pageNumber={pageNumber}>
      <SectionTitle
        title="SITE ANALYSIS"
        subtitle="coilmaster.com 심층 분석"
      />

      {/* Brand Confusion — Critical */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge level="critical" />
          <h4 className="text-a4-base font-bold text-navy">
            브랜드 검색 혼동 문제
          </h4>
        </div>
        <p className="text-a4-xs text-navy-400 mb-2 pl-4">
          &quot;coilmaster SMD inductor&quot; 검색 시, 한국 코일마스터(1996년 설립)보다
          대만 Coilmaster Electronics(1995년 설립)가 검색 결과를 지배하여 글로벌
          고객이 두 회사를 혼동할 위험이 매우 높습니다.
        </p>
        <div className="grid grid-cols-2 gap-2 pl-4">
          <div>
            <p className="text-[9px] font-bold text-red-600 mb-1 tracking-wider">
              BEFORE — 현재 검색 결과
            </p>
            <SearchMockup type="before" />
          </div>
          <div>
            <p className="text-[9px] font-bold text-green-600 mb-1 tracking-wider">
              AFTER — SEO + AEO 적용 후
            </p>
            <SearchMockup type="after" />
          </div>
        </div>
      </div>

      {/* SEO 기본기 */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1.5">
          <Badge level="warning" />
          <h4 className="text-a4-sm font-bold text-navy">SEO 기본기 부족</h4>
        </div>
        <ul className="space-y-0.5 pl-4">
          <Issue text="타이틀 태그가 &quot;Coilmaster -&quot;로 끝남 → 키워드 최적화 필요" />
          <Issue text="Meta Description 부재/부실 → 페이지별 고유 설명 필요" />
          <Issue text="이미지 파일명이 해시값(1695276477_935b3b45...) → 의미 있는 파일명 + alt 필요" />
          <Issue text="제품 데이터가 PDF 카탈로그에 갇혀 있음 → 크롤링/검색 노출 불가" />
        </ul>
      </div>

      {/* UX 이슈 */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1.5">
          <Badge level="info" />
          <h4 className="text-a4-sm font-bold text-navy">
            UX / 기능적 이슈
          </h4>
        </div>
        <ul className="space-y-0.5 pl-4">
          <Issue text="4,116개 제품인데 제품 비교 기능 없음" />
          <Issue text="필터 조건이 URL에 반영 안 됨 → 검색 결과 공유 불가" />
          <Issue text="SRF 값 &quot;0&quot; 다수 → 미입력/실제 0 구분 불가" />
          <Issue text="Copyright 2023 고정 → 동적 연도 필요" />
          <Issue text="개인정보처리방침 2016년 이후 미갱신" />
        </ul>
      </div>

      {/* 잘 된 부분 */}
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <Badge level="good" />
          <h4 className="text-a4-sm font-bold text-navy">잘 된 부분</h4>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 pl-4">
          <Issue text="모바일 반응형: 카드형 레이아웃 대응" />
          <Issue text="다국어(영어/한국어) 기본 지원" />
          <Issue text="제품 카테고리 구조 체계적" />
          <Issue text="E-Service 기술 자료 제공" />
        </div>
      </div>
    </A4Page>
  );
}

/* ════════════════════════════════════════════════
   Page 2 — PART B: AEO 전략 + PART C: 로드맵
   ════════════════════════════════════════════════ */

/* ─── SEO vs AEO Diagram ─── */
function SeoAeoDiagram() {
  return (
    <svg
      viewBox="0 0 520 80"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* SEO Row */}
      <text x="0" y="18" className="text-[9px] font-bold" fill="#6B7280">
        기존 SEO
      </text>
      <rect x="65" y="4" width="100" height="24" rx="4" fill="#E8EEF4" stroke="#9CA3AF" strokeWidth="1" />
      <text x="115" y="20" textAnchor="middle" className="text-[8px] font-medium" fill="#4B5563">키워드 최적화</text>
      <line x1="165" y1="16" x2="185" y2="16" stroke="#9CA3AF" strokeWidth="1" markerEnd="url(#seoArr)" />
      <rect x="187" y="4" width="100" height="24" rx="4" fill="#E8EEF4" stroke="#9CA3AF" strokeWidth="1" />
      <text x="237" y="20" textAnchor="middle" className="text-[8px] font-medium" fill="#4B5563">검색 순위 경쟁</text>
      <line x1="287" y1="16" x2="307" y2="16" stroke="#9CA3AF" strokeWidth="1" markerEnd="url(#seoArr)" />
      <rect x="309" y="4" width="100" height="24" rx="4" fill="#E8EEF4" stroke="#9CA3AF" strokeWidth="1" />
      <text x="359" y="20" textAnchor="middle" className="text-[8px] font-medium" fill="#4B5563">클릭 유도</text>

      {/* Arrow down */}
      <text x="430" y="44" className="text-[10px] font-bold" fill="#E53E3E">↓ 변화</text>

      {/* AEO Row */}
      <text x="0" y="72" className="text-[9px] font-bold" fill="#2C5F8A">
        AEO 시대
      </text>
      <rect x="65" y="56" width="100" height="24" rx="4" fill="#1B3A5C" />
      <text x="115" y="72" textAnchor="middle" className="text-[8px] font-bold" fill="white">질문 의도 파악</text>
      <line x1="165" y1="68" x2="185" y2="68" stroke="#2C5F8A" strokeWidth="1.5" markerEnd="url(#aeoArr)" />
      <rect x="187" y="56" width="100" height="24" rx="4" fill="#2C5F8A" />
      <text x="237" y="72" textAnchor="middle" className="text-[8px] font-bold" fill="white">구조화된 답변</text>
      <line x1="287" y1="68" x2="307" y2="68" stroke="#2C5F8A" strokeWidth="1.5" markerEnd="url(#aeoArr)" />
      <rect x="309" y="56" width="100" height="24" rx="4" fill="#E53E3E" />
      <text x="359" y="72" textAnchor="middle" className="text-[8px] font-bold" fill="white">AI가 직접 인용</text>

      <defs>
        <marker id="seoArr" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <polygon points="0 0, 6 2.5, 0 5" fill="#9CA3AF" />
        </marker>
        <marker id="aeoArr" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <polygon points="0 0, 6 2.5, 0 5" fill="#2C5F8A" />
        </marker>
      </defs>
    </svg>
  );
}

/* ─── AEO Proposal Card ─── */
function AeoCard({
  num,
  title,
  current,
  proposal,
}: {
  num: number;
  title: string;
  current: string;
  proposal: string;
}) {
  return (
    <div className="flex gap-2">
      <span className="text-a4-lg font-bold text-accent leading-none mt-0.5">
        {num}
      </span>
      <div className="flex-1">
        <p className="text-a4-xs font-bold text-navy">{title}</p>
        <p className="text-[9px] text-red-600">
          현재: {current}
        </p>
        <p className="text-[9px] text-green-700">
          개선: {proposal}
        </p>
      </div>
    </div>
  );
}

/* ─── Timeline Step ─── */
function TimelineStep({
  period,
  title,
  items,
  isLast,
}: {
  period: string;
  title: string;
  items: string[];
  isLast?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
        {!isLast && <div className="w-[1.5px] flex-1 bg-navy-100" />}
      </div>
      <div className={isLast ? "" : "pb-2.5"}>
        <span className="text-[9px] font-bold text-accent">{period}</span>
        <p className="text-a4-xs font-bold text-navy">{title}</p>
        {items.map((item, i) => (
          <p key={i} className="text-[9px] text-navy-400">
            · {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export function CoilmasterAnalysisPage2({
  pageNumber,
}: {
  pageNumber: number;
}) {
  return (
    <A4Page pageNumber={pageNumber}>
      <div className="mb-1">
        <p className="text-a4-sm text-navy-300 font-medium">
          SITE ANALYSIS — coilmaster.com
        </p>
        <div className="mt-2 h-[2px] w-10 bg-accent" />
      </div>

      {/* PART B: AEO */}
      <div className="mb-4 mt-4">
        <h4 className="text-a4-lg font-bold text-navy mb-1 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          AEO(Answer Engine Optimization) 전략 제안
        </h4>
        <p className="text-a4-xs text-navy-400 mb-2 pl-4">
          2025년 구글 검색의 65%+ 가 제로클릭(클릭 없이 답변)으로 종료.
          AI 검색엔진(ChatGPT, Perplexity, Google AI Overview)에서
          코일마스터 콘텐츠가 &quot;답변&quot;으로 인용되도록 최적화하는 전략입니다.
        </p>

        {/* SEO vs AEO Diagram */}
        <div className="pl-4 mb-3">
          <SeoAeoDiagram />
        </div>

        {/* AEO Proposals */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 pl-4 mb-3">
          <AeoCard
            num={1}
            title="Schema Markup (구조화 데이터)"
            current="구조화 데이터 전무"
            proposal="Product Schema (JSON-LD) 전 제품 적용"
          />
          <AeoCard
            num={2}
            title="FAQ 콘텐츠 & FAQ Schema"
            current="교육/지식 콘텐츠 전무"
            proposal="엔지니어 FAQ → AI 검색에서 인용 유도"
          />
          <AeoCard
            num={3}
            title="제품 데이터 HTML화"
            current="스펙시트 PDF만 존재 (AI 크롤링 불가)"
            proposal="핵심 스펙을 HTML 텍스트로 노출"
          />
          <AeoCard
            num={4}
            title="Application Guide 콘텐츠"
            current="카테고리 나열만"
            proposal="분야별 상세 가이드 → AI Overview 인용"
          />
          <AeoCard
            num={5}
            title="브랜드 차별화 (vs 대만)"
            current="두 회사 구분 어려움"
            proposal="&quot;CoilMaster Korea&quot; + Organization Schema"
          />
        </div>

        {/* Schema example */}
        <div className="bg-navy-50 rounded-lg p-3 pl-4 mx-4">
          <p className="text-[9px] font-bold text-navy mb-1">
            Product Schema (JSON-LD) 예시
          </p>
          <pre className="text-[8px] text-navy-400 font-mono leading-relaxed">
{`{
  "@type": "Product",
  "name": "CMI-MMPF201608BC-R47M",
  "manufacturer": "CoilMaster Korea",
  "category": "Power Inductor",
  "additionalProperty": [
    {"name":"Inductance","value":"0.47","unitCode":"μH"},
    {"name":"DCR Max","value":"24","unitCode":"mΩ"},
    {"name":"Isat","value":"5.2","unitCode":"A"}
  ]
}`}
          </pre>
        </div>
      </div>

      {/* PART C: Roadmap */}
      <div>
        <h4 className="text-a4-lg font-bold text-navy mb-2 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          입사 후 개선 로드맵
        </h4>
        <div className="pl-4">
          <TimelineStep
            period="1개월차"
            title="SEO 기본기 정비"
            items={[
              "타이틀 태그 · Meta Description 전 페이지 최적화",
              "이미지 파일명/alt 텍스트 정리, Copyright 동적 연도",
            ]}
          />
          <TimelineStep
            period="2~3개월차"
            title="구조화 데이터 & URL 개선"
            items={[
              "Product / Organization Schema (JSON-LD) 적용",
              "필터 조건 URL 파라미터 반영, 제품 비교 기능 개발",
            ]}
          />
          <TimelineStep
            period="4~6개월차"
            title="AEO 콘텐츠 전략"
            items={[
              "FAQ 페이지 + FAQ Schema, Application Guide 시리즈",
              "제품 스펙 HTML화 (PDF 의존도 탈피), 기술 블로그 런칭",
            ]}
          />
          <TimelineStep
            period="6개월+"
            title="성과 측정 & 고도화"
            items={[
              "AI 검색 인용 모니터링 (ChatGPT, Perplexity 브랜드 언급 추적)",
              "Featured Snippet 획득률, 대만 Coilmaster 대비 검색 점유율 비교",
            ]}
            isLast
          />
        </div>
      </div>
    </A4Page>
  );
}
