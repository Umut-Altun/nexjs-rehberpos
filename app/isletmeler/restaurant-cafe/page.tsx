'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Store } from "lucide-react"
import { useEffect } from "react"

export default function RestaurantCafePage() {
  useEffect(() => {
    // Sayfa başlığını ve meta etiketlerini dinamik olarak ayarla
    document.title = "Restaurant & Cafe Çözümleri - RehberPOS";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="flex items-center mb-4">
                <Store className="h-8 w-8 text-red-600 mr-2" />
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Restaurant & Cafe</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Cafe ve Restoranlar İçin Komple Yönetim Çözümü
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                RehberPOS ile işletmenizi daha verimli yönetin, masrafları azaltın ve müşteri memnuniyetini artırın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg"
                  onClick={() => window.location.href = "https://rehberadisyon.pythonanywhere.com/register/"}
                >
                  Ücretsiz Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-md text-lg"
                  onClick={() => window.location.href = "/fiyatlar"}
                >
                  Fiyatları Gör
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/restaurant-solution.jpg"
                alt="RehberPOS Restaurant Çözümü"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Özellikler</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Cafe ve Restoranlar İçin Tasarlandı</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RehberPOS, cafe ve restoran işletmeciliğinin tüm yönlerini tek bir platformda yönetmenizi sağlar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Masa Takibi",
                description:
                  "İşletmenizdeki masaları kolayca düzenleyin, rezervasyonları yönetin ve masaların doluluk durumunu anlık olarak takip edin.",
              },
              {
                title: "Sipariş Yönetimi",
                description: "Siparişleri hızlıca alın, masadan masaya aktarın ve mutfağa anında iletin.",
              },
              {
                title: "Menü Yönetimi",
                description: "Menünüzü kolayca oluşturun, fiyatları güncelleyin ve özel kampanyalar ekleyin.",
              },
              {
                title: "Stok Kontrolü",
                description:
                  "Malzeme stokunu otomatik olarak takip edin, düşük stok uyarıları alın ve fire oranlarını azaltın.",
              },
              {
                title: "Personel Yönetimi",
                description:
                  "Personel performansını izleyin, vardiya planlaması yapın ve yetkilendirme seviyelerini belirleyin.",
              },
              {
                title: "Müşteri İlişkileri",
                description:
                  "Müşteri bilgilerini kaydedin, tercihlerini öğrenin ve kişiselleştirilmiş kampanyalar oluşturun.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-red-600 text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Faydalar</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">RehberPOS ile İşletmenizi Geliştirin</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RehberPOS kullanarak elde edeceğiniz somut faydalar
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="/images/restaurant-benefits.jpg"
                alt="RehberPOS Restaurant Faydaları"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <ul className="space-y-6">
                {[
                  "Sipariş işleme süresini %40'a kadar azaltın",
                  "Personel verimliliğini artırarak işgücü maliyetlerini düşürün",
                  "Stok yönetimi ile israfı %25'e kadar azaltın",
                  "Müşteri memnuniyetini artırarak tekrar gelen müşteri oranını yükseltin",
                  "Detaylı raporlar ile işletmenizin performansını analiz edin",
                  "Kampanya yönetimi ile cironuzu artırın",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mr-3 mt-1.5">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/iletisim"
                  className="text-red-600 font-medium flex items-center hover:text-red-700 transition-colors"
                >
                  Daha fazla bilgi alın
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 md:p-12 shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <Image
                  src="/images/case-study-logo.png"
                  alt="Cafe Örnek Logo"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Başarı Hikayesi</h3>
                <h2 className="text-2xl font-bold mb-4">İstanbul Kafe, RehberPOS ile Verimlilik Artışı Sağladı</h2>
                <p className="text-gray-700 mb-6">
                  "RehberPOS'a geçtikten sonra sipariş işleme süremiz %42 azaldı ve personelimizin masalar arasında
                  dolaşması gereken süre önemli ölçüde düştü. Bu sayede müşterilerimize daha hızlı hizmet
                  verebiliyoruz."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/images/case-study-person.jpg"
                    alt="Ahmet Yılmaz"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Ahmet Yılmaz</p>
                    <p className="text-gray-600 text-sm">İstanbul Kafe, İşletme Sahibi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">SSS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Sık Sorulan Sorular</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cafe ve restoran sahiplerinin en çok merak ettiği sorular
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "RehberPOS'u kullanmak için hangi donanımlara ihtiyacım var?",
                  answer:
                    "RehberPOS, modern bir tablet, bilgisayar veya akıllı telefonda çalışır. En iyi deneyim için bir tablet, tablet standı, fiş yazıcısı ve nakit çekmecesi öneriyoruz. Ayrıca, istekte bulunursanız donanım paketleri de sağlayabiliriz.",
                },
                {
                  question: "RehberPOS'u mevcut muhasebe yazılımımla entegre edebilir miyim?",
                  answer:
                    "Evet, RehberPOS popüler muhasebe yazılımlarıyla entegre olabilir. Finansal verilerinizi otomatik olarak aktarabilir ve çift veri girişini ortadan kaldırabilirsiniz. Bu entegrasyonlar hakkında daha fazla bilgi için bizimle iletişime geçebilirsiniz.",
                },
                {
                  question: "İnternet bağlantım kesilirse RehberPOS hala çalışır mı?",
                  answer:
                    "Evet, RehberPOS, çevrimdışı modda da çalışabilecek şekilde tasarlanmıştır. İnternet bağlantınız kesilirse, sistem çalışmaya devam eder ve internet bağlantısı geri geldiğinde verileri senkronize eder.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Cafe veya Restoranınız İçin RehberPOS'u Deneyin
          </h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-10">
            15 günlük ücretsiz deneme ile tüm özellikleri keşfedin ve işletmeniz için nasıl fark yaratacağını görün
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg"
              onClick={() => window.location.href = "https://rehberadisyon.pythonanywhere.com/register/"}
            >
              15 Gün Ücretsiz Deneyin
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-red-500 px-8 py-3 rounded-md text-lg"
              onClick={() => window.location.href = "https://rehberadisyon.pythonanywhere.com/login/"}
            >
              Demo Randevusu Alın
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

