import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {

    const { pathname } = useLocation();

    useEffect(() => {
      setTimeout(() => {
        window.scrollTo(100, 100);
      }, 1000);
    }, [pathname]);

  return null;

}

export default ScrollToTop
