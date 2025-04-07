import type { Metadata } from "next"
import Link from "next/link"
import { FileText, Shield, FileSignature, UserCheck, Receipt } from "lucide-react"

export const metadata: Metadata = {
  title: "Sözleşmeler - RehberPOS",
  description: "RehberPOS yasal sözleşmeler ve politikalar: Kullanıcı sözleşmesi, gizlilik politikası, KVKK metni ve diğer yasal belgeler.",
}

export default function SozlesmelerPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sözleşmeler ve Yasal Metinler</h1>
          <p className="text-lg text-gray-600 mb-12 text-center">
            RehberPOS hizmetlerini kullanırken geçerli olan tüm yasal belgelerimize buradan ulaşabilirsiniz.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start mb-4">
                <div className="bg-red-50 p-3 rounded-lg mr-4">
                  <UserCheck className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Kullanıcı Sözleşmesi</h2>
                  <p className="text-gray-600 mb-4">
                    RehberPOS hizmetlerini kullanırken uymanız gereken kurallar ve şartlar.
                  </p>
                  <Link 
                    href="/kullanici-sozlesmesi" 
                    className="text-red-600 hover:text-red-800 font-medium flex items-center"
                  >
                    İncele
                    <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start mb-4">
                <div className="bg-red-50 p-3 rounded-lg mr-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Gizlilik Politikası</h2>
                  <p className="text-gray-600 mb-4">
                    Verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında bilgiler.
                  </p>
                  <Link 
                    href="/gizlilik-politikasi" 
                    className="text-red-600 hover:text-red-800 font-medium flex items-center"
                  >
                    İncele
                    <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start mb-4">
                <div className="bg-red-50 p-3 rounded-lg mr-4">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">KVKK Metni</h2>
                  <p className="text-gray-600 mb-4">
                    Kişisel Verilerin Korunması Kanunu kapsamında haklarınız ve veri işleme süreçlerimiz.
                  </p>
                  <Link 
                    href="/kvkk-metni" 
                    className="text-red-600 hover:text-red-800 font-medium flex items-center"
                  >
                    İncele
                    <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start mb-4">
                <div className="bg-red-50 p-3 rounded-lg mr-4">
                  <Receipt className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Hizmet İptali ve İade Politikası</h2>
                  <p className="text-gray-600 mb-4">
                    Abonelik iptali ve iade süreçleri hakkında detaylı bilgiler.
                  </p>
                  <Link 
                    href="/hizmet-iptali-ve-iade" 
                    className="text-red-600 hover:text-red-800 font-medium flex items-center"
                  >
                    İncele
                    <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start mb-4">
                <div className="bg-red-50 p-3 rounded-lg mr-4">
                  <FileSignature className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Çerez Politikası</h2>
                  <p className="text-gray-600 mb-4">
                    Web sitemizde kullanılan çerezler ve kullanım amaçları hakkında bilgiler.
                  </p>
                  <Link 
                    href="/cerez-politikasi" 
                    className="text-red-600 hover:text-red-800 font-medium flex items-center"
                  >
                    İncele
                    <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Yasal Bilgilendirme</h2>
            <p className="text-gray-600">
              Bu sayfada listelenen tüm yasal belgeler, RehberPOS hizmetlerinin kullanımı için geçerlidir. 
              Hizmetlerimizi kullanmaya başladığınızda, bu belgelerde belirtilen şartları kabul etmiş sayılırsınız. 
              Belgeler düzenli olarak güncellenebilir, bu nedenle belirli aralıklarla kontrol etmenizi öneririz.
            </p>
            <p className="text-gray-600 mt-4">
              Sorularınız için <a href="mailto:rehberyazilim@gmail.com" className="text-red-600 hover:text-red-800">rehberyazilim@gmail.com</a> adresinden bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 