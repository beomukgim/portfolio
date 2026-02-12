import CoverPage from "@/components/pages/CoverPage";
import TocIntroPage from "@/components/pages/TocIntroPage";
import CareerPage from "@/components/pages/CareerPage";
import SkillsPage from "@/components/pages/SkillsPage";
import ProjectPages from "@/components/pages/ProjectPages";
import EducationPage from "@/components/pages/EducationPage";
import ClosingPage from "@/components/pages/ClosingPage";
import portfolioData from "@/data/portfolio.json";
import { PortfolioData } from "@/data/schema";

const data = portfolioData as PortfolioData;

export default function PortfolioPage() {
  return (
    <main className="portfolio-container flex flex-col items-center gap-8 bg-gray-300 py-8 print:gap-0 print:bg-transparent print:py-0">
      <CoverPage data={data.cover} />
      <TocIntroPage data={data.introduction} />
      <CareerPage data={data.career} />
      <SkillsPage data={data.skills} />
      <ProjectPages projects={data.projects} startPage={5} />
      <EducationPage data={data.education} />
      <ClosingPage closing={data.closing} author={data.cover.author} />
    </main>
  );
}
