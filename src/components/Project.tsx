import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Ruler, Clock } from "lucide-react";
import Container from "./Container";

const Projects = () => {
  return (
    <Container>
      <section className="bg-[#fff] py-20 px-6 md:px-20">
      <div className="text-center mb-16">
        <p className="text-sm text-gray-500 mb-2">— Recent Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Our <span className="text-dark-blue">Completed Projects</span>
        </h2>
      </div>

      <div className="space-y-10">
        {/* === Project 1 === */}
        <Card className="flex flex-col md:flex-row overflow-hidden border-none shadow-lg bg-[#F8FAFC]">
          {/* Image */}
          <div className="md:w-1/2 relative">
            <img
              src="/images/business-hub.jpg"
              alt="The Business Hub"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 flex gap-2 text-xs">
              <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full">
                2020–2025
              </span>
              <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full">
                Commercial Construction
              </span>
            </div>
          </div>

          {/* Content */}
          <CardContent className="p-8 md:w-1/2">
            <h3 className="text-2xl font-semibold mb-3">The Business Hub</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-dark-blue" />
                <span>Location: New York, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-dark-blue" />
                <span>Total Area: 18,000 square meters</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-dark-blue" />
                <span>Duration: 5Y, 3M</span>
              </li>
            </ul>
            <Button variant="link" className="text-dark-blue p-0">
              Learn more →
            </Button>
          </CardContent>
        </Card>

        {/* === Project 2 === */}
        <Card className="flex flex-col md:flex-row overflow-hidden border-none shadow-lg bg-[#F8FAFC]">
          {/* Content */}
          <CardContent className="p-8 md:w-1/2 order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-3">Sky Haven</h3>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-dark-blue" />
                <span>Location: New York, USA</span>
              </li>
              <li className="flex items-center gap-2">
                <Ruler className="w-4 h-4 text-dark-blue" />
                <span>Total Area: 500 square meters</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-dark-blue" />
                <span>Duration: 1Y, 2M</span>
              </li>
            </ul>
            <Button variant="link" className="text-dark-blue p-0">
              Learn more →
            </Button>
          </CardContent>

          {/* Image */}
          <div className="md:w-1/2 relative order-1 md:order-2">
            <img
              src="/images/sky-haven.jpg"
              alt="Sky Haven"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 flex gap-2 text-xs">
              <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full">
                2024–2025
              </span>
              <span className="bg-white/80 text-gray-800 px-3 py-1 rounded-full">
                Residential Construction
              </span>
            </div>
          </div>
        </Card>
      </div>

      <div className="text-center mt-12">
        <Button className="bg-dark-blue hover:bg-dark-blue/90 text-white rounded-full px-6 py-2">
          View All Projects
        </Button>
      </div>
    </section>
    </Container>
  );
}

export default Projects;