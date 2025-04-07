import Link from "next/link"
import { Phone, Utensils, ArrowRight } from "lucide-react"

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-red-50 to-red-100 py-2.5 border-b border-red-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-red-600 text-sm mb-2 md:mb-0">
            <Utensils className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">rehberpos ile dakikalar içinde pos sisteminizi açın!</span>
            <span className="sm:hidden">rehberpos ile hızlı kurulum!</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="flex items-center text-gray-700 text-sm">
              <Phone className="h-4 w-4 mr-2" />
              <span>+90 (553) 327 28 74</span>
            </div>

            <div className="hidden md:block text-gray-500 text-sm">|</div>

            <Link
              href="/bize-ulasin"
              className="text-red-600 text-sm border border-red-600 rounded-full px-4 py-1 hover:bg-red-600 hover:text-white transition-colors"
            >
              Sizi Arayalım
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

