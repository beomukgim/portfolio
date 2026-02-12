interface TagProps {
  label: string;
  variant?: "filled" | "outline";
}

export default function Tag({ label, variant = "filled" }: TagProps) {
  const cls =
    variant === "filled"
      ? "bg-navy-50 text-navy border-transparent"
      : "bg-transparent text-accent border-accent";

  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-a4-xs font-medium border ${cls}`}
    >
      {label}
    </span>
  );
}
