import { useEffect } from 'react'

const useAnimateOnScroll = (tgt: React.MutableRefObject<HTMLElement>) => {
  useEffect(() => {
    function animateOnScroll() {
      const targetTop = tgt.current.getBoundingClientRect().top
      const isVisible = targetTop - window.innerHeight * 0.6 < 0

      if (isVisible) tgt.current.classList.add('active')
      else tgt.current.classList.remove('active')
    }

    animateOnScroll()

    window.addEventListener('scroll', animateOnScroll)

    return () => window.removeEventListener('scroll', animateOnScroll)
  }, [])
}

export default useAnimateOnScroll
