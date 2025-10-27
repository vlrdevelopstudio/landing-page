"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Ruler, Clock } from "lucide-react"
import Container from "./Container"
import { projectsData } from "@/constant/projectsData"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

interface ProjectsProps {
  limit?: number
  showViewAll?: boolean
}

const Projects = ({ limit, showViewAll = true }: ProjectsProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <Container>
      <motion.section ref={ref} className="bg-[#fff] py-20 px-6 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-gray-500 mb-2">— Recent Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-dark-blue">Completed Projects</span>
          </h2>
        </motion.div>

        <div className="space-y-10">
          {(limit ? projectsData.slice(0, limit) : projectsData).map(
            (project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  y: isInView ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="flex flex-col md:flex-row overflow-hidden border-none shadow-lg bg-[#F8FAFC]">
                    {index % 2 === 0 ? (
                      <>
                        {/* Image */}
                        <div className="md:w-1/2 relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-4 left-4 flex gap-2 text-xs">
                            <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full">
                              {project.year}
                            </span>
                            <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full">
                              {project.category}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <CardContent className="p-8 md:w-1/2">
                          <h3 className="text-2xl font-semibold mb-3">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-6">
                            {project.description}
                          </p>
                          <ul className="space-y-3 text-gray-700 mb-6">
                            <li className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-dark-blue" />
                              <span>Location: {project.location}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Ruler className="w-4 h-4 text-dark-blue" />
                              <span>Total Area: {project.area}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-dark-blue" />
                              <span>Duration: {project.duration}</span>
                            </li>
                          </ul>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Button
                              variant="link"
                              className="text-dark-blue p-0"
                            >
                              Learn more →
                            </Button>
                          </motion.div>
                        </CardContent>
                      </>
                    ) : (
                      <>
                        {/* Content */}
                        <CardContent className="p-8 md:w-1/2 order-2 md:order-1">
                          <h3 className="text-2xl font-semibold mb-3">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-6">
                            {project.description}
                          </p>
                          <ul className="space-y-3 text-gray-700 mb-6">
                            <li className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-dark-blue" />
                              <span>Location: {project.location}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Ruler className="w-4 h-4 text-dark-blue" />
                              <span>Total Area: {project.area}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-dark-blue" />
                              <span>Duration: {project.duration}</span>
                            </li>
                          </ul>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Button
                              variant="link"
                              className="text-dark-blue p-0"
                            >
                              Learn more →
                            </Button>
                          </motion.div>
                        </CardContent>

                        {/* Image */}
                        <div className="md:w-1/2 relative order-1 md:order-2">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-4 left-4 flex gap-2 text-xs">
                            <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full">
                              {project.year}
                            </span>
                            <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full">
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </Card>
                </motion.div>
              </motion.div>
            )
          )}
        </div>

        {showViewAll && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/projects">
                <Button className="bg-dark-blue hover:bg-dark-blue/90 text-white rounded-full px-6 py-2">
                  View All Projects
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </motion.section>
    </Container>
  )
}

export default Projects
