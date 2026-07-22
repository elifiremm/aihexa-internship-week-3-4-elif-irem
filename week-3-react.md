# Week 3 - React
# React Temelleri ve Frontend Mantığı

## React Nedir?

React, kullanıcı arayüzleri (User Interface - UI) geliştirmek için Meta (Facebook) tarafından geliştirilen açık kaynaklı bir JavaScript kütüphanesidir. Özellikle Single Page Application (SPA) geliştirmek için kullanılır.

React sayesinde web sayfaları küçük ve tekrar kullanılabilir bileşenlere (Component) ayrılır. Böylece kod daha okunabilir, yönetilebilir ve sürdürülebilir hale gelir.

### React'in Avantajları

- Component tabanlı yapı sunar.
- Kod tekrarını azaltır.
- Virtual DOM sayesinde yüksek performans sağlar.
- Tek yönlü veri akışı kullanır.
- Büyük projelerin yönetimini kolaylaştırır.
- Geniş bir topluluk ve kütüphane desteğine sahiptir.

## Frontend Nedir?

Frontend, kullanıcıların gördüğü ve doğrudan etkileşim kurduğu uygulama kısmıdır.

Kullanıcının ekranda gördüğü;

- Butonlar
- Formlar
- Menü yapıları
- Kartlar
- Tablolar
- Renkler
- Animasyonlar

frontend tarafında geliştirilir.

Frontend geliştirirken en yaygın teknolojiler şunlardır:

- HTML
- CSS
- JavaScript
- React
- Vue
- Angular

## Component Mantığı

Component, React uygulamalarının en küçük yapı taşıdır.

Her component belirli bir görevi yerine getirir ve gerektiğinde başka sayfalarda tekrar kullanılabilir.

Örnek componentler:

- Navbar
- Footer
- Login Formu
- Kayıt Formu
- Kullanıcı Kartı
- Sidebar

Örneğin bir web sitesindeki üst menü sadece bir kez yazılır ve tüm sayfalarda aynı component kullanılır.

Component yapısı sayesinde:

- Kod tekrar etmez.
- Bakımı kolay olur.
- Daha düzenli proje geliştirilir.

## JSX Nedir?

JSX (JavaScript XML), JavaScript içerisinde HTML benzeri kod yazılmasını sağlayan sözdizimidir.

Normal JavaScript:

```javascript
const element = React.createElement("h1", null, "Merhaba");
```

JSX ile:

```jsx
const element = <h1>Merhaba</h1>;
```

JSX okunabilirliği artırır ve React tarafından normal JavaScript koduna dönüştürülür.

## Props ve State Farkı

### Props

Props (Properties), bir component'e dışarıdan veri göndermek için kullanılır.

Özellikleri:

- Read Only'dir.
- Component tarafından değiştirilemez.
- Parent component tarafından gönderilir.

Örnek:

```jsx
<Greeting name="Elif" />
```

```jsx
function Greeting(props){
   return <h1>Merhaba {props.name}</h1>
}
```

### State

State, component'in kendi içerisinde tuttuğu verilerdir.

Örneğin;

- Sayaç değeri
- Form bilgileri
- Kullanıcı giriş durumu
- Sepet bilgisi

State değiştiğinde React ilgili component'i otomatik olarak yeniden render eder.

## useState Nedir?

useState, Functional Component içerisinde state oluşturmayı sağlayan React Hook'udur.

Örnek:

```jsx
const [count, setCount] = useState(0);
```

Burada;

- count → mevcut değer
- setCount → değeri değiştiren fonksiyon

Örnek kullanım:

```jsx
<button onClick={() => setCount(count+1)}>
Arttır
</button>
```

## useEffect Nedir?

useEffect, component ekrana geldiğinde veya belirli veriler değiştiğinde çalışan React Hook'udur.

En sık kullanım alanları:

- API'den veri çekmek
- Sayfa ilk açıldığında işlem yapmak
- Timer oluşturmak
- localStorage okumak
- Event Listener eklemek

Örnek:

```jsx
useEffect(() => {
   console.log("Sayfa açıldı");
}, []);
```

Boş dizi (`[]`) yalnızca sayfa ilk açıldığında çalışmasını sağlar.

## React Router Nedir?

React Router, React uygulamalarında sayfalar arasında geçiş yapılmasını sağlayan kütüphanedir.

Örneğin;

```
/
/login
/register
/profile
/about
```

gibi sayfalar React Router ile yönetilir.

En çok kullanılan bileşenler:

- BrowserRouter
- Routes
- Route
- Link
- useNavigate

## Form Yönetimi

React'te formlar genellikle useState kullanılarak yönetilir.

Örnek alanlar:

- Ad
- Soyad
- Telefon
- E-posta

Kullanıcının girdiği bilgiler state içerisinde tutulur.

Form gönderildiğinde bu bilgiler backend'e JSON olarak gönderilir.

## API'den Veri Çekme

Frontend ile backend arasındaki iletişim API aracılığıyla sağlanır.

React'te en çok kullanılan yöntemler:

- fetch()
- axios

Örnek:

```javascript
fetch("http://localhost:8080/tasks")
```

veya

```javascript
axios.get("http://localhost:8080/tasks")
```

Backend'den gelen JSON verisi React tarafından ekranda gösterilir.

## localStorage Mantığı

localStorage, tarayıcıda küçük verileri saklamaya yarayan depolama alanıdır.

Kullanım alanları:

- Tema bilgisi
- Kullanıcı tercihleri
- Token
- Son girilen form bilgileri

Veri kaydetme:

```javascript
localStorage.setItem("name","Elif");
```

Veri okuma:

```javascript
localStorage.getItem("name");
```

Veri silme:

```javascript
localStorage.removeItem("name");
```

## Kullanıcıya Hata Mesajı Gösterme

Frontend uygulamalarında oluşan hatalar kullanıcıya anlaşılır şekilde gösterilmelidir.

Örneğin:

- Ad alanı boş bırakılamaz.
- Geçerli bir e-posta adresi giriniz.
- Telefon numarası hatalı.
- Sunucuya ulaşılamadı.

Bu sayede kullanıcı hatasını kolayca düzeltebilir.

## Loading Durumu

API'den veri alınırken kullanıcıya yükleme işleminin devam ettiğini göstermek için Loading kullanılır.

Örneğin:

```
Yükleniyor...
```

veya bir yükleme animasyonu (spinner) gösterilebilir.

Böylece kullanıcı sistemin çalışmaya devam ettiğini anlar.

## Responsive Tasarım

Responsive tasarım, web sayfasının farklı ekran boyutlarına uyum sağlayabilmesidir.

Desteklenen cihazlar:

- Telefon
- Tablet
- Laptop
- Masaüstü Bilgisayar

Responsive tasarım için;

- Flexbox
- CSS Grid
- Media Query

teknikleri kullanılır.

## Frontend Klasör Yapısı Nasıl Okunur?

Örnek React proje yapısı:

```
src
│
├── components
├── pages
├── services
├── hooks
├── assets
├── App.jsx
├── main.jsx
```

Klasörlerin görevleri:

- components → Tekrar kullanılabilir bileşenler
- pages → Sayfalar
- services → API işlemleri
- hooks → Özel Hook'lar
- assets → Resim, ikon ve CSS dosyaları
- App.jsx → Ana uygulama bileşeni
- main.jsx → Uygulamanın başlangıç noktası

## Eğitim Kayıt Formu Alanları

Formda aşağıdaki bilgiler bulunacaktır:

- Ad
- Soyad
- E-posta
- Telefon
- Eğitim Seçimi
- Eğitim Seviyesi
- Açıklama
- KVKK Onayı

## Backend'e Gönderilecek JSON Örneği

```json
{
  "name": "Elif",
  "surname": "İrem",
  "emailAddress": "elifirem@example.com",
  "phoneNumber": "0532 123 45 67",
  "selectedCourse": "React Frontend Eğitimi",
  "educationLevel": "Lisans",
  "note": "Frontend geliştirme konusunda kendimi geliştirmek istiyorum.",
  "acceptedKvkk": true
}
```

Bu JSON yapısı React tarafından oluşturularak Spring Boot backend'ine POST isteği ile gönderilir.

## AIHEXA Projesinde React Nerede Kullanılır?

AIHEXA projelerinde React, kullanıcıların etkileşimde bulunduğu frontend kısmını geliştirmek için kullanılabilir.

Örneğin;

- Eğitim kayıt ekranı
- Kullanıcı giriş sistemi
- Dashboard
- Eğitim listeleme sayfası
- Profil yönetimi
- Başvuru ekranları
- Yönetim paneli
- Duyuru sayfaları

gibi arayüzler React kullanılarak geliştirilebilir.

React, Spring Boot ile REST API üzerinden haberleşerek verileri alır ve kullanıcıya dinamik bir şekilde gösterir.
