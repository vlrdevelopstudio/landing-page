import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { BrainCircuit, PaintBucketIcon, PhoneIcon, WebhookIcon } from "lucide-react"

export default function FeatureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: <WebhookIcon className="w-5 h-5 text-white" />,
      title: "Web Development",
      description:
        "Building responsive and modern websites tailored to your business needs.",
    },
    {
      icon: <PaintBucketIcon className="w-5 h-5 text-white" />,
      title: "UI/UX Design",
      description:
        "Creating user-friendly interfaces that enhance user experience.",
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-white" />,
      title: "Machine Learning",
      description:
        "Implementing intelligent systems to automate and optimize processes.",
    },
    {
      icon: <PhoneIcon className="w-5 h-5 text-white" />,
      title: "Mobile App Development",
      description:
        "Developing cross-platform mobile applications for iOS and Android.",
    },
  ]

  return (
    <motion.section ref={ref} className="py-10 px-4 w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 20,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1 + 0.2,
            }}
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.2 }}
            >
              <Card className="border-gray-blue/10 shadow-stone-100 h-52 hover:border-gray-blue/20 hover:shadow-stone-200 hoverEffect">
                <CardHeader className="flex flex-row gap-3 items-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-dark-blue w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-dark-blue">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="px-8">
                  <div className="w-[90%]">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
