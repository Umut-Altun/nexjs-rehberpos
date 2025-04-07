"use client"

import { useState, useEffect } from "react"
import { MessagesSquare } from "lucide-react"

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [showMobileLabel, setShowMobileLabel] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Sayfa yüklendiğinde hoşgeldiniz mesajını göster
    setTimeout(() => {
      setShowWelcome(true)
    }, 1500)

    // Bir süre sonra hoşgeldiniz mesajını kaldır
    setTimeout(() => {
      setShowWelcome(false)
      
      // Mobil cihazlarda, hoşgeldiniz mesajı kaybolduktan 500ms sonra 
      // kısa süreliğine etiket göster
      if (isMobile) {
        setTimeout(() => {
          setShowMobileLabel(true)
          // 3 saniye sonra etiket kaybolsun
          setTimeout(() => {
            setShowMobileLabel(false)
          }, 3000);
        }, 500);
      }
    }, 6000)
  }, [isMobile])

  // Mobil için tıklama olayı
  const handleTouchInteraction = () => {
    if (isMobile && !showWelcome) {
      setShowMobileLabel(prev => !prev);
      
      // Eğer etiket gösteriliyorsa, 3 saniye sonra kapat
      if (!showMobileLabel) {
        setTimeout(() => {
          setShowMobileLabel(false);
        }, 3000);
      }
    }
  };

  return (
    <a
      href="https://wa.me/905533272874"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleTouchInteraction}
      onTouchStart={handleTouchInteraction}
    >
      <div className="relative">
        {/* Hoşgeldiniz Mesajı - Mobil ve Desktop */}
        {showWelcome && (
          <div className="absolute right-0 bottom-16 md:right-16 md:bottom-auto md:top-1/2 md:-translate-y-1/2 bg-white text-gray-800 px-4 py-3 rounded-lg shadow-lg whitespace-nowrap animate-in fade-in slide-in-from-right-10 duration-700 w-[220px] md:w-[250px]">
            <div className="font-medium text-gray-800 mb-1">Merhaba 👋</div>
            <p className="text-sm text-gray-600">Size nasıl yardımcı olabiliriz?</p>
            <div className="absolute left-0 top-full w-0 h-0 md:left-full md:top-1/2 md:-translate-y-1/2 md:-mt-2 border-8 border-transparent border-t-white md:border-t-transparent md:border-l-white transform rotate-0 md:rotate-0"></div>
          </div>
        )}
        
        {/* Hover Mesajı - Desktop */}
        {isHovered && !isMobile && !showWelcome && (
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap animate-in fade-in slide-in-from-right-5 duration-300">
            <span className="font-medium">WhatsApp ile İletişime Geçin</span>
            <div className="absolute left-full top-1/2 -translate-y-1/2 -ml-2 border-8 border-transparent border-l-white"></div>
          </div>
        )}
        
        {/* Mobil Gösterim - Sabit Etiket (sadece kullanıcı dokunduğunda veya sayfa ilk yüklendiğinde ve sadece belirli süre için) */}
        {isMobile && showMobileLabel && !showWelcome && (
          <div className="absolute bottom-16 right-0 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap animate-in fade-in slide-in-from-bottom-5 duration-300">
            WhatsApp İletişim
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 -mb-2 border-8 border-transparent border-t-white"></div>
          </div>
        )}
        
        {/* WhatsApp Butonu */}
        <div className="bg-[#25D366] p-3.5 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center relative z-10">
          <MessagesSquare className="w-6 h-6 md:w-7 md:h-7 text-white" />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white animate-pulse">1</span>
        </div>
      </div>
    </a>
  )
}

