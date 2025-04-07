import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Çerez Politikası - RehberPOS",
  description: "RehberPOS Çerez Politikası: Web sitemizde kullanılan çerezler ve kullanım amaçları hakkında bilgi edinin.",
}

export default function CerezPolitikasiPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Çerez Politikası</h1>
          
          <div className="prose prose-lg prose-red mx-auto">
            <p>Son güncellenme: {new Date().toLocaleDateString('tr-TR')}</p>
            
            <p>
              Bu Çerez Politikası, RehberPOS olarak web sitemizde kullandığımız çerezleri ve bu çerezlerin 
              nasıl kullanıldığını açıklamaktadır. Web sitemizi kullanarak, bu politikada belirtilen 
              uygulamaları kabul etmiş olursunuz.
            </p>
            
            <h2>1. Çerez Nedir?</h2>
            
            <p>
              Çerezler, web tarayıcınız tarafından cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler, 
              web sitesinin cihazınızı tanımasına ve ziyaretinizle ilgili bazı bilgileri hatırlamasına yardımcı olur. 
              Bu, gelecekteki ziyaretlerinizde daha iyi bir deneyim sunmamızı sağlar.
            </p>
            
            <h2>2. Kullandığımız Çerez Türleri</h2>
            
            <h3>2.1. Zorunlu Çerezler</h3>
            
            <p>
              Bu çerezler, web sitemizin düzgün çalışması için gereklidir ve sistemlerimizde kapatılamazlar. 
              Genellikle yalnızca sizin tarafınızdan yapılan ve gizlilik tercihlerinizi ayarlama, oturum açma 
              veya form doldurma gibi hizmet taleplerine yanıt olarak ayarlanırlar.
            </p>
            
            <h3>2.2. Performans Çerezleri</h3>
            
            <p>
              Bu çerezler, ziyaretçilerin web sitemizi nasıl kullandığı hakkında bilgi toplamamıza yardımcı olur. 
              Hangi sayfaların en çok ziyaret edildiğini ve bu sayfalarda hata mesajları alınıp alınmadığını takip 
              ederiz. Bu çerezler, ziyaretçi hakkında kişiyi tanımlayabilecek bilgi toplamaz, toplanan tüm veriler 
              anonim olarak birleştirilir.
            </p>
            
            <h3>2.3. İşlevsellik Çerezleri</h3>
            
            <p>
              Bu çerezler, web sitemizin gelişmiş işlevsellik ve kişiselleştirme sunmasına olanak tanır. Bunlar, 
              tarafımızca veya eklediğimiz üçüncü taraf hizmet sağlayıcıları tarafından ayarlanabilir. Bu çerezlere 
              izin vermezseniz, bu özelliklerin bazıları veya tamamı düzgün çalışmayabilir.
            </p>
            
            <h3>2.4. Hedefleme Çerezleri</h3>
            
            <p>
              Bu çerezler, reklam ortaklarımız tarafından web sitemiz aracılığıyla ayarlanabilir. Bu şirketler, 
              ilgi alanlarınızın profilini oluşturmak ve diğer sitelerde ilgili reklamları göstermek için bunları 
              kullanabilir. Doğrudan kişisel bilgileri depolamak yerine tarayıcınızı ve cihazınızı benzersiz şekilde 
              tanımlayarak çalışırlar.
            </p>
            
            <h2>3. Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
            
            <p>
              Çoğu web tarayıcısı, çerezleri otomatik olarak kabul edecek şekilde ayarlanmıştır. Ancak, tarayıcı 
              ayarlarınızı değiştirerek çerezleri kabul etmeyi reddedebilir veya bir çerez ayarlandığında uyarı 
              alabilirsiniz. Tarayıcı ayarlarınızı nasıl değiştirebileceğiniz hakkında daha fazla bilgi için 
              tarayıcınızın yardım sayfasına bakın:
            </p>
            
            <ul>
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Safari</li>
              <li>Microsoft Edge</li>
              <li>Opera</li>
            </ul>
            
            <p>
              Çerezleri devre dışı bırakmanın, web sitemizin işlevselliğini etkileyebileceğini ve bazı özelliklerin 
              düzgün çalışmayabileceğini lütfen unutmayın.
            </p>
            
            <h2>4. Üçüncü Taraf Çerezleri</h2>
            
            <p>
              Web sitemizde, üçüncü taraf hizmetleri tarafından sağlanan çerezler de bulunabilir. Bunlar arasında 
              analitik hizmetler (Google Analytics gibi), sosyal medya platformları (Facebook, Twitter, LinkedIn gibi) 
              ve reklam ağları yer alabilir. Bu üçüncü taraflar, kendi gizlilik politikalarına göre kişisel verilerinizi 
              toplayabilir ve işleyebilir.
            </p>
            
            <h2>5. Çerezler ve Kişisel Veriler</h2>
            
            <p>
              Çerezler aracılığıyla toplanan veriler, kişisel verilerinizle birleştirilebilir. Kişisel verilerinizin 
              nasıl toplandığı, işlendiği ve korunduğu hakkında daha fazla bilgi için lütfen 
              <a href="/gizlilik-politikasi" className="text-red-600 hover:text-red-800">Gizlilik Politikamıza</a> bakın.
            </p>
            
            <h2>6. Politika Değişiklikleri</h2>
            
            <p>
              Bu Çerez Politikasını zaman zaman güncelleyebiliriz. Değişiklikler yapıldığında, güncellenmiş politikayı 
              web sitemizde yayınlayacağız ve son güncelleme tarihini değiştireceğiz.
            </p>
            
            <h2>7. İletişim</h2>
            
            <p>
              Bu Çerez Politikası hakkında sorularınız varsa, lütfen 
              <a href="mailto:rehberyazilim@gmail.com" className="text-red-600 hover:text-red-800">rehberyazilim@gmail.com</a> 
              adresinden bizimle iletişime geçin.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 