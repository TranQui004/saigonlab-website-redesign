import { Header, Footer } from "@/components/layout";
import { Hero, Features, Partners, NewsletterSignup } from "@/components/features/home";
import { Courses } from "@/components/features/courses";
import { Faculty } from "@/components/features/faculty";
import { News } from "@/components/features/news";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Features />
      <Courses />
      <Faculty />
      <News />
      <Partners />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}
