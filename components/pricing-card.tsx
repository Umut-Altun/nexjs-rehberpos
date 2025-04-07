import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  buttonText: string
  popular?: boolean
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden ${popular ? "ring-2 ring-red-600 relative hover:-translate-y-1" : "hover:-translate-y-1"}`}
    >
      {popular && <div className="bg-red-600 text-white text-center py-1 text-sm font-medium">En Popüler</div>}

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="mb-6">
          <span className="text-4xl font-bold">₺{price}</span>
          <span className="text-gray-600">/{period}</span>
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={`w-full py-3 rounded-md text-lg transition-colors ${
            popular ? "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-900"
          }`}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

