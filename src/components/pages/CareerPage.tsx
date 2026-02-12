import A4Page from "@/components/layout/A4Page";
import SectionTitle from "@/components/shared/SectionTitle";
import Tag from "@/components/shared/Tag";
import { Career } from "@/data/schema";

interface CareerPageProps {
  data: Career;
}

export default function CareerPage({ data }: CareerPageProps) {
  return (
    <A4Page pageNumber={3}>
      <SectionTitle title="CAREER" subtitle="경력 사항" />

      <div className="space-y-8">
        {data.entries.map((entry, i) => (
          <div key={i} className="relative pl-6 border-l-2 border-accent">
            {/* Timeline dot */}
            <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-accent" />

            {/* Header */}
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-a4-xl font-bold text-navy">
                  {entry.company}
                </h3>
                <p className="text-a4-base font-semibold text-accent">
                  {entry.position}
                  {entry.department && (
                    <span className="text-navy-300 font-normal">
                      {" "}| {entry.department}
                    </span>
                  )}
                </p>
              </div>
              <span className="text-a4-sm text-navy-300 font-medium whitespace-nowrap ml-4">
                {entry.period.start} — {entry.period.end}
              </span>
            </div>

            {/* Description */}
            <p className="text-a4-sm text-navy-400 mb-3">{entry.description}</p>

            {/* Achievements */}
            <ul className="space-y-1.5 mb-4">
              {entry.achievements.map((achievement, j) => (
                <li
                  key={j}
                  className="text-a4-sm text-navy-400 flex items-start gap-2"
                >
                  <span className="text-accent mt-1 flex-shrink-0">&#9654;</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5">
              {entry.technologies.map((tech) => (
                <Tag key={tech} label={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </A4Page>
  );
}
