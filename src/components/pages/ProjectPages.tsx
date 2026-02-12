import A4Page from "@/components/layout/A4Page";
import SectionTitle from "@/components/shared/SectionTitle";
import Tag from "@/components/shared/Tag";
import { Project } from "@/data/schema";

interface ProjectPagesProps {
  projects: Project[];
  startPage: number;
}

/* ─── YogaFire Architecture SVG Diagram ─── */
function YogaFireArchDiagram() {
  return (
    <svg
      viewBox="0 0 580 200"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Row 1: Clients */}
      <rect x="0" y="0" width="120" height="52" rx="6" fill="#E8EEF4" stroke="#2C5F8A" strokeWidth="1.5" />
      <text x="60" y="20" textAnchor="middle" className="text-[10px] font-bold" fill="#1B3A5C">Web (Next.js 15)</text>
      <text x="60" y="35" textAnchor="middle" className="text-[8px]" fill="#4A5568">Client / Instructor</text>
      <text x="60" y="46" textAnchor="middle" className="text-[8px]" fill="#4A5568">Studio / Admin</text>

      <rect x="150" y="0" width="120" height="52" rx="6" fill="#E8EEF4" stroke="#2C5F8A" strokeWidth="1.5" />
      <text x="210" y="20" textAnchor="middle" className="text-[10px] font-bold" fill="#1B3A5C">Mobile (Flutter)</text>
      <text x="210" y="35" textAnchor="middle" className="text-[8px]" fill="#4A5568">iOS / Android</text>
      <text x="210" y="46" textAnchor="middle" className="text-[8px]" fill="#4A5568">Riverpod + GoRouter</text>

      {/* Arrow down from clients */}
      <line x1="135" y1="52" x2="135" y2="74" stroke="#2C5F8A" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

      {/* Row 2: Backend */}
      <rect x="60" y="76" width="150" height="44" rx="6" fill="#1B3A5C" />
      <text x="135" y="96" textAnchor="middle" className="text-[10px] font-bold" fill="white">Firebase Cloud Functions</text>
      <text x="135" y="110" textAnchor="middle" className="text-[8px]" fill="#A3BBD3">TypeScript / httpsCallable</text>

      {/* Arrow down from backend */}
      <line x1="100" y1="120" x2="70" y2="148" stroke="#2C5F8A" strokeWidth="1.2" markerEnd="url(#arrowhead)" />
      <line x1="135" y1="120" x2="135" y2="148" stroke="#2C5F8A" strokeWidth="1.2" markerEnd="url(#arrowhead)" />
      <line x1="170" y1="120" x2="200" y2="148" stroke="#2C5F8A" strokeWidth="1.2" markerEnd="url(#arrowhead)" />

      {/* Row 3: Services */}
      <rect x="0" y="150" width="110" height="44" rx="6" fill="#F8F9FA" stroke="#1B3A5C" strokeWidth="1" />
      <text x="55" y="170" textAnchor="middle" className="text-[9px] font-bold" fill="#1B3A5C">Firestore DB</text>
      <text x="55" y="183" textAnchor="middle" className="text-[7px]" fill="#4A5568">30+ Collections</text>

      <rect x="125" y="150" width="110" height="44" rx="6" fill="#F8F9FA" stroke="#1B3A5C" strokeWidth="1" />
      <text x="180" y="170" textAnchor="middle" className="text-[9px] font-bold" fill="#1B3A5C">Firebase Storage</text>
      <text x="180" y="183" textAnchor="middle" className="text-[7px]" fill="#4A5568">Video (2GB) / Images</text>

      {/* Right side: External services */}
      <rect x="320" y="76" width="130" height="44" rx="6" fill="#FFF7ED" stroke="#FF9900" strokeWidth="1.5" />
      <text x="385" y="96" textAnchor="middle" className="text-[10px] font-bold" fill="#1B3A5C">TossPayments</text>
      <text x="385" y="110" textAnchor="middle" className="text-[8px]" fill="#4A5568">카카오페이 / 네이버페이</text>

      <rect x="320" y="150" width="130" height="44" rx="6" fill="#F0FFF4" stroke="#4FC08D" strokeWidth="1.5" />
      <text x="385" y="170" textAnchor="middle" className="text-[10px] font-bold" fill="#1B3A5C">Firebase Auth</text>
      <text x="385" y="183" textAnchor="middle" className="text-[8px]" fill="#4A5568">RBAC Custom Claims</text>

      {/* Right side: Schema */}
      <rect x="470" y="0" width="110" height="52" rx="6" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="1.5" />
      <text x="525" y="18" textAnchor="middle" className="text-[9px] font-bold" fill="#1B3A5C">JSON Schema</text>
      <text x="525" y="32" textAnchor="middle" className="text-[7px]" fill="#4A5568">Single Source of Truth</text>
      <text x="525" y="44" textAnchor="middle" className="text-[7px]" fill="#7C3AED">→ Dart + TypeScript</text>

      {/* Connection arrows */}
      <line x1="210" y1="98" x2="318" y2="98" stroke="#FF9900" strokeWidth="1.2" strokeDasharray="4 2" markerEnd="url(#arrowOrange)" />
      <line x1="210" y1="98" x2="250" y2="170" stroke="#4FC08D" strokeWidth="1.2" strokeDasharray="4 2" />
      <line x1="320" y1="170" x2="237" y2="170" stroke="#4FC08D" strokeWidth="1.2" markerEnd="url(#arrowGreen)" />

      {/* Defs */}
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#2C5F8A" />
        </marker>
        <marker id="arrowOrange" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#FF9900" />
        </marker>
        <marker id="arrowGreen" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#4FC08D" />
        </marker>
      </defs>
    </svg>
  );
}

/* ─── Booking Lock Architecture SVG Diagram ─── */
function BookingLockArchDiagram() {
  return (
    <svg
      viewBox="0 0 580 170"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Row 1: OTA Sources */}
      <rect x="0" y="0" width="100" height="42" rx="6" fill="#E8EEF4" stroke="#2C5F8A" strokeWidth="1.5" />
      <text x="50" y="17" textAnchor="middle" className="text-[9px] font-bold" fill="#1B3A5C">네이버 예약</text>
      <text x="50" y="32" textAnchor="middle" className="text-[8px]" fill="#4A5568">Puppeteer 크롤링</text>

      <rect x="115" y="0" width="100" height="42" rx="6" fill="#E8EEF4" stroke="#2C5F8A" strokeWidth="1.5" />
      <text x="165" y="17" textAnchor="middle" className="text-[9px] font-bold" fill="#1B3A5C">떠나요 예약</text>
      <text x="165" y="32" textAnchor="middle" className="text-[8px]" fill="#4A5568">Puppeteer 크롤링</text>

      {/* Arrows down to Bull Queue */}
      <line x1="50" y1="42" x2="160" y2="62" stroke="#2C5F8A" strokeWidth="1.2" markerEnd="url(#bkArr)" />
      <line x1="165" y1="42" x2="160" y2="62" stroke="#2C5F8A" strokeWidth="1.2" markerEnd="url(#bkArr)" />

      {/* Row 2: NestJS + Bull Queue */}
      <rect x="80" y="64" width="160" height="42" rx="6" fill="#1B3A5C" />
      <text x="160" y="82" textAnchor="middle" className="text-[10px] font-bold" fill="white">NestJS 예약 서비스</text>
      <text x="160" y="96" textAnchor="middle" className="text-[8px]" fill="#A3BBD3">Bull Queue · 교차 중복 감지</text>

      {/* Arrow to Redis */}
      <line x1="240" y1="85" x2="310" y2="85" stroke="#E53E3E" strokeWidth="1.5" markerEnd="url(#bkArrRed)" />
      <text x="275" y="78" textAnchor="middle" className="text-[7px] font-bold" fill="#E53E3E">① 락 획득</text>

      {/* Redis Lock */}
      <rect x="312" y="64" width="120" height="42" rx="6" fill="#FFF5F5" stroke="#E53E3E" strokeWidth="1.5" />
      <text x="372" y="82" textAnchor="middle" className="text-[10px] font-bold" fill="#E53E3E">Redis (Redlock)</text>
      <text x="372" y="96" textAnchor="middle" className="text-[8px]" fill="#4A5568">분산 락 · TTL 관리</text>

      {/* Arrow down to PostgreSQL */}
      <line x1="160" y1="106" x2="160" y2="128" stroke="#2C5F8A" strokeWidth="1.5" markerEnd="url(#bkArr)" />
      <text x="175" y="122" className="text-[7px] font-bold" fill="#2C5F8A">② 트랜잭션</text>

      {/* Row 3: PostgreSQL */}
      <rect x="60" y="130" width="200" height="36" rx="6" fill="#F8F9FA" stroke="#1B3A5C" strokeWidth="1" />
      <text x="160" y="148" textAnchor="middle" className="text-[10px] font-bold" fill="#1B3A5C">PostgreSQL</text>
      <text x="160" y="160" textAnchor="middle" className="text-[7px]" fill="#4A5568">SELECT ... FOR UPDATE · SERIALIZABLE · 가용성 카운터</text>

      {/* Arrow Redis to PG */}
      <line x1="372" y1="106" x2="260" y2="135" stroke="#E53E3E" strokeWidth="1" strokeDasharray="4 2" />

      {/* Right side: AWS */}
      <rect x="470" y="0" width="110" height="42" rx="6" fill="#FFF7ED" stroke="#FF9900" strokeWidth="1.5" />
      <text x="525" y="17" textAnchor="middle" className="text-[9px] font-bold" fill="#1B3A5C">AWS EC2</text>
      <text x="525" y="32" textAnchor="middle" className="text-[8px]" fill="#FF9900">Docker · 오토스케일링</text>

      {/* Right side: Result */}
      <rect x="470" y="130" width="110" height="36" rx="6" fill="#F0FFF4" stroke="#38A169" strokeWidth="1.5" />
      <text x="525" y="148" textAnchor="middle" className="text-[9px] font-bold" fill="#38A169">중복 예약 0건</text>
      <text x="525" y="160" textAnchor="middle" className="text-[7px]" fill="#4A5568">정합성 99.99%</text>

      <line x1="260" y1="148" x2="468" y2="148" stroke="#38A169" strokeWidth="1.2" strokeDasharray="4 2" markerEnd="url(#bkArrGreen)" />

      <defs>
        <marker id="bkArr" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <polygon points="0 0, 6 2.5, 0 5" fill="#2C5F8A" />
        </marker>
        <marker id="bkArrRed" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <polygon points="0 0, 6 2.5, 0 5" fill="#E53E3E" />
        </marker>
        <marker id="bkArrGreen" markerWidth="6" markerHeight="5" refX="6" refY="2.5" orient="auto">
          <polygon points="0 0, 6 2.5, 0 5" fill="#38A169" />
        </marker>
      </defs>
    </svg>
  );
}

/* ─── WhoAmI Christian Architecture SVG Diagram ─── */
function WhoAmIArchDiagram() {
  return (
    <svg
      viewBox="0 0 580 200"
      className="w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Row 1: Frontend */}
      <rect x="0" y="0" width="140" height="52" rx="6" fill="#E8EEF4" stroke="#2C5F8A" strokeWidth="1.5" />
      <text x="70" y="20" textAnchor="middle" className="text-[10px] font-bold" fill="#1B3A5C">Web (Next.js 16)</text>
      <text x="70" y="35" textAnchor="middle" className="text-[8px]" fill="#4A5568">SSR · React 19</text>
      <text x="70" y="46" textAnchor="middle" className="text-[8px]" fill="#4A5568">Tailwind CSS v4</text>

      <rect x="160" y="0" width="120" height="52" rx="6" fill="#F5F3FF" stroke="#7C3AED" strokeWidth="1.5" />
      <text x="220" y="20" textAnchor="middle" className="text-[10px] font-bold" fill="#1B3A5C">next-intl</text>
      <text x="220" y="35" textAnchor="middle" className="text-[8px]" fill="#7C3AED">6개국어 지원</text>
      <text x="220" y="46" textAnchor="middle" className="text-[8px]" fill="#4A5568">ko/en/fr/es/it/pt</text>

      <rect x="300" y="0" width="120" height="52" rx="6" fill="#EBF8FF" stroke="#3182CE" strokeWidth="1.5" />
      <text x="360" y="20" textAnchor="middle" className="text-[10px] font-bold" fill="#1B3A5C">Recharts</text>
      <text x="360" y="35" textAnchor="middle" className="text-[8px]" fill="#3182CE">6축 레이더 차트</text>
      <text x="360" y="46" textAnchor="middle" className="text-[8px]" fill="#4A5568">성격 프로필 시각화</text>

      {/* Arrow down from frontend */}
      <line x1="140" y1="52" x2="140" y2="74" stroke="#2C5F8A" strokeWidth="1.5" markerEnd="url(#wArrow)" />

      {/* Row 2: Core Engine */}
      <rect x="40" y="76" width="200" height="44" rx="6" fill="#1B3A5C" />
      <text x="140" y="95" textAnchor="middle" className="text-[10px] font-bold" fill="white">사주 분석 엔진 (Server-only)</text>
      <text x="140" y="109" textAnchor="middle" className="text-[8px]" fill="#A3BBD3">天干地支 · 五行 · 4축 성격 분류 · 45인물 매칭</text>

      {/* Arrow down from engine */}
      <line x1="100" y1="120" x2="65" y2="148" stroke="#2C5F8A" strokeWidth="1.2" markerEnd="url(#wArrow)" />
      <line x1="140" y1="120" x2="180" y2="148" stroke="#2C5F8A" strokeWidth="1.2" markerEnd="url(#wArrow)" />
      <line x1="180" y1="120" x2="300" y2="148" stroke="#2C5F8A" strokeWidth="1.2" markerEnd="url(#wArrow)" />

      {/* Row 3: Services */}
      <rect x="0" y="150" width="120" height="44" rx="6" fill="#F8F9FA" stroke="#1B3A5C" strokeWidth="1" />
      <text x="60" y="170" textAnchor="middle" className="text-[9px] font-bold" fill="#1B3A5C">Supabase (PostgreSQL)</text>
      <text x="60" y="183" textAnchor="middle" className="text-[7px]" fill="#4A5568">sessions · results · orders</text>

      <rect x="135" y="150" width="120" height="44" rx="6" fill="#FFF5F5" stroke="#E53E3E" strokeWidth="1" />
      <text x="195" y="170" textAnchor="middle" className="text-[9px] font-bold" fill="#1B3A5C">Anthropic Claude API</text>
      <text x="195" y="183" textAnchor="middle" className="text-[7px]" fill="#E53E3E">5개 영역 맞춤 분석 리포트</text>

      <rect x="270" y="150" width="110" height="44" rx="6" fill="#F8F9FA" stroke="#1B3A5C" strokeWidth="1" />
      <text x="325" y="170" textAnchor="middle" className="text-[9px] font-bold" fill="#1B3A5C">PDF Export</text>
      <text x="325" y="183" textAnchor="middle" className="text-[7px]" fill="#4A5568">@react-pdf/renderer</text>

      {/* Right side: Payment */}
      <rect x="440" y="76" width="130" height="44" rx="6" fill="#FFF7ED" stroke="#FF9900" strokeWidth="1.5" />
      <text x="505" y="96" textAnchor="middle" className="text-[10px] font-bold" fill="#1B3A5C">TossPayments</text>
      <text x="505" y="110" textAnchor="middle" className="text-[8px]" fill="#4A5568">국내 결제 (KRW)</text>

      <rect x="440" y="150" width="130" height="44" rx="6" fill="#EBF8FF" stroke="#3182CE" strokeWidth="1.5" />
      <text x="505" y="170" textAnchor="middle" className="text-[10px] font-bold" fill="#1B3A5C">PayPal</text>
      <text x="505" y="183" textAnchor="middle" className="text-[8px]" fill="#4A5568">해외 결제 (USD)</text>

      {/* Connection arrows to payment */}
      <line x1="240" y1="98" x2="438" y2="98" stroke="#FF9900" strokeWidth="1.2" strokeDasharray="4 2" markerEnd="url(#wArrowOrange)" />
      <line x1="380" y1="170" x2="438" y2="170" stroke="#3182CE" strokeWidth="1.2" strokeDasharray="4 2" markerEnd="url(#wArrowBlue)" />

      {/* Defs */}
      <defs>
        <marker id="wArrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#2C5F8A" />
        </marker>
        <marker id="wArrowOrange" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#FF9900" />
        </marker>
        <marker id="wArrowBlue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#3182CE" />
        </marker>
      </defs>
    </svg>
  );
}

export default function ProjectPages({ projects, startPage }: ProjectPagesProps) {
  return (
    <>
      {projects.map((project, idx) => {
        const page1 = startPage + idx * 2;
        const page2 = page1 + 1;
        const isBookingLock = project.id === "booking-lock";
        const isYogafire = project.id === "yogafire";
        const isWhoami = project.id === "whoami-christian";

        return (
          <div key={project.id}>
            {/* Project Page 1: Overview + Architecture */}
            <A4Page pageNumber={page1}>
              <SectionTitle
                title={`PROJECT ${idx + 1}`}
                subtitle={project.subtitle}
              />

              {/* Project header */}
              <div className="mb-5">
                <h3 className="text-a4-xl font-bold text-navy mb-2">
                  {project.title}
                </h3>
                <div className="flex gap-6 text-a4-sm text-navy-300">
                  <span>
                    {project.period.start} — {project.period.end}
                  </span>
                  <span>{project.role}</span>
                  {project.teamSize && <span>팀원 {project.teamSize}명</span>}
                </div>
              </div>

              {/* Overview */}
              <div className="mb-4">
                <p className="text-a4-base text-navy-400 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Background */}
              <div className="mb-4">
                <h4 className="text-a4-lg font-semibold text-navy mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  배경 및 과제
                </h4>
                <p className="text-a4-sm text-navy-400 leading-relaxed pl-4">
                  {project.background}
                </p>
              </div>

              {/* Objectives */}
              <div className="mb-4">
                <h4 className="text-a4-lg font-semibold text-navy mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  목표
                </h4>
                <ul className="space-y-1 pl-4">
                  {project.objectives.map((obj, j) => (
                    <li
                      key={j}
                      className="text-a4-sm text-navy-400 flex items-start gap-2"
                    >
                      <span className="text-accent font-bold">{j + 1}.</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture - SVG for YogaFire, cards for others */}
              {project.architecture && (
                <div>
                  <h4 className="text-a4-lg font-semibold text-navy mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    시스템 아키텍처
                  </h4>

                  {isBookingLock ? (
                    <div className="pl-4">
                      <BookingLockArchDiagram />
                    </div>
                  ) : isYogafire ? (
                    <div className="pl-4">
                      <YogaFireArchDiagram />
                    </div>
                  ) : isWhoami ? (
                    <div className="pl-4">
                      <WhoAmIArchDiagram />
                    </div>
                  ) : (
                    <>
                      <p className="text-a4-sm text-navy-400 mb-3 pl-4">
                        {project.architecture.description}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4">
                        {project.architecture.components.map((comp, j) => (
                          <div
                            key={j}
                            className="bg-navy-50 rounded-lg p-3"
                          >
                            <p className="text-a4-sm font-semibold text-navy">
                              {comp.name}
                            </p>
                            <p className="text-a4-xs text-navy-300 mt-0.5">
                              {comp.description}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-1.5">
                              {comp.technologies.map((t) => (
                                <span
                                  key={t}
                                  className="text-[9px] px-1.5 py-0.5 bg-white rounded text-accent font-medium"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </A4Page>

            {/* Project Page 2: Implementation + Results */}
            <A4Page pageNumber={page2}>
              <div className="mb-1">
                <p className="text-a4-sm text-navy-300 font-medium">
                  PROJECT {idx + 1} — {project.title}
                </p>
                <div className="mt-2 h-[2px] w-10 bg-accent" />
              </div>

              {/* Implementation Highlights */}
              <div className="mb-5 mt-5">
                <h4 className="text-a4-lg font-semibold text-navy mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  주요 구현 사항
                </h4>
                <div className="space-y-3.5">
                  {project.implementation.highlights.map((h, j) => (
                    <div key={j} className="pl-4">
                      <h5 className="text-a4-base font-semibold text-navy mb-1">
                        {h.title}
                      </h5>
                      <p className="text-a4-sm text-navy-400 leading-relaxed">
                        {h.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div className="mb-5">
                <h4 className="text-a4-lg font-semibold text-navy mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  성과
                </h4>
                <table className="w-full text-a4-sm">
                  <thead>
                    <tr className="border-b-2 border-navy-100">
                      <th className="text-left py-2 font-semibold text-navy">
                        지표
                      </th>
                      <th className="text-center py-2 font-semibold text-navy">
                        Before
                      </th>
                      <th className="text-center py-2 font-semibold text-navy">
                        After
                      </th>
                      <th className="text-right py-2 font-semibold text-accent">
                        개선
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.results.map((r, j) => (
                      <tr
                        key={j}
                        className="border-b border-navy-50"
                      >
                        <td className="py-2 text-navy font-medium">
                          {r.metric}
                        </td>
                        <td className="py-2 text-center text-navy-300">
                          {r.before || "—"}
                        </td>
                        <td className="py-2 text-center text-navy font-semibold">
                          {r.after}
                        </td>
                        <td className="py-2 text-right text-accent font-bold">
                          {r.improvement}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-a4-lg font-semibold text-navy mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  사용 기술
                </h4>
                <div className="flex flex-wrap gap-1.5 pl-4">
                  {project.technologies.map((tech) => (
                    <Tag key={tech} label={tech} />
                  ))}
                </div>
              </div>

              {/* Lessons Learned */}
              {project.lessonsLearned && project.lessonsLearned.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-a4-lg font-semibold text-navy mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    배운 점
                  </h4>
                  <ul className="space-y-1 pl-4">
                    {project.lessonsLearned.map((lesson, j) => (
                      <li
                        key={j}
                        className="text-a4-sm text-navy-400 flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5 flex-shrink-0">&#9654;</span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Connection Point (코일마스터 연결) */}
              {project.connectionPoint && (
                <div className="bg-navy-50 border-l-4 border-accent rounded-r-lg p-4">
                  <h4 className="text-a4-sm font-bold text-accent mb-1">
                    코일마스터 연결 포인트
                  </h4>
                  <p className="text-a4-sm text-navy-400 leading-relaxed">
                    {project.connectionPoint}
                  </p>
                </div>
              )}
            </A4Page>
          </div>
        );
      })}
    </>
  );
}
