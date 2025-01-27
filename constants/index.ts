import {
  Truck,
  LucideIcon,
  Box,
  CornerDownLeft,
  Building2,
  Plane,
  Ship,
} from "lucide-react";

export const services = [
  {
    id: "01",
    title: "E-Commerce and Retail",
    icon: Building2,
    description:
      "Our trailers support e-commerce giants and retailers by offering scalable leasing options to handle growing demand. Whether it is moving goods between fulfilment centers or managing seasonal inventory spikes, our trailers are ready to meet your needs.",
    image: "/assets/images/ecommerce.png",
  },
  {
    id: "02",
    title: "Logistics and Freight",
    icon: Plane,
    description:
      "We collaborate with logistics companies, and other carriers, to provide reliable trailers that expand fleet capacity without the long-term cost of ownership. Our flexible leasing terms ensure you can meet delivery commitments on time.",
    image: "/assets/images/logistics.png",
  },
  {
    id: "03",
    title: "Manufacturing",
    icon: Ship,
    description:
      "From raw materials to finished goods, we provide secure and durable dry van trailers for storing and transporting products efficiently. Our services help manufacturers focus on production without worrying about logistics equipment.",
    image: "/assets/images/manufacturing.png",
  },
  {
    id: "04",
    title: "Food and Beverage",
    icon: Truck,
    description:
      "Our dry van trailers are perfect for non-refrigerated food items and beverages, ensuring safe and dry storage for transport or temporary holding. We provide cost-effective solutions for food suppliers and distributors.",
    image: "/assets/images/food-transport.jpg",
  },
  {
    id: "05",
    title: "Construction Materials",
    icon: Truck,
    description:
      "For builders and suppliers, our dry van trailers provide secure, weatherproof storage for construction materials, tools, and equipment. We help you keep your supplies safe and accessible on or off the job site.",
    image: "/assets/images/construction.png",
  },
];

const Content: {
  title: string;
  description: string[];
  icon: LucideIcon;
}[] = [
  {
    title: "Flexible Rental & Leasing Options",
    description: ["Tailored solutions for short-term and long-term needs."],
    icon: Truck,
  },
  {
    title: "Versatile Container Sizes",
    description: ["Choose from 28’, 40’, or 53’ to fit your load perfectly."],
    icon: Box,
  },
  {
    title: "Convenient Access Features",
    description: [
      "Roll-up or swing doors for effortless loading and unloading.",
    ],
    icon: CornerDownLeft,
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
