import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail, Globe } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Image
              src="/images/rehberpos-logo-white.png"
              alt="RehberPOS Logo"
              width={150}
              height={40}
              className="h-10 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              RehberPOS, restoranlar, kafeler ve yiyecek işletmeleri için modern adisyo ve sipariş yönetim sistemi
              sunar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-300">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-red-600 after:left-0 after:-bottom-2">Hızlı Bağlantılar</h3>
            <ul className="space-y-3 mt-8">
              <li>
                <Link href="/ozellikler" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Özellikler
                </Link>
              </li>
              <li>
                <Link href="/fiyatlar" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Fiyatlandırma
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-red-600 after:left-0 after:-bottom-2">İşletme Türleri</h3>
            <ul className="space-y-3 mt-8">
              <li>
                <Link href="/isletmeler/restaurant-cafe" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Restaurant & Cafe
                </Link>
              </li>
              <li>
                <Link href="/isletmeler/fast-food" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Fast Food
                </Link>
              </li>
              <li>
                <Link href="/isletmeler/pizza-restaurant" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Pizza Restaurant
                </Link>
              </li>
              <li>
                <Link href="/isletmeler/bulut-mutfak" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Bulut Mutfak
                </Link>
              </li>
              <li>
                <Link href="/isletmeler/hotel-cafe-restaurant" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Hotel Cafe & Restaurant
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-red-600 after:left-0 after:-bottom-2">Yasal</h3>
            <ul className="space-y-3 mt-8">
              <li>
                <Link href="/sozlesmeler" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Sözleşmeler
                </Link>
              </li>
              <li>
                <Link href="/hizmet-iptali-ve-iade" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Hizmet İptali ve İade
                </Link>
              </li>
              <li>
                <Link href="/kullanici-sozlesmesi" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Kullanıcı Sözleşmesi
                </Link>
              </li>
              <li>
                <Link href="/kvkk-metni" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  KVKK Metni
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi" className="text-gray-300 hover:text-red-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                  Gizlilik Politikası
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:content-[''] after:w-12 after:h-1 after:bg-red-600 after:left-0 after:-bottom-2">İletişim</h3>
            <ul className="space-y-4 mt-8">
              <li className="flex items-start group">
                <MapPin className="h-5 w-5 text-red-500 group-hover:text-red-400 mr-3 mt-1 flex-shrink-0 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">Sincan, Ankara, Türkiye</span>
              </li>
              <li className="flex items-center group">
                <Phone className="h-5 w-5 text-red-500 group-hover:text-red-400 mr-3 flex-shrink-0 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">+90 (553) 327 28 74</span>
              </li>
              <li className="flex items-center group">
                <Mail className="h-5 w-5 text-red-500 group-hover:text-red-400 mr-3 flex-shrink-0 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">rehberyazilim@gmail.com</span>
              </li>
              <li className="flex items-center group">
                <Globe className="h-5 w-5 text-red-500 group-hover:text-red-400 mr-3 flex-shrink-0 transition-colors" />
                <span className="text-gray-300 group-hover:text-white transition-colors">www.rehberpos.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} RehberPOS. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 items-center">
              <Link href="/gizlilik-politikasi" className="text-gray-400 text-sm hover:text-red-400 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kullanici-sozlesmesi" className="text-gray-400 text-sm hover:text-red-400 transition-colors">
                Kullanım Koşulları
              </Link>
              <Link href="/cerez-politikasi" className="text-gray-400 text-sm hover:text-red-400 transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

