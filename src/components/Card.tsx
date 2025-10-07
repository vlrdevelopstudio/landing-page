import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CloudUpload, Lock, RefreshCcw, Fingerprint } from "lucide-react"

export default function FeatureSection() {
  const features = [
    {
      icon: <CloudUpload className="w-5 h-5 text-white" />,
      title: "Push to deploy",
      description:
        "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    },
    {
      icon: <Lock className="w-5 h-5 text-white" />,
      title: "SSL certificates",
      description:
        "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    },
    {
      icon: <RefreshCcw className="w-5 h-5 text-white" />,
      title: "Simple queues",
      description:
        "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    },
    {
      icon: <Fingerprint className="w-5 h-5 text-white" />,
      title: "Advanced security",
      description:
        "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    },
  ]

  return (
    <section className="py-10 px-4 w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <Card key={index} className="border-gray-blue/10 shadow-stone-100 h-52 hover:border-gray-blue/20 hover:shadow-stone-200 hoverEffect">
            <CardHeader className="flex flex-row gap-3  items-center">
              <div className="bg-dark-blue w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                 {feature.icon}
                </div>
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
        ))}
      </div>
    </section>
  )
}
