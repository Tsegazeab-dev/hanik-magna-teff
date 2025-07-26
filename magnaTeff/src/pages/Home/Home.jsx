import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/images/logo/logo-magna-teff.webp";
import whiteLogo from "../../assets/images/logo/logo-magna-white.webp";
import injeraPic1 from "../../assets/images/misc/injera.webp";
import teffPic1 from "../../assets/images/misc/magna-teff-8.webp";
import hanikLogo from "../../assets/images/logo/Hanik-logo.webp";
import aboutPic1 from "../../assets/images/misc/magna-teff-1.webp";
import callToAction from "../../assets/images/misc/bg.webp";
import glutenFree from "../../assets/images/misc/gluten-free.png";
import productPackage from "../../assets/images/misc/magna-package.png";
import loveTeff from "../../assets/images/misc/magna-teff-7.webp";
import traditionalPicture from "../../assets/images/misc/magna-teff-10.webp";
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
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
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

      {/*  Welcome */}
      <section id="about">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="relative">
                <div className="rounded-1 bg-body w-90 overflow-hidden wow zoomIn welcome-images">
                  <img
                    src={teffPic1}
                    className="w-100 wow scaleIn"
                    alt="teff picture"
                  />
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

      {/* Call to action */}
      <section className="jarallax advert-hero">
        <img src={callToAction} className="jarallax-img" alt="background" />
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="sw-text-wrapper">
                <div className="subtitle">Teff</div>
                <h2 className="mb-2 text-uppercase">
                  Discover Teff
                  <span className="id-color-2">
                    {" "}
                    Ethiopia's Ancient Supergrain
                  </span>
                </h2>
                <p>
                  Fuel your body with Teff, an ancient Ethiopian grain (6,000+
                  years of history!) that powers elite runners. This naturally
                  gluten-free powerhouse is packed with slow-release carbs,
                  complete protein, iron, and fiber for sustained energy and gut
                  health. Unlock the benefits of this supergrain—try Teff today!
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="relative d-flex justify-content-center gluten-free-picture">
                <img src={glutenFree} alt="gluten-free-picture" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About us */}
      <section>
        <div className="container relative z-1">
          <div className="row g-4 gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="subtitle wow fadeInUp mb-3">Our Story</div>
              <h2 className="text-uppercase wow fadeInUp" data-wow-delay=".2s">
                Crafting <span className="id-color-2">Beautiful Gardens</span>{" "}
                Since '99
              </h2>
              <p className="wow fadeInUp">
                Established in 1999, our garden service has been transforming
                outdoor spaces into thriving, beautiful landscapes for over two
                decades. With a commitment to quality and personalized care, our
                experienced team offers a full range of services, from design to
                maintenance, ensuring your garden flourishes in every season.
              </p>
              <a
                className="btn-main btn-line wow fadeInUp"
                href="projects.html"
                data-wow-delay=".6s"
              >
                Our Projects
              </a>
            </div>

            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <img
                        src={aboutPic1}
                        className="w-100 rounded-1 wow zoomIn"
                        alt="ethiopian farmer"
                      />
                    </div>
                    <div className="col-lg-12">
                      <div className="rounded-1 relative bg-color-2 text-light p-4">
                        <img
                          src="images/icons/tree.png"
                          className="abs abs-middle w-60px"
                          alt=""
                        />
                        <div className="de_count ps-80 wow fadeInUp">
                          <h2 className="mb-0 fs-32">
                            <span
                              className="timer"
                              data-to="550"
                              data-speed="3000"
                            ></span>
                            +
                          </h2>
                          <span className="op-7">Garden Designed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <div className="rounded-1 relative bg-color-2 text-light p-4">
                        <img
                          src="images/icons/happy.png"
                          className="abs abs-middle w-60px"
                          alt=""
                        />
                        <div className="de_count ps-80 wow fadeInUp">
                          <h2 className="mb-0 fs-32">
                            <span
                              className="timer"
                              data-to="850"
                              data-speed="3000"
                            ></span>
                            +
                          </h2>
                          <span className="op-7">Happy Customers</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <img
                        src={aboutPic1}
                        className="w-100 rounded-1 wow zoomIn"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-light">
        <div className="container">
          <div className="row g-4 mb-3 align-items-center justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="subtitle wow fadeInUp">Why Choose Us</div>
              <h2 className="text-uppercase wow fadeInUp" data-wow-delay=".2s">
                Our Commitment to <span className="id-color-2">Quality</span>
              </h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp">
              <div className="relative h-100 bg-color text-light padding30 rounded-1">
                <img
                  src="images/logo-icon.webp"
                  className="w-50px mb-3"
                  alt=""
                />
                <div className="abs m-3 top-0 end-0 p-2 rounded-2 mb-3">01</div>
                <div>
                  <h4>Expertise and Tradition</h4>
                  <p className="mb-0">
                    With generations of farming knowledge and modern expertise,
                    our team is dedicated to deliver premium flour that meets
                    international quality benchmarks.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp">
              <div className="relative h-100 bg-color text-light padding30 rounded-1">
                <img
                  src="images/logo-icon.webp"
                  className="w-50px mb-3"
                  alt=""
                />
                <div className="abs m-3 top-0 end-0 p-2 rounded-2 mb-3">02</div>
                <div>
                  <h4>Solutions for Every Kitchen</h4>
                  <p className="mb-0">
                    Whether you're making traditional injera, gluten-free baked
                    goods, or innovative superfood creations, we provide the
                    perfect teff products for your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp">
              <div className="relative h-100 bg-color text-light padding30 rounded-1">
                <img
                  src="images/logo-icon.webp"
                  className="w-50px mb-3"
                  alt=""
                />
                <div className="abs m-3 top-0 end-0 p-2 rounded-2 mb-3">03</div>
                <div>
                  <h4>Complete Supply Chain Excellence</h4>
                  <p className="mb-0">
                    From Ethiopian family farms to your table, we maintain
                    rigorous quality control at every step to ensure consistent,
                    premium teff flour worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp">
              <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                <img
                  src="images/logo-icon.webp"
                  className="w-50px mb-3"
                  alt=""
                />
                <div className="abs m-3 top-0 end-0 p-2 rounded-2 mb-3">04</div>
                <div>
                  <h4>Naturally Superior Quality</h4>
                  <p className="mb-0">
                    We adhere to the highest standards in cultivation, milling,
                    and packaging. Only the purest, non-GMO teff grains are
                    selected to deliver superior taste and nutrition.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp">
              <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                <img
                  src="images/logo-icon.webp"
                  className="w-50px mb-3"
                  alt=""
                />
                <div className="abs m-3 top-0 end-0 p-2 rounded-2 mb-3">05</div>
                <div>
                  <h4>Sustainable & Ethical Farming</h4>
                  <p className="mb-0">
                    We are committed to eco-friendly practices, including
                    organic farming, water conservation, and supporting local
                    Ethiopian farmers through fair trade partnerships.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp">
              <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                <img
                  src="images/logo-icon.webp"
                  className="w-50px mb-3"
                  alt=""
                />
                <div className="abs m-3 top-0 end-0 p-2 rounded-2 mb-3">06</div>
                <div>
                  <h4>Customer Satisfaction Guaranteed</h4>
                  <p className="mb-0">
                    Your trust is our priority. We take pride in delivering
                    authentic, nutrient-rich teff flour, backed by the
                    satisfaction of countless happy customers worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products  */}
      <section id="products">
        <div className="container">
          <div className="row g-4 mb-3 align-items-center justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="subtitle wow fadeInUp">Our Products</div>
              <h2 className="text-uppercase wow fadeInUp" data-wow-delay=".2s">
                Our Export Standard <span className="id-color-2">Products</span>
              </h2>
            </div>
          </div>
          <div className="row g-4 mb-4">
            <div className="col-lg-12">
              <div
                className="owl-custom-nav menu-"
                data-target="#best-seller-carousel"
              >
                {/* <div className="d-flex justify-content-end mb-3">
                  <div className="arrow-simple">
                    <a className="btn-prev me-2">
                      <FaAngleLeft size={20} />
                    </a>
                    <a className="btn-next ms-2">
                      <FaAngleRight size={20} />
                    </a>
                  </div>
                </div> */}

                <div
                  id="best-seller-carousel"
                  className="owl-carousel owl-3-cols"
                >
                  {/* product item */}
                  <div className="item">
                    <div className="de__pcard text-center">
                      <div className="atr__images">
                        <img className="atr__image-main" src={productPackage} />
                        <img
                          className="atr__image-hover"
                          src={productPackage}
                        />
                      </div>

                      <div className="de-rating-ext">
                        <h3>Nech Teff</h3>
                      </div>

                      <h3>(ነጭ ጤፍ)</h3>
                    </div>
                  </div>

                  {/* product item  */}
                  <div className="item">
                    <div className="de__pcard text-center">
                      <div className="atr__images">
                        <img className="atr__image-main" src={productPackage} />
                        <img
                          className="atr__image-hover"
                          src={productPackage}
                        />
                      </div>

                      <div className="de-rating-ext">
                        <h3>Sergegna Teff</h3>
                      </div>

                      <h3>(ሰርገኛ ጤፍ)</h3>
                    </div>
                  </div>

                  {/* product item */}
                  <div className="item">
                    <div className="de__pcard text-center">
                      <div className="atr__images">
                        <img className="atr__image-main" src={productPackage} />
                        <img
                          className="atr__image-hover"
                          src={productPackage}
                        />
                      </div>

                      <div className="de-rating-ext">
                        <h3>Key Teff</h3>
                      </div>

                      <h3>(ቀይ ጤፍ)</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="jarallax advert-hero">
        <img src={callToAction} className="jarallax-img" alt="background" />
        <div className="container">
          <div className="row g-4 align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="sw-text-wrapper">
                <div className="subtitle">Importance of Teff</div>
                <h2 className="mb-4 text-uppercase">
                  Powerful Health Benefits of Teff
                </h2>
                <ul className="no-style benefits-of-teff-list">
                  <li>
                    <FaCheckCircle size={20} color="#d4a373" /> Protein & Fiber
                    Powerhouse
                  </li>
                  <li>
                    <FaCheckCircle size={20} color="#d4a373" /> Naturally
                    Gluten-Free Nutrition
                  </li>
                  <li>
                    <FaCheckCircle size={20} color="#d4a373" />
                    Rich in Essential Vitamins & Minerals
                  </li>
                  <li>
                    <FaCheckCircle size={20} color="#d4a373" /> Versatile for
                    baking & Cooking
                  </li>
                  <li>
                    <FaCheckCircle size={20} color="#d4a373" /> Delicious Taste
                    & Pleasant Texture
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="relative d-flex justify-content-center gluten-free-picture">
                <img src={loveTeff} alt="gluten-free-picture" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact us  */}
      <section className="contact-us" id="contact">
        <div className="container">
          <div className="row g-4 mb-3 align-items-center justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="subtitle wow fadeInUp">Get in touch</div>
              <h2 className="text-uppercase wow fadeInUp" data-wow-delay=".2s">
                Contact <span className="id-color-2">Us</span>
              </h2>
            </div>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <h3 className="wow fadeInUp">Let's connect!</h3>

              <p>
                Have questions about our premium teff flour? Exploring wholesale
                opportunities? We’d love to hear from you! Fill out the form and
                our dedicated team will get back to you promptly. At Magna Teff,
                we’re proud to deliver Ethiopia’s finest teff—nourishing,
                gluten-free, and packed with natural goodness. Let’s grow
                together—reach out today!
              </p>

              <div className="spacer-single"></div>

              <div className="rounded-1 bg-light overflow-hidden">
                <div className="row g-2">
                  <div className="col-sm-6">
                    <div
                      className="auto-height relative"
                      data-bgimage="url(src/assets/images/misc/magna-teff-10.webp)"
                    ></div>
                  </div>
                  <div className="col-sm-6 relative">
                    <div className="p-30">
                      <div className="fw-bold text-dark">
                        <FaRegClock className="me-2" />
                        We're Open
                      </div>
                      Monday - Friday 08.00 - 18.00
                      <div className="spacer-20"></div>
                      <div className="fw-bold text-dark">
                        <MdLocationOn size={20} className="me-2" />
                        Office Location
                      </div>
                      100 S Main St, New York, NY
                      <div className="spacer-20"></div>
                      <div className="fw-bold text-dark">
                        <FaPhoneAlt className="me-2" />
                        Call Us Directly
                      </div>
                      +1 123 456 789
                      <div className="spacer-20"></div>
                      <div className="fw-bold text-dark">
                        <MdOutlineEmail size={20} className="me-2" />
                        Send a Message
                      </div>
                      contact@gardyn.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-4 rounded-10px">
                <form
                  name="contactForm"
                  id="contact_form"
                  className="position-relative z1000"
                  method="post"
                  action="contact.php"
                >
                  <div className="field-set">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="field-set">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="field-set">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                      placeholder="Your Phone"
                      required
                    />
                  </div>

                  <div className="field-set mb20">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  <div
                    className="g-recaptcha"
                    data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"
                  ></div>
                  <div id="submit" className="mt20">
                    <input
                      type="submit"
                      id="send_message"
                      value="Send Message"
                      className="btn-main"
                    />
                  </div>

                  <div id="success_message" className="success">
                    Your message has been sent successfully. Refresh this page
                    if you want to send more messages.
                  </div>
                  <div id="error_message" className="error">
                    Sorry there was an error sending your form.
                  </div>
                </form>
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
