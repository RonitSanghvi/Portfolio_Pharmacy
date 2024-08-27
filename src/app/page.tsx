"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin } from 'lucide-react'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    '/placeholder.avif',
    '/placeholder2.avif',
    '/placeholder3.avif'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Pharmacy Name</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#services" className="hover:text-primary">Services</a></li>
              <li><a href="#team" className="hover:text-primary">Our Team</a></li>
              <li><a href="#book" className="hover:text-primary">Book Online</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[700px]">
        {slides.map((slide, index) => (
          <Image
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Welcome to Our Pharmacy</h2>
            <p className="text-xl">Your health is our priority</p>
          </div>
        </div>
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white"
          onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white"
          onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Our Pharmacy</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            We are committed to providing high-quality pharmaceutical care to our community. 
            With years of experience and a dedicated team, we ensure that every customer 
            receives personalized attention and expert advice.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Prescription Filling', 'Health Consultations', 'Vaccinations'].map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Owner', 'Manager', 'Supervisor'].map((role, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-center pt-6">
                  <Image
                    src={`/placeholder.svg?height=150&width=150`}
                    alt={role}
                    width={150}
                    height={150}
                    className="rounded-full mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{`John Doe ${index + 1}`}</h3>
                  <p className="text-gray-600">{role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Online Form */}
      <section id="book" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Book Online</h2>
          <form className="max-w-md mx-auto">
            <div className="space-y-4">
              <Input type="text" placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Input type="tel" placeholder="Your Phone" />
              <Input type="date" />
              <Textarea placeholder="Additional Information" />
              <Button type="submit" className="w-full">Book Appointment</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-2" />
              <span>123 Pharmacy St, City, Country</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 mr-2" />
              <span>+1 234 567 8900</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 mr-2" />
              <span>contact@pharmacyname.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Pharmacy Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}