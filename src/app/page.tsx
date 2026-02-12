import CoverPage from "@/components/pages/CoverPage";
import TocIntroPage from "@/components/pages/TocIntroPage";
import CareerPage from "@/components/pages/CareerPage";
import AiToolsPage from "@/components/pages/AiToolsPage";
import ProjectPages from "@/components/pages/ProjectPages";
import {
  CoilmasterAnalysisPage1,
  CoilmasterAnalysisPage2,
} from "@/components/pages/CoilmasterAnalysisPages";
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
      <AiToolsPage pageNumber={4} />
      <ProjectPages projects={data.projects} startPage={5} />
      <CoilmasterAnalysisPage1 pageNumber={11} />
      <CoilmasterAnalysisPage2 pageNumber={12} />
      <EducationPage data={data.education} pageNumber={13} />
      <ClosingPage author={data.cover.author} pageNumber={14} />
    </main>
  );
}
