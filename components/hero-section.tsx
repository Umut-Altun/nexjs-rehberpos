import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import BusinessTypeMenu from "@/components/business-type-menu"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-red-50 to-red-100 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">RehberPOS Adisyon Sistemleri</h1>
            <p className="text-lg">
            RehberPOS, şu anda geliştirilme aşamasında olan bir demo sürümdür.
            </p>            
            <p className="text-lg text-gray-700 mb-8">
            Amacımız, sizlere kullanıcı dostu ve hızlı bir deneyim sunmak. Bu süreçte görüşleriniz ve geri bildirimleriniz bizim için çok değerli. Lütfen deneyiminizi bizimle paylaşarak sistemin gelişimine katkıda bulunun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg flex items-center gap-2 transition-colors"
                onClick={() => window.location.href = "https://rehberadisyon.pythonanywhere.com/register/"}
              >
                Tamamen Ücretsiz Kullanın
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-md text-lg flex items-center gap-2 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Sizi Arayalım
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <Image src={`/images/user-${i}.jpg`} alt={`Kullanıcı ${i}`} width={40} height={40} />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">10+ restoran tarafından test edildi</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative">
              <div className="bg-white p-3 rounded-xl shadow-xl">
                <Image
                  src="/images/restaurant-staff.jpg"
                  alt="Restoran Personeli RehberPOS Kullanıyor"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <ArrowRight className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Sipariş Hızı</p>
                    <p className="text-2xl font-bold">
                      +45% <span className="text-sm text-gray-500">daha hızlı</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Type Menu */}
      <div className="container mx-auto px-4 mt-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6 text-center">İşletme Türünüzü Seçin</h2>
          <BusinessTypeMenu />
        </div>
      </div>
    </section>
  )
}

