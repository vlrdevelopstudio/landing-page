"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const HomeBanner = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative isolate px-6 pt-14 lg:px-8"
    >
      {/* TOP BLUR DECOR – tidak blokir mouse */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <motion.div
          animate={{
            rotate: [30, 35, 30],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-dark-blue/70 to-light-blue/40 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </motion.div>

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden sm:mb-8 sm:flex sm:justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Announcing our next round of funding.{` `}
            <a href="#" className="relative font-semibold text-dark-blue">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
              />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.h1
            className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Data to enrich your online business
          </motion.h1>
          <motion.p
            className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="rounded-md bg-dark-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-dark-blue/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </motion.a>
            <motion.a
              whileHover={{ x: 5 }}
              href="#"
              className="text-sm/6 font-semibold text-gray-900 hover:text-dark-blue transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* BOTTOM BLUR DECOR  */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <motion.div
          animate={{
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-dark-blue/70 to-light-blue/40 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </motion.div>
    </motion.div>
  )
}

export default HomeBanner
