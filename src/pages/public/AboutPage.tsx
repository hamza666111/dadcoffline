import { motion } from 'framer-motion';
import { Award, GraduationCap, Briefcase, Shield } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Ali Azhar',
    title: 'Dentist & Founder',
    specialization: 'Cosmetic & Restorative Dentistry',
    experience: '7+ Years',
    education: 'B.D.S, R.D.S, (PMDC) C-Ortho, C-Endo, Islamabad Dental Hospital.',
    certifications: [''],
    image: 'https://dralidentalcentre.github.io/DADC/images/ali.png',
    bio: 'Dr. Ali Azhar founded Dr Ali Dental Centre with a vision to make world-class dental care accessible and comfortable. His artistry in cosmetic dentistry has transformed thousands of smiles.',
  },
  {
    name: 'Dr. Maria Khan',
    title: 'Dentist',
    specialization: 'Braces & Clear Aligners',
    experience: '6+ Years',
    education: 'B.D.S, R.D.S, C-Ortho, C-Prostho, C-Implant, Gold Medalist (PMDC) Allied Hospital, Faisalabad.',
    certifications: [''],
    image: 'https://dralidentalcentre.github.io/DADC/images/maria.png',
    bio: 'Dr. Maria Khan is a specialist in orthodontics, dedicated to creating perfectly aligned smiles. With a passion for patient care and a gentle touch, she ensures every treatment is comfortable and effective.',
  },
];

const milestones = [
  { year: '2019', event: 'Dr Ali Dental Centre founded with a mission to elevate dental care standards.' },
  { year: '2022', event: 'Achieved 500+ patient milestone and expanded to a second operatory suite.' },
  { year: '2024', event: 'Surpassed 1,000+ happy patients and opened a second clinic location.' },
  { year: '2025', event: 'MOU signed with Beaconhouse BOSS.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative py-32 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.pexels.com/photos/5355841/pexels-photo-5355841.jpeg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sky-400 font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h1 className="text-5xl font-bold text-white mt-3 mb-5">About Dr Ali Dental Centre</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Founded with a passion for transforming lives through beautiful smiles.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Our Mission</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-6">Dentistry Designed Around You</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                At Dr Ali Dental Centre, we believe everyone deserves a smile they're proud of. We've built a practice that prioritizes your comfort, time, and long-term oral health above all else.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                From the moment you walk in, you'll experience the difference: a warm, modern environment, state-of-the-art equipment, and a team of specialists who treat you like family.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: 'Award-Winning Practice' },
                  { icon: Shield, label: 'Highest Safety Standards' },
                  { icon: GraduationCap, label: 'Expert Specialists' },
                  { icon: Briefcase, label: '5+ Years Excellence' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-sky-50 rounded-xl">
                    <item.icon className="w-5 h-5 text-sky-600 shrink-0" />
                    <span className="text-sm font-medium text-gray-800">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative rounded-3xl overflow-hidden">
                <img src="https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg" alt="Clinic interior" className="w-full h-[450px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Meet The Team</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Our Expert Specialists</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Board-certified specialists with decades of combined experience dedicated to your dental health.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto">
            {doctors.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold">{doc.name}</p>
                    <p className="text-sky-300 text-xs">{doc.title}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-4 h-4 text-sky-500 shrink-0" />
                    <span className="text-xs text-gray-600">{doc.education}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-4 h-4 text-sky-500 shrink-0" />
                    <span className="text-xs text-gray-600">{doc.experience} · {doc.specialization}</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed mb-3">{doc.bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {doc.certifications.map((cert, j) => (
                      <span key={j} className="text-xs bg-sky-50 text-sky-700 px-2 py-0.5 rounded-full">{cert}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-sky-600 font-semibold text-sm uppercase tracking-widest">Our Journey</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">Our Milestones</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sky-100" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg shadow-sky-500/25 z-10">
                    {m.year}
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-5 flex-1 mt-2">
                    <p className="text-gray-700">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
