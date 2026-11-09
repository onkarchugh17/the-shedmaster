export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "1",
    name: "Amit Sharma",
    role: "Factory Owner",
    location: "Jaipur, Rajasthan",
    content: "Excellent quality work and professional team. The shed was completed on time and as promised.",
    rating: 5,
  },
  {
    id: "2",
    name: "Rohit Verma",
    role: "Industrial Client",
    location: "Delhi NCR",
    content: "Very good experience with their fire pipeline work. Highly recommended.",
    rating: 5,
  },
  {
    id: "3",
    name: "Mr. Prashant",
    role: "Business Owner",
    location: "Panipat, Haryana",
    content: "Strong design, quality material and great support throughout the project.",
    rating: 5,
  },
];
