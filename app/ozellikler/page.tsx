import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import FeatureCard from "@/components/feature-card"

export const metadata: Metadata = {
  title: "Özellikler - RehberPOS Restoran Yönetim Sistemi",
  description:
    "RehberPOS'un sipariş yönetimi, stok kontrolü, müşteri yönetimi ve daha fazlası gibi güçlü özelliklerini keşfedin.",
  keywords: "restoran özellikleri, adisyo sistemi, sipariş yönetimi, stok kontrolü, müşteri yönetimi, POS özellikleri",
  openGraph: {
    title: "RehberPOS Restoran Yönetim Sistemi Özellikleri",
    description: "Restoranınızı daha verimli yönetmenize yardımcı olacak tüm özellikler",
    type: "website",
    url: "https://rehberpos.com/ozellikler",
    locale: "tr_TR",
    images: [
      {
        url: "https://rehberpos.com/images/features-og.jpg",
        width: 1200,
        height: 630,
        alt: "RehberPOS Özellikleri",
      },
    ],
  },
}

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Restoranınızı Yönetmenin En Kolay Yolu
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              RehberPOS, restoranınızı yönetmek için ihtiyacınız olan tüm özellikleri tek bir platformda sunar.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg">
              Ücretsiz Kullanmaya Başlayın
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Özellikler</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Temel Özellikler</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RehberPOS'un güçlü özellikleriyle restoranınızı daha verimli yönetin
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="menu-square"
              title="Sipariş Yönetimi"
              description="Hız için tasarlanmış sezgisel bir arayüzle siparişleri hızlı ve verimli bir şekilde alın"
            />
            <FeatureCard
              icon="clipboard-list"
              title="Stok Kontrolü"
              description="Gerçek zamanlı güncellemeler ve otomatik uyarılarla malzemeleri ve tedarikleri takip edin"
            />
            <FeatureCard
              icon="users"
              title="Müşteri Yönetimi"
              description="Profiller, sipariş geçmişi ve kişiselleştirilmiş pazarlama ile müşteri sadakatini artırın"
            />
            <FeatureCard
              icon="bar-chart-2"
              title="Analiz ve Raporlama"
              description="Kapsamlı raporlar ve içgörülerle veri odaklı kararlar alın"
            />
            <FeatureCard
              icon="smartphone"
              title="Mobil Uygulama"
              description="Güçlü mobil uygulamamızla restoranınızı her yerden yönetin"
            />
            <FeatureCard
              icon="credit-card"
              title="Ödeme İşleme"
              description="Güvenli ve hızlı işlem süreciyle tüm ödeme yöntemlerini kabul edin"
            />
          </div>
        </div>
      </section>

      {/* Feature Detail 1 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white p-3 rounded-xl shadow-xl">
                <Image
                  src="/images/order-management.jpg"
                  alt="RehberPOS Sipariş Yönetimi"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Sipariş Yönetimi</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Siparişleri Hızlı ve Kolay Yönetin</h2>
              <p className="text-lg text-gray-600 mb-8">
                RehberPOS'un sezgisel sipariş yönetim sistemi, siparişleri hızlı bir şekilde almanızı ve yönetmenizi
                sağlar. Dokunmatik ekran arayüzü, özelleştirilebilir menüler ve hızlı ödeme seçenekleriyle
                müşterilerinize daha iyi hizmet verin.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sezgisel dokunmatik ekran arayüzü</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Özelleştirilebilir menü ve kategoriler</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Masa planı ve rezervasyon yönetimi</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Mutfak ekranı entegrasyonu</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Çoklu ödeme seçenekleri</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Detail 2 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-white p-3 rounded-xl shadow-xl">
                <Image
                  src="/images/inventory-control.jpg"
                  alt="RehberPOS Stok Kontrolü"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Stok Kontrolü</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Stok ve Envanter Yönetimi</h2>
              <p className="text-lg text-gray-600 mb-8">
                RehberPOS'un stok kontrol sistemi, malzeme ve tedariklerinizi gerçek zamanlı olarak takip etmenizi
                sağlar. Otomatik uyarılar, düşük stok bildirimleri ve detaylı raporlarla stok maliyetlerinizi optimize
                edin.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Gerçek zamanlı stok takibi</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Otomatik düşük stok uyarıları</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Tedarikçi yönetimi</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Maliyet analizi ve raporlama</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Barkod tarama desteği</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Restoranınızı Dönüştürmeye Hazır mısınız?</h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-10">
            RehberPOS'un tüm özelliklerini keşfedin ve restoranınızı daha verimli hale getirin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg">
              Ücretsiz Kullanın
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

