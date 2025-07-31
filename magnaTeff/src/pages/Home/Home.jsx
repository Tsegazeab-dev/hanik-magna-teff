import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/images/logo/logo-magna-teff.webp";
import whiteLogo from "../../assets/images/logo/logo-magna-white.webp";
import injeraPic1 from "../../assets/images/misc/injera.webp";
import teffPic1 from "../../assets/images/misc/magna-teff-8.webp";
import hanikLogo from "../../assets/images/logo/Hanik-logo.webp";
import aboutPic1 from "../../assets/images/misc/happy-ethiopian-farmer.webp";
import callToAction from "../../assets/images/misc/bg.webp";
import glutenFree from "../../assets/images/misc/gluten-free.webp";
import whiteTeffPackage from "../../assets/images/misc/white-teff-package.webp";
import brownTeffPackage from "../../assets/images/misc/brown-teff-pack.webp";
import sergegnaTeffPackage from "../../assets/images/misc/sergegna-teff-package.webp";
import ethiopianTeff from "../../assets/images/misc/ethiopian-teff.webp";
import teffFlour from "../../assets/images/misc/magna-teff-3.webp";
import plantIcon from "../../assets/images/logo/logo-icon.webp";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GoIssueClosed } from "react-icons/go";
import { MdGrain, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowUp,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaMedal,
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
    const handleScroll = () => {
      if (isMenuOpen && isMobileView) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen, isMobileView]);

  //  Menu open/close toggle
  const toggleMenu = () => {
    // Only toggle if in mobile view
    if (isMobileView) {
      setIsMenuOpen((prev) => !prev);
    }
  };

  // Scroll to top
  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scrolling
    });
  };
  return (
    <>
      <Link to="/" id="back-to-top">
        <FaArrowUp />
      </Link>

      {/* preloader */}
      <div id="de-loader"></div>
      {/*  Header */}
      <header className="transparent">
        <div className="container">
          <div className="row d-flex align-items-center header-content">
            <div className="col-md-12">
              <div className="de-flex sm-pt10 align-items-center">
                <div className="de-flex-col">
                  {/*  Logo   */}
                  <div id="logo">
                    <Link to="/" onClick={handleHomeClick}>
                      <img className="logo-main" src={logo} alt="logo" />
                      <img className="logo-mobile" src={logo} alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="de-flex-col header-col-mid">
                  {/* main menu  */}
                  <ul id="mainmenu">
                    <li>
                      <Link
                        className="menu-item"
                        to="/"
                        onClick={handleHomeClick}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <a className="menu-item" href="#about">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="menu-item" href="#products">
                        Products
                      </a>
                    </li>

                    <li>
                      <a className="menu-item" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="de-flex-col">
                  <div className="menu_side_area">
                    <a
                      href="#contact"
                      className="btn-main btn-line d-none d-sm-inline-block"
                    >
                      Get In Touch
                    </a>
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

      {/* Hero Section */}
      <section
        id="section-intro"
        className="slider-light no-top no-bottom relative overflow-hidden z-1000"
      >
        <div className="v-center relative">
          <div className="swiper">
            {/* <!-- Additional required wrapper --> */}
            <div className="swiper-wrapper">
              {/* <!-- Slides --> */}
              <div className="swiper-slide">
                <div className="swiper-inner jarallax">
                  <img
                    src={callToAction}
                    className="jarallax-img"
                    alt="hero background"
                  />
                  <div className="sw-caption z-1000">
                    <div className="container">
                      <div className="row g-4 align-items-center justify-content-between">
                        <div className="spacer-double"></div>

                        <div className="col-md-6">
                          <div className="spacer-single"></div>
                          <div className="sw-text-wrapper">
                            <div className="subtitle">Farm to table</div>
                            <h2 className="slider-title text-uppercase mb-4">
                              Premium Teff Flour{" "}
                              <span className="id-color-2">
                                – From Ethiopian Soil to Your Kitchen
                              </span>
                            </h2>
                            <p className="slider-text">
                              Experience the ancient supergrain. Our premium
                              teff flour, directly from Ethiopian soil, offers
                              natural goodness and a rich, gluten-free
                              foundation for your healthy kitchen.
                            </p>

                            <a className="btn-main mb10 mb-3" href="#products">
                              Our Products
                            </a>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="relative hero-front-image-wrapper d-none d-md-block">
                            {/* <div className="abs abs-middle bg-blur overlay-white-70 w-250px p-4 rounded-1">
                              <h5>Algonema Plant with Teracota Pot</h5>
                              <div className="de-rating-ext">
                                <span className="d-stars">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </span>
                              </div>
                            </div> */}
                            <img
                              src={teffFlour}
                              className="hero-front-img w-100"
                              alt="teff"
                            />
                          </div>
                        </div>

                        <div className="spacer-single"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Slides --> */}
              {/* <div className="swiper-slide">
                <div className="swiper-inner jarallax">
                  <img src={callToAction} className="jarallax-img" alt="hero-background" />
                  <div className="sw-caption z-1000">
                    <div className="container">
                      <div className="row g-4 align-items-center justify-content-between">
                        <div className="spacer-double"></div>

                        <div className="col-lg-5">
                          <div className="spacer-single"></div>
                          <div className="sw-text-wrapper">
                            <div className="subtitle">Best Quality Plants</div>
                            <h2 className="slider-title text-uppercase mb-4">
                              Discover Amazing{" "}
                              <span className="id-color-2">
                                variety of plants
                              </span>
                            </h2>

                            <div className="d-flex mb-4 slider-extra xs-hide">
                              <div className="d-inline me-3 w-130px text-center overlay-white-6 p-3 rounded-1">
                                <img
                                  src="images/shop/svg/coupon-svgrepo-com.svg"
                                  className="w-40 mb-1"
                                  alt=""
                                />
                                <h6 className="mb-0">Special Price</h6>
                              </div>

                              <div className="d-inline me-3 w-130px text-center overlay-white-6 p-3 rounded-1">
                                <img
                                  src="images/shop/svg/shipped-truck-svgrepo-com.svg"
                                  className="w-40 mb-1"
                                  alt=""
                                />
                                <h6 className="mb-0">Free Delivery</h6>
                              </div>

                              <div className="d-inline me-3 w-130px text-center overlay-white-6 p-3 rounded-1">
                                <img
                                  src="images/shop/svg/recommended-like-svgrepo-com.svg"
                                  className="w-40 mb-1"
                                  alt=""
                                />
                                <h6 className="mb-0">Guarantee</h6>
                              </div>
                            </div>

                            <p className="slider-text">
                              Experience the ancient supergrain. Our premium
                              teff flour, directly from Ethiopian soil, offers
                              natural goodness and a rich, gluten-free
                              foundation for your healthy kitchen.
                            </p>
                            <a
                              className="btn-main mb10 mb-3"
                              href="shop-shop-all.html"
                            >
                              Shop Now
                            </a>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="relative">
                            <div className="abs abs-middle bg-blur overlay-white-70 w-250px p-4 rounded-1">
                              <h5>Algonema Plant with Teracota Pot</h5>
                              <div className="de-rating-ext">
                                <span className="d-stars">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </span>
                              </div>
                            </div>
                            <img src={keyTeff} className="w-100" alt="" />
                          </div>
                        </div>

                        <div className="spacer-single"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* <!-- If we need navigation buttons --> */}
            {/* <div className="swiper-button-prev no-bg text-dark"></div>
            <div className="swiper-button-next no-bg text-dark"></div> */}
          </div>
        </div>
      </section>

      {/* About us */}
      <section id="about">
        <div className="container relative z-1">
          <div className="row g-4 gx-5 align-items-center">
            <div className="col-lg-6">
              <div className="subtitle wow fadeInUp mb-3">
                Welcome to Magna Teff
              </div>
              <h2 className="text-uppercase wow fadeInUp" data-wow-delay=".2s">
                Pure Ethiopian Teff
                <span className="id-color-2"> Milled Modern Since '19</span>
              </h2>
              <p className="wow fadeInUp">
                Magna Teff, established in 2019, is a modern flour production
                company dedicated to supplying high-standard teff flours to the
                international market. Our teff is sourced directly from Gojam, a
                renowned region in Ethiopia known for its high-quality teff
                farming. Our state-of-the-art facilities ensure a completely
                automated,hand-contact-free production process, guaranteeing the
                purity and quality of our teff flour. We are committed to
                meeting the growing global demand for this nutritious ancient
                grain with uncompromising standards and reliable delivery.
              </p>
              <a
                className="btn-main btn-line wow fadeInUp nav-btn-2 d-none d-lg-inline-block"
                href="#products"
                data-wow-delay=".6s"
              >
                Our Products
              </a>
            </div>

            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-lg-2 d-none d-lg-block"></div>
                <div className="col-lg-10">
                  <div className="row g-4">
                    <div className="col-lg-12">
                      <img
                        src={aboutPic1}
                        className="w-100 rounded-1 wow zoomIn"
                        alt="ethiopian farmer"
                      />
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

      {/*  Welcome */}
      <section className="pb-0">
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
                  Magna Teff
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
                {/* <a
                  className="btn-main btn-line wow fadeInUp nav-btn-2 d-none d-lg-inline-block"
                  href="#products"
                  data-wow-delay=".6s"
                >
                  Our products
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products  */}
      <section id="products" className="mt-lg-5">
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
                <div className="d-flex justify-content-end mb-3">
                  <div className="arrow-simple">
                    <a className="btn-prev me-2">
                      <FaAngleLeft size={20} />
                    </a>
                    <a className="btn-next ms-2">
                      <FaAngleRight size={20} />
                    </a>
                  </div>
                </div>

                <div
                  id="best-seller-carousel"
                  className="owl-carousel owl-3-cols"
                >
                  {/* product item */}
                  <div className="item">
                    <div className="de__pcard text-center">
                      <div className="atr__images">
                        <img
                          className="atr__image-main"
                          src={whiteTeffPackage}
                        />
                        <img
                          className="atr__image-hover"
                          src={whiteTeffPackage}
                        />
                      </div>

                      <div className="de-rating-ext">
                        <h3>White Teff</h3>
                      </div>

                      <h3>(ነጭ ጤፍ)</h3>
                    </div>
                  </div>

                  {/* product item  */}
                  <div className="item">
                    <div className="de__pcard text-center">
                      <div className="atr__images">
                        <img
                          className="atr__image-main"
                          src={sergegnaTeffPackage}
                        />
                        <img
                          className="atr__image-hover"
                          src={sergegnaTeffPackage}
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
                        <img
                          className="atr__image-main"
                          src={brownTeffPackage}
                        />
                        <img
                          className="atr__image-hover"
                          src={brownTeffPackage}
                        />
                      </div>

                      <div className="de-rating-ext">
                        <h3>Brown Teff</h3>
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
      <section className="jarallax advert-hero benefits-hero">
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
              <div className="relative d-flex justify-content-center gluten-free-picture rounded-5">
                <img src={ethiopianTeff} alt="healthy-family" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section>
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
              <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                <img src={plantIcon} className="w-50px mb-3" alt="plant icon" />
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
              <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                <img src={plantIcon} className="w-50px mb-3" alt="plant icon" />
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
              <div className="relative h-100 bg-color-2 text-light padding30 rounded-1">
                <img src={plantIcon} className="w-50px mb-3" alt="plant icon" />
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
                <img src={plantIcon} className="w-50px mb-3" alt="plant icon" />
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
                <img src={plantIcon} className="w-50px mb-3" alt="plant icon" />
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
                <img src={plantIcon} className="w-50px mb-3" alt="plant icon" />
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

      {/* Contact us  */}
      <section className="contact-us pt-0" id="contact">
        <div className="container">
          <div className="row g-4 mb-3 align-items-center justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="subtitle wow fadeInUp">Get in touch</div>
              <h2 className="text-uppercase wow fadeInUp" data-wow-delay=".2s">
                Contact <span className="id-color-2">Us</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <h3 className="wow fadeInUp">Let's connect!</h3>

              <p>
                Have questions about our premium teff flour? Exploring wholesale
                opportunities? We’d love to hear from you! At Magna Teff, we’re
                proud to deliver Ethiopia’s finest teff—nourishing, gluten-free,
                and packed with natural goodness. Reach out today!
              </p>

              <div className="spacer-single"></div>
            </div>
          </div>
          <div className="row gap-4">
            <div className="rounded-1 bg-light overflow-hidden col-lg-7 ps-0">
              <div className="row g-2">
                <div className="col-sm-6">
                  <div
                    className="auto-height relative rounded-1"
                    data-bgimage="url(src/assets/images/misc/magna-teff-10.webp)"
                  ></div>
                </div>
                <div className="col-sm-6 relative contact-info">
                  <div className="p-30">
                    <div className="fw-bold text-dark">
                      <FaRegClock className="me-2" />
                      We're Open
                    </div>
                    Monday - Friday 08:00 AM - 05:00 PM
                    <div className="spacer-20"></div>
                    <div className="fw-bold text-dark">
                      <MdLocationOn size={20} className="me-2" />
                      Location
                    </div>
                    <a
                      href="https://maps.app.goo.gl/tsgdSDA1Re18LZpZ9"
                      target="_blank"
                    >
                      Debre Markos Industial Zone, <br /> Debre Markos, Ethiopia
                      (300 km northwest of Addis Ababa).
                    </a>
                    <div className="spacer-20"></div>
                    <div className="fw-bold text-dark">
                      <FaPhoneAlt className="me-2" />
                      Call Us Directly
                    </div>
                    <div>
                      <a href="tel:+251911532949">+251911532949</a>
                    </div>
                    <div>+251911264129</div>
                    <div>+251962606060</div>
                    <div className="spacer-20"></div>
                    <div className="fw-bold text-dark">
                      <MdOutlineEmail size={20} className="me-2" />
                      Send a Message
                    </div>
                    <a href="mailto:magnateff2025@gmail.com">
                      magnateff2025@gmail.com
                    </a>
                    <div className="social-icons mt-3">
                      <Link to="#">
                        <FaFacebookF />
                      </Link>
                      <Link to="#">
                        <FaInstagram />
                      </Link>
                      <Link to="#">
                        <FaYoutube />
                      </Link>
                      <a href="tel:+251911532949">
                        <FaWhatsapp />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-none d-lg-flex rounded-1 col-lg conatact-why-choose-us">
              <div className="p-4">
                <div>
                  <h3>Why Choose Our Teff Flour?</h3>
                  <ul className="list-unstyled">
                    <li>
                      <MdGrain color="#5c4141" className="me-1" size={20} />{" "}
                      <strong>Finely Ground</strong> – Our premium milling
                      process ensures a velvety texture, perfect for nutritious
                      injera and wholesome baking.
                    </li>
                    <li>
                      <FaMedal color="#E67c30" className="me-1" size={20} />{" "}
                      <strong>Quality You Can Trust</strong> – Sourced from the
                      best farms, our teff flour guarantees exceptional flavor
                      and health benefits in every bite.
                    </li>
                    <li>
                      <FaHeart color="#09b209" className="me-1" size={20} />{" "}
                      <strong>Gluten-Free</strong> – Packed with essential
                      nutrients, it’s the perfect choice for gluten-sensitive
                      diets, promoting overall health and wellness.
                    </li>
                  </ul>
                  <div className="mt-4 d-flex justify-content-end">
                    <a className="btn-main mb10 mb-3" href="tel:+251911532949">
                      Contact Us Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="map-container mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3925.527576221012!2d37.72882307624084!3d10.299596267805454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDE3JzU4LjUiTiAzN8KwNDMnNTMuMCJF!5e0!3m2!1sen!2set!4v1753752468656!5m2!1sen!2set"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-dark">
        <div className="container relative z-2">
          <div className="row gx-5">
            <div className="col-lg-5">
              <Link to="/" onClick={handleHomeClick}>
                <img src={whiteLogo} className="w-200px" alt="logo" />
              </Link>

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
                <Link to="#">
                  <FaFacebookF />
                </Link>
                <Link to="#">
                  <FaInstagram />
                </Link>
                <Link to="#">
                  <FaYoutube />
                </Link>
                <a href="tel:+251911532949">
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
                Monday - Friday 08:00 AM - 05:00 PM
                <div className="spacer-10"></div>
                <div>
                  <MdLocationOn size={20} className="me-2" />
                  Location
                </div>
                <a
                  href="https://maps.app.goo.gl/tsgdSDA1Re18LZpZ9"
                  target="_blank"
                >
                  Debre Markos Industial Zone, Debre Markos, Ethiopia
                </a>
                <div className="spacer-10"></div>
                <div>
                  <MdOutlineEmail size={20} className="me-2" />
                  Send a Message
                </div>
                <a href="mailto:magnateff2025@gmail.com">
                  magnateff2025@gmail.com
                </a>
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
          <img src={whiteLogo} className="w-150px" alt="white-logo" />

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
          <div className="d-flex align-items-center overlay-icons">
            <FaRegClock className="me-2" />
            Monday - Friday 08:00 AM - 05.00 PM
          </div>
          <div className="d-flex align-items-center">
            <MdLocationOn size={20} className="me-2" />
            <a href="https://maps.app.goo.gl/tsgdSDA1Re18LZpZ9" target="_blank">
              Debre Markos Industial Zone, <br /> Debre Markos, Ethiopia
            </a>
          </div>
          <div className="d-flex align-items-center">
            <MdOutlineEmail className="me-2" />
            magnateff2025@gmail.com
          </div>

          <div className="social-icons mt-2">
            <Link to="#">
              <FaFacebookF />
            </Link>
            <Link to="#">
              <FaInstagram />
            </Link>
            <Link to="#">
              <FaYoutube />
            </Link>
            <a href="tel:+251911532949">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
