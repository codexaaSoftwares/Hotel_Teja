import { useEffect, useState, useRef } from 'react'
import Odometer from 'react-odometerjs'
import 'odometer/themes/odometer-theme-default.css'

const Statistics = () => {
  const statsRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [values, setValues] = useState({
    pizzas: 0,
    desserts: 0,
    salads: 0,
    pastas: 0
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            // Animate to final values
            setTimeout(() => {
              setValues({
                pizzas: 350,
                desserts: 447,
                salads: 60,
                pastas: 60
              })
            }, 100)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [isVisible])

  const stats = [
    { icon: '/assets/images/stat01.png', value: values.pizzas, label: 'PIZZAS' },
    { icon: '/assets/images/stat02.png', value: values.desserts, label: 'DESSERTS' },
    { icon: '/assets/images/stat03.png', value: values.salads, label: 'SALADS' },
    { icon: '/assets/images/stat04.png', value: values.pastas, label: 'PASTAS' }
  ]

  return (
    <section className="statistics-section" ref={statsRef}>
      <div className="container">
        <div className="statistics-wrapper">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <div className="stat-item">
                  <div className="icon">
                    <img src={stat.icon} alt={stat.label} />
                    <div className="stat-content">
                      <h3 className="counter-item">
                        <Odometer value={stat.value} format="(,ddd)" />
                        <span>K</span>
                      </h3>
                      <span className="info">{stat.label}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics

