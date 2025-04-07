import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "KVKK Metni - RehberPOS",
  description: "RehberPOS KVKK Aydınlatma Metni: 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında bilgilendirme.",
}

export default function KVKKMetniPage() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">KVKK Aydınlatma Metni</h1>
          
          <div className="prose prose-lg prose-red mx-auto">
            <p>Son güncellenme: {new Date().toLocaleDateString('tr-TR')}</p>
            
            <p>
              RehberPOS olarak kişisel verilerinizin güvenliği konusunda azami hassasiyet göstermekteyiz. Bu bilinçle, 
              ürün ve hizmetlerimizden faydalanan kişiler dahil, şirketimiz ile ilişkili tüm şahıslara ait her türlü 
              kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK")'na uygun olarak işlenmesine ve 
              muhafaza edilmesine büyük önem vermekteyiz.
            </p>
            
            <h2>1. Veri Sorumlusu</h2>
            
            <p>
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz; veri sorumlusu 
              olarak RehberPOS ("Şirket") tarafından aşağıda açıklanan kapsamda toplanabilecek, işlenebilecek ve aktarılabilecektir.
            </p>
            
            <h2>2. Kişisel Verilerin İşlenme Amacı</h2>
            
            <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
            
            <ul>
              <li>Ürün ve hizmetlerimizin sunulması, iyileştirilmesi ve çeşitlendirilmesi</li>
              <li>Müşteri ilişkilerinin yönetimi ve müşteri memnuniyetinin sağlanması</li>
              <li>Faturalandırma ve ödeme işlemlerinin gerçekleştirilmesi</li>
              <li>Şirketimiz tarafından sunulan ürün ve hizmetlerden faydalanmanız için gerekli çalışmaların yapılması</li>
              <li>Sözleşmeden doğan yükümlülüklerimizin yerine getirilmesi</li>
              <li>Yasal ve düzenleyici gerekliliklerin yerine getirilmesi</li>
              <li>Bilgi güvenliği süreçlerinin planlanması, denetimi ve yürütülmesi</li>
              <li>İş sürekliliğinin sağlanması faaliyetlerinin yürütülmesi</li>
              <li>Yetkili kişi, kurum ve kuruluşlara bilgi verilmesi</li>
              <li>Pazarlama analiz çalışmalarının yürütülmesi (onay vermeniz halinde)</li>
            </ul>
            
            <h2>3. İşlenen Kişisel Veri Kategorileri</h2>
            
            <p>İşlediğimiz kişisel veri kategorileri aşağıdaki gibidir:</p>
            
            <ul>
              <li><strong>Kimlik Bilgileri:</strong> Ad-soyad, T.C. kimlik numarası, doğum tarihi vb.</li>
              <li><strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta, adres vb.</li>
              <li><strong>Müşteri İşlem Bilgileri:</strong> Sipariş bilgileri, talep bilgileri vb.</li>
              <li><strong>Finansal Bilgiler:</strong> Banka hesap bilgileri, fatura bilgileri vb.</li>
              <li><strong>Elektronik İşlem Bilgileri:</strong> IP adresi, cihaz bilgileri, çerez kayıtları vb.</li>
              <li><strong>Pazarlama Bilgileri:</strong> Alışkanlık ve beğenileriniz, tercihleriniz vb.</li>
            </ul>
            
            <h2>4. Kişisel Verilerin Aktarılması</h2>
            
            <p>
              Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, iş ortaklarımıza, 
              tedarikçilerimize, hissedarlarımıza, kanunen yetkili kamu kurumlarına ve özel kişilere, KVKK'nın 8. ve 9. 
              maddelerinde belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde aktarılabilecektir.
            </p>
            
            <h2>5. Kişisel Veri Toplama Yöntemi ve Hukuki Sebebi</h2>
            
            <p>
              Kişisel verileriniz, şirketimiz tarafından sunulan ürün ve hizmetlerden faydalanmanız kapsamında elektronik 
              ortamda web sitemiz, mobil uygulamalarımız ve e-posta kanallarıyla; fiziki ortamda yüz yüze görüşmeler ve 
              sözleşmeler aracılığıyla toplanmaktadır.
            </p>
            
            <p>
              Kişisel verilerinizin işlenme hukuki sebepleri KVKK'nın 5. maddesinde belirtilen;
            </p>
            
            <ul>
              <li>Açık rızanızın bulunması</li>
              <li>Kanunlarda açıkça öngörülmesi</li>
              <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması</li>
              <li>Hukuki yükümlülüklerimizin yerine getirilmesi</li>
              <li>Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması</li>
              <li>Temel hak ve özgürlüklerinize zarar vermemek kaydıyla, meşru menfaatlerimiz için veri işlenmesinin zorunlu olması</li>
            </ul>
            
            <h2>6. KVKK Kapsamındaki Haklarınız</h2>
            
            <p>KVKK'nın 11. maddesi uyarınca herkes, veri sorumlusuna başvurarak kendisiyle ilgili;</p>
            
            <ul>
              <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
              <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
              <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
              <li>Kişisel verilerin düzeltilmesi, silinmesi veya yok edilmesi işlemlerinin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme haklarına sahiptir.</li>
            </ul>
            
            <h2>7. Başvuru Yöntemi</h2>
            
            <p>
              Bu haklarınız kapsamındaki taleplerinizi, yazılı olarak veya kayıtlı elektronik posta (KEP) adresi, güvenli elektronik 
              imza, mobil imza ya da daha önce bize bildirdiğiniz ve sistemimizde kayıtlı bulunan elektronik posta adresinizi 
              kullanmak suretiyle <a href="mailto:rehberyazilim@gmail.com" className="text-red-600 hover:text-red-800">rehberyazilim@gmail.com</a> adresine iletebilirsiniz.
            </p>
            
            <p>
              Başvurunuzda;
            </p>
            
            <ul>
              <li>Ad-soyadınız ve başvuru yazılı ise imzanız,</li>
              <li>Türkiye Cumhuriyeti vatandaşıysanız T.C. kimlik numaranız, yabancı iseniz uyruğunuz, pasaport numaranız veya varsa kimlik numaranız,</li>
              <li>Tebligata esas yerleşim yeri veya iş yeri adresiniz,</li>
              <li>Varsa bildirime esas elektronik posta adresiniz, telefon ve faks numaranız,</li>
              <li>Talep konunuz</li>
            </ul>
            
            <p>
              bulunması zorunlu olup, varsa konuya ilişkin bilgi ve belgelerin de başvuruya eklenmesi gerekmektedir.
            </p>
            
            <h2>8. Değişiklikler</h2>
            
            <p>
              Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ilgili diğer mevzuat kapsamında hazırlanmıştır. 
              İlgili yasal mevzuat ve/veya Şirket'in kişisel veri işleme amaç ve politikalarında meydana gelecek değişiklikler 
              doğrultusunda bu aydınlatma metninde gerekli değişiklikler yapılabilir.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 