import A4Page from "@/components/layout/A4Page";
import SectionTitle from "@/components/shared/SectionTitle";
import SkillBar from "@/components/shared/SkillBar";
import { Skills } from "@/data/schema";

interface SkillsPageProps {
  data: Skills;
}

export default function SkillsPage({ data }: SkillsPageProps) {
  return (
    <A4Page pageNumber={4}>
      <SectionTitle title="SKILLS" subtitle="핵심 역량" />

      <div className="grid grid-cols-2 gap-x-10 gap-y-6">
        {data.categories.map((cat, i) => (
          <div key={i}>
            <h3 className="text-a4-lg font-bold text-navy mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              {cat.name}
            </h3>
            <div>
              {cat.skills.map((skill, j) => (
                <SkillBar
                  key={j}
                  name={skill.name}
                  level={skill.level}
                  yearsOfExperience={skill.yearsOfExperience}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </A4Page>
  );
}
