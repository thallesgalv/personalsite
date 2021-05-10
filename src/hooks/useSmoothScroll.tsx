import { useEffect } from 'react'

const useSmoothScroll = (
  origin: React.MutableRefObject<HTMLElement>,
  destiny: React.MutableRefObject<HTMLElement>
) => {
  function smoothScrollTo(endX: number, endY: number, duration?: number) {
    const startX = window.scrollX || window.pageXOffset
    const startY = window.scrollY || window.pageYOffset
    const distanceX = endX - startX
    const distanceY = endY - startY
    const startTime = new Date().getTime()

    duration = typeof duration !== 'undefined' ? duration : 400

    // Easing function
    const easeInOutQuart = (
      time: number,
      from: number,
      distance: number,
      duration: number
    ) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from
    }

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime
      const newX = easeInOutQuart(time, startX, distanceX, duration)
      const newY = easeInOutQuart(time, startY, distanceY, duration)
      if (time >= duration) {
        clearInterval(timer)
      }
      window.scroll(newX, newY)
    }, 1000 / 60) // 60 fps
  }

  useEffect(() => {
    function setDestinyLocation(event: MouseEvent) {
      const destinyLocation = destiny.current.offsetTop - 80

      smoothScrollTo(0, destinyLocation, 1300)
    }
    origin.current.addEventListener('click', setDestinyLocation)
    return () => origin.current.removeEventListener('click', setDestinyLocation)
  }, [origin])
}

export default useSmoothScroll
