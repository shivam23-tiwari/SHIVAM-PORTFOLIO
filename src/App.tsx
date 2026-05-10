/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Timeline } from "./components/Timeline";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Achievements } from "./components/Achievements";
import { WhyHireMe } from "./components/WhyHireMe";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="bg-black min-h-screen text-zinc-50 selection:bg-cyan-500/30 font-sans relative">
      <div className="bg-mesh"></div>
      <Header />
      <Hero />
      <About />
      <Timeline />
      <TechStack />
      <Projects />
      <Certifications />
      <Achievements />
      <WhyHireMe />
      <Footer />
    </main>
  );
}
