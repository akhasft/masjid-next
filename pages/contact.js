import Head from "next/head";

import Header from "../src/components/Header.components";
import Sidebar from "../src/components/Sidebar.components";
import HeroSection from "../src/components/HeroSection.components";

export default function Contact() {
  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner">
          <Header />

         
        


          <section>
            <header class="major">
              <h2>Ipsum sed dolor</h2>
            </header>
            <div class="posts">
              <article>
                <a href="#" class="image">
                  <img src="images/pic01.jpg" alt="" />
                </a>
                <h3>Interdum aenean</h3>
                <p>
                  Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                  dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                  lorem feugiat tempus aliquam.
                </p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">
                      More
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="images/pic02.jpg" alt="" />
                </a>
                <h3>Nulla amet dolore</h3>
                <p>
                  Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                  dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                  lorem feugiat tempus aliquam.
                </p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">
                      More
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="images/pic03.jpg" alt="" />
                </a>
                <h3>Tempus ullamcorper</h3>
                <p>
                  Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                  dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                  lorem feugiat tempus aliquam.
                </p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">
                      More
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="images/pic04.jpg" alt="" />
                </a>
                <h3>Sed etiam facilis</h3>
                <p>
                  Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                  dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                  lorem feugiat tempus aliquam.
                </p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">
                      More
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="images/pic05.jpg" alt="" />
                </a>
                <h3>Feugiat lorem aenean</h3>
                <p>
                  Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                  dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                  lorem feugiat tempus aliquam.
                </p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">
                      More
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="images/pic06.jpg" alt="" />
                </a>
                <h3>Amet varius aliquam</h3>
                <p>
                  Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                  dolore. Proin aliquam facilisis ante interdum. Sed nulla amet
                  lorem feugiat tempus aliquam.
                </p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">
                      More
                    </a>
                  </li>
                </ul>
              </article>
            </div>
          </section>
        </div>
      </div>

      <Sidebar />
    </div>
  );
}
