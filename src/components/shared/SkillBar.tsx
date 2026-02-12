interface SkillBarProps {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
  yearsOfExperience?: number;
}

export default function SkillBar({ name, level, yearsOfExperience }: SkillBarProps) {
  const width = `${(level / 5) * 100}%`;

  return (
    <div className="mb-2.5">
      <div className="flex justify-between items-center mb-1">
        <span className="text-a4-sm font-medium text-navy">{name}</span>
        {yearsOfExperience && (
          <span className="text-a4-xs text-navy-300">{yearsOfExperience}년</span>
        )}
      </div>
      <div className="h-2 bg-navy-50 rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all"
          style={{ width }}
        />
      </div>
    </div>
  );
}
