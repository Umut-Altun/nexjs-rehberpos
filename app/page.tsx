'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowUpRight } from "lucide-react"
import FeatureCard from "@/components/feature-card"
import TestimonialCard from "@/components/testimonial-card"
import PricingCard from "@/components/pricing-card"
import FAQAccordion from "@/components/faq-accordion"
import TrustedBy from "@/components/trusted-by"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Trusted By Section */}
      {/* <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <TrustedBy />
        </div>
      </section> */}

      {/* Features Section */}
      <section id="ozellikler" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Özellikler</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Tüm İhtiyaçlarınız İçin Tek Çözüm</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RehberPOS, restoranınızı verimli bir şekilde yönetmeniz için ihtiyacınız olan her şeyi sunar
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

          <div className="mt-12 text-center">
            <Link
              href="/ozellikler"
              className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
            >
              Tüm özellikleri keşfedin
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Nasıl Çalışır</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">RehberPOS ile İşletmenizi Yönetmek Çok Kolay</h2>
              <p className="text-lg text-gray-600 mb-8">
                Kolay kurulum sürecimizle dakikalar içinde başlayın ve işletmenizi daha verimli hale getirin.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-red-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Kayıt Olun</h3>
                    <p className="text-gray-600">Hesabınızı oluşturun ve işletmenize uygun bir plan seçin</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-red-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Özelleştirin</h3>
                    <p className="text-gray-600">
                      Menünüzü, masalarınızı ve personel hesaplarınızı restoranınıza göre ayarlayın
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-red-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Kullanmaya Başlayın</h3>
                    <p className="text-gray-600">Siparişleri almaya ve restoranınızı kolayca yönetmeye başlayın</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg"
                  onClick={() => window.location.href = "https://rehberadisyon.pythonanywhere.com/register/"}
                >
                  Hemen Başlayın
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-white p-3 rounded-xl shadow-xl">
                  <Image
                    src="/images/dashboard-preview.png"
                    alt="RehberPOS Dashboard"
                    width={600}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Check className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Tamamlanan Siparişler</p>
                      <p className="text-2xl font-bold">
                        +27% <span className="text-sm text-gray-500">bu ay</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="referanslar" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Referanslar</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Müşterilerimiz Ne Diyor?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RehberPOS kullanan binlerce memnun restoran sahibine katılın
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="RehberPOS, restoranımızı yönetme şeklimizi değiştirdi. Siparişler daha hızlı, envanter her zaman doğru ve müşterilerimiz deneyimi seviyor."
              author="Mehmet Yılmaz"
              role="Restoran Sahibi"
              image="/images/testimonial-1.jpg"
            />
            <TestimonialCard
              quote="Analiz özelliği, en karlı menü öğelerimizi belirlememize ve operasyonlarımızı optimize etmemize yardımcı oldu. Gelirimiz %25 arttı."
              author="Ayşe Kaya"
              role="Kafe Müdürü"
              image="/images/testimonial-2.jpg"
            />
            <TestimonialCard
              quote="Müşteri desteği olağanüstü. Sorularımız olduğunda, ekip hızla yanıt veriyor ve sorunları çözmemize yardımcı oluyor."
              author="Ali Demir"
              role="Restoran Zinciri Sahibi"
              image="/images/testimonial-3.jpg"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="fiyatlar" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Fiyatlandırma</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Basit, Şeffaf Fiyatlandırma</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">İşletmenizin ihtiyaçlarına uygun planı seçin</p>
          </div>

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
                "Ve Daha Fazlası...",
              ]}
              buttonText="Başlayın"
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
              buttonText="Başlayın"
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

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Özel ihtiyaçlarınız mı var? Size özel çözümler sunabiliriz.</p>
            <Link
              href="/fiyatlar"
              className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
            >
              Tüm fiyatlandırma seçeneklerini görün
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="sss" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">SSS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RehberPOS hakkında sık sorulan soruların cevaplarını bulun
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Başka sorularınız mı var?</p>
            <Link
              href="/iletisim"
              className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
            >
              Bizimle iletişime geçin
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Restoranınızı Dönüştürmeye Hazır mısınız?</h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-10">
            Operasyonları kolaylaştırmak ve kârları artırmak için RehberPOS'u kullanan binlerce restorana katılın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg"
              onClick={() => window.location.href = "https://rehberadisyon.pythonanywhere.com/register/"}
            >
              Ücretsiz Kullanın
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

