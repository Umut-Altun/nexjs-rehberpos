import {
  MenuSquare,
  ClipboardList,
  Users,
  BarChart2,
  Smartphone,
  CreditCard,
  ShoppingBag,
  Clock,
  Settings,
} from "lucide-react"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "menu-square":
        return <MenuSquare className="h-8 w-8 text-red-600" />
      case "clipboard-list":
        return <ClipboardList className="h-8 w-8 text-red-600" />
      case "users":
        return <Users className="h-8 w-8 text-red-600" />
      case "bar-chart-2":
        return <BarChart2 className="h-8 w-8 text-red-600" />
      case "smartphone":
        return <Smartphone className="h-8 w-8 text-red-600" />
      case "credit-card":
        return <CreditCard className="h-8 w-8 text-red-600" />
      case "shopping-bag":
        return <ShoppingBag className="h-8 w-8 text-red-600" />
      case "clock":
        return <Clock className="h-8 w-8 text-red-600" />
      case "settings":
        return <Settings className="h-8 w-8 text-red-600" />
      default:
        return <MenuSquare className="h-8 w-8 text-red-600" />
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
      <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

