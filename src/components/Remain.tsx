import React from 'react'

function Remain() {
  return (
    <>
  <section
    id="about-tiips"
    className="relative py-12 px-4 sm:px-6 md:px-12 lg:px-20"
  >
    <div className="container mx-auto max-w-6xl text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
        About GAC
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed bg-purple-900/30 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
        Government Engineering College Ajmer(GAC)  is a
        premier institute offering quality education in various disciplines.
        Located in Ajmer, GAC is committed to fostering innovation,
        creativity, and technical excellence among students. With
        state-of-the-art infrastructure, experienced faculty, and industry
        collaborations, GAC provides students with an ideal environment to
        grow and succeed in their careers. The institute emphasizes hands-on
        learning, research, and skill development to prepare students for the
        professional world.
      </p>
    </div>
  </section>
  <section id="faqs" className="relative py-20 px-4">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        <div className="bg-purple-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Who can participate?</h3>
          <p>Any college student with a valid ID card can participate.</p>
        </div>
        <div className="bg-purple-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">What's the team size?</h3>
          <p>Teams can have 1-4 members.</p>
        </div>
        <div className="bg-purple-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Is it free?</h3>
          <p>Yes, participation is completely free!</p>
        </div>
        <div className="bg-purple-900/20 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">What should I bring?</h3>
          <p>Bring your laptop, charger, and student ID.</p>
        </div>
      </div>
    </div>
  </section>
  <footer className="relative py-12 px-4 bg-purple-900/20">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-2">
            <a
              href="mailto:coderangerss@gmail.com"
              className="flex items-center gap-2 hover:text-purple-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail w-5 h-5"
              >
                <rect width={20} height={16} x={2} y={4} rx={2} />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              coderangerss@gmail.com
            </a>
            <a
              href="https://www.google.com/maps/place/Trinity+Institute+Of+Innovations,+Knowledge+Park+III,+Greater+Noida,+Uttar+Pradesh+201310/@28.469812,77.491266,15z/data=!4m6!3m5!1s0x390cea0b6cb53047:0xfdb7593ada1b51e2!8m2!3d28.4696208!4d77.4911688!16s%2Fg%2F11n6sq2ym4?hl=en&entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
              className="flex items-center gap-2 hover:text-purple-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin w-5 h-5"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx={12} cy={10} r={3} />
              </svg>
              GAC Ajmer, India
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/geekroom.tiips/"
              className="hover:text-purple-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram w-6 h-6"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/code-rangerss/"
              className="hover:text-purple-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin w-6 h-6"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width={4} height={12} x={2} y={9} />
                <circle cx={4} cy={4} r={2} />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.323203915513!2d77.48869147528274!3d28.469811625754108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea0b6cb53047%3A0xfdb7593ada1b51e2!2sTrinity%20Institute%20Of%20Innovations%2C%20Knowledge%20Park%20III%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201310!5e0!3m2!1sen!2sin!4v1738851785313!5m2!1sen!2sin"
            className="w-full h-48 rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-12 text-center">
        <p>© 2025 Code Nakshatra. All rights reserved.</p>
      </div>
    </div>
  </footer>
</>

  )
}

export default Remain