import { Closing, Cover } from "@/data/schema";

interface ClosingPageProps {
  closing: Closing;
  author: Cover["author"];
}

export default function ClosingPage({ closing, author }: ClosingPageProps) {
  return (
    <section className="a4-page bg-navy">
      <div className="relative h-full flex flex-col justify-center px-[76px] text-white">
        {/* Decorative top line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

        {/* Core values */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {closing.coreValues.map((val, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-a4-xl font-bold text-accent-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h4 className="text-a4-lg font-bold mb-2">{val.title}</h4>
              <p className="text-a4-xs text-navy-200 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing message */}
        <div className="border-t border-navy-400 pt-10">
          <div className="space-y-4 mb-10">
            {closing.message.map((para, i) => (
              <p
                key={i}
                className="text-a4-base text-navy-100 leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>

          <p className="text-a4-xl font-bold text-center text-white mb-8">
            {closing.callToAction}
          </p>
        </div>

        {/* Contact info */}
        <div className="absolute bottom-16 left-[76px] right-[76px]">
          <div className="border-t border-navy-400 pt-6 flex justify-center gap-8 text-a4-sm text-navy-200">
            <span>{author.email}</span>
            <span>{author.phone}</span>
            {author.github && <span>{author.github}</span>}
          </div>
        </div>

        {/* Page number */}
        <div className="absolute bottom-6 left-0 right-0 text-center text-a4-xs text-navy-400">
          12 / 12
        </div>

        {/* Decorative bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent" />
      </div>
    </section>
  );
}
