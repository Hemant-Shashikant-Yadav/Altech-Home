import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Get height of first section (approximately viewport height)
      const firstSectionHeight = window.innerHeight;

      // Show navbar only when in the first section
      if (window.scrollY <= firstSectionHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const menuItems = [
    { label: "Work", path: "/work" },
    { label: "About", path: "/know-more" },
    { label: "Services", path: "/services" },
    { label: "Client", path: "/client" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav
      className={`w-full mx-auto px-4 sm:px-6 md:px-[3.75rem] fixed top-0 left-0 right-0 z-50 bg-black flex items-center transition-opacity duration-300 ${showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      style={{
        height: "4.625rem",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="flex justify-between items-center text-white h-[4.625rem] w-full relative">
        {/* Logo */}
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-start absolute left-0"
          style={{ top: "0.625rem" }}
        >
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <svg
              viewBox="0 0 58 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: "2.8rem", // Reduced from 3.6205rem
                height: "2.6rem", // Reduced from 3.3169rem
                "@media (min-width: 768px)": {
                  width: "3.6205rem",
                  height: "3.3169rem",
                },
              }}
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
                fontSize: "1.6rem", // Reduced from 2.027rem
                lineHeight: "100%",
                letterSpacing: "0.31rem",
                width: "auto",
                height: "2.5625rem",
                marginTop: "1.37rem",
                marginLeft: "1rem", // Reduced from 1.94rem
                color: "white",
                "@media (min-width: 768px)": {
                  fontSize: "2.027rem",
                  marginLeft: "1.94rem",
                  width: "11.3125rem",
                },
              }}
            >
              ALTECHT
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation Pills - Absolutely Centered */}
        <div className="hidden lg:flex items-center justify-center absolute left-0 right-0 mx-auto w-full h-full pointer-events-none">
          <div className="flex items-center gap-[0.72rem] pointer-events-auto">
            {menuItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center h-full"
              >
                <Link
                  to={item.path}
                  className="transition-all duration-300 whitespace-nowrap flex items-center"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontSize: "0.96069rem",
                    fontWeight: "600",
                    width: "6.00rem",
                    height: "1.94rem",
                    borderRadius: "2.75rem",
                    border: isActivePath(item.path) ? "0.06rem solid #FFF" : "0.06rem solid #898989",
                    background: isActivePath(item.path) ? "#FFF" : "#1B1B1B",
                    color: isActivePath(item.path) ? "#1B1B1B" : "#FFF",
                    padding: "0 0.50rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                    margin: "auto 0",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActivePath(item.path)) {
                      e.target.style.background = "#FFF";
                      e.target.style.color = "#1B1B1B";
                      e.target.style.border = "0.06rem solid #FFF";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActivePath(item.path)) {
                      e.target.style.background = "#1B1B1B";
                      e.target.style.color = "#FFF";
                      e.target.style.border = "0.06rem solid #898989";
                    }
                  }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className=""></div> {/* Right spacer */}
        </div>

        <div className="hidden md:flex lg:hidden items-center justify-center flex-1">
          {menuItems.slice(0, 4).map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className="transition-all duration-300 whitespace-nowrap"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  letterSpacing: "0.2rem",
                  borderRadius: "2rem",
                  border: isActivePath(item.path) ? "0.06rem solid #FFF" : "0.06rem solid #898989",
                  background: isActivePath(item.path) ? "#FFF" : "#1B1B1B",
                  color: isActivePath(item.path) ? "#1B1B1B" : "#FFF",
                  padding: "0.4rem 0.8rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActivePath(item.path)) {
                    e.target.style.background = "#FFF";
                    e.target.style.color = "#1B1B1B";
                    e.target.style.border = "0.06rem solid #FFF";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActivePath(item.path)) {
                    e.target.style.background = "#1B1B1B";
                    e.target.style.color = "#FFF";
                    e.target.style.border = "0.06rem solid #898989";
                  }
                }}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center absolute right-0">
          {/* Desktop CTA - Let's Talk Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              to="/collaboration"
              className="transition-all duration-300 whitespace-nowrap"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.96069rem",
                fontWeight: "600",
                width: "8.6875rem",
                height: "1.94rem",
                borderRadius: "2.75rem",
                border: isActivePath("/collaboration") ? "0.06rem solid #FFF" : "0.06rem solid #898989",
                background: isActivePath("/collaboration") ? "#FFF" : "#1B1B1B",
                color: isActivePath("/collaboration") ? "#1B1B1B" : "#FFF",
                paddingTop: "0.50rem",
                paddingBottom: "0.50rem",
                paddingLeft: "0.50rem",
                paddingRight: "0.50rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                top: "1.38rem",
              }}
              onMouseEnter={(e) => {
                if (!isActivePath("/collaboration")) {
                  e.target.style.background = "#FFF";
                  e.target.style.color = "#1B1B1B";
                  e.target.style.border = "0.06rem solid #FFF";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActivePath("/collaboration")) {
                  e.target.style.background = "#1B1B1B";
                  e.target.style.color = "#FFF";
                  e.target.style.border = "0.06rem solid #898989";
                }
              }}
            >
              Let's talk
            </Link>
          </motion.div>

          {/* Mobile Hamburger - Only visible on small screens */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden relative w-6 h-6 sm:w-8 sm:h-8 flex flex-col justify-center items-center focus:outline-none"
          >
            {/* Horizontal line - stays horizontal */}
            <motion.span
              animate={
                isMobileMenuOpen ? { rotate: 0, y: 0 } : { rotate: 0, y: -4 }
              }
              transition={{ duration: 0.4 }}
              className="absolute w-7 sm:w-8 h-0.5 sm:h-1 bg-white rounded"
            />
            {/* Crossing line - rotates to cross the horizontal line */}
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

      {/* Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="dropdown-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            className="bg-black text-white shadow-lg border-t border-gray-800"
          >
            <div className="w-full">
              {/* Mobile Dropdown */}
              <div className="md:hidden py-4 px-4 space-y-3 w-full">
                {menuItems.map((item) => (
                  <motion.div key={item.path} variants={itemVariants}>
                    <Link
                      to={item.path}
                      className="block py-2 text-base font-medium hover:text-gray-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={itemVariants} className="pt-3">
                  <Link
                    to="/collaboration"
                    className="bg-white text-black hover:bg-gray-200 transition-colors duration-300 font-medium py-2 px-4 rounded-full w-full block text-center text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Let's talk
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
