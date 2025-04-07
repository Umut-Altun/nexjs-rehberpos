"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react"
import BusinessTypeMenu from "./business-type-menu"
import { useRouter, usePathname } from "next/navigation"

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showBusinessTypes, setShowBusinessTypes] = useState(false)
  const [showMobileBusinessTypes, setShowMobileBusinessTypes] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    if (showMobileBusinessTypes) setShowMobileBusinessTypes(false)
  }

  const toggleBusinessTypes = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowBusinessTypes(!showBusinessTypes)
  }

  const toggleMobileBusinessTypes = () => {
    setShowMobileBusinessTypes(!showMobileBusinessTypes)
  }

  // Alt menü görünürken dışarı tıklanırsa menüyü kapat
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowBusinessTypes(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Yönlendirme değiştiğinde menüleri kapat
  useEffect(() => {
    setIsOpen(false)
    setShowBusinessTypes(false)
    setShowMobileBusinessTypes(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Mobil menü açıkken scrollu engelleme
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // İşletme türüne tıklandığında doğru sayfaya yönlendirme ve menüyü kapatma işlevi
  const handleBusinessTypeClick = (href: string) => {
    router.push(href)
    setShowBusinessTypes(false)
    setIsOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/rehberpos-logo.png"
                alt="RehberPOS Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <div className="relative group" ref={menuRef}>
              <button
                onClick={toggleBusinessTypes}
                className="flex items-center text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                Hangi İşletmeler
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-200 ${showBusinessTypes ? 'rotate-180' : ''}`} />
              </button>

              {showBusinessTypes && (
                <div className="absolute top-full left-0 mt-8 bg-white rounded-xl shadow-xl p-6 w-[800px] z-50 transition-all duration-300 border border-gray-100 after:content-[''] after:absolute after:w-4 after:h-4 after:bg-white after:rotate-45 after:-top-2 after:left-24 after:border-t after:border-l after:border-gray-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                  <BusinessTypeMenu onItemClick={handleBusinessTypeClick} />
                </div>
              )}
            </div>

            <Link href="/ozellikler" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Özellikler
            </Link>

            <Link href="/hakkimizda" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Hakkımızda
            </Link>

            <Link href="/fiyatlar" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              Fiyatlar
            </Link>

            <Link href="/iletisim" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
              İletişim
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="https://rehberadisyon.pythonanywhere.com/login/"
              className="flex items-center text-gray-700 hover:text-red-600 font-medium transition-colors"
            >
              <svg className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                  fill="currentColor"
                />
              </svg>
              Giriş Yap
            </Link>

            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md flex items-center transition-colors"
              onClick={() => window.location.href = "https://rehberadisyon.pythonanywhere.com/register/"}
            >
              Hemen Başla
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-red-600 focus:outline-none transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <Image
                  src="/images/rehberpos-logo.png"
                  alt="RehberPOS Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>

              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-red-600 focus:outline-none transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-8">
              <div className="space-y-6">
                <div>
                  <button
                    onClick={toggleMobileBusinessTypes}
                    className="flex items-center justify-between w-full text-left text-lg font-medium text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <span>Hangi İşletmeler</span>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${showMobileBusinessTypes ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showMobileBusinessTypes && (
                    <div className="mt-4 pl-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                      <Link
                        href="/isletmeler/restaurant-cafe"
                        className="flex items-center text-gray-700 hover:text-red-600"
                        onClick={toggleMenu}
                      >
                        Restaurant & Cafe
                      </Link>
                      <Link
                        href="/isletmeler/subeli-restaurant-cafe"
                        className="flex items-center text-gray-700 hover:text-red-600"
                        onClick={toggleMenu}
                      >
                        Şubeli Restaurant & Cafe
                      </Link>
                      <Link
                        href="/isletmeler/bulut-mutfak"
                        className="flex items-center text-gray-700 hover:text-red-600"
                        onClick={toggleMenu}
                      >
                        Bulut Mutfak
                      </Link>
                      <Link
                        href="/isletmeler/fast-food"
                        className="flex items-center text-gray-700 hover:text-red-600"
                        onClick={toggleMenu}
                      >
                        Fast Food
                      </Link>
                      <Link
                        href="/isletmeler/pizza-restaurant"
                        className="flex items-center text-gray-700 hover:text-red-600"
                        onClick={toggleMenu}
                      >
                        Pizza Restaurant
                      </Link>
                      <Link
                        href="/isletmeler/hotel-cafe-restaurant"
                        className="flex items-center text-gray-700 hover:text-red-600"
                        onClick={toggleMenu}
                      >
                        Hotel Cafe & Restaurant
                      </Link>
                    </div>
                  )}
                </div>

                <div>
                  <Link
                    href="/ozellikler"
                    className="block text-lg font-medium text-gray-700 hover:text-red-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    <span>Özellikler</span>
                  </Link>
                </div>

                <div>
                  <Link
                    href="/hakkimizda"
                    className="block text-lg font-medium text-gray-700 hover:text-red-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    <span>Hakkımızda</span>
                  </Link>
                </div>

                <div>
                  <Link
                    href="/fiyatlar"
                    className="block text-lg font-medium text-gray-700 hover:text-red-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    Fiyatlar
                  </Link>
                </div>

                <div>
                  <Link
                    href="/iletisim"
                    className="block text-lg font-medium text-gray-700 hover:text-red-600 transition-colors"
                    onClick={toggleMenu}
                  >
                    İletişim
                  </Link>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <Link
                  href="https://rehberadisyon.pythonanywhere.com/login/"
                  className="flex items-center text-lg font-medium text-gray-700 hover:text-red-600 transition-colors"
                  onClick={toggleMenu}
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                      fill="currentColor"
                    />
                  </svg>
                  Giriş Yap
                </Link>

                <Link
                  href="https://rehberadisyon.pythonanywhere.com/register/"
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg flex items-center justify-center transition-colors"
                  onClick={toggleMenu}
                >
                  Hemen Başla
                  <ArrowRight className="h-5 w-5 ml-1" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

