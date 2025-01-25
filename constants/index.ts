import { CheckCircle, Truck, Users, LucideIcon } from "lucide-react";

const Content: {
  title: string;
  description: string[];
  icon: LucideIcon;
}[] = [
  {
    title: "Flexible Leasing Options",
    description: [
      "Customizable plans to meet your business needs.",
      "Short-term and long-term leasing available.",
      "Flexible terms to maximize efficiency.",
    ],
    icon: Truck,
  },
  {
    title: "Top-Quality Equipment",
    description: [
      "Reliable, well-maintained vans and trailers.",
      "Designed for safety and peak performance.",
      "Regular inspections for consistent quality.",
    ],
    icon: CheckCircle,
  },
  {
    title: "Exceptional Support",
    description: [
      "24/7 customer service and maintenance.",
      "Quick response to minimize downtime.",
      "Expert assistance for seamless operations.",
    ],
    icon: Users,
  },
];

export const industries = [
  {
    title: "E-Commerce and Retail",
    description:
      "Our trailers support e-commerce giants and retailers by offering scalable leasing options to handle growing demand. Whether it is moving goods between fulfillment centers or managing seasonal inventory spikes, our trailers are ready to meet your needs.",
    image: "/assets/images/track4.jpg",
  },
  {
    title: "Logistics and Freight",
    description:
      "We collaborate with logistics companies, and other carriers, to provide reliable trailers that expand fleet capacity without the long-term cost of ownership. Our flexible leasing terms ensure you can meet delivery commitments on time.",
    image: "/assets/images/track4.jpg",
  },
  {
    title: "Manufacturing",
    description:
      "From raw materials to finished goods, we provide secure and durable dry van trailers for storing and transporting products efficiently. Our services help manufacturers focus on production without worrying about logistics equipment.",
    image: "/assets/images/track4.jpg",
  },
  {
    title: "Food and Beverage",
    description:
      "Our dry van trailers are perfect for non-refrigerated food items and beverages, ensuring safe and dry storage for transport or temporary holding. We provide cost-effective solutions for food suppliers and distributors.",
    image: "/assets/images/track4.jpg",
  },
];
export default Content;
