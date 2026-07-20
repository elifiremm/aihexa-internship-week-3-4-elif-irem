# Week 3 - Git & GitHub
# Git Nedir?

## Git Tanımı

Git, yazılım geliştirme sürecinde dosyaların ve kaynak kodların geçmişini takip etmeyi sağlayan dağıtık (Distributed) bir sürüm kontrol sistemidir. 2005 yılında Linus Torvalds tarafından Linux çekirdeğinin geliştirilmesi sırasında oluşturulmuştur.

Git sayesinde projede yapılan tüm değişiklikler kayıt altına alınır. Böylece istenildiğinde eski sürümlere geri dönülebilir, hatalar kolayca tespit edilebilir ve birden fazla geliştirici aynı proje üzerinde aynı anda çalışabilir.



## Git Ne İşe Yarar?

Git'in temel amacı yazılım projelerinde yapılan değişiklikleri güvenli bir şekilde yönetmektir.

Git sayesinde

- Dosyalardaki değişiklikler takip edilir.
- Önceki sürümlere geri dönülebilir.
- Yapılan hatalar kolayca düzeltilebilir.
- Aynı proje üzerinde birden fazla kişi birlikte çalışabilir.
- Projenin tüm gelişim süreci kayıt altında tutulur.



## Git'in Temel Özellikleri

- Dağıtık (Distributed) sürüm kontrol sistemidir.
- Hızlı ve güvenlidir.
- İnternet bağlantısı olmadan da kullanılabilir.
- Branch (dal) sistemi sayesinde farklı özellikler ayrı ayrı geliştirilebilir.
- Yapılan her değişiklik commit olarak kayıt altına alınır.
- Büyük projelerde yüksek performans sağlar.



## Git'in Çalışma Mantığı

Git üç temel alandan oluşur.

1. **Working Directory:** Dosyaların düzenlendiği çalışma alanıdır.
2. **Staging Area:** Commit edilmeden önce değişikliklerin hazırlandığı alandır.
3. **Repository:** Commit edilen tüm sürümlerin saklandığı alandır.

Çalışma sırası şu şekildedir:

```
Working Directory
        │
    git add
        │
 Staging Area
        │
  git commit
        │
 Local Repository
        │
   git push
        │
GitHub Repository
```



## Git Kullanmanın Avantajları

- Kodların güvenli şekilde saklanmasını sağlar.
- Ekip çalışmalarını kolaylaştırır.
- Kod geçmişini ayrıntılı olarak tutar.
- Önceki sürümlere kolayca dönülebilir.
- Projede yapılan tüm değişiklikler takip edilebilir.
- Yazılım geliştirme sürecini daha düzenli hale getirir.



## Örnek Kullanım

Bir ekip aynı web projesi üzerinde çalışmaktadır.

- Bir geliştirici giriş ekranını düzenler.
- Diğer geliştirici kullanıcı kayıt ekranını geliştirir.
- Üçüncü geliştirici hata düzeltmeleri yapar.

Git sayesinde herkes kendi değişikliklerini kaydeder ve daha sonra bu değişiklikler tek proje altında birleştirilir.




## Özet

Git; yazılım projelerinde kodların sürümünü takip eden, ekip çalışmasını kolaylaştıran ve yapılan değişikliklerin güvenli bir şekilde yönetilmesini sağlayan dağıtık bir sürüm kontrol sistemidir.

# GitHub Nedir?

## GitHub Tanımı

GitHub Git sürüm kontrol sistemini kullanarak yazılım projelerinin internet üzerinde saklanmasını, yönetilmesini ve ekip üyeleriyle paylaşılmasını sağlayan bulut tabanlı bir platformdur.

GitHub sayesinde geliştiriciler aynı proje üzerinde birlikte çalışabilir, yapılan değişiklikleri takip edebilir ve projelerini güvenli bir şekilde yönetebilir.



## GitHub Ne İşe Yarar?

GitHub'ın temel amacı projeleri internet ortamında güvenli şekilde saklamak ve ekip çalışmalarını kolaylaştırmaktır.

GitHub sayesinde;

- Projeler çevrim içi olarak saklanır.
- Ekip üyeleri aynı proje üzerinde çalışabilir.
- Yapılan değişiklikler takip edilir.
- Kodlar paylaşılabilir.
- Proje geçmişi görüntülenebilir.



## Örnek

Bir ekipte üç geliştirici aynı proje üzerinde çalışmaktadır. Her geliştirici yaptığı değişiklikleri GitHub'a gönderir ve diğer ekip üyeleri bu değişiklikleri görebilir.



## Özet

GitHub, Git tabanlı projelerin internet üzerinde saklanmasını ve ekip çalışmasının kolaylaştırılmasını sağlayan bir platformdur.

# Repository Nedir?

## Repository Tanımı

Repository (Repo), bir yazılım projesine ait tüm dosyaların, klasörlerin ve sürüm geçmişinin saklandığı depodur.

Bir repository içerisinde kaynak kodlar, dokümanlar, görseller ve proje dosyaları bulunabilir.



## Repository Ne İşe Yarar?

- Proje dosyalarını düzenli şekilde saklar.
- Değişiklik geçmişini tutar.
- Ekip üyelerinin ortak çalışmasını sağlar.
- Projenin tek bir merkezden yönetilmesini sağlar.



## Örnek

Bir e-ticaret projesinin tüm HTML, CSS, JavaScript, Java ve doküman dosyaları tek bir repository içerisinde tutulabilir.



## Kısa Özet

Repository, bir projeye ait tüm dosyaların ve sürüm geçmişinin bulunduğu depodur.

# Commit Nedir?

## Commit Tanımı

Commit, projede yapılan değişikliklerin belirli bir açıklama ile kalıcı olarak kayıt altına alınması işlemidir.

Her commit benzersiz bir kimliğe (Commit ID) sahiptir.



## Commit Ne İşe Yarar?

- Yapılan değişiklikleri kaydeder.
- Kod geçmişini oluşturur.
- Önceki sürümlere dönmeyi sağlar.
- Kimin hangi değişikliği yaptığını gösterir.



## Örnek

Yeni bir giriş ekranı tamamlandıktan sonra:

git commit -m "Login sayfası eklendi"

komutu ile kayıt oluşturulur.



## Özet

Commit, projede yapılan değişikliklerin kalıcı olarak kaydedilmesidir.

# Branch Nedir?

## Branch Tanımı

Branch, ana projeyi etkilemeden yeni özellikler geliştirmek veya hata düzeltmeleri yapmak için oluşturulan çalışma dalıdır.



## Branch Ne İşe Yarar?

- Aynı anda farklı geliştirmeler yapılmasını sağlar.
- Ana kodu korur.
- Yeni özelliklerin güvenli şekilde test edilmesini sağlar.



## Örnek

main

↓

login-feature

↓

payment-feature

Her özellik kendi branch'inde geliştirilir.



## Özet

Branch, projede bağımsız geliştirme yapılmasını sağlayan çalışma dalıdır.

# Merge Conflict Nedir?

## Tanım

İki farklı kişinin aynı dosyanın aynı satırını değiştirmesi sonucunda oluşan çakışmaya Merge Conflict denir.



## Çözümü

Geliştirici hangi kodun kalacağına karar verir ve çakışmayı manuel olarak çözer.



## Özet

Merge Conflict, kod birleştirme sırasında oluşan çakışmadır.

# .gitignore Nedir?

.gitignore, Git'in takip etmesini istemediğimiz dosya ve klasörleri belirten yapılandırma dosyasıdır.

Örneğin:

- node_modules
- target
- .idea
- *.log

Projelerde derleme dosyaları ve IDE ayarları .gitignore içerisine eklenerek gereksiz dosyaların GitHub'a gönderilmesi engellenir.

## Özet

.gitignore, Git'in görmezden geleceği dosyaları belirleyen dosyadır.

# README.md Dosyası Neden Önemlidir?

README.md, bir repository'nin tanıtım dosyasıdır.

Bu dosyada;

- Projenin amacı
- Kurulum bilgileri
- Kullanılan teknolojiler
- Kullanım şekli
- Geliştirici bilgileri

yer alır.

README sayesinde yeni geliştiriciler projeyi hızlıca anlayabilir.

## Özet

README.md, projenin rehber ve tanıtım dosyasıdır.

# Issue Nedir?

Issue, projede yapılacak işler, hata kayıtları veya geliştirme önerilerinin takip edildiği görev sistemidir.

Örneğin:

- Login hatası
- Yeni kullanıcı ekranı
- Performans iyileştirmesi
  
Projelerde ekip üyeleri görevlerini Issue sistemi üzerinden takip edebilir.

## Kısa Özet

Issue, hata ve görev takip sistemidir.

# Bir Yazılım Ekibinde GitHub Nasıl Kullanılır?

Bir yazılım ekibinde geliştiriciler aynı repository üzerinde çalışır.

Genel çalışma süreci:

1. Repository oluşturulur.
2. Her geliştirici kendi branch'ini açar.
3. Değişiklikler commit edilir.
4. GitHub'a push edilir.
5. Pull Request oluşturulur.
6. Kod incelenir.
7. Ana branch'e merge edilir.

Bu süreç ekip içinde düzenli ve güvenli çalışmayı sağlar.

# Commit Mesajı Nasıl Yazılmalıdır?

İyi bir commit mesajı kısa, anlaşılır ve yapılan değişikliği açıkça ifade etmelidir.

Örnekler:

- Add login page
- Fix registration bug
- Update README
- Add user authentication
- Improve homepage design

Kötü örnekler:

- deneme
- son hali
- değişiklik
- update

AIHEXA projelerinde commit mesajları yapılan işi net şekilde açıklamalıdır.

# Proje Klasör Yapısı Neden Önemlidir?

Düzenli klasör yapısı, projeyi geliştirmeyi ve yönetmeyi kolaylaştırır.

Avantajları:

- Dosyalar kolay bulunur.
- Bakım kolaylaşır.
- Yeni geliştiriciler projeyi daha hızlı öğrenir.
- Hatalar daha kolay tespit edilir.

 Projelerde frontend, backend, dokümanlar ve diğer dosyalar belirli klasörler altında düzenli şekilde tutulur.

## Kısa Özet

Düzenli proje klasör yapısı, yazılım geliştirme sürecini daha düzenli, anlaşılır ve sürdürülebilir hale getirir.
