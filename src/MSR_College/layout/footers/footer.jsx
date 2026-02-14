import Link from "next/link";
import FooterSocial from "./component/footer-social";

const footer_contents = {
  logoLight: "/assets/images/logo/logo-dark.png",
  logoDark: "/assets/images/logo/logo-white.png",
  // desc: 'Sri Shanmugha Educational Institutions',
  desc_list: [
    "Pullipalayam, Morur(P.O), Sankari (T.K). Salem(D.T.), Tamil Nadu– 637 304",
  ],
  call: "04283-359999",
  email: " info@shanmugha.edu.in",
  widgets: [
    {
      col: "3",
      class: "explore-widget",
      footer_links: [
        { link: "", title: "Posh Cell" },
        { link: "", title: "Feedback" },
        { link: "https://aakam360.com/", title: "Aakam360" },
        { link: "contact-us", title: "Women Empowerment Cell" },
      ],
    },
    {
      col: "2",
      class: "quick-link-widget",
      footer_links: [
        { link: "contact-us", title: "AICTE Approval Copies" },
        { link: "faq", title: "IIP Cell" },
        { link: "coming-soon", title: "Academics" },
        { link: "faq", title: "Grievances" },
        { link: "coming-soon", title: "Photo Gallery" },
      ],
    },
  ],
};

const { logoDark, logoLight, desc, add, call, email, widgets } =
  footer_contents;

const Footer = ({ style_2, dark_bg, home_4 }) => {
  return (
    <footer
      className={`edu-footer ${style_2 ? style_2 : dark_bg ? "footer-dark bg-image footer-style-3" : "footer-lighten bg-image footer-style-1"}`}
    >
    <div className="footer-top">
  <div className="container">
    <div className="row footer-3col">

      {/* ===== Column 1: Logo + Address + Phone ===== */}
      <div className="col-lg-4 col-md-12">
        <div className="edu-footer-widget footer-col-1">

          {/* Logo (same place always) */}
          <div className="logo mb-2">
            <Link href="/" legacyBehavior>
              <a>
                <img
                  src="/assets/images/logo/ahslogo.png"
                  alt="Sri Shanmugha Institute of Allied Health Science"
                  className="footer-logo"
                />
              </a>
            </Link>
          </div>

          {/* Minimal Address + Phone */}
          <div className="footer-contact-simple">
            <p>
              Pullipalayam, Morur (P.O), Sankari (T.K),  
              Salem (D.T), Tamil Nadu – 637304
            </p>

            <p>
              <strong>Phone:</strong> 04283-359999
            </p>
          </div>

        </div>
      </div>

      {/* ===== Column 2: Our Courses ===== */}
     <div className="col-lg-4 col-md-12">
        <div className="edu-footer-widget footer-col-2 text-center">
<h4 className="widget-title courses-title">Our Courses</h4>

<div className="footer-links-simple">
  <p>
    <Link href="/MSR/course/Cardiac_Technology">
      B.Sc. Cardiac Technology
    </Link>
  </p>

  <p>
    <Link href="/MSR/course/OTAT">
      B.Sc. Operation Theatre & Anesthesia Technology
    </Link>
  </p>

  <p>
    <Link href="/MSR/course/Radiology_Technology">
      B.Sc. Radiography & Imaging Technology
    </Link>
  </p>

  {/* <p>
    <Link href="/MSR/course/Laboratory">
      B.Sc. Medical Laboratory Technology
    </Link>
  </p>

  <p>
    <Link href="/MSR/course/Cardio_care">
    B.Sc.Cardio Pulmonary Perfusion Care Technology    </Link>
  </p>
    <p>
    <Link href="/MSR/course/Optometry">
      B.Sc. Optometry
    </Link>
  </p>
  <p>
    <Link href="/MSR/course/DHI">
    Diploma in Health Inspector
    </Link>
  </p>
    <p>
    <Link href="/MSR/course/BPT">
    Bachelor of Physiotherapy   </Link>
  </p>
    <p>
    <Link href="/MSR/course/BOT">
    Bachelor of Occupational Therapy
    </Link>
  </p> */}
</div>
        </div>
      </div>


      {/* ===== Column 3: Contact Us ===== */}
      <div className="col-lg-4 col-md-12">
        <div className="edu-footer-widget footer-col-3">
          <h4 className="widget-title">Contact Us</h4>

          <div className="footer-contact-simple">
            <p>📞 Admissions: 7373672999</p>
            <p>☎️ Office: 04283-359999</p>
            <p>✉️ info@shanmugha.edu.in</p>
            {/* <p>🕒 Mon – Sat: 9:00 AM – 5:00 PM</p> */}
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Copyright text */}
            <div className="col-md-6">
        <div className="inner text-start">
          <p className="mb-0">
            © {new Date().getFullYear()} Sri Shanmugha Institute of Allied Health Science.All rights reserved.
          </p>
        </div>
      </div>

            {/* Right: Social icons */}
            <div className="col-md-6">
              <div className="inner text-end">
                <ul className="social-share icon-transparent mb-0 d-inline-flex">
                  <FooterSocial />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
