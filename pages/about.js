import Head from "next/head";

import Header from "../src/components/Header.components";
import Sidebar from "../src/components/Sidebar.components";
import HeroSection from "../src/components/HeroSection.components";

export default function About() {
  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner">
          <Header />

          <section>
            <header class="major">
              <h2>Ipsum sed dolor</h2>
            </header>
            <HeroSection/>
          </section>
        </div>
      </div>

      <Sidebar />
    </div>
  );
}
