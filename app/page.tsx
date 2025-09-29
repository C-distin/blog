"use client"

import { motion } from "motion/react"
import Hero from "@/components/layout/hero"
import Image from "next/image"
import Link from "next/link"
import {
  FaArrowRight,
  FaAward,
  FaBookOpen,
  FaCalendarDay,
  FaEnvelope,
  FaMicrophone,
  FaQuoteLeft,
  FaStar,
  FaUsers,
} from "react-icons/fa6"

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const books = [
    {
      slug: "to-vow-or-not-to-vow",
      title: "To Vow or Not to Vow",
      cover: "/books/vow-cover.jpg",
      description: "A cultural exploration of marriage vows and modern relationships.",
    },
    {
      slug: "behind-closed-doors",
      title: "Behind Closed Doors: Guarding Your Dreams",
      cover: "/books/guarding-dreams.jpg",
      description: "A guide to nurturing unspoken aspirations and overcoming self-doubt.",
    },
  ]

  const stats = [
    { number: "2", label: "Published Books", icon: FaBookOpen },
    { number: "50+", label: "Speaking Events", icon: FaMicrophone },
    { number: "10+", label: "Years Experience", icon: FaAward },
    { number: "1000+", label: "Readers Inspired", icon: FaUsers },
  ]

  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)]">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <motion.section
        className="py-16 bg-[color-mix(in_srgb,var(--color-brand-bg),var(--color-brand-muted),10%)]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-brand-highlight)]/10 text-[var(--color-brand-accent)] rounded-full mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-[var(--color-brand-text)] mb-2">{stat.number}</div>
                <div className="text-[var(--color-brand-muted)]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Preview */}
      <motion.section
        className="py-20 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[var(--color-brand-text)] mb-6">About Margaret</h2>
              <p className="text-lg text-[var(--color-brand-muted)] mb-6 leading-relaxed">
                Margaret E. Kuofie is a certified clinical research professional with over a decade of experience in
                healthcare. Her writing blends scientific rigor with emotional depth, exploring themes of identity,
                resilience, and cultural duality.
              </p>
              <p className="text-lg text-[var(--color-brand-muted)] mb-8 leading-relaxed">
                As the author of "To Vow or Not to Vow" and "Behind Closed Doors: Guarding Your Dreams", she empowers
                readers to embrace their unspoken aspirations and navigate the complexities of modern life.
              </p>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[var(--color-brand-accent)] hover:bg-[color-mix(in_srgb,var(--color-brand-accent),black,10%)] text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors">
                  Learn More About Me
                  <FaArrowRight size={18} />
                </motion.button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[var(--color-brand-bg)] to-[var(--color-brand-muted)]/10 rounded-2xl p-8">
                <FaQuoteLeft
                  className="text-[var(--color-brand-accent)] mb-4"
                  size={32}
                />
                <blockquote className="text-xl text-[var(--color-brand-text)] italic mb-4">
                  "Writing is my way of bridging the gap between scientific understanding and human emotion, creating
                  stories that resonate across cultures and experiences."
                </blockquote>
                <cite className="text-[var(--color-brand-accent)] font-semibold">— Margaret E. Kuofie</cite>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Featured Books */}
      <motion.section
        className="py-20 px-6 bg-[color-mix(in_srgb,var(--color-brand-bg),var(--color-brand-muted),10%)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--color-brand-text)] mb-4">Featured Books</h2>
            <p className="text-xl text-[var(--color-brand-muted)] max-w-3xl mx-auto">
              Explore stories that blend clinical insight, cultural reflection, and personal growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {books.map((book, index) => (
              <motion.div
                key={book.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <Image
                      src={book.cover}
                      alt={book.title}
                      width={200}
                      height={300}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold text-[var(--color-brand-text)] mb-4">{book.title}</h3>
                    <p className="text-[var(--color-brand-muted)] mb-6 leading-relaxed">{book.description}</p>
                    <Link href={`/books/${book.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-[var(--color-brand-accent)] hover:text-[color-mix(in_srgb,var(--color-brand-accent),black,10%)] font-semibold inline-flex items-center gap-2 transition-colors">
                        Learn More
                        <FaArrowRight size={16} />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/books">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--color-brand-accent)] hover:bg-[color-mix(in_srgb,var(--color-brand-accent),black,10%)] text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors">
                <FaBookOpen size={20} />
                View All Books
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Speaking Preview */}

      <motion.section
        className="py-20 px-6 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-[var(--color-brand-text)] mb-6">Speaking Engagements</h2>
              <p className="text-lg text-[var(--color-brand-muted)] mb-6 leading-relaxed">
                Margaret brings her unique perspective to audiences worldwide, combining scientific insight with
                storytelling to inspire and educate. Her talks bridge the gap between research and real-world
                application.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-[var(--color-brand-accent)] text-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent)] hover:text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors">
                    <FaCalendarDay size={18} />
                    Book Margaret
                  </motion.button>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-[var(--color-brand-bg)] to-[var(--color-brand-muted)]/10 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <FaMicrophone
                    className="text-[var(--color-brand-accent)] mx-auto mb-4"
                    size={48}
                  />
                  <h3 className="text-2xl font-bold text-[var(--color-brand-text)] mb-2">Featured Talk</h3>
                  <p className="text-[var(--color-brand-muted)]">"The Science of Storytelling"</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[var(--color-brand-highlight)]/20 rounded-full flex items-center justify-center">
                      <FaStar
                        className="text-[var(--color-brand-accent)]"
                        size={20}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-brand-text)]">Audience Feedback</p>
                      <p className="text-sm text-[var(--color-brand-muted)]">Toronto Event, 2024</p>
                    </div>
                  </div>
                  <blockquote className="text-[var(--color-brand-muted)] italic">
                    "Margaret's blend of scientific insight and storytelling transformed our event! Her ability to
                    connect research with human experience is truly remarkable."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Latest Stories Preview */}

      {/* CTA Section */}
      <motion.section
        className="py-20 px-6 bg-[var(--color-brand-accent)] text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-8 text-[var(--color-brand-highlight)]/90">
            Whether you're interested in my books, want to book a speaking engagement, or simply want to share your
            thoughts, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[var(--color-brand-accent)] px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 shadow-lg">
                <FaEnvelope size={20} />
                Get In Touch
              </motion.button>
            </Link>
            <Link href="/speaking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--color-brand-accent)] px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors">
                <FaCalendarDay size={20} />
                Book Speaking Event
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
