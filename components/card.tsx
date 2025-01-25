import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, CheckCircle, Users, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface LeasingCardProps {
  title: string;
  description: string[];
  icon: React.ReactNode;
}

export default function LeasingCard({
  title,
  description,
  icon,
}: LeasingCardProps) {
  const router = useRouter();
  return (
    <motion.div
      className="max-w-md "
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card className=" shadow-xl rounded-2xl p-6 border border-gray-200">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 shadow-inner">
              {icon}
            </div>
            <CardTitle className="text-xl font-semibold text-gray-800">
              {title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {description.map((desc, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3 shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-green-500" />
                <p className="text-gray-700 text-sm font-medium">{desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
        <div className="mt-6 text-center">
          <p className="text-gray-800 font-medium mb-4">
            Let us help you find the right solution for your business.
          </p>
          <Button
            onClick={() => {
              router.push("/contact");
            }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-900"
          >
            Contact Us Today
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
