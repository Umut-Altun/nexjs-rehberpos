import type { Metadata } from "next"
import { ArrowUpRight, Check, Calendar, Users, Clock, Server, AlertCircle } from "lucide-react"
import Link from "next/link"
import PricingCard from "@/components/pricing-card"

export const metadata: Metadata = {
  title: "Fiyatlar - RehberPOS",
  description: "RehberPOS'un basit ve şeffaf fiyatlandırma planları. İşletmenizin ihtiyaçlarına uygun paketi seçin.",
}

export default function FiyatlarPage() {
  return (
    <div className="bg-white pb-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Fiyatlandırma</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Basit, Şeffaf Fiyatlandırma</h1>
            <p className="text-xl text-gray-600 mb-8">
              İşletmenizin ihtiyaçlarına uygun planı seçin. Demo sürümümüzü tamamen ücretsiz kullanabilirsiniz.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="#fiyatlar" 
                className="px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
              >
                Planları İncele
              </Link>
              <Link 
                href="/iletisim" 
                className="px-6 py-3 bg-white text-gray-800 font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section id="fiyatlar" className="py-20 -mt-10">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard
                title="Başlangıç"
                price="0.00"
                period="ücretsiz"
                description="Küçük işletmeler ve girişimciler için mükemmel"
                features={[
                  "1 POS Terminali",
                  "Temel Sipariş Yönetimi",
                  "Müşteri Veritabanı",
                  "Mobil Uygulama Erişimi",
                  "Ücretsiz Destek",
                  "Aylık 100 Sipariş Limiti",
                ]}
                buttonText="Ücretsiz Başlayın"
                popular={false}
              />

              <PricingCard
                title="Profesyonel"
                price="499"
                period="aylık"
                description="Büyüyen restoranlar için ideal"
                features={[
                  "3 POS Terminali",
                  "Gelişmiş Sipariş Yönetimi",
                  "Stok Kontrolü",
                  "Analiz Paneli",
                  "Öncelikli Destek",
                  "Personel Yönetimi",
                ]}
                buttonText="15 Gün Ücretsiz Deneyin"
                popular={true}
              />

              <PricingCard
                title="Kurumsal"
                price="999"
                period="aylık"
                description="Restoran zincirleri ve büyük mekanlar için"
                features={[
                  "Sınırsız POS Terminali",
                  "Gelişmiş Analitik",
                  "Çoklu Lokasyon Yönetimi",
                  "API Erişimi",
                  "Özel Hesap Yöneticisi",
                  "Özel Entegrasyonlar",
                ]}
                buttonText="Satış ile İletişime Geçin"
                popular={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Detaylı Karşılaştırma</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Planları Karşılaştırın</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İşletmenizin ihtiyaçlarına en uygun planı seçmek için tüm özellikleri karşılaştırın
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 text-gray-600 font-medium">Özellikler</th>
                  <th className="py-4 px-6 text-gray-600 font-medium">Başlangıç</th>
                  <th className="py-4 px-6 text-gray-600 font-medium bg-red-50">Profesyonel</th>
                  <th className="py-4 px-6 text-gray-600 font-medium">Kurumsal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-medium">POS Terminalleri</td>
                  <td className="py-4 px-6 text-center">1</td>
                  <td className="py-4 px-6 text-center bg-red-50">3</td>
                  <td className="py-4 px-6 text-center">Sınırsız</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Sipariş Yönetimi</td>
                  <td className="py-4 px-6 text-center">Temel</td>
                  <td className="py-4 px-6 text-center bg-red-50">Gelişmiş</td>
                  <td className="py-4 px-6 text-center">Özel</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Stok Kontrolü</td>
                  <td className="py-4 px-6 text-center"><AlertCircle className="h-5 w-5 text-gray-400 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-red-50"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Analiz & Raporlama</td>
                  <td className="py-4 px-6 text-center">Temel</td>
                  <td className="py-4 px-6 text-center bg-red-50">Gelişmiş</td>
                  <td className="py-4 px-6 text-center">Özelleştirilmiş</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Müşteri Yönetimi</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-red-50"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Mobil Uygulama</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-red-50"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Personel Yönetimi</td>
                  <td className="py-4 px-6 text-center"><AlertCircle className="h-5 w-5 text-gray-400 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-red-50"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Çoklu Lokasyon</td>
                  <td className="py-4 px-6 text-center"><AlertCircle className="h-5 w-5 text-gray-400 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-red-50"><AlertCircle className="h-5 w-5 text-gray-400 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">API Erişimi</td>
                  <td className="py-4 px-6 text-center"><AlertCircle className="h-5 w-5 text-gray-400 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-red-50"><AlertCircle className="h-5 w-5 text-gray-400 mx-auto" /></td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Özel Entegrasyonlar</td>
                  <td className="py-4 px-6 text-center"><AlertCircle className="h-5 w-5 text-gray-400 mx-auto" /></td>
                  <td className="py-4 px-6 text-center bg-red-50">Ek Ücrete Tabi</td>
                  <td className="py-4 px-6 text-center"><Check className="h-5 w-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-medium">Teknik Destek</td>
                  <td className="py-4 px-6 text-center">E-posta</td>
                  <td className="py-4 px-6 text-center bg-red-50">E-posta, Telefon</td>
                  <td className="py-4 px-6 text-center">7/24 Özel Destek</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Business Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">İşletme Türlerine Göre</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Her İşletmeye Uygun Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RehberPOS farklı işletme türlerinin ihtiyaçlarına göre özelleştirilmiş çözümler sunar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-red-600" />,
                title: "Restoran & Kafeler",
                description: "Masa yönetimi, adisyon takibi ve müşteri sadakat programları ile restaurant ve kafelere özel çözümler.",
                link: "/isletmeler/restaurant-cafe"
              },
              {
                icon: <Clock className="h-10 w-10 text-red-600" />,
                title: "Fast Food",
                description: "Hızlı sipariş alma, combo menü yönetimi ve paket servis optimizasyonu ile fast food işletmelerine özel.",
                link: "/isletmeler/fast-food"
              },
              {
                icon: <Server className="h-10 w-10 text-red-600" />,
                title: "Bulut Mutfaklar",
                description: "Çoklu marka yönetimi, platform entegrasyonları ve kurye takibi ile bulut mutfaklara özel çözümler.",
                link: "/isletmeler/bulut-mutfak"
              },
              {
                icon: <Calendar className="h-10 w-10 text-red-600" />,
                title: "Pizza Restoranları",
                description: "Özelleştirme modülü, teslimat bölge yönetimi ve online sipariş entegrasyonu ile pizza restoranlarına özel.",
                link: "/isletmeler/pizza-restaurant"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link
                  href={item.link}
                  className="text-red-600 font-medium hover:text-red-700 flex items-center"
                >
                  Detaylı Bilgi
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Sıkça Sorulan Sorular</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Fiyatlandırma Hakkında</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşterilerimizin fiyatlandırma hakkında en sık sorduğu sorular
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Ücretlendirme modeliniz nasıl çalışıyor?",
                  answer: "RehberPOS, aylık abonelik modeli üzerinden çalışır. Seçtiğiniz plana göre aylık veya yıllık ödeme yapabilirsiniz. Yıllık ödemelerde %20 indirim sunuyoruz."
                },
                {
                  question: "Ücretsiz deneme süresi var mı?",
                  answer: "Evet, tüm ücretli planlarımızda 15 günlük tam özellikli ücretsiz deneme süresi sunuyoruz. Bu süre boyunca herhangi bir ödeme bilgisi girmenize gerek yoktur."
                },
                {
                  question: "Aboneliğimi istediğim zaman iptal edebilir miyim?",
                  answer: "Evet, aboneliğinizi istediğiniz zaman iptal edebilirsiniz. İptal işlemi, mevcut ödeme döneminin sonunda geçerli olur ve o döneme kadar tüm özellikleri kullanmaya devam edersiniz."
                },
                {
                  question: "POS terminali için ekstra donanım maliyeti var mı?",
                  answer: "RehberPOS, tablet ve akıllı telefonlarda çalışacak şekilde tasarlanmıştır. Mevcut cihazlarınızı kullanabilirsiniz, ancak tercihen profesyonel POS ekipmanı satın alabilirsiniz. Ortaklarımız aracılığıyla özel indirimler sunuyoruz."
                },
                {
                  question: "İşletmem büyüdükçe planımı değiştirebilir miyim?",
                  answer: "Evet, ihtiyaçlarınız değiştikçe planınızı kolayca yükseltebilir veya düşürebilirsiniz. Plan değişiklikleri anında geçerli olur ve fiyat farkı orantılı olarak hesaplanır."
                },
                {
                  question: "Özel ihtiyaçlarım için uyarlanmış fiyatlandırma mümkün mü?",
                  answer: "Evet, büyük işletmeler veya özel ihtiyaçlar için özelleştirilmiş planlar sunuyoruz. Satış ekibimizle iletişime geçerek özel fiyatlandırma ve çözümler hakkında bilgi alabilirsiniz."
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-10 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">RehberPOS ile İşletmenizi Büyütün</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Kararsız mısınız? 15 günlük ücretsiz deneme ile RehberPOS'un işletmenize nasıl fayda sağlayacağını keşfedin.
              Hiçbir kredi kartı gerektirmez.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://rehberadisyon.pythonanywhere.com/register/"
                className="px-8 py-4 bg-white text-red-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Hemen Ücretsiz Deneyin
              </Link>
              <Link
                href="/iletisim"
                className="px-8 py-4 bg-transparent text-white font-medium rounded-md border border-white hover:bg-white/10 transition-colors"
              >
                Bize Ulaşın
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 