import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hizmet İptali ve İade Politikası - RehberPOS",
  description: "RehberPOS Hizmet İptali ve İade Politikası: Abonelik iptal süreçleri ve iade koşulları hakkında bilgi edinin.",
}

export default function HizmetIptaliVeIadePage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Hizmet İptali ve İade Politikası</h1>
          
          <div className="prose prose-lg prose-red mx-auto">
            <p>Son güncellenme: {new Date().toLocaleDateString('tr-TR')}</p>
            
            <p>
              Bu politika, RehberPOS tarafından sunulan hizmetlerin iptal edilmesi ve iade süreçleri hakkında bilgi 
              içermektedir. Hizmetlerimizi kullanarak, bu politikada belirtilen koşulları kabul etmiş olursunuz.
            </p>
            
            <h2>1. Abonelik İptali</h2>
            
            <h3>1.1. İptal Süreci</h3>
            
            <p>
              RehberPOS aboneliğinizi istediğiniz zaman iptal edebilirsiniz. Abonelik iptali için aşağıdaki adımları 
              izleyebilirsiniz:
            </p>
            
            <ul>
              <li>Kullanıcı panelinizde "Hesap Ayarları" bölümüne gidin</li>
              <li>"Abonelik Yönetimi" sekmesini seçin</li>
              <li>"Aboneliği İptal Et" butonuna tıklayın</li>
              <li>İptal nedeninizi seçin ve onaylayın</li>
            </ul>
            
            <p>
              Alternatif olarak, <a href="mailto:rehberyazilim@gmail.com" className="text-red-600 hover:text-red-800">rehberyazilim@gmail.com</a> adresine 
              e-posta göndererek aboneliğinizi iptal etmek istediğinizi bildirebilirsiniz. E-postanızda hesap bilgilerinizi 
              belirtmeyi unutmayın.
            </p>
            
            <h3>1.2. İptal Sonrası Hizmet Erişimi</h3>
            
            <p>
              Aboneliğinizi iptal ettiğinizde, mevcut ödeme döneminin sonuna kadar hizmetimize erişiminiz devam edecektir. 
              Ödeme dönemi sonunda, hesabınız otomatik olarak ücretsiz plana düşürülecektir. Ücretsiz planda, verilerin 
              sınırlı bir süre (30 gün) saklanacağını ve bu süre sonunda silinebileceğini lütfen unutmayın.
            </p>
            
            <h3>1.3. Abonelik Yeniden Aktivasyonu</h3>
            
            <p>
              İptal edilmiş bir aboneliği herhangi bir zamanda yeniden aktive edebilirsiniz. Hesap panelinizden veya müşteri 
              hizmetleri ile iletişime geçerek aboneliğinizi yeniden başlatabilirsiniz.
            </p>
            
            <h2>2. İade Politikası</h2>
            
            <h3>2.1. İade Koşulları</h3>
            
            <p>
              RehberPOS olarak, memnuniyet garantisi sunuyoruz. İlk abonelik ödemenizden sonraki 14 gün içinde hizmetimizden 
              memnun kalmazsanız, tam iade talep edebilirsiniz. İade talebi için aşağıdaki koşulların sağlanması gerekmektedir:
            </p>
            
            <ul>
              <li>İlk abonelik ödemenizden sonraki 14 gün içinde talep edilmelidir</li>
              <li>Hizmetin kullanımının makul sınırlar içinde olması gerekmektedir</li>
              <li>İade talebinin gerekçesi belirtilmelidir</li>
            </ul>
            
            <h3>2.2. İade Prosedürü</h3>
            
            <p>
              İade talebinde bulunmak için <a href="mailto:rehberyazilim@gmail.com" className="text-red-600 hover:text-red-800">rehberyazilim@gmail.com</a> adresine 
              e-posta göndermeniz gerekmektedir. E-postanızda aşağıdaki bilgileri belirtmeyi unutmayın:
            </p>
            
            <ul>
              <li>Hesap e-posta adresiniz</li>
              <li>Ödeme tarihi ve referans numarası</li>
              <li>İade talep etme nedeniniz</li>
              <li>Tercih ettiğiniz iade yöntemi (kredi kartı, banka havalesi vb.)</li>
            </ul>
            
            <p>
              İade talebiniz incelendikten sonra, onaylanan iadeler genellikle 5-10 iş günü içinde işleme alınır.
            </p>
            
            <h3>2.3. İstisna Durumlar</h3>
            
            <p>
              Aşağıdaki durumlarda iade talepleriniz reddedilebilir:
            </p>
            
            <ul>
              <li>14 günlük süre geçtikten sonra yapılan talepler</li>
              <li>Hizmetin aşırı kullanımı durumunda (örneğin, yüksek miktarda veri işleme)</li>
              <li>Kullanım koşullarını ihlal eden kullanıcılar</li>
              <li>Promosyon veya indirimli abonelikler (özel koşullar geçerli olabilir)</li>
              <li>Yenilenen abonelik ödemeleri (sadece ilk ödeme için iade yapılır)</li>
            </ul>
            
            <h2>3. Özel Durumlar</h2>
            
            <h3>3.1. Hizmet Kesintileri</h3>
            
            <p>
              Uzun süreli (24 saatten fazla) planlanmamış hizmet kesintileri durumunda, etkilenen süre için orantılı bir 
              kredi veya iade sağlayabiliriz. Bu tür durumlarda müşteri hizmetleri ile iletişime geçmeniz gerekmektedir.
            </p>
            
            <h3>3.2. Fiyat Değişiklikleri</h3>
            
            <p>
              Fiyat değişiklikleri durumunda, mevcut abonelik döneminizdeki ücretlendirme değişmeyecektir. Fiyat 
              değişiklikleri, ancak yeni abonelik döneminden itibaren geçerli olacaktır. Fiyat değişiklikleri hakkında 
              önceden bilgilendirileceksiniz.
            </p>
            
            <h3>3.3. Hesap Kapatma</h3>
            
            <p>
              Hesabınızı tamamen kapatmak ve tüm verilerinizi silmek isterseniz, müşteri hizmetleri ile iletişime geçmeniz 
              gerekmektedir. Hesap kapatma işlemi geri alınamaz ve verilerinizin tamamı sistemimizden silinir.
            </p>
            
            <h2>4. İletişim</h2>
            
            <p>
              İptal, iade veya bu politika hakkında herhangi bir sorunuz varsa, lütfen 
              <a href="mailto:rehberyazilim@gmail.com" className="text-red-600 hover:text-red-800">rehberyazilim@gmail.com</a> adresinden 
              bizimle iletişime geçin. Sorularınızı yanıtlamaktan ve sorunlarınızı çözmekten memnuniyet duyarız.
            </p>
            
            <h2>5. Politika Değişiklikleri</h2>
            
            <p>
              Bu iptal ve iade politikasını zaman zaman güncelleyebiliriz. Değişiklikler, web sitemizde yayınlandıktan sonra 
              geçerli olacaktır. Önemli değişiklikler hakkında e-posta yoluyla bilgilendirileceksiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 