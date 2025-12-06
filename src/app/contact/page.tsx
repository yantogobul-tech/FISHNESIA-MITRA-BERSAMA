'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import Navigation from '@/components/navigation'

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.",
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      toast({
        title: "Gagal Mengirim",
        description: "Terjadi kesalahan. Silakan coba lagi.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-gold" />,
      title: "Telepon",
      details: ["0823-8246-6378", "+62 823-8246-6378"],
      action: "tel:+6282382466378"
    },
    {
      icon: <Mail className="w-6 h-6 text-gold" />,
      title: "Email",
      details: ["info@fishnesia.com", "marketing@fishnesia.com"],
      action: "mailto:info@fishnesia.com"
    },
    {
      icon: <MapPin className="w-6 h-6 text-gold" />,
      title: "Alamat",
      details: [
        "Jl. Rungkut Industri III No.75",
        "Rungkut Tengah, Kec. Gn. Anyar",
        "Surabaya, Jawa Timur 60293"
      ],
      action: "#"
    },
    {
      icon: <Clock className="w-6 h-6 text-gold" />,
      title: "Jam Operasional",
      details: [
        "Senin - Jumat: 09:00 - 18:00",
        "Sabtu: 09:00 - 15:00",
        "Minggu: Tutup"
      ],
      action: "#"
    }
  ]

  const services = [
    "Strategi Branding & Identity",
    "Digital Marketing Campaign",
    "Social Media Management",
    "Content Creation & Production",
    "Video Production & Photography",
    "Website Development & SEO",
    "Event Management & Activation",
    "Public Relations & Media Planning"
  ]

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy/5 via-white to-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 text-center">
              Hubungi <span className="text-gold">Kami</span>
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              Siap untuk memulai proyek Anda? Mari diskusikan kebutuhan branding dan marketing 
              dengan tim profesional kami.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.action !== "#" && (
                    <Button 
                      variant="link" 
                      className="text-gold hover:text-gold/80 p-0 mt-3"
                      onClick={() => window.open(info.action, '_blank')}
                    >
                      Hubungi Sekarang
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Kirim Pesan kepada Kami
              </h2>
              <p className="text-gray-600 mb-8">
                Silakan isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-navy font-medium">
                      Nama Lengkap *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2 border-navy focus:border-gold"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-navy font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 border-navy focus:border-gold"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-navy font-medium">
                      Nomor Telepon *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2 border-navy focus:border-gold"
                      placeholder="0812-3456-7890"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-navy font-medium">
                      Perusahaan
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-2 border-navy focus:border-gold"
                      placeholder="PT. Example"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-navy font-medium">
                    Subjek *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-2 border-navy focus:border-gold"
                    placeholder="Konsultasi Proyek Branding"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-navy font-medium">
                    Pesan *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 border-navy focus:border-gold resize-none"
                    placeholder="Jelaskan kebutuhan proyek Anda secara detail..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold/90 text-white text-lg py-6 rounded-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Lokasi Kami
              </h2>
              
              {/* Google Maps Embed */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.123456789!2d112.784123456!3d-7.345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf1f1f1f1f1%3A0x1f1f1f1f1f1f1f1f!2sRungkut%20Industrial%20III%20Street%2C%20Surabaya%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>

              {/* Quick Contact Info */}
              <Card className="border-0 shadow-lg bg-navy text-white mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gold">
                    Informasi Kontak Cepat
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-gold mr-3" />
                      <span>0823-8246-6378</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-gold mr-3" />
                      <span>info@fishnesia.com</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-gold mr-3 mt-1" />
                      <span className="text-sm">
                        Jl. Rungkut Industri III No.75<br />
                        Rungkut Tengah, Kec. Gn. Anyar<br />
                        Surabaya, Jawa Timur 60293
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services Offered */}
              <Card className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-4">
                    Layanan Kami
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gold mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xl text-gray-600">
              Temukan jawaban untuk pertanyaan umum tentang layanan kami.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-md bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-navy mb-2">
                  Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?
                </h3>
                <p className="text-gray-600">
                  Waktu penyelesaian proyek bervariasi tergantung pada kompleksitas dan skala proyek. 
                  Untuk proyek branding sederhana membutuhkan 2-4 minggu, sedangkan kampanye digital 
                  terintegrasi dapat memakan waktu 1-3 bulan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-navy mb-2">
                  Apa saja layanan yang termasuk dalam paket branding?
                </h3>
                <p className="text-gray-600">
                  Paket branding kami meliputi logo design, brand guidelines, marketing materials, 
                  digital presence setup, dan brand strategy consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-navy mb-2">
                  Bagaimana cara kerja sama dengan FISHNESIA?
                </h3>
                <p className="text-gray-600">
                  Proses dimulai dengan konsultasi awal untuk memahami kebutuhan Anda, 
                  kemudian kami mengajukan proposal dan timeline. Setelah disetujui, 
                  tim kami akan mulai mengerjakan proyek dengan update berkala.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-navy mb-2">
                  Apakah Anda menyediakan layanan maintenance?
                </h3>
                <p className="text-gray-600">
                  Ya, kami menyediakan layanan maintenance untuk digital marketing, 
                  social media management, dan website maintenance dengan paket berlangganan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Mari wujudkan visi brand Anda bersama tim profesional kami.
          </p>
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-white text-lg px-8 py-6 rounded-full"
          >
            Konsultasi Gratis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gold mb-4">
                FISHNESIA
              </h3>
              <p className="text-gray-400">
                Solusi periklanan dan kreatif terpadu untuk kesuksesan brand Anda.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Strategi Branding</li>
                <li>Digital Marketing</li>
                <li>Konten Kreatif</li>
                <li>Media Planning</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>0823-8246-6378</li>
                <li>info@fishnesia.com</li>
                <li>Surabaya, Jawa Timur</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Alamat</h4>
              <p className="text-gray-400">
                Jl. Rungkut Industri III No.75<br />
                Rungkut Tengah, Kec. Gn. Anyar<br />
                Surabaya, Jawa Timur
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PT FISHNESIA MITRA BERSAMA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}