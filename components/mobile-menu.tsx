"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button onClick={toggleMenu} className="text-gray-700 hover:text-red-600 focus:outline-none">
        <Menu className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-red-600">
              RehberPOS
            </Link>
            <button onClick={toggleMenu} className="text-gray-700 hover:text-red-600 focus:outline-none">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col space-y-6">
              <Link
                href="#features"
                className="text-xl font-medium text-gray-700 hover:text-red-600"
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-xl font-medium text-gray-700 hover:text-red-600"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                href="#testimonials"
                className="text-xl font-medium text-gray-700 hover:text-red-600"
                onClick={toggleMenu}
              >
                Testimonials
              </Link>
              <Link href="#faq" className="text-xl font-medium text-gray-700 hover:text-red-600" onClick={toggleMenu}>
                FAQ
              </Link>
              <Link
                href="#contact"
                className="text-xl font-medium text-gray-700 hover:text-red-600"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </nav>

            <div className="mt-10 flex flex-col space-y-4">
              <Link href="/login" className="text-xl font-medium text-gray-700 hover:text-red-600">
                Login
              </Link>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg w-full"
                onClick={toggleMenu}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

