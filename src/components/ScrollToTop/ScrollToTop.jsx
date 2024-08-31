import { useEffect } from 'react';
// import style from './ScrollToTop.module.css'
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Correct method
  }, [pathname]);

  return null;
}

export default ScrollToTop;