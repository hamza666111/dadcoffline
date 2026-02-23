import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Hamza Sarwar',
    role: 'Patient',
    rating: 5,
    date: 'Google Review',
    text: 'Got my wisdom tooth extracted at Dr Ali Dental Centre. I was guided properly before procedure, which went really smooth and painless. Any follow up questions were answered quickly and very professionally. Great experience.',
    avatar: 'HS',
    treatment: 'Wisdom Tooth Extraction',
  },
  {
    name: 'Haseeb Jutt',
    role: 'Patient',
    rating: 5,
    date: 'Google Review',
    text: 'I recently visited DR Ali Clinic for a root canal and filling. The staff was welcoming, procedures were painless, and everything was explained clearly. Highly professional and patient-focused team.',
    avatar: 'HJ',
    treatment: 'Root Canal & Filling',
  },
  {
    name: 'Muhammad Faizan',
    role: 'Patient',
    rating: 5,
    date: 'Google Review',
    text: 'Visited for scaling and filling. Clinic is clean and well-maintained. Staff were incredibly professional and ensured I was comfortable throughout.',
    avatar: 'MF',
    treatment: 'Scaling & Filling',
  },
  {
    name: 'Arooj Mehmood',
    role: 'Patient',
    rating: 5,
    date: 'Google Review',
    text: 'Highly recommend DR Ali Clinic. Their expertise, professionalism and patient-centered approach truly set them apart.',
    avatar: 'AM',
    treatment: 'General Dentistry',
  },
  {
    name: 'Fatima Irfan',
    role: 'Patient',
    rating: 5,
    date: 'Google Review',
    text: 'Visited Dr Maria for my daughter’s dental treatment. Very impressed by service and friendly clean environment.',
    avatar: 'FI',
    treatment: 'Pediatric Dentistry',
  },
  {
    name: 'Amjad A',
    role: 'Patient',
    rating: 5,
    date: 'Google Review',
    text: 'Excellent service. My daughter’s tooth extraction and scaling were done professionally and pain-free.',
    avatar: 'AA',
    treatment: 'Extraction & Scaling',
  },
  {
    name: 'Zohaib Siddiqui',
    role: 'Patient',
    rating: 5,
    date: 'Google Review',
    text: 'Clinic helped me overcome dental anxiety. Skilled and empathetic professionals. Dr Ali is polite and highly recommended.',
    avatar: 'ZS',
    treatment: 'General Dentistry',
  },
  {
    name: 'Ramlah Akber',
    role: 'Patient',
    rating: 5,
    date: 'Google Review',
    text: 'Teeth cleaning, filling and wisdom tooth extraction done efficiently by Dr Ali and Dr Maria. Very cooperative and professional.',
    avatar: 'RA',
    treatment: 'Cleaning & Extraction',
  },
  {
    name: 'Numra Ali',
    role: 'Patient',
    rating: 5,
    date: 'Google Review',
    text: 'Doctor explained everything clearly and handled treatment with great care. Very satisfied and highly recommended.',
    avatar: 'NA',
    treatment: 'Dental Treatment',
  },
  {
    name: 'Usama Qasim',
    role: 'Patient',
    rating: 5,
    date: 'Google Review',
    text: 'Scaling and polishing experience was amazing. Clinic is extremely clean, hygienic and equipped with modern technology.',
    avatar: 'UQ',
    treatment: 'Scaling & Polishing',
  },
];

export default function ReviewsPage() {

  const avgRating = "5.0";
  const totalReviews = 71;

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <div className="relative py-32 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sky-400 font-semibold text-sm uppercase tracking-widest">
              Patient Feedback
            </span>

            <h1 className="text-5xl font-bold text-white mt-3 mb-5">
              Patient Reviews
            </h1>

            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <span className="text-4xl font-bold text-white">{avgRating}</span>
              <span className="text-slate-300">({totalReviews} reviews)</span>
            </div>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Real experiences from our valued patients at Dr Ali Dental Centre.
            </p>
          </motion.div>
        </div>
      </div>

      {/* REVIEWS GRID */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-16">
            {[
              { label: 'Average Rating', value: avgRating, suffix: '/5' },
              { label: 'Total Reviews', value: totalReviews, suffix: '+' },
              { label: 'Recommend Us', value: '99', suffix: '%' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
              >
                <div className="text-3xl font-bold text-sky-700">
                  {stat.value}
                  <span className="text-lg text-gray-500">{stat.suffix}</span>
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Review Cards */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">

            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="break-inside-avoid bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <Quote className="w-8 h-8 text-sky-100 mb-3" />

                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm mb-4">
                  "{review.text}"
                </p>

                <span className="inline-block bg-sky-50 text-sky-700 text-xs px-2 py-1 rounded-full mb-3">
                  {review.treatment}
                </span>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-cyan-600 flex items-center justify-center text-white font-bold">
                    {review.avatar}
                  </div>

                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}
