import { useEffect } from 'react'

const useSmoothScroll = (origin: any, destiny: any) => {

  useEffect(() => {
    function smoothScroll(event: MouseEvent) {
      event.preventDefault()
      destiny.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
    }
    origin?.addEventListener('click', smoothScroll)
    return () => origin?.removeEventListener('click', smoothScroll)
  }, [origin])
}

export default useSmoothScroll
