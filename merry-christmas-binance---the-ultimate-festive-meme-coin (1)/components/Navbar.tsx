
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-binance-black/90 backdrop-blur-md py-4 shadow-xl border-b border-binance/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-1 glow-yellow overflow-hidden border-2 border-binance shadow-lg transform rotate-[-2deg] hover:rotate-0 transition-transform cursor-pointer">
            <img 
              src="https://lh3.googleusercontent.com/rd-gg-dl/ABS2GSm6a8KL0pvlI_mimytl1UYkNP5P5-BW9ZiNvMXAmBLTBHAccOd3A8wCLe8C5kYSpDzkaXm_m3bbhtzmVa0f_YAKzvM4n2dHYm8MIN-kHuD-wzmSOJnlR3_Qm4HwtMGgoCrLEBoEa_J6KCeuZYuPW1pj_lVLHaIWFFooT1W-rTyvrvwqNvQlONLUhomyKXsOLWQkWaERvHyDaqQx3qJpGud4JfB4BPgLj3Z6tWr5bZlweeQDD1FKdQP61l7wKI6Iz60tOveNqA5P6RpThIll-GPSwME5WtuV-J9HOWM8jmiCz0ubzJBx6iJ-RIsZ6kuQKw6i8_dyuR-c8HHhjFiHvgK9LrzTj9jBdTAQ27Hckz2xG2zvkNHnS3_kkGdve7nVSAH2wWDWvuDN5KV5pRxIUOR_Sxck8qb3WriLxFoq0u_psyG4DB_82h4mt2RSQSbyCnlreN42hiRgdAXfrEbrrNpMKdfWcM-lOCYyYUcwLAr-o-ZyZfQW0szlsufyHOXK301dkQKaCD_qOckJLTihP6mVTyizSJwDpN2n_rlO1INKBleBbzrGafqmr9X-gW0rjLVcrVkPJVVi0TvOhAzpa0A9Rub854QVHwgEem9zZGBFJ7-5qge62OUppqMI9Bs_SWjDlT1YHhY53p_Vyn5Y93eGkvauA7ycbpWkz6i3xM_DZuR_hFBYuB2SF2FVQMQ0gXzzIE-Ktg_mB3tKGuYxaqvKb8DlGAPTarHFR5lZPXXhWYKpuHpwvmJeCoY1JYs59246_dMYxnsgIAXKvCqMMzFKO9ZZH0gWR9hat7IfBrPEHvTgCslI4aLl08Peue4RmCP3t7JsoOtOICdNKMAU2cRXjoly_zKoYlb-UrLT0cuA5EbQuvXUC8NON0YC6d2dreuyKD6LeJW_GwE0XbuL8BrfxKl9eyhRiNhvOBfzS7OBpen6Fw8vfYQrWvHTluwMn1apxLY-dcX00VWuuaSteN2mxtGzxPCGaovtzkSNLdjrP_5o-0fKfhQU4m_RQCCmYZ1ivuH0MTyLngqXKKj5ePKP4yDNwiR1DuaMrvmPUxf2jLQs73sxfdnqvD7saFJU4pa3gkSrje0zSqr-X5D0oQK5pB6irueXKi5jgnGk4Z-jyp822BtzOijPwzJLZ6H-LAmh3vxuwAc-kSKHdnRyBxkIVIeBHRXmyI5Hh43vrXIAuL8tAtDwUdhqjUyww2VIjJJGFbdY_T9126k40RXeKT5o16NxAMXwLrhPb1hJ640l0z9YDNlVNUOgTZJZboiV-9Aljcp97Fge9SLTfTdUAXF2n-dy0kTwd5EuTbFa9Mlich5OmqCyiz0eezH-AdEAbsI=s1024-rj" 
              alt="Merry Christmas Binance Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-glow-yellow leading-none uppercase">Merry Christmas</span>
            <span className="text-binance text-sm font-bold tracking-[0.2em] uppercase">Binance</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-binance transition-colors font-medium text-sm"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-binance hover:bg-binance-dark text-binance-black px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 text-sm shadow-lg shadow-binance/20">
            DEXSCREENER
          </button>
        </div>

        <div className="md:hidden text-binance">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
