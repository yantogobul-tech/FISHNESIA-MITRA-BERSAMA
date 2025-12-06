'use client'

import { useState, useEffect } from 'react'
import { FileText, Shield, AlertTriangle, Scale, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Navigation from '@/components/navigation'

export default function TermsPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const lastUpdated = "15 November 2024"

  const keySections = [
    {
      icon: <FileText className="w-8 h-8 text-gold" />,
      title: "Penggunaan Website",
      description: "Aturan dan ketentuan penggunaan website dan layanan yang kami sediakan."
    },
    {
      icon: <Shield className="w-8 h-8 text-gold" />,
      title: "Hak & Kewajiban",
      description: "Hak dan kewajiban pengguna serta perusahaan dalam menggunakan layanan."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-gold" />,
      title: "Batasan Tanggung Jawab",
      description: "Batasan tanggung jawab perusahaan terhadap kerugian yang mungkin timbul."
    },
    {
      icon: <Scale className="w-8 h-8 text-gold" />,
      title: "Penyelesaian Sengketa",
      description: "Prosedur penyelesaian sengketa antara pengguna dan perusahaan."
    }
  ]

  const userObligations = [
    "Memberikan informasi yang akurat dan lengkap",
    "Tidak menggunakan website untuk kegiatan ilegal",
    "Menghormati hak kekayaan intelektual pihak ketiga",
    "Tidak mencoba merusak atau mengganggu sistem",
    "Mematuhi semua peraturan yang berlaku",
    "Tidak menyebarkan konten yang melanggar hukum"
  ]

  const companyObligations = [
    "Menyediakan layanan sebagaimana dijelaskan",
    "Melindungi data pribadi pengguna",
    "Memberikan informasi yang transparan",
    "Menangani keluhan dengan profesional",
    "Memelihara keamanan sistem",
    "Memperbarui layanan secara berkala"
  ]

  const prohibitedUses = [
    {
      title: "Aktivitas Ilegal",
      description: "Penggunaan website untuk kegiatan yang melanggar hukum Indonesia atau internasional."
    },
    {
      title: "Pelanggaran Hak Kekayaan Intelektual",
      description: "Mengunggah atau mendistribusikan konten yang melanggar hak cipta, merek, atau paten."
    },
    {
      title: "Spam dan Penipuan",
      description: "Mengirim spam, phishing, atau melakukan aktivitas penipuan."
    },
    {
      title: "Keamanan Sistem",
      description: "Mencoba membobol, merusak, atau mengganggu keamanan sistem kami."
    },
    {
      title: "Konten Berbahaya",
      description: "Menyebarkan malware, virus, atau konten berbahaya lainnya."
    },
    {
      title: "Diskriminasi",
      description: "Menggunakan website untuk kegiatan diskriminatif atau ujaran kebencian."
    }
  ]

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy/5 via-white to-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 text-center">
              Syarat & <span className="text-gold">Ketentuan</span>
            </h1>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              Ketentuan penggunaan website dan layanan PT FISHNESIA MITRA BERSAMA 
              untuk memastikan pengalaman yang aman dan menyenangkan bagi semua pengguna.
            </p>
            <p className="text-center text-gray-500 mt-4">
              Terakhir diperbarui: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Key Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Bagian Utama Ketentuan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pemahaman tentang bagian-bagian penting dari syarat dan ketentuan kami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keySections.map((section, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {section.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-navy mb-3">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {section.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Acceptance of Terms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6">
              Penerimaan Ketentuan
            </h2>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Dengan mengakses dan menggunakan website PT FISHNESIA MITRA BERSAMA, 
                  Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk 
                  terikat oleh syarat dan ketentuan ini.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span className="text-gray-700">
                      Jika Anda tidak setuju dengan ketentuan ini, harap jangan menggunakan website kami.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span className="text-gray-700">
                      Kami berhak mengubah ketentuan ini sewaktu-waktu dengan pemberitahuan sebelumnya.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span className="text-gray-700">
                      Penggunaan website setelah perubahan dianggap sebagai penerimaan ketentuan yang baru.
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Obligations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Kewajiban Pengguna
              </h2>
              <Card className="border-0 shadow-lg bg-gray-50">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {userObligations.map((obligation, index) => (
                      <li key={index} className="flex items-start">
                        <Users className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{obligation}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Kewajiban Perusahaan
              </h2>
              <Card className="border-0 shadow-lg bg-navy text-white">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {companyObligations.map((obligation, index) => (
                      <li key={index} className="flex items-start">
                        <Shield className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                        <span className="opacity-90">{obligation}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Uses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Penggunaan yang Dilarang
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berikut adalah penggunaan website yang secara tegas dilarang:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prohibitedUses.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white">
                <CardContent className="p-6">
                  <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
                  <h3 className="text-lg font-semibold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6">
              Hak Kekayaan Intelektual
            </h2>
            <Card className="border-0 shadow-lg bg-gray-50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-3">
                      Konten yang Dilindungi
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Semua konten di website ini, termasuk namun tidak terbatas pada teks, 
                      gambar, logo, desain, dan software, dilindungi oleh hak cipta dan 
                      hak kekayaan intelektual lainnya.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-3">
                      Penggunaan yang Diizinkan
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Anda diperbolehkan untuk melihat, mendownload, dan mencetak konten 
                      dari website ini hanya untuk penggunaan pribadi dan non-komersial.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-3">
                      Larangan Penggunaan
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Dilarang keras untuk mereproduksi, mendistribusikan, memodifikasi, 
                      atau menggunakan konten kami untuk tujuan komersial tanpa izin tertulis 
                      dari PT FISHNESIA MITRA BERSAMA.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Limitation of Liability */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6">
              Batasan Tanggung Jawab
            </h2>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    PT FISHNESIA MITRA BERSAMA tidak bertanggung jawab atas:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-gray-700">
                        Kerugian langsung atau tidak langsung yang timbul dari penggunaan website
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-gray-700">
                        Kehilangan data atau informasi akibat penggunaan layanan kami
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-gray-700">
                        Gangguan teknis atau downtime website
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-gray-700">
                        Konten dari pihak ketiga yang terhubung dengan website kami
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-gray-700">
                        Kerugian akibat kejadian force majeure (bencana alam, perang, dll)
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-gold/10 rounded-lg">
                    <p className="text-sm text-navy">
                      <strong>Disclaimer:</strong> Website kami disediakan "sebagaimana adanya" 
                      tanpa jaminan apapun, baik tersurat maupun tersirat.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6">
              Penyelesaian Sengketa
            </h2>
            <Card className="border-0 shadow-lg bg-gray-50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-3">
                      Prosedur Penyelesaian
                    </h3>
                    <ol className="space-y-3 ml-4">
                      <li className="flex items-start">
                        <span className="text-gold mr-2 font-semibold">1.</span>
                        <span className="text-gray-700">
                          <strong>Negosiasi:</strong> Para pihak akan mencoba menyelesaikan sengketa 
                          melalui negosiasi yang baik secara tertulis.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold mr-2 font-semibold">2.</span>
                        <span className="text-gray-700">
                          <strong>Mediasi:</strong> Jika negosiasi gagal, sengketa akan diselesaikan 
                          melalui mediasi dengan mediator netral.
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gold mr-2 font-semibold">3.</span>
                        <span className="text-gray-700">
                          <strong>Arbitrase:</strong> Jika mediasi gagal, sengketa akan diselesaikan 
                          melalui arbitrase Badan Arbitrase Nasional Indonesia (BANI).
                        </span>
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-3">
                      Yurisdiksi
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. 
                      Setiap sengketa yang timbul akan diselesaikan di Pengadilan Negeri Surabaya.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Termination */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6">
              Pengakhiran Penggunaan
            </h2>
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    PT FISHNESIA MITRA BERSAMA berhak untuk:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-gray-700">
                        Menangguhkan atau menghentikan akses Anda ke website jika melanggar ketentuan
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-gray-700">
                        Menghapus konten atau akun yang melanggar hukum atau ketentuan
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      <span className="text-gray-700">
                        Menghentikan layanan sewaktu-waktu dengan pemberitahuan sebelumnya
                      </span>
                    </li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    Anda juga berhak untuk menghentikan penggunaan website kami kapan saja 
                    dengan menghentikan akses ke website ini.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Legal */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pertanyaan Hukum?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Jika Anda memiliki pertanyaan tentang syarat dan ketentuan kami, 
            silakan hubungi tim legal kami.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p className="text-lg mb-2">
              <span className="text-gold font-semibold">Email:</span> legal@fishnesia.com
            </p>
            <p className="text-lg mb-2">
              <span className="text-gold font-semibold">Telepon:</span> 0823-8246-6378
            </p>
            <p className="text-lg">
              <span className="text-gold font-semibold">Alamat:</span> Jl. Rungkut Industri III No.75, Surabaya
            </p>
          </div>
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-white text-lg px-8 py-6 rounded-full"
          >
            Hubungi Tim Legal
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
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
                <li>Disclaimer</li>
              </ul>
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