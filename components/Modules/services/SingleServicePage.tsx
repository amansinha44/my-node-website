// app/components/sections/services/DepartmentPage.tsx
'use client';

import { usePathname } from 'next/navigation';
import { useDepartmentData } from '@/data/departmentData';
import { ImageWithFallback } from '@/components/global/ImageWithFallback';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const scaleUp = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const newYorkTypography = {
  h1: "text-4xl md:text-5xl font-display font-bold tracking-tight",
  h2: "text-3xl font-display font-semibold border-b-2 border-gray-200 pb-2 mb-6",
  h3: "text-2xl font-display font-medium",
  body: "text-gray-700 leading-relaxed font-sans",
  quote: "text-lg italic font-serif text-gray-600"
};

export default function DepartmentPage() {
  const pathname = usePathname();
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [facilitiesRef, facilitiesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [researchRef, researchInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Extract slug from pathname
  const slug = pathname?.split('/').pop() || '';
const departmentData = useDepartmentData()
  // Find matching department data
  const department = departmentData.find(dept => dept.slug === slug);

  if (!department) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Department Not Found</h1>
        <p className="text-lg text-gray-600">The requested department does not exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mb-20"
      >
        <motion.div
          variants={itemVariants}
          className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
        >
          <ImageWithFallback
            fallbackSrc="/fallback-image.webp"
            src={department.bannerImage}
            alt={`${department.name} Department`}
            fill
            className="object-cover "
            priority
          />
          <motion.div
            variants={fadeIn}
            className={cn("absolute inset-0  flex items-center justify-center", department.heroTitle ? "bg-gradient-to-t from-0% from-neutral-800/70  to-transparent" : "" )}
          >
            <div className="text-center px-4">
              <motion.h1
                variants={scaleUp}
                className={`${newYorkTypography.h1} text-white mb-6 `}
              >
                {department.heroTitle}
              </motion.h1>
              <motion.p
                variants={scaleUp}
                className="text-xl text-blue-100 font-serif max-w-3xl mx-auto"
              >
                {department.heroSubtitle}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        ref={contentRef}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mb-20"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <motion.h2 variants={itemVariants} className={`${newYorkTypography.h2} text-gray-900`}>
              {department.overview.title}
            </motion.h2>
            {department.overview.description.map((paragraph, index) => (
              <motion.p key={index} variants={itemVariants} className={`${newYorkTypography.body} ${index !== department.overview.description.length - 1 ? 'mb-6' : 'mb-8'}`}>
                {paragraph.replace(/'/g, '&apos;').replace(/"/g, '&quot;')}
              </motion.p>
            ))}

            <motion.h3 variants={itemVariants} className={`${newYorkTypography.h3} mb-4 text-gray-900`}>
              Why Choose Us
            </motion.h3>
            <motion.ul variants={containerVariants} className="list-disc pl-6 space-y-3 text-gray-700">
              {department.overview.whyChooseUs.map((item, index) => (
                <motion.li key={index} variants={itemVariants} className={newYorkTypography.body}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.div
              variants={scaleUp}
              className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-200"
            >
              <h3 className={`${newYorkTypography.h3} mb-6 text-gray-900`}>
                {department.treatments.title}
              </h3>
              <motion.div variants={containerVariants} className="space-y-4">
                {department.treatments.items.map((treatment, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                    className="p-5 bg-white rounded-lg shadow-xs border-l-4 border-blue-600"
                  >
                    <h4 className="font-serif font-semibold mb-2">{treatment.title}</h4>
                    <p className="text-gray-600 text-sm font-sans">{treatment.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-blue-900 text-white py-16 mb-20 rounded-lg"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2 variants={itemVariants} className={`${newYorkTypography.h2} text-white border-blue-700 mb-12 text-center`}>
            {department.stats.title}
          </motion.h2>
          <motion.div variants={containerVariants} className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {department.stats.items.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-5xl font-serif font-bold mb-3">{stat.value}</div>
                <div className="text-blue-100 font-sans uppercase text-sm tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        ref={teamRef}
        initial="hidden"
        animate={teamInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mb-20"
      >
        <motion.h2 variants={itemVariants} className={`${newYorkTypography.h2} text-gray-900 mb-12`}>
          {department.team.title}
        </motion.h2>
        <motion.div variants={containerVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {department.team.members.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                <div className="relative h-64">
                  <ImageWithFallback
                    fallbackSrc="/fallback-image.webp"
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-500 text-xs mb-3 ">{member.credentials}</p>
                  <div className="text-xs bg-blue-50 text-blue-800 px-2 py-1 rounded inline-block">
                    {member.specialty}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Facilities Section */}
      <motion.section
        ref={facilitiesRef}
        initial="hidden"
        animate={facilitiesInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mb-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <motion.h2 variants={itemVariants} className={`${newYorkTypography.h2} text-gray-900 mb-8`}>
              {department.facilities.title}
            </motion.h2>
            <motion.p variants={itemVariants} className={`${newYorkTypography.body} mb-6`}>
              {department.facilities.description}
            </motion.p>
            <motion.ul variants={containerVariants} className="list-disc pl-6 space-y-2 text-gray-700">
              {department.facilities.features.map((item, index) => (
                <motion.li key={index} variants={itemVariants} className={newYorkTypography.body}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div variants={itemVariants} className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback
              fallbackSrc="/fallback-image.webp"
              src={department.facilities.image}
              alt={`${department.name} Facilities`}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Research Section */}
      <motion.section
        ref={researchRef}
        initial="hidden"
        animate={researchInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-gray-50 py-16 mb-20 rounded-lg"
      >
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2 variants={itemVariants} className={`${newYorkTypography.h2} text-gray-900 mb-12 text-center`}>
            {department.research.title}
          </motion.h2>
          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8">
            {department.research.items.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-lg shadow-sm text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="mb-20"
      >
        <motion.h2 variants={itemVariants} className={`${newYorkTypography.h2} text-gray-900 mb-12`}>
          {department.testimonials.title}
        </motion.h2>
        <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-8">
          {department.testimonials.items.map((story, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-start mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                  <ImageWithFallback
                    fallbackSrc="/fallback-image.webp"
                    src={story.image}
                    alt={story.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <blockquote className={`${newYorkTypography.quote} mb-4`}>
                  &quot;{story.quote}&quot;
                  </blockquote>
                  <p className="font-serif font-semibold">— {story.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-blue-900 text-white py-16 rounded-lg"
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 variants={itemVariants} className={`${newYorkTypography.h1} mb-6 w-max`}>
            {department.cta.title}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {department.cta.subtitle}
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            {department.cta.buttons.map((button, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-3 rounded-lg font-serif font-semibold shadow-md ${
                  button.isPrimary
                    ? 'bg-white text-blue-900'
                    : 'border-2 border-white text-white'
                }`}
              >
                {button.text}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
