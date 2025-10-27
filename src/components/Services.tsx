"use client"

import React from "react"
import Card from "./Card"
import Container from "./Container"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <Container>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mx-auto max-w-2xl lg:text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base/7 font-semibold text-indigo-600"
            >
              Deploy faster
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance"
            >
              Everything you need to deploy your app
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6 text-lg/8 text-gray-700"
            >
              Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
              Suspendisse eget egestas a elementum pulvinar et feugiat blandit
              at. In mi viverra elit nunc.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mx-auto mt-16 w-2xl sm:mt-20 lg:mt-24 lg:w-full"
          >
            <Card />
          </motion.div>
        </div>
      </motion.div>
    </Container>
  )
}

export default Services
