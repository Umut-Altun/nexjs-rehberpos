'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Pizza } from "lucide-react"
import { useEffect } from "react"

export default function PizzaRestaurantPage() {
  useEffect(() => {
    // Sayfa başlığını ve meta etiketlerini dinamik olarak ayarla
    document.title = "Pizza Restaurant Çözümleri - RehberPOS";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="flex items-center mb-4">
                <Pizza className="h-8 w-8 text-red-600 mr-2" />
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Pizza Restaurant</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Pizza Restoranınız İçin Özel Tasarlanmış Çözüm
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                RehberPOS ile pizza işletmenizi daha verimli yönetin, siparişleri kolayca takip edin ve karınızı artırın.
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
                src="/images/pizza-restaurant-solution.jpg"
                alt="RehberPOS Pizza Restaurant Çözümü"
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
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Pizza Restoranları İçin Tasarlandı</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RehberPOS, pizza işletmeleri için özel tasarlanmış benzersiz özelliklere sahiptir
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pizza Özelleştirme Modülü",
                description:
                  "Müşterilerinizin pizzalarını özelleştirmesine olanak tanıyan, ek malzeme ve çıkarma seçenekleri sunan gelişmiş modül.",
              },
              {
                title: "Teslimat Bölge Yönetimi",
                description: "Teslimat bölgelerini harita üzerinde tanımlayın, bölge bazlı fiyatlandırma ve minimum sipariş tutarı ayarlayın.",
              },
              {
                title: "Mutfak Ekranı Entegrasyonu",
                description: "Siparişleri mutfak ekranına anlık olarak gönderin, hazırlama süreçlerini optimize edin.",
              },
              {
                title: "Kurye Takip Sistemi",
                description:
                  "Kuryelerin gerçek zamanlı konumunu görün, teslimat sürelerini takip edin ve müşterileri bilgilendirin.",
              },
              {
                title: "Kombine Ürünler",
                description:
                  "Menünüzde pizza + içecek + yan ürün gibi kombinasyonlar oluşturun, cazip tekliflerle daha fazla satış yapın.",
              },
              {
                title: "Online Sipariş Entegrasyonu",
                description:
                  "Kendi web sitenizden ve mobil uygulamanızdan sipariş almak için tam entegrasyon sağlayın.",
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
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">RehberPOS ile Pizza İşletmenizi Geliştirin</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RehberPOS kullanarak pizza restoranınızda elde edeceğiniz somut faydalar
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="/images/pizza-restaurant-benefits.jpg"
                alt="RehberPOS Pizza Restaurant Faydaları"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <ul className="space-y-6">
                {[
                  "Sipariş alma süresini %35'e kadar kısaltın",
                  "Kurye rotalarını optimize ederek daha fazla siparişi zamanında teslim edin",
                  "Özelleştirilmiş pizza seçenekleriyle müşteri memnuniyetini artırın",
                  "Hammadde takibi ile maliyetlerinizi kontrol altında tutun",
                  "Sadakat programı ile düzenli müşterilerinizin sayısını artırın",
                  "Kampanyalarla satışlarınızı %20'ye kadar artırın",
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
                  alt="Pizza Restaurant Örnek Logo"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Başarı Hikayesi</h3>
                <h2 className="text-2xl font-bold mb-4">Pizza House, RehberPOS ile Sipariş Hacmini Artırdı</h2>
                <p className="text-gray-700 mb-6">
                  "RehberPOS'a geçtikten sonra müşterilere özel pizza seçenekleri sunmaya başladık ve sipariş hacmimiz %25 arttı. Kurye takip sistemi sayesinde teslimat sürelerimiz kısaldı ve müşteri memnuniyetimiz arttı."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/images/case-study-person.jpg"
                    alt="Emre Kaya"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Emre Kaya</p>
                    <p className="text-gray-600 text-sm">Pizza House, İşletme Sahibi</p>
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
              Pizza işletme sahiplerinin en çok merak ettiği sorular
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "RehberPOS ile özel pizza oluşturma süreci nasıl çalışır?",
                  answer:
                    "RehberPOS, müşterilerin kendi pizzalarını oluşturmasına olanak tanır. Hamur tipi, sos, peynir ve malzemeler için ayrı seçim ekranları sunar. Her eklenen veya çıkarılan malzeme otomatik olarak fiyata yansır ve mutfağa detaylı talimatlar gönderilir.",
                },
                {
                  question: "Birden fazla şubeli pizza zinciri için uygun mu?",
                  answer:
                    "Evet, RehberPOS çoklu şube yönetimi için tasarlanmıştır. Merkezi menü yönetimi, şubelere özel fiyatlandırma, şube bazlı raporlama ve analiz özellikleri sunarak tüm lokasyonlarınızı tek bir sistemden yönetmenizi sağlar.",
                },
                {
                  question: "Teslimat bölgesi yönetimi nasıl çalışır?",
                  answer:
                    "RehberPOS'un teslimat bölgesi yönetimi, harita üzerinde alan çizmenize olanak tanır. Her bölge için minimum sipariş tutarı, teslimat süresi ve ücretini ayrı ayrı belirleyebilirsiniz. Sistem, müşterinin adresine göre otomatik olarak doğru bölgeyi seçer.",
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
            Pizza Restoranınız İçin RehberPOS'u Deneyin
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