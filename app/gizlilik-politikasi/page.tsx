import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gizlilik Politikası - RehberPOS",
  description: "RehberPOS Gizlilik Politikası: Kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında bilgi edinin.",
}

export default function GizlilikPolitikasiPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Gizlilik Politikası</h1>
          
          <div className="prose prose-lg prose-red mx-auto">
            <p>Son güncellenme: {new Date().toLocaleDateString('tr-TR')}</p>
            
            <p>
              Bu Gizlilik Politikası, RehberPOS olarak kişisel verilerinizi nasıl topladığımızı, kullandığımızı, 
              paylaştığımızı ve koruduğumuzu açıklamaktadır. Hizmetlerimizi kullanarak, bu politikada belirtilen 
              uygulamaları kabul etmiş olursunuz.
            </p>
            
            <h2>1. Topladığımız Bilgiler</h2>
            
            <p>
              <strong>Sizin sağladığınız bilgiler:</strong> Adınız, e-posta adresiniz, telefon numaranız, fatura 
              adresiniz, ödeme bilgileriniz ve bizimle paylaştığınız diğer bilgiler.
            </p>
            
            <p>
              <strong>Otomatik olarak toplanan bilgiler:</strong> Hizmetlerimizi kullandığınızda, IP adresiniz, cihaz 
              bilgileriniz, tarayıcı türünüz, görüntülediğiniz sayfalar, hizmetlerimizi kullanma şekliniz ve zamanı 
              hakkında bilgiler otomatik olarak toplanabilir.
            </p>
            
            <p>
              <strong>Çerezler ve benzer teknolojiler:</strong> Oturum yönetimi, tercihlerinizin hatırlanması ve 
              hizmetlerimizin geliştirilmesi için çerezler ve benzer teknolojiler kullanmaktayız.
            </p>
            
            <h2>2. Bilgilerinizi Nasıl Kullanıyoruz</h2>
            
            <p>Topladığımız bilgileri aşağıdaki amaçlar için kullanmaktayız:</p>
            
            <ul>
              <li>Hizmetlerimizi sağlamak, yönetmek ve geliştirmek</li>
              <li>Hesabınızı oluşturmak ve yönetmek</li>
              <li>Siparişlerinizi işleme almak ve ödeme işlemlerini gerçekleştirmek</li>
              <li>Müşteri desteği sağlamak</li>
              <li>Size iletişim göndermek (teknik bildirimler, güncellemeler, güvenlik uyarıları, destek mesajları vb.)</li>
              <li>Hizmetlerimizin kullanımını analiz etmek ve geliştirmek</li>
              <li>Dolandırıcılık ve diğer yasadışı faaliyetleri tespit etmek ve önlemek</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            </ul>
            
            <h2>3. Bilgilerinizin Paylaşılması</h2>
            
            <p>Kişisel bilgilerinizi aşağıdaki durumlarda üçüncü taraflarla paylaşabiliriz:</p>
            
            <ul>
              <li>Rızanız olduğunda</li>
              <li>Hizmetlerimizi sağlamak için çalıştığımız hizmet sağlayıcılarla (ödeme işlemcileri, hosting sağlayıcıları vb.)</li>
              <li>Yasal bir yükümlülüğü yerine getirmek için (mahkeme kararı veya yasal süreç gereği)</li>
              <li>Haklarımızı, mülkiyetimizi veya güvenliğimizi korumak için</li>
              <li>Şirket birleşmesi, satın alınması veya varlıklarımızın satışı durumunda</li>
            </ul>
            
            <h2>4. Veri Güvenliği</h2>
            
            <p>
              Kişisel verilerinizi yetkisiz erişime, değişikliğe, ifşaya veya yok edilmeye karşı korumak için uygun 
              teknik ve organizasyonel önlemler almaktayız. Ancak, internet üzerinden hiçbir veri iletiminin veya 
              depolama sisteminin %100 güvenli olmadığını unutmayın.
            </p>
            
            <h2>5. Veri Saklama</h2>
            
            <p>
              Kişisel verilerinizi, hizmetlerimizi sağlamak için gerekli olduğu sürece veya yasal yükümlülüklerimizi 
              yerine getirmek için gerekli olan süre boyunca saklarız.
            </p>
            
            <h2>6. Çocukların Gizliliği</h2>
            
            <p>
              Hizmetlerimiz 18 yaş altı çocuklar için tasarlanmamıştır. Bilerek 18 yaş altındaki çocuklardan kişisel veri toplamayız.
            </p>
            
            <h2>7. Haklarınız</h2>
            
            <p>Kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:</p>
            
            <ul>
              <li>Verilerinize erişim talep etme</li>
              <li>Verilerinizin düzeltilmesini talep etme</li>
              <li>Verilerinizin silinmesini talep etme</li>
              <li>Verilerinizin işlenmesine itiraz etme</li>
              <li>Veri taşınabilirliği talep etme</li>
              <li>Vermiş olduğunuz rızayı geri çekme</li>
            </ul>
            
            <p>
              Bu haklarınızı kullanmak için <a href="mailto:rehberyazilim@gmail.com" className="text-red-600 hover:text-red-800">rehberyazilim@gmail.com</a> adresinden bizimle iletişime geçebilirsiniz.
            </p>
            
            <h2>8. Politika Değişiklikleri</h2>
            
            <p>
              Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Değişiklikler yapıldığında, güncellenmiş politikayı web 
              sitemizde yayınlayacağız ve gerektiğinde sizi bilgilendireceğiz.
            </p>
            
            <h2>9. İletişim</h2>
            
            <p>
              Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen <a href="mailto:rehberyazilim@gmail.com" className="text-red-600 hover:text-red-800">rehberyazilim@gmail.com</a> adresinden bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 