"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "RehberPOS'u kullanmak için hangi donanımlara ihtiyacım var?",
    answer:
      "RehberPOS, herhangi bir modern tablet, bilgisayar veya akıllı telefonda çalışır. En iyi deneyim için bir tablet, stand, fiş yazıcısı ve nakit çekmecesi kullanmanızı öneririz. Ekibimiz, özel ihtiyaçlarınız için doğru donanımı seçmenize yardımcı olabilir.",
  },
  {
    question: "Sözleşme veya taahhüt var mı?",
    answer:
      "Hayır, RehberPOS uzun vadeli sözleşmeler olmadan aylık abonelik bazında çalışır. İstediğiniz zaman iptal edebilirsiniz. Daha uzun bir süre için taahhüt etmeyi tercih edenler için indirimli yıllık planlar da sunuyoruz.",
  },
  {
    question: "Satın almadan önce RehberPOS'u deneyebilir miyim?",
    answer:
      "Evet, tüm özelliklere tam erişimle 14 günlük ücretsiz deneme sunuyoruz. Denemeye başlamak için kredi kartı gerekmez. Ayrıca satış ekibimizden kişiselleştirilmiş bir demo da talep edebilirsiniz.",
  },
  {
    question: "Kurulum süreci nasıl işliyor?",
    answer:
      "Kurulum sürecimiz basit olacak şekilde tasarlanmıştır. Kaydolduktan sonra, menünüzü, masa düzeninizi ve personel hesaplarınızı ayarlamanız için size rehberlik edilecektir. Destek ekibimiz size her adımda yardımcı olmak için hazırdır. Çoğu restoran bir gün içinde çalışmaya başlar.",
  },
  {
    question: "RehberPOS muhasebe yazılımımla entegre olabilir mi?",
    answer:
      "Evet, RehberPOS QuickBooks, Xero ve daha fazlası gibi popüler muhasebe yazılımlarıyla entegre olur. Ayrıca mevcut sistemlerinizle özel entegrasyonlar için API erişimi de sunuyoruz.",
  },
  {
    question: "Ne tür bir destek sunuyorsunuz?",
    answer:
      "Tüm planlar için e-posta desteği, Profesyonel ve Kurumsal planlar için öncelikli destek ve telefon desteği sunuyoruz. Kurumsal müşterilerimiz ayrıca sorunsuz operasyonlar sağlamak için özel bir hesap yöneticisi alır.",
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200">
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 focus:outline-none transition-colors"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
          >
            <span className="text-lg font-medium">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>

          {openIndex === index && (
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

