import { TOTAL_PAGES } from "@/lib/constants";

interface A4PageProps {
  children: React.ReactNode;
  pageNumber: number;
  background?: "white" | "navy" | "muted";
  className?: string;
  noPadding?: boolean;
}

export default function A4Page({
  children,
  pageNumber,
  background = "white",
  className = "",
  noPadding = false,
}: A4PageProps) {
  const bgClass = {
    white: "bg-white",
    navy: "bg-navy",
    muted: "bg-surface-muted",
  }[background];

  return (
    <section
      className={`a4-page ${bgClass} ${className}`}
    >
      <div
        className={`relative h-full ${noPadding ? "" : "px-5 md:px-[76px] pt-8 md:pt-[60px] pb-10 md:pb-[72px]"}`}
      >
        {children}
      </div>
      {/* Page Number */}
      {background !== "navy" && (
        <div className="absolute bottom-6 left-0 right-0 text-center text-a4-xs text-navy-300">
          {pageNumber} / {TOTAL_PAGES}
        </div>
      )}
    </section>
  );
}
