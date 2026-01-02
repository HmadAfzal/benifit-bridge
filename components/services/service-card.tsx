import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  imageUrl: string
}

export function ServiceCard({ title, description, imageUrl }: ServiceCardProps) {
  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 group hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-60 w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-4">
          <h3 className="text-white text-2xl md:text-3xl font-semibold text-center">{title}</h3>
        </div>
      </div>
      <div className="p-6 flex flex-col items-center flex-grow text-center">
        <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
