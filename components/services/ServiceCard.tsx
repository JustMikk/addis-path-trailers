import { Card } from "@/components/ui/card";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  image: string;
}

export function ServiceCard({
  id,
  title,
  icon: Icon,
  description,
  image,
}: ServiceCardProps) {
  return (
    <Card className="group relative overflow-hidden h-[400px] max-w-[500px] flex-shrink-0 cursor-pointer">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-gray-900/80" />
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="text-white/80">{id}</div>
        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-lg flex items-center justify-center">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>

          <div className="overflow-hidden">
            <p className="text-white/80 text-sm transform translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
