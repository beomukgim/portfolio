interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <h2 className="text-a4-2xl font-bold text-navy">{title}</h2>
      {subtitle && (
        <p className="text-a4-base text-navy-300 mt-1">{subtitle}</p>
      )}
      <div className="mt-3 h-[3px] w-16 bg-accent" />
    </div>
  );
}
