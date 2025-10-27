export interface Project {
  id: number
  title: string
  description: string
  image: string
  location: string
  area: string
  duration: string
  year: string
  category: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "The Business Hub",
    description:
      "A modern business complex featuring state-of-the-art offices and meeting spaces, designed for optimal workflow and collaboration.",
    image: "/test.png",
    location: "New York, USA",
    area: "18,000 square meters",
    duration: "5Y, 3M",
    year: "2020–2025",
    category: "Commercial Construction",
  },
  {
    id: 2,
    title: "Sky Haven",
    description:
      "Luxurious residential high-rise with premium amenities and breathtaking city views, setting new standards in urban living.",
    image: "/test.png",
    location: "New York, USA",
    area: "500 square meters",
    duration: "1Y, 2M",
    year: "2024–2025",
    category: "Residential Construction",
  },
  {
    id: 3,
    title: "Green Valley Resort",
    description:
      "Eco-friendly resort complex integrating sustainable architecture with luxury hospitality services.",
    image: "/test.png",
    location: "California, USA",
    area: "25,000 square meters",
    duration: "3Y, 6M",
    year: "2023–2026",
    category: "Hospitality",
  },
  {
    id: 4,
    title: "Smart City Center",
    description:
      "Mixed-use development featuring IoT integration and sustainable energy solutions for modern urban living.",
    image: "/test.png",
    location: "Tokyo, Japan",
    area: "30,000 square meters",
    duration: "4Y, 0M",
    year: "2022–2026",
    category: "Mixed-Use Development",
  },
  {
    id: 5,
    title: "Waterfront Plaza",
    description:
      "Premium shopping and entertainment complex with stunning waterfront views and outdoor spaces.",
    image: "/test.png",
    location: "Singapore",
    area: "15,000 square meters",
    duration: "2Y, 8M",
    year: "2024–2027",
    category: "Commercial Construction",
  },
  {
    id: 6,
    title: "Mountain View Residences",
    description:
      "Luxury mountain resort homes combining natural aesthetics with modern comfort and sustainability.",
    image: "/test.png",
    location: "Colorado, USA",
    area: "12,000 square meters",
    duration: "2Y, 4M",
    year: "2024–2026",
    category: "Residential Construction",
  },
]
