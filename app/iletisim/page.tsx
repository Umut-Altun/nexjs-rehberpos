import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "İletişim - RehberPOS Restoran Yönetim Sistemi",
  description:
    "RehberPOS ile iletişime geçin. Sorularınız, demo talepleriniz veya destek ihtiyaçlarınız için bize ulaşın.",
  keywords: "RehberPOS iletişim, restoran yönetim sistemi iletişim, adisyo sistemi iletişim, RehberPOS demo talep",
  openGraph: {
    title: "RehberPOS İletişim | Bize Ulaşın",
    description: "Sorularınız, demo talepleriniz veya destek ihtiyaçlarınız için RehberPOS ile iletişime geçin.",
    type: "website",
    url: "https://rehberpos.com/iletisim",
    locale: "tr_TR",
    images: [
      {
        url: "https://rehberpos.com/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "RehberPOS İletişim",
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">İletişime Geçin</h1>
            <p className="text-xl text-gray-700 mb-8">
              Sorularınız, önerileriniz veya demo talepleriniz için ekibimizle iletişime geçin
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Bize Mesaj Gönderin</h2>
                <form>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-posta Adresiniz *
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon Numaranız *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Konu
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      >
                        <option value="demo">Demo Talebi</option>
                        <option value="pricing">Fiyatlandırma</option>
                        <option value="support">Teknik Destek</option>
                        <option value="feedback">Geri Bildirim</option>
                        <option value="other">Diğer</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md flex items-center">
                    Gönder
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">İletişim Bilgileri</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Telefon</h3>
                      <p className="text-gray-600 mt-1">+90 (553) 327 28 74</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">E-posta</h3>
                      <p className="text-gray-600 mt-1">rehberyazilim@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Adres</h3>
                      <p className="text-gray-600 mt-1">
                        Fevzi çakmak mah,
                        <br />
                        0600 Sincan/Ankara
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-full mr-4 flex-shrink-0">
                      <Clock className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Çalışma Saatleri</h3>
                      <p className="text-gray-600 mt-1">
                        Pazartesi - Cuma: 09:00 - 18:00
                        <br />
                        Cumartesi: 10:00 - 14:00
                        <br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="bg-gray-50 rounded-lg p-8 mt-8">
                <h2 className="text-2xl font-bold mb-6">Demo İstemek İster misiniz?</h2>
                <p className="text-gray-600 mb-6">
                  RehberPOS'un nasıl çalıştığını görmek için ücretsiz bir demo talep edin. Size özel bir sunum ile tüm
                  özelliklerimizi tanıtacağız.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md">
                  Demo Talep Et
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="aspect-w-16 aspect-h-9 h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.232354763453!2d29.00753961570396!3d41.07243797929463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab63f6f4a946f%3A0xb3922e9de6686955!2sLevent%2C%20Maya%20Meridyen%20%C4%B0%C5%9F%20Merkezi%2C%20Ebulula%20Mardin%20Cd.%20No%3A16%2C%2034335%20Be%C5%9Fikta%C5%9F%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1649323416275!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RehberPOS Ofis Konumu"
            ></iframe>
          </div>
        </div>
      </section> */}
    </>
  )
}

