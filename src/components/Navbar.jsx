import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.getElementById("first-section");
      if (firstSection) {
        const firstSectionBottom = firstSection.getBoundingClientRect().bottom;
        setShowNavbar(firstSectionBottom > 0);
      } else {
        const approximateFirstSectionHeight = window.innerHeight;
        setShowNavbar(window.scrollY <= approximateFirstSectionHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path) => location.pathname === path;

  const menuItems = [
    { label: "Work", path: "/work" },
    { label: "About", path: "/know-more" },
    { label: "Services", path: "/services" },
    { label: "Client", path: "/client" },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.15 },
    },
    exit: { opacity: 0, y: -20, height: 0, transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`w-full mx-auto px-4 sm:px-6 md:px-[3.75rem] fixed top-0 left-0 right-0 z-50 bg-black transition-opacity duration-300 ${
        showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ minHeight: "4.625rem", fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="flex justify-between items-center text-white h-[4.625rem] w-full">
        {/* Logo */}
        <motion.div whileTap={{ scale: 0.95 }} className="flex items-center">
          <Link to="/" className="flex items-center hover:opacity-80">
            <svg
              viewBox="0 0 58 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "2.8rem", height: "2.6rem" }}
            >
              <path
                d="M25.2701 29.8451L53.1285 38.6966L57.3482 46.2982C59.0352 49.3371 56.8377 53.0706 53.3619 53.0706H4.56602C1.0906 53.0703 -1.10681 49.337 0.579689 46.2982L12.2672 25.2435L25.2701 29.8451ZM24.9781 2.34701C26.7149 -0.781628 31.214 -0.781555 32.9508 2.34701L50.5553 34.0619L29.0191 9.32162L15.0602 20.2122L24.9781 2.34701Z"
                fill="white"
              />
            </svg>
            <span
              style={{
                fontFamily: "Audiowide, sans-serif",
                fontWeight: "400",
                fontSize: "1.6rem",
                letterSpacing: "0.31rem",
                marginLeft: "1rem",
                color: "white",
              }}
            >
              ALTECHT
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation Pills - Centered */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] items-center w-full">
          <div></div>
          <div className="grid grid-flow-col gap-[0.72rem] auto-cols-max justify-center">
            {menuItems.map((item) => (
              <motion.div key={item.path} whileHover={{ scale: 1.05 }}>
                <Link
                  to={item.path}
                  className="transition-all duration-300 whitespace-nowrap"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.96069rem",
                    fontWeight: "600",
                    width: "6rem",
                    height: "1.94rem",
                    borderRadius: "2.75rem",
                    border: isActivePath(item.path)
                      ? "0.06rem solid #FFF"
                      : "0.06rem solid #898989",
                    background: isActivePath(item.path) ? "#FFF" : "#1B1B1B",
                    color: isActivePath(item.path) ? "#1B1B1B" : "#FFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
          <div></div>
        </div>

        {/* Medium Screen Pills */}
        <div className="hidden md:flex lg:hidden items-center justify-center flex-1">
          {menuItems.map((item) => (
            <motion.div key={item.path} whileHover={{ scale: 1.05 }}>
              <Link
                to={item.path}
                className="transition-all duration-300 whitespace-nowrap"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  letterSpacing: "0.2rem",
                  borderRadius: "2rem",
                  border: isActivePath(item.path)
                    ? "0.06rem solid #FFF"
                    : "0.06rem solid #898989",
                  background: isActivePath(item.path) ? "#FFF" : "#1B1B1B",
                  color: isActivePath(item.path) ? "#1B1B1B" : "#FFF",
                  padding: "0.4rem 0.8rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center">
          {/* Desktop CTA */}
          <motion.div className="hidden md:block">
            <Link
              to="/collaboration"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.96069rem",
                fontWeight: "600",
                width: "6rem",
                height: "1.94rem",
                borderRadius: "2.75rem",
                border: isActivePath("/collaboration")
                  ? "0.06rem solid #FFF"
                  : "0.06rem solid #898989",
                background: isActivePath("/collaboration")
                  ? "#FFF"
                  : "#1B1B1B",
                color: isActivePath("/collaboration") ? "#1B1B1B" : "#FFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Let's talk
            </Link>
          </motion.div>

          {/* Mobile Hamburger */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden relative w-6 h-6 sm:w-8 sm:h-8 flex flex-col justify-center items-center"
          >
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: 0, y: 0 } : { rotate: 0, y: -4 }
              }
              transition={{ duration: 0.4 }}
              className="absolute w-7 sm:w-8 h-0.5 sm:h-1 bg-white rounded"
            />
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: 4 }
              }
              transition={{ duration: 0.4 }}
              className="absolute w-7 sm:w-8 h-0.5 sm:h-1 bg-white rounded"
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="dropdown-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="bg-black text-white border-t border-gray-800"
          >
            <div className="md:hidden py-4 px-4 space-y-3">
              {menuItems.map((item) => (
                <motion.div key={item.path} variants={itemVariants}>
                  <Link
                    to={item.path}
                    className="block py-2 text-base font-medium hover:text-gray-400"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants} className="pt-3">
                <Link
                  to="/collaboration"
                  className="bg-white text-black hover:bg-gray-200 font-medium py-2 px-4 rounded-full w-full block text-center text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Let's talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
