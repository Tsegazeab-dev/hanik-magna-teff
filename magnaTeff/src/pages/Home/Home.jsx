import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/images/logo/logo-magna-teff.webp";
import whiteLogo from "../../assets/images/logo/logo-magna-white.webp";
import injeraPic1 from "../../assets/images/misc/injera.webp"
import teffPic1 from "../../assets/images/misc/magna-teff-8.webp"
import hanikLogo from "../../assets/images/logo/Hanik-logo.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GoIssueClosed } from "react-icons/go";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaRegClock,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false); // New state for media query

  // Ref for the header element
  const headerRef = useRef(null);

  // Handling responsive view (window.matchMedia)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 992px)");

    const handleMediaQueryChange = (e) => {
      setIsMobileView(e.matches);
      // If we transition OUT of mobile view, ensure menu is closed and styles reset
      if (!e.matches && isMenuOpen) {
        setIsMenuOpen(false);
        if (headerRef.current) {
          headerRef.current.style.height = "auto"; // Reset height
        }
      }
    };

    // Initial check
    handleMediaQueryChange(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [isMenuOpen]);

  // Effect for applying dynamic height based on menu state and mobile view
  useEffect(() => {
    if (headerRef.current && isMobileView) {
      if (isMenuOpen) {
        headerRef.current.style.height = `${window.innerHeight}px`;
        // Prevent scrolling on body when menu is open
        document.body.style.overflow = "hidden";
      } else {
        headerRef.current.style.height = "auto";
        document.body.style.overflow = ""; // Reset body overflow
      }
    } else if (headerRef.current && !isMobileView) {
      // Ensure height is auto when not in mobile view
      headerRef.current.style.height = "auto";
      document.body.style.overflow = ""; // Ensure body overflow is reset
    }
  }, [isMenuOpen, isMobileView]);

  //  Menu open/close toggle
  const toggleMenu = () => {
    // Only toggle if in mobile view
    if (isMobileView) {
      setIsMenuOpen((prev) => !prev);
    }
  };
  return (
    <>
      {/*  Header */}
      <header>
        <div className="container">
          <div className="row d-flex align-items-center header-content">
            <div className="col-md-12">
              <div className="de-flex sm-pt10 align-items-center">
                <div className="de-flex-col">
                  {/*  Logo   */}
                  <div id="logo">
                    <Link to="/">
                      <img className="logo-main" src={logo} alt="" />
                      <img className="logo-mobile" src={logo} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="de-flex-col header-col-mid">
                  {/* main menu  */}
                  <ul id="mainmenu">
                    <li>
                      <Link className="menu-item" to="/">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="menu-item" to="#about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="menu-item" to="#products">
                        Products
                      </Link>
                    </li>

                    <li>
                      <Link className="menu-item" to="#contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="de-flex-col">
                  <div className="menu_side_area">
                    <Link
                      to="#contact"
                      className="btn-main btn-line d-none d-sm-inline-block"
                    >
                      Get In Touch
                    </Link>
                    <span id="menu-btn" onClick={toggleMenu}>
                      {isMenuOpen ? (
                        <IoCloseCircleOutline />
                      ) : (
                        <GiHamburgerMenu />
                      )}
                    </span>
                  </div>

                  <div id="btn-extra">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/*  About us start */}
      <section id="about">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="relative">
                <div className="rounded-1 bg-body w-90 overflow-hidden wow zoomIn welcome-images">
                  <img src={teffPic1} className="w-100 wow scaleIn" alt="teff picture" />
                </div>
                <div
                  className="rounded-1 bg-body w-50 abs mb-min-50 end-0 bottom-0 z-2 overflow-hidden shadow-soft wow zoomIn welcome-images"
                  data-wow-delay=".2s"
                >
                  <img
                    src={injeraPic1}
                    className="w-100 wow scaleIn"
                    data-wow-delay=".2s"
                    alt="injera"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-lg-3 mt-5 mt-md-0">
                <div
                  className="subtitle id-color wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  Welcome to Magna Teff
                </div>
                <h2
                  className="text-uppercase wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  Taste{" "}
                  <span className="id-color-2">the Original Supergrain</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".6s">
                  Discover the essence of Ethiopian cuisine with our authentic,
                  gluten-free teff flour. Packed with nutrients and flavor, it’s
                  perfect for a variety of culinary delights—whether you’re
                  baking traditional injera, crafting gluten-free treats, or
                  experimenting with ancient superfoods. We take pride in
                  delivering the highest quality teff, trusted by chefs, health
                  enthusiasts, and home cooks around the globe. Let us bring the
                  rich heritage and wholesome goodness of Ethiopian teff to your
                  table, transforming every meal into a delightful experience.
                </p>
                <a
                  className="btn-main btn-line wow fadeInUp"
                  href="#products"
                  data-wow-delay=".6s"
                >
                  Our products
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-dark">
        <div className="container relative z-2">
          <div className="row gx-5">
            <div className="col-lg-5">
              <img src={whiteLogo} className="w-200px" alt="logo" />
              <div className="spacer-20"></div>
              <p>
                Transform your kitchen with our premium teff flour! From farm to
                table, we produce and sell high-quality teff flour, perfect for
                healthy, gluten-free baking. Whether you're making traditional
                injera, bread, or other delicious recipes, our teff flour is
                finely ground for exceptional results. Trusted, reliable, and
                passionate about wholesome nutrition—let us bring the goodness
                of teff to your table
              </p>

              <div className="social-icons mb-sm-30">
                <a href="#" target="_blank">
                  <FaFacebookF />
                </a>
                <a href="#" target="_blank">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#" target="_blank">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            <div className="col-lg-4"></div>
            <div className="d-none col-lg-3 order-lg-2 order-sm-1 d-lg-flex justify-content-center align-items-center">
              <div className="widget">
                <div>
                  <FaRegClock className="me-2" />
                  We're Open
                </div>
                Monday - Friday 08.00 - 18.00
                <div className="spacer-10"></div>
                <div>
                  <MdLocationOn size={20} className="me-2" />
                  Office Location
                </div>
                100 S Main St, New York, NY
                <div className="spacer-10"></div>
                <div>
                  <MdOutlineEmail size={20} className="me-2" />
                  Send a Message
                </div>
                contact@gardyn.com
              </div>
            </div>
          </div>
        </div>
        <div className="subfooter">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-12">
                <div className="de-flex footer-copyright">
                  <div className="de-flex-col">
                    <div className="me-2 footer-copyright">
                      ©2025 Magna Teff. All rights reserved.
                    </div>
                  </div>
                  <div className="d-flex gap-2 align-items-center justify-content-center">
                    <div className="developed-by-logo">
                      <img
                        src={hanikLogo}
                        alt="developer company Logo"
                        className="logo"
                      />
                    </div>
                    <div className="">Hanik Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Overlay content */}
      <div id="extra-wrap" className="text-light">
        <div id="btn-close">
          <span></span>
          <span></span>
        </div>

        <div id="extra-content">
          <img src={whiteLogo} className="w-150px" alt="" />

          <div className="spacer-30-line"></div>

          <h5>About Us</h5>
          <p>
            Transform your kitchen with our premium teff flour! From farm to
            table, we produce and sell high-quality teff flour, perfect for
            healthy, gluten-free baking. Whether you're making traditional
            injera, bread, or other delicious recipes, our teff flour is finely
            ground for exceptional results. Trusted, reliable, and passionate
            about wholesome nutrition—let us bring the goodness of teff to your
            table
          </p>

          <div className="spacer-30-line"></div>

          <h5>Why Teff is Important?</h5>
          <ul className="no-style importance-list">
            <li>
              <GoIssueClosed /> Highly Nutritious
            </li>
            <li>
              <GoIssueClosed /> Gluten-Free
            </li>
            <li>
              <GoIssueClosed /> Energy-Boosting
            </li>
            <li>
              <GoIssueClosed /> Sustainable Crop
            </li>
            <li>
              <GoIssueClosed /> Versatile in Cooking
            </li>
            <li>
              <GoIssueClosed /> Supports Health
            </li>
            <li>
              <GoIssueClosed /> Supports Farmers
            </li>
          </ul>

          <div className="spacer-30-line"></div>

          <h5>Contact Us</h5>
          <div className="d-flex align-items-center">
            <FaRegClock className="me-2" />
            Monday - Friday 08.00 - 18.00
          </div>
          <div className="d-flex align-items-center">
            <MdLocationOn className="me-2" />
            100 S Main St, New York,
          </div>
          <div className="d-flex align-items-center">
            <MdOutlineEmail className="me-2" />
            contact@magnateff.com
          </div>

          <div className="social-icons mt-2">
            <a href="#" target="_blank">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank">
              <FaInstagram />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#" target="_blank">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
