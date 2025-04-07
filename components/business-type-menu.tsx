import Link from "next/link"
import { Store, Building2, CloudCog, Pizza, Hotel, SandwichIcon as Hamburger } from "lucide-react"

interface BusinessTypeMenuProps {
  onItemClick?: (href: string) => void;
}

export default function BusinessTypeMenu({ onItemClick }: BusinessTypeMenuProps) {
  const handleClick = (href: string, e: React.MouseEvent) => {
    if (onItemClick) {
      e.preventDefault();
      onItemClick(href);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <Link
        href="/isletmeler/restaurant-cafe"
        className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors"
        onClick={(e) => handleClick("/isletmeler/restaurant-cafe", e)}
      >
        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
          <Store className="h-6 w-6 text-red-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Restaurant & Cafe</h3>
          <p className="text-sm text-gray-600 mt-1">Tek şubeli restoranlar ve kafeler için ideal çözüm</p>
        </div>
      </Link>

      <Link
        href="/isletmeler/subeli-restaurant-cafe"
        className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors"
        onClick={(e) => handleClick("/isletmeler/subeli-restaurant-cafe", e)}
      >
        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
          <Building2 className="h-6 w-6 text-red-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Şubeli Restaurant & Cafe</h3>
          <p className="text-sm text-gray-600 mt-1">Çoklu şube yönetimi için gelişmiş özellikler</p>
        </div>
      </Link>

      <Link
        href="/isletmeler/bulut-mutfak"
        className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors"
        onClick={(e) => handleClick("/isletmeler/bulut-mutfak", e)}
      >
        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
          <CloudCog className="h-6 w-6 text-red-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Bulut Mutfak</h3>
          <p className="text-sm text-gray-600 mt-1">Sadece paket servis yapan işletmeler için özel çözüm</p>
        </div>
      </Link>

      <Link 
        href="/isletmeler/fast-food" 
        className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors"
        onClick={(e) => handleClick("/isletmeler/fast-food", e)}
      >
        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
          <Hamburger className="h-6 w-6 text-red-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Fast Food</h3>
          <p className="text-sm text-gray-600 mt-1">Hızlı servis restoranları için optimize edilmiş sistem</p>
        </div>
      </Link>

      <Link
        href="/isletmeler/pizza-restaurant"
        className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors"
        onClick={(e) => handleClick("/isletmeler/pizza-restaurant", e)}
      >
        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
          <Pizza className="h-6 w-6 text-red-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Pizza Restaurant</h3>
          <p className="text-sm text-gray-600 mt-1">Pizza restoranları için özel sipariş takip sistemi</p>
        </div>
      </Link>

      <Link
        href="/isletmeler/hotel-cafe-restaurant"
        className="flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors"
        onClick={(e) => handleClick("/isletmeler/hotel-cafe-restaurant", e)}
      >
        <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
          <Hotel className="h-6 w-6 text-red-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Hotel Cafe & Restaurant</h3>
          <p className="text-sm text-gray-600 mt-1">Otel içi yeme-içme işletmeleri için entegre çözüm</p>
        </div>
      </Link>
    </div>
  )
}

