import A4Page from "@/components/layout/A4Page";
import SectionTitle from "@/components/shared/SectionTitle";
import { Education } from "@/data/schema";

interface EducationPageProps {
  data: Education;
  pageNumber?: number;
}

export default function EducationPage({ data, pageNumber = 13 }: EducationPageProps) {
  return (
    <A4Page pageNumber={pageNumber}>
      <SectionTitle title="EDUCATION" subtitle="교육 및 자격" />

      {/* Degrees */}
      <div className="mb-8">
        <h3 className="text-a4-lg font-bold text-navy mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          학력
        </h3>
        {data.degrees.map((deg, i) => (
          <div
            key={i}
            className="ml-4 pl-5 border-l-2 border-navy-100 mb-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-a4-base font-bold text-navy">
                  {deg.institution}
                </p>
                <p className="text-a4-sm text-navy-400">
                  {deg.degree} · {deg.major}
                </p>
                {deg.gpa && (
                  <p className="text-a4-xs text-navy-300 mt-0.5">학점: {deg.gpa}</p>
                )}
                {deg.note && (
                  <p className="text-a4-xs text-accent mt-0.5">{deg.note}</p>
                )}
              </div>
              <span className="text-a4-sm text-navy-300 whitespace-nowrap ml-4">
                {deg.period.start} — {deg.period.end}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mb-8">
        <h3 className="text-a4-lg font-bold text-navy mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          자격증
        </h3>
        <div className="ml-4 grid grid-cols-2 gap-3">
          {data.certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-navy-50 rounded-lg p-4"
            >
              <p className="text-a4-sm font-bold text-navy">{cert.name}</p>
              <p className="text-a4-xs text-navy-300 mt-1">{cert.issuer}</p>
              <p className="text-a4-xs text-accent mt-0.5">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Courses */}
      {data.courses && data.courses.length > 0 && (
        <div>
          <h3 className="text-a4-lg font-bold text-navy mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            교육 이수
          </h3>
          <div className="ml-4 space-y-3">
            {data.courses.map((course, i) => (
              <div
                key={i}
                className="flex justify-between items-center border-b border-navy-50 pb-2"
              >
                <div>
                  <p className="text-a4-sm font-medium text-navy">
                    {course.name}
                  </p>
                  <p className="text-a4-xs text-navy-300">{course.provider}</p>
                </div>
                <span className="text-a4-xs text-accent">{course.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </A4Page>
  );
}
