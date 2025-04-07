import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Zap, Heart, Target, Award, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Hakkımızda - RehberPOS Restoran Yönetim Sistemi",
  description:
    "RehberPOS'un hikayesi, misyonu ve değerleri hakkında bilgi edinin. Restoranlar için yenilikçi çözümler sunan şirketimizi tanıyın.",
  keywords: "RehberPOS hakkında, restoran yönetim sistemi, şirket değerleri, misyon, vizyon, restoran teknolojisi",
  openGraph: {
    title: "RehberPOS Hakkında | Restoran Teknolojileri Lideriniz",
    description: "RehberPOS'un hikayesi, misyonu ve değerleri hakkında bilgi edinin.",
    type: "website",
    url: "https://rehberpos.com/hakkimizda",
    locale: "tr_TR",
    images: [
      {
        url: "https://rehberpos.com/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "RehberPOS Hakkında",
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Restoranlar İçin Teknoloji Çözümleri</h1>
            <p className="text-xl text-gray-700 mb-8">
              RehberPOS, restoran endüstrisini dönüştürerek işletmelerin daha verimli çalışmasına yardımcı olur.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Hikayemiz</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">RehberPOS'un Doğuşu</h2>
              <p className="text-lg text-gray-600 mb-6">
              Restoran ve kafe işletmeciliğinde karşılaşılan zorlukları bizzat gözlemledikten sonra, bu alanda daha pratik, anlaşılır ve kurulumu kolay bir sistem ihtiyacı olduğunu fark ettim. Yazılım bilgimi, saha tecrübeleriyle birleştirerek, RehberPOS'un ilk temellerini atmaya karar verdim.
              </p>
              <p className="text-lg text-gray-600 mb-6">
              Bugün RehberPOS; hızlı kurulan, kullanıcı dostu arayüzüyle işletme sahiplerine kolaylık sağlayan bir adisyon sistemi olma yolunda ilerliyor. Hedefim, sadece bir yazılım sunmak değil; aynı zamanda bu sektördeki girişimcilere yol gösteren bir “rehber” olmak.
              </p>
              <p className="text-lg text-gray-600">
              Senin de fikirlerinle bu sistemi daha da geliştirmek mümkün. Gel, birlikte büyütelim!
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-3 rounded-xl shadow-xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="RehberPOS Ekibi"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Misyon & Vizyon</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Ne İçin Çalışıyoruz?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Restoran teknolojisinin geleceğini şekillendirme vizyonumuzla hareket ediyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
              <p className="text-lg text-gray-600 mb-6">
                Restoranların teknolojiyi kullanarak daha verimli çalışmalarını, müşteri deneyimini geliştirmelerini ve
                kârlılıklarını artırmalarını sağlamak.
              </p>
              <p className="text-lg text-gray-600">
                Her büyüklükteki restoran işletmesi için kullanımı kolay, kapsamlı ve uygun fiyatlı çözümler sunarak,
                onların teknolojik dönüşümünü kolaylaştırmayı hedefliyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
              <p className="text-lg text-gray-600 mb-6">
                Restoran teknolojisinde Türkiye'nin lider sağlayıcısı olmak ve global pazarda söz sahibi bir marka
                haline gelmek.
              </p>
              <p className="text-lg text-gray-600">
                Sürekli inovasyon ve müşteri odaklı yaklaşımımızla, restoran işletmelerinin dijital dönüşümüne öncülük
                ederek, sektörde yeni standartlar belirlemek istiyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Değerlerimiz</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Bizi Yönlendiren İlkeler</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RehberPOS'un kültürünü ve çalışma şeklini şekillendiren temel değerlerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Müşteri Odaklılık</h3>
              <p className="text-gray-600">
                Müşterilerimizin ihtiyaçlarını anlamak ve onların başarısı için çalışmak en büyük önceliğimizdir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">İnovasyon</h3>
              <p className="text-gray-600">
                Sürekli olarak yeni fikirler arıyor ve ürünlerimizi geliştirerek sektörde öncü olmaya çalışıyoruz.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tutku</h3>
              <p className="text-gray-600">
                Restoran endüstrisine olan tutkumuz, her gün daha iyi olmak için bizi motive ediyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Ekibimiz</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Arkasındaki Uzmanlar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RehberPOS'u geliştiren ve destekleyen tutkulu ekibimizle tanışın
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Ahmet Yılmaz",
                position: "Kurucu & CEO",
                image: "/images/team-1.jpg",
              },
              {
                name: "Ayşe Kaya",
                position: "Ürün Müdürü",
                image: "/images/team-2.jpg",
              },
              {
                name: "Mehmet Demir",
                position: "Baş Teknoloji Sorumlusu",
                image: "/images/team-3.jpg",
              },
              {
                name: "Zeynep Şahin",
                position: "Müşteri Başarı Müdürü",
                image: "/images/team-4.jpg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-64 overflow-hidden">
                  <Image
                    src={member.image || `/placeholder.svg?height=256&width=400`}
                    alt={member.name}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Restoranınız İçin En İyi Çözüm</h2>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto mb-10">
            RehberPOS ile tanışın ve restoranınızı daha verimli bir şekilde yönetmeye başlayın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg">
              15 Gün Ücretsiz Deneyin
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-red-500 px-8 py-3 rounded-md text-lg">
              İletişime Geçin
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section> */}
    </>
  )
}

