'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, CloudCog } from "lucide-react"
import { useEffect } from "react"

export default function BulutMutfakPage() {
  useEffect(() => {
    // Sayfa başlığını ve meta etiketlerini dinamik olarak ayarla
    document.title = "Bulut Mutfak Çözümleri - RehberPOS";
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="flex items-center mb-4">
                <CloudCog className="h-8 w-8 text-red-600 mr-2" />
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Bulut Mutfak</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Bulut Mutfaklar İçin Özel Tasarlanmış Çözüm
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                RehberPOS ile paket servis odaklı mutfak operasyonlarınızı optimize edin, maliyetleri düşürün ve verimliliği artırın.
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
                src="/images/cloud-kitchen-solution.jpg"
                alt="RehberPOS Bulut Mutfak Çözümü"
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
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Bulut Mutfak İşletmeleri İçin Tasarlandı</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RehberPOS, bulut mutfak ve hayalet mutfak işletmelerinin özel ihtiyaçlarını karşılayan kapsamlı çözümler sunar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Çoklu Platform Entegrasyonu",
                description:
                  "Yemeksepeti, Getir, Trendyol gibi tüm sipariş platformlarını tek arayüzde birleştirerek yönetin.",
              },
              {
                title: "Dinamik Mutfak Ekranı",
                description: "Gerçek zamanlı sipariş takibi, hazırlama süreleri ve teslim bilgisi için optimize edilmiş ekran.",
              },
              {
                title: "Çoklu Marka Yönetimi",
                description: "Aynı mutfaktan farklı markaları kolayca yönetin, siparişleri ve istatistikleri ayrı ayrı takip edin.",
              },
              {
                title: "Envanter Optimizasyonu",
                description:
                  "Farklı markalar arasında ortak malzemeleri izleyin, israfı önleyin ve maliyetleri düşürün.",
              },
              {
                title: "Kurye Takip Sistemi",
                description:
                  "Kuryelerin lokasyonlarını izleyin, teslimat rotalarını optimize edin ve teslim sürelerini kısaltın.",
              },
              {
                title: "Talep Tahmini",
                description:
                  "Yapay zeka destekli talep tahmini ile stok ve personel planlamanızı optimize edin.",
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
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">RehberPOS ile Bulut Mutfağınızı Geliştirin</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RehberPOS kullanarak bulut mutfak operasyonlarınızda elde edeceğiniz somut faydalar
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="/images/cloud-kitchen-benefits.jpg"
                alt="RehberPOS Bulut Mutfak Faydaları"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <ul className="space-y-6">
                {[
                  "Sipariş yönetim karmaşasını ortadan kaldırarak operasyonel verimliliği %60'a kadar artırın",
                  "Çoklu marka yapısını tek sistemden yöneterek yönetim maliyetlerini azaltın",
                  "Platform komisyonlarını tek ekrandan görüntüleyerek finansal planlamayı kolaylaştırın",
                  "Merkezi envanter yönetimi ile malzeme israfını %30'a kadar azaltın",
                  "Gerçek zamanlı analitik ile performans metrikleri ve büyüme fırsatlarını belirleyin",
                  "Teslimat sürelerini optimize ederek müşteri memnuniyetini artırın",
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
                  alt="Bulut Mutfak Örnek Logo"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Başarı Hikayesi</h3>
                <h2 className="text-2xl font-bold mb-4">Cloud Cuisine, RehberPOS ile Operasyonlarını Yeniden Yapılandırdı</h2>
                <p className="text-gray-700 mb-6">
                  "6 farklı markayı tek bir bulut mutfaktan yönetiyoruz. RehberPOS sayesinde tüm platformlardan gelen siparişleri tek ekrandan yönetebiliyoruz. Bu sayede sipariş hazırlama süremiz %45 azaldı ve müşteri memnuniyetimiz arttı."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/images/case-study-person.jpg"
                    alt="Zeynep Yıldız"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Zeynep Yıldız</p>
                    <p className="text-gray-600 text-sm">Cloud Cuisine, Operasyon Müdürü</p>
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
              Bulut mutfak işletmecilerinin en çok merak ettiği sorular
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  question: "RehberPOS, farklı sipariş platformlarını nasıl entegre ediyor?",
                  answer:
                    "RehberPOS, Yemeksepeti, Getir, Trendyol Yemek ve diğer online yemek sipariş platformlarıyla API entegrasyonu sağlar. Bu sayede tüm platformlardan gelen siparişler otomatik olarak sisteme aktarılır, kabul edilir ve tek bir arayüzden yönetilir.",
                },
                {
                  question: "Aynı mutfaktan farklı markaları nasıl yönetebilirim?",
                  answer:
                    "RehberPOS'un çoklu marka yönetimi özelliği ile aynı mutfaktan farklı markalar için siparişleri ayrı ayrı takip edebilir, raporlayabilir ve analiz edebilirsiniz. Sistem, hangi malzemenin hangi markaya ait olduğunu izlerken, ortak malzemeleri de optimize eder.",
                },
                {
                  question: "Kurye yönetimi için hangi özellikler sunuluyor?",
                  answer:
                    "RehberPOS, dahili kurye takip sistemi ile kuryelerin konumunu izlemenize, rota optimizasyonu yapmanıza ve teslimat sürelerini takip etmenize olanak tanır. Aynı zamanda, kendi kurye ekibiniz olmasa bile, sipariş platformlarının kurye hizmetleriyle tam entegrasyon sağlar.",
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
            Bulut Mutfağınız İçin RehberPOS'u Deneyin
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