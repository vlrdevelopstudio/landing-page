"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Container from "./Container"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

type ImageItem = { src: string; alt: string; text?: string }

const About1: React.FC = () => {
  const images: ImageItem[] = [
    {
      src: "/Picture1.png",
      alt: "Team collaborating at a table",
      text: "Creative Collaboration",
    },
    {
      src: "/Picture2.png",
      alt: "Smiling man with glasses in brown shirt",
      text: "Friendly Service",
    },
    {
      src: "/arvi.jpg",
      alt: "Developer working with a laptop and a mug",
      text: "Focused Expertise",
    },
    {
      src: "/Picture3.png",
      alt: "Additional team member at workspace",
      text: "Dedicated Team",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Komponen gambar dengan teks muncul saat hover
  const HoverImage: React.FC<ImageItem> = ({ src, alt, text }) => (
    <motion.div
      className="relative group overflow-hidden rounded-2xl h-[350px] w-68"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Overlay + teks muncul saat hover */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-white text-lg font-semibold text-center px-4"
        >
          {text}
        </motion.p>
      </motion.div>
    </motion.div>
  )

  return (
    <Container>
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-background py-20"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bagian Kiri - Gambar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : -50,
              }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex flex-col gap-4 w-full sm:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="p-0 w-68 overflow-hidden rounded-2xl">
                    <CardContent className="p-0 mx-auto">
                      <HoverImage {...images[0]} />
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card className="p-0 w-68 overflow-hidden rounded-2xl">
                    <CardContent className="p-0 mx-auto">
                      <HoverImage {...images[1]} />
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Kolom kanan gambar */}
              <div className="relative w-full sm:w-1/2 flex flex-col gap-4 pt-14">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Card className="p-0 w-68 overflow-hidden rounded-2xl relative z-10">
                    <CardContent className="p-0 mx-auto">
                      <HoverImage {...images[2]} />
                    </CardContent>
                  </Card>

                  {/* SVG dekoratif */}
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isInView ? 0.7 : 0,
                      scale: isInView ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -right-6 -bottom-6 z-0"
                  >
                    <svg
                      width={134}
                      height={106}
                      viewBox="0 0 134 106"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                    >
                      {[...Array(10)].map((_, i) =>
                        [...Array(10)].map((_, j) => (
                          <motion.circle
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isInView ? 1 : 0 }}
                            transition={{
                              duration: 0.3,
                              delay: (i + j) * 0.02,
                            }}
                            key={`${i}-${j}`}
                            cx={1.66667 + 14.6667 * i}
                            cy={1.66667 + 14.6667 * j}
                            r="1.66667"
                            fill="currentColor"
                          />
                        ))
                      )}
                    </svg>
                  </motion.span>
                </motion.div>

                {/* Gambar ke-4 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 20,
                  }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Card className="p-0 w-68 overflow-hidden rounded-2xl z-10">
                    <CardContent className="p-0 mx-auto">
                      <HoverImage {...images[3]} />
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>

            {/* Bagian Kanan - Teks */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: isInView ? 1 : 0,
                x: isInView ? 0 : 50,
              }}
              transition={{ duration: 0.8 }}
              className="space-y-6 px-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.span className="block text-sm font-semibold text-primary uppercase tracking-wide">
                  Why Choose Us
                </motion.span>
                <motion.h2 className="text-3xl sm:text-4xl font-bold text-dark-blue dark:text-white mt-2">
                  Make your customers happy by giving great services
                </motion.h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-600 dark:text-gray-400"
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-600 dark:text-gray-400"
              >
                A domain name is one of the first steps to establishing your
                brand. Secure a consistent brand image with a domain name that
                matches your business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="mt-4 bg-dark-blue hover:bg-dark-blue/90"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Container>
  )
}

export default About1
