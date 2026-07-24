# Week 3 - AIHEXA Module Analysis
# AIHEXA Modül Analizi

## 1. Kullanıcı Yönetimi Modülü

### Bu modül ne işe yarar?

Kullanıcıların sisteme kayıt olmasını, giriş yapmasını, profil bilgilerini güncellemesini ve yetkilendirme işlemlerini yönetir.

### Kim kullanır?

- Öğrenciler
- Eğitmenler
- Yöneticiler
- Sistem yöneticisi

### Frontend tarafında hangi ekranlar olur?

- Giriş Sayfası
- Kayıt Sayfası
- Şifremi Unuttum
- Profil Sayfası
- Kullanıcı Listesi (Admin)

### Backend tarafında hangi API'ler gerekir?

- POST /register
- POST /login
- GET /users
- GET /users/{id}
- PUT /users/{id}
- DELETE /users/{id}

### Database tarafında hangi tablolar olabilir?

- users
- roles
- user_roles

### Bu modülde hangi hatalar çıkabilir?

- Hatalı kullanıcı adı veya şifre
- Aynı e-posta ile tekrar kayıt
- Yetkisiz erişim
- Eksik bilgi girişi

### Bu modül sosyal medya, SEO veya eğitim tarafına nasıl katkı sağlar?

Kullanıcıların sisteme güvenli şekilde erişmesini sağlayarak eğitim platformunun düzenli çalışmasına katkı sağlar.

---

## 2. Eğitim Modülü

### Bu modül ne işe yarar?

Platformda bulunan eğitimlerin listelenmesini, detaylarının görüntülenmesini ve kullanıcıların eğitimlere başvurmasını sağlar.

### Kim kullanır?

- Öğrenciler
- Eğitmenler
- Yöneticiler

### Frontend tarafında hangi ekranlar olur?

- Eğitimler Sayfası
- Eğitim Detay Sayfası
- Başvuru Formu
- Yönetim Paneli

### Backend tarafında hangi API'ler gerekir?

- GET /courses
- GET /courses/{id}
- POST /courses
- PUT /courses/{id}
- DELETE /courses/{id}

### Database tarafında hangi tablolar olabilir?

- courses
- course_categories
- enrollments

### Bu modülde hangi hatalar çıkabilir?

- Eğitim bulunamadı
- Kontenjan dolu
- Başvuru başarısız
- Eksik bilgi

### Bu modül sosyal medya, SEO veya eğitim tarafına nasıl katkı sağlar?

Eğitimlerin düzenli sunulmasını sağlar ve başvuru süreçlerini kolaylaştırır.

---

## 3. Blog Modülü

### Bu modül ne işe yarar?

Şirketin duyurularını, teknik makalelerini ve bilgilendirici içeriklerini yayınlamasını sağlar.

### Kim kullanır?

- İçerik editörleri
- Yöneticiler
- Site ziyaretçileri

### Frontend tarafında hangi ekranlar olur?

- Blog Listesi
- Blog Detay Sayfası
- Kategori Sayfası

### Backend tarafında hangi API'ler gerekir?

- GET /blogs
- GET /blogs/{id}
- POST /blogs
- PUT /blogs/{id}
- DELETE /blogs/{id}

### Database tarafında hangi tablolar olabilir?

- blogs
- blog_categories
- blog_tags

### Bu modülde hangi hatalar çıkabilir?

- İçerik kaydedilemedi
- Blog bulunamadı
- Yetkisiz düzenleme

### Bu modül sosyal medya, SEO veya eğitim tarafına nasıl katkı sağlar?

Düzenli blog içerikleri sayesinde hem kullanıcılar bilgilendirilir hem de SEO performansı artırılır.

---

## 4. Sosyal Medya İçerik Modülü

### Bu modül ne işe yarar?

Sosyal medya paylaşımlarının planlanmasını ve içeriklerin düzenli hazırlanmasını sağlar.

### Kim kullanır?

- Sosyal medya uzmanı
- İçerik üreticisi
- Yönetici

### Frontend tarafında hangi ekranlar olur?

- İçerik Listesi
- İçerik Oluşturma
- İçerik Takvimi

### Backend tarafında hangi API'ler gerekir?

- GET /social-posts
- POST /social-posts
- PUT /social-posts/{id}
- DELETE /social-posts/{id}

### Database tarafında hangi tablolar olabilir?

- social_posts
- content_calendar

### Bu modülde hangi hatalar çıkabilir?

- İçerik kaydedilemedi
- Tarih çakışması
- Eksik paylaşım bilgisi

### Bu modül sosyal medya, SEO veya eğitim tarafına nasıl katkı sağlar?

Marka bilinirliğini artırır, eğitimlerin tanıtımını kolaylaştırır ve hedef kitleyle düzenli iletişim kurulmasını sağlar.

---

## 5. SEO Blog Modülü

### Bu modül ne işe yarar?

SEO uyumlu blog içerikleri hazırlayarak web sitesinin Google'da daha görünür olmasını sağlar.

### Kim kullanır?

- SEO uzmanı
- İçerik editörü
- Yönetici

### Frontend tarafında hangi ekranlar olur?

- SEO Blog Listesi
- Blog Detay Sayfası
- Arama Sayfası

### Backend tarafında hangi API'ler gerekir?

- GET /seo-blogs
- POST /seo-blogs
- PUT /seo-blogs/{id}
- DELETE /seo-blogs/{id}

### Database tarafında hangi tablolar olabilir?

- seo_blogs
- keywords
- categories

### Bu modülde hangi hatalar çıkabilir?

- Eksik meta açıklaması
- Yanlış anahtar kelime
- İçeriğin kaydedilememesi

### Bu modül sosyal medya, SEO veya eğitim tarafına nasıl katkı sağlar?

SEO uyumlu içerikler sayesinde web sitesinin arama motorlarında üst sıralarda yer almasına yardımcı olur. Böylece daha fazla kullanıcı eğitimlere ve hizmetlere ulaşabilir.

# Genel Değerlendirme

Yapılan analiz sonucunda AIHEXA projesinde kullanıcı yönetimi, eğitim, blog, sosyal medya ve SEO modüllerinin birbirini tamamlayan yapılar olduğu görülmüştür. Bu modüller birlikte çalışarak kullanıcı deneyimini artırır, eğitim süreçlerini kolaylaştırır, marka bilinirliğini güçlendirir ve web sitesinin daha fazla kişiye ulaşmasına katkı sağlar.
