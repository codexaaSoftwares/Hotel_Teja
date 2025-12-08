import { motion } from 'framer-motion'

const Team = () => {
  const teamMembers = [
    { image: '/assets/images/team1.png', name: 'Bonnie Ryan', role: 'Owner' },
    { image: '/assets/images/team2.png', name: 'Bonnie Ryan', role: 'Owner' },
    { image: '/assets/images/team3.png', name: 'Bonnie Ryan', role: 'Owner' },
    { image: '/assets/images/team4.png', name: 'Bonnie Ryan', role: 'Owner' },
    { image: '/assets/images/team5.png', name: 'Bonnie Ryan', role: 'Owner' },
    { image: '/assets/images/team6.png', name: 'Bonnie Ryan', role: 'Owner' }
  ]

  return (
    <section className="team-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="content">
              <div className="section-header">
                <motion.h6 
                  className="sub-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  OUR TEAM
                </motion.h6>
                <motion.h2 
                  className="title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  We're Waiting For You!
                </motion.h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="team-member">
                <div className="img">
                  <div className="shape"></div>
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="content">
                  <h4 className="title">{member.name}</h4>
                  <p className="text">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

