import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kullanıcı Sözleşmesi - RehberPOS",
  description: "RehberPOS Kullanıcı Sözleşmesi: Hizmetlerimizi kullanırken uymanız gereken koşullar ve yasal düzenlemeler.",
}

export default function KullaniciSozlesmesiPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Kullanıcı Sözleşmesi</h1>
          
          <div className="prose prose-lg prose-red mx-auto">
            <p>Son güncellenme: {new Date().toLocaleDateString('tr-TR')}</p>
            
            <p>
              Bu Kullanıcı Sözleşmesi ("Sözleşme"), RehberPOS ("Şirket", "biz", "bizim") tarafından sunulan hizmetlerin ve 
              ürünlerin kullanımına ilişkin şartları ve koşulları belirlemektedir. Hizmetlerimizi kullanarak, bu Sözleşme'nin 
              tüm hükümlerini kabul etmiş olursunuz.
            </p>
            
            <h2>1. Tanımlar</h2>
            
            <p>Bu Sözleşme'de geçen;</p>
            
            <ul>
              <li><strong>"Hizmet(ler)"</strong> ifadesi, Şirket tarafından web sitesi, mobil uygulamalar ve diğer platformlar aracılığıyla sunulan tüm ürün ve hizmetleri,</li>
              <li><strong>"Kullanıcı"</strong> ifadesi, Hizmetleri kullanan gerçek veya tüzel kişiyi,</li>
              <li><strong>"İçerik"</strong> ifadesi, Hizmetler aracılığıyla erişilebilen tüm bilgi, metin, grafik, logo, tasarım, yazılım, veri ve diğer materyalleri ifade eder.</li>
            </ul>
            
            <h2>2. Hizmetlerin Kullanımı</h2>
            
            <h3>2.1. Hesap Kaydı ve Bilgileri</h3>
            
            <p>
              Bazı Hizmetlerimizi kullanabilmek için kayıt olmanız ve bir hesap oluşturmanız gerekebilir. Kayıt olurken 
              doğru, güncel ve eksiksiz bilgiler vermeyi kabul edersiniz. Hesap bilgilerinizin gizliliğini korumak ve 
              hesabınız altında gerçekleşen tüm etkinliklerden sorumlu olmak sizin sorumluluğunuzdadır.
            </p>
            
            <h3>2.2. Yaş Sınırlaması</h3>
            
            <p>
              Hizmetlerimizi kullanabilmek için 18 yaşını doldurmuş olmanız gerekmektedir. Eğer 18 yaşının altındaysanız, 
              Hizmetlerimizi ancak yasal vasinizin bu Sözleşme'yi onaylaması ve denetimiyle kullanabilirsiniz.
            </p>
            
            <h3>2.3. Kullanım Kısıtlamaları</h3>
            
            <p>Hizmetlerimizi kullanırken aşağıdaki eylemleri gerçekleştirmemeyi kabul edersiniz:</p>
            
            <ul>
              <li>Yasalara aykırı, tehdit edici, taciz edici, karalayıcı, hakaret içeren, küçük düşürücü, müstehcen, kişilik haklarına saldırı niteliğinde veya diğer şekillerde sakıncalı içerikler yüklemek veya paylaşmak</li>
              <li>Hizmetlerimizin çalışmasını engelleyecek veya zarar verecek şekilde kullanmak</li>
              <li>Yazılım virüsleri veya diğer kötü amaçlı kodlar göndermek</li>
              <li>Hizmetlerimize yetkisiz erişim sağlamak veya erişim sağlamaya çalışmak</li>
              <li>Başka kullanıcılara ait hesapları kullanmak</li>
              <li>Hizmetlerimizi, şirketimizin önceden yazılı izni olmadan ticari amaçlarla kullanmak</li>
              <li>Hizmetlerimizin güvenliğini tehlikeye atabilecek herhangi bir eylemde bulunmak</li>
            </ul>
            
            <h2>3. Ödeme ve Abonelik</h2>
            
            <h3>3.1. Ücretler ve Ödemeler</h3>
            
            <p>
              Bazı Hizmetlerimiz ücretli olabilir. Bu Hizmetleri kullanmak için belirlenen ücretleri ödemeyi kabul edersiniz. 
              Tüm ödemeler, belirtilen ödeme koşullarına uygun olarak yapılmalıdır. Ödeme bilgilerinizin doğruluğundan ve 
              güncelliğinden siz sorumlusunuz.
            </p>
            
            <h3>3.2. Abonelikler</h3>
            
            <p>
              Abonelik gerektiren Hizmetler için, aboneliğiniz, siz veya biz tarafından iptal edilene kadar otomatik olarak 
              yenilenecektir. Aboneliğinizi istediğiniz zaman hesap ayarlarınızdan iptal edebilirsiniz. İptal işlemi, mevcut 
              abonelik döneminin sonunda geçerli olacaktır ve ücret iadesi yapılmayacaktır.
            </p>
            
            <h3>3.3. Fiyat Değişiklikleri</h3>
            
            <p>
              Hizmetlerimizin fiyatlarını zaman zaman değiştirebiliriz. Fiyat değişiklikleri, size bildirimde bulunduktan sonra 
              geçerli olacaktır. Fiyat değişikliğinden sonra Hizmetlerimizi kullanmaya devam etmeniz, yeni fiyatı kabul ettiğiniz 
              anlamına gelir.
            </p>
            
            <h2>4. Fikri Mülkiyet Hakları</h2>
            
            <h3>4.1. Şirket'in Fikri Mülkiyeti</h3>
            
            <p>
              Hizmetlerimiz ve İçeriklerimiz, ticari markalar, hizmet markaları, logolar, ticari adlar, alan adları, yazılım kodu, 
              tasarım, metin, grafikler ve diğer fikri mülkiyet unsurları dahil olmak üzere Şirket'in veya lisans verenlerinin 
              münhasır mülkiyetindedir. Bu Sözleşme, size bu fikri mülkiyet unsurlarına dair herhangi bir hak vermez.
            </p>
            
            <h3>4.2. Kullanım Lisansı</h3>
            
            <p>
              Bu Sözleşme'nin şartlarına tabi olarak, size Hizmetlerimize kişisel ve ticari olmayan amaçlarla erişmek ve kullanmak 
              için sınırlı, münhasır olmayan, devredilemez bir lisans veriyoruz. Bu lisans, Hizmetlerimizi veya İçeriklerimizi 
              kopyalamak, değiştirmek, dağıtmak, satmak, kiralamak veya bunlardan türetilmiş çalışmalar oluşturmak için size hak 
              vermez.
            </p>
            
            <h2>5. Sorumluluk Sınırlaması</h2>
            
            <p>
              Yasalar tarafından izin verilen azami ölçüde, Şirketimiz, yöneticilerimiz, çalışanlarımız ve acentelerimiz, doğrudan, 
              dolaylı, arızi, özel, cezalandırıcı veya sonuç olarak ortaya çıkan herhangi bir zarardan (kar kaybı, veri kaybı veya 
              iş kaybı dahil) sorumlu değildir.
            </p>
            
            <h2>6. Tazminat</h2>
            
            <p>
              Bu Sözleşme'yi ihlal etmeniz veya Hizmetlerimizi yanlış kullanmanız sonucunda oluşabilecek her türlü iddia, talep, 
              zarar, yükümlülük, maliyet veya masrafa (makul avukatlık ücretleri dahil) karşı Şirketimizi, yöneticilerimizi, 
              çalışanlarımızı ve acentelerimizi savunacağınızı, tazmin edeceğinizi ve zarar görmemelerini sağlayacağınızı kabul 
              edersiniz.
            </p>
            
            <h2>7. Değişiklikler</h2>
            
            <p>
              Bu Sözleşme'yi zaman zaman değiştirebiliriz. Değişiklikler, Hizmetlerimiz üzerinden yayınlandıktan sonra geçerli 
              olacaktır. Değişikliklerden sonra Hizmetlerimizi kullanmaya devam etmeniz, güncellenmiş Sözleşme'yi kabul ettiğiniz 
              anlamına gelir.
            </p>
            
            <h2>8. Fesih</h2>
            
            <p>
              Bu Sözleşme, feshedilene kadar yürürlükte kalacaktır. İstediğiniz zaman Hizmetlerimizi kullanmayı bırakarak bu 
              Sözleşme'yi feshedebilirsiniz. Ayrıca, bu Sözleşme'nin herhangi bir hükmünü ihlal etmeniz durumunda, Şirketimiz 
              önceden bildirimde bulunmaksızın Hizmetlerimize erişiminizi sonlandırabilir.
            </p>
            
            <h2>9. Genel Hükümler</h2>
            
            <h3>9.1. Geçerli Hukuk</h3>
            
            <p>
              Bu Sözleşme, Türkiye Cumhuriyeti yasalarına tabidir ve bu yasalara göre yorumlanacaktır.
            </p>
            
            <h3>9.2. Anlaşmazlıkların Çözümü</h3>
            
            <p>
              Bu Sözleşme'den kaynaklanan veya bununla ilgili ortaya çıkabilecek anlaşmazlıklarda Ankara Mahkemeleri ve İcra 
              Daireleri yetkilidir.
            </p>
            
            <h3>9.3. Bölünebilirlik</h3>
            
            <p>
              Bu Sözleşme'nin herhangi bir hükmü geçersiz veya uygulanamaz olarak kabul edilirse, bu hüküm Sözleşme'nin geri kalan 
              hükümlerini etkilemeyecek şekilde sınırlandırılacak veya ortadan kaldırılacaktır.
            </p>
            
            <h3>9.4. Feragat</h3>
            
            <p>
              Şirketimizin bu Sözleşme'nin herhangi bir hükmünü uygulamaması, o hükümden veya diğer herhangi bir hükümden feragat 
              ettiği anlamına gelmez.
            </p>
            
            <h3>9.5. İletişim</h3>
            
            <p>
              Bu Sözleşme ile ilgili sorularınız için <a href="mailto:rehberyazilim@gmail.com" className="text-red-600 hover:text-red-800">rehberyazilim@gmail.com</a> adresinden bizimle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 