import A4Page from "@/components/layout/A4Page";
import SectionTitle from "@/components/shared/SectionTitle";
import Tag from "@/components/shared/Tag";
import { Project } from "@/data/schema";

interface ProjectPagesProps {
  projects: Project[];
  startPage: number;
}

export default function ProjectPages({ projects, startPage }: ProjectPagesProps) {
  return (
    <>
      {projects.map((project, idx) => {
        const page1 = startPage + idx * 2;
        const page2 = page1 + 1;

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
              <div className="mb-5">
                <p className="text-a4-base text-navy-400 leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Background */}
              <div className="mb-5">
                <h4 className="text-a4-lg font-semibold text-navy mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  배경 및 과제
                </h4>
                <p className="text-a4-sm text-navy-400 leading-relaxed pl-4">
                  {project.background}
                </p>
              </div>

              {/* Objectives */}
              <div className="mb-5">
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

              {/* Architecture */}
              {project.architecture && (
                <div>
                  <h4 className="text-a4-lg font-semibold text-navy mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    시스템 아키텍처
                  </h4>
                  <p className="text-a4-sm text-navy-400 mb-3 pl-4">
                    {project.architecture.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 pl-4">
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
              <div className="mb-6 mt-6">
                <h4 className="text-a4-lg font-semibold text-navy mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  주요 구현 사항
                </h4>
                <div className="space-y-4">
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
              <div className="mb-6">
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
              <div className="mb-5">
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
                <div>
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
            </A4Page>
          </div>
        );
      })}
    </>
  );
}
