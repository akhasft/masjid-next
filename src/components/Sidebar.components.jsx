import Link from "next/link";
const Sidebar = () => {
  return (
    <>
      <div id="sidebar">
        <div class="inner">
          <section id="search" class="alt">
            <form method="post" action="#">
              <input type="text" name="query" id="query" placeholder="Search" />
            </form>
          </section>

          <nav id="menu">
            <header class="major">
              <h2>Menu</h2>
            </header>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/audio">
                  <a>Audio</a>
                </Link>
              </li>
              <li>
                <Link href="/videos">
                  <a>Video</a>
                </Link>
              </li>
              
              <li>
              <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>

          <section>
            <header class="major">
              <h2>Donation</h2>
            </header>
            <p>
            MASJID-E-AQSA AHLULHADEES – ASSALAFIYAH
            </p>
            <ul class="contact">
              <li class="icon solid fa-envelope">
              BANK: STATE BANK OF INDIA
              </li>
              <li class="icon solid fa-phone">ACCOUNT TYPE : CURRENT ACCOUNT</li>
              <li class="icon solid fa-phone">ACCOUNT NO: 62468232676</li>
              <li class="icon solid fa-phone">IFSC CODE : SBIN0017029</li>
              <li class="icon solid fa-phone">Vijayawada (A.P), India – +91 8341666103</li>
             
            </ul>
          </section>

          <section>
            <header class="major">
              <h2>Get in touch</h2>
            </header>
            <p>
              Sed varius enim lorem ullamcorper dolore aliquam aenean ornare
              velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed
              aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
              tempus aliquam.
            </p>
            <ul class="contact">
              <li class="icon solid fa-envelope">
                <a href="#">information@untitled.tld</a>
              </li>
              <li class="icon solid fa-phone">(000) 000-0000</li>
              <li class="icon solid fa-home">
                MASJID-E-AQSA Nunna Rd, PNT Colony, Vijayawada, Andhra Pradesh
                520015, India
              </li>
            </ul>
          </section>

          <footer id="footer">
            <p class="copyright">
               Design:{" "}<a href="https://html5up.net">AkhaSoft</a>.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
