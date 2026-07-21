# Week 3 - Spring Boot
## Spring Boot Nedir?

Spring Boot, Java programlama dili kullanılarak web uygulamaları, backend sistemleri ve REST API servisleri geliştirilmesini kolaylaştıran bir framework'tür. Spring Boot, temel olarak Spring Framework üzerine kurulmuştur. Spring Framework oldukça kapsamlı bir yapı olduğu için klasik Spring projelerinde birçok ayarın geliştirici tarafından manuel olarak yapılması gerekebilir. Spring Boot ise bu yapılandırmaların büyük bölümünü otomatikleştirerek daha hızlı ve düzenli proje geliştirilmesini sağlar.

Spring Boot'un en önemli özelliklerinden biri otomatik yapılandırma sistemidir. Projeye eklenen bağımlılıklara bakarak uygulamanın hangi ayarlara ihtiyaç duyduğunu tahmin eder ve gerekli yapılandırmaları otomatik olarak gerçekleştirir. Örneğin projeye Spring Web bağımlılığı eklendiğinde, Spring Boot uygulamanın bir web uygulaması olduğunu algılar ve gerekli web yapılandırmalarını hazırlar.

Spring Boot projelerinde genellikle gömülü bir web sunucusu bulunur. Tomcat, Jetty veya Undertow gibi sunucular uygulamanın içine dahil edilebilir. Böylece geliştiricinin ayrı bir sunucu kurmasına ve uygulamayı bu sunucuya manuel olarak yüklemesine gerek kalmaz. Uygulama çalıştırıldığında gömülü sunucu da otomatik olarak başlatılır.

Spring Boot sayesinde aşağıdaki işlemler daha kolay gerçekleştirilir:

- REST API geliştirme
- Veritabanı bağlantısı kurma
- Kullanıcı kayıt ve giriş sistemleri oluşturma
- Veri ekleme, silme, güncelleme ve listeleme işlemleri yapma
- Proje bağımlılıklarını yönetme
- Uygulama ayarlarını merkezi bir dosyada tutma
- Hata yönetimi gerçekleştirme
- Güvenlik ve yetkilendirme mekanizmaları kurma
- Projeyi test etme ve çalıştırma

Spring Boot özellikle kurumsal uygulamalarda, e-ticaret sistemlerinde, eğitim platformlarında, sağlık uygulamalarında, yönetim panellerinde ve mobil uygulamaların backend tarafında yaygın olarak kullanılmaktadır.

## Backend Nedir?

Backend, bir yazılım sisteminin kullanıcı tarafından doğrudan görülmeyen ve işlemlerin arka planda gerçekleştirildiği bölümüdür. Kullanıcılar genellikle uygulamanın frontend kısmı ile etkileşim kurar. Butonlar, formlar, menüler, tablolar ve görseller frontend tarafında bulunur. Ancak kullanıcının gerçekleştirdiği işlemlerin kontrol edilmesi, verilerin işlenmesi ve veritabanına kaydedilmesi backend tarafında yapılır.

Örneğin bir kullanıcı kayıt formunu doldurup "Kayıt Ol" butonuna bastığında form bilgileri frontend tarafından backend'e gönderilir. Backend, gelen e-posta adresinin daha önce kullanılıp kullanılmadığını kontrol eder, şifrenin kurallara uygun olup olmadığını inceler ve bilgiler doğruysa kullanıcıyı veritabanına kaydeder. Sonrasında işlemin başarılı veya başarısız olduğu bilgisini frontend'e gönderir.

Backend'in temel görevleri şunlardır:

- Frontend tarafından gönderilen istekleri karşılamak
- Kullanıcıdan gelen verileri almak
- Verilerin doğru ve eksiksiz olup olmadığını kontrol etmek
- Uygulamanın iş kurallarını uygulamak
- Veritabanı ile iletişim kurmak
- Verileri veritabanına kaydetmek
- Veritabanındaki verileri güncellemek
- Kayıtları silmek
- Verileri sorgulamak ve listelemek
- Kullanıcı giriş bilgilerini doğrulamak
- Yetkilendirme işlemlerini gerçekleştirmek
- Hata oluştuğunda uygun hata mesajı üretmek
- Frontend'e uygun bir cevap göndermek

Backend geliştirme sırasında Java, C#, Python, PHP, JavaScript ve Go gibi farklı programlama dilleri kullanılabilir. Spring Boot ise Java tabanlı backend geliştirmede kullanılan en yaygın teknolojilerden biridir.

## Frontend ve Backend Arasındaki Fark

Frontend, kullanıcının gördüğü ve doğrudan etkileşim kurduğu bölümdür. Backend ise işlemlerin arka planda gerçekleştirildiği sistemdir.

Bir kullanıcı kayıt ekranında:

- Ad, soyad, e-posta ve şifre alanları frontend tarafında gösterilir.
- Kullanıcının girdiği bilgiler frontend tarafından toplanır.
- Bilgiler backend'e gönderilir.
- Backend bilgileri kontrol eder.
- Backend veritabanına kayıt yapar.
- İşlem sonucu tekrar frontend'e gönderilir.
- Frontend kullanıcıya başarılı veya hatalı mesajını gösterir.

React, Angular ve Vue.js gibi teknolojiler frontend geliştirmede kullanılabilir. Spring Boot, Node.js ve .NET gibi teknolojiler ise backend geliştirmede kullanılabilir.

## REST API Nedir?

REST API, farklı yazılım sistemlerinin HTTP protokolü üzerinden birbiriyle iletişim kurmasını sağlayan bir yapıdır. REST kelimesi "Representational State Transfer", API ise "Application Programming Interface" anlamına gelir.

Bir REST API, frontend uygulaması ile backend sistemi arasında köprü görevi görür. React ile geliştirilen bir kullanıcı arayüzü, Spring Boot ile geliştirilen backend uygulamasına REST API üzerinden istek gönderir.

Örneğin kullanıcı listesini almak için frontend aşağıdaki gibi bir adrese GET isteği gönderebilir:

```text
GET /api/users
```

Yeni kullanıcı oluşturmak için aşağıdaki gibi bir POST isteği gönderilebilir:

```text
POST /api/users
```

Belirli bir kullanıcıyı güncellemek için:

```text
PUT /api/users/5
```

Belirli bir kullanıcıyı silmek için:

```text
DELETE /api/users/5
```

REST API'lerde veriler genellikle JSON formatında gönderilir ve alınır. JSON, hem insanlar tarafından okunması kolay olan hem de yazılım sistemleri arasında veri taşımaya uygun bir formattır.

Bir REST API sayesinde:

- Web uygulamaları backend'e bağlanabilir.
- Mobil uygulamalar aynı backend'i kullanabilir.
- Farklı yazılım sistemleri veri alışverişi yapabilir.
- Frontend ve backend bağımsız olarak geliştirilebilir.
- Aynı backend birden fazla istemci tarafından kullanılabilir.

## JSON Nedir?

JSON, "JavaScript Object Notation" ifadesinin kısaltmasıdır. Yazılım sistemleri arasında veri taşımak için kullanılan metin tabanlı bir veri formatıdır.

Bir kullanıcı kayıt isteği JSON formatında şu şekilde olabilir:

```json
{
  "name": "Elif",
  "surname": "İrem",
  "email": "elif@example.com",
  "password": "12345678"
}
```

Bu JSON verisinde:

- `name` kullanıcının adını,
- `surname` kullanıcının soyadını,
- `email` e-posta adresini,
- `password` ise şifresini temsil eder.

Frontend bu veriyi backend'e gönderir. Spring Boot gelen JSON verisini Java nesnesine dönüştürerek işleme alır.

## Spring Boot Katmanlı Mimari

Spring Boot projelerinde kodun düzenli, anlaşılır ve yönetilebilir olması için katmanlı mimari kullanılır. Katmanlı mimaride her katmanın belirli bir görevi vardır.

Yaygın olarak kullanılan katmanlar şunlardır:

- Controller
- Service
- Repository
- Entity
- DTO

Bu yapı sayesinde bütün işlemler tek bir sınıf içerisinde yazılmaz. Her sınıf yalnızca kendi sorumluluğuna ait işlemleri gerçekleştirir. Bu yaklaşım kodun bakımını, test edilmesini ve geliştirilmesini kolaylaştırır.

## Controller Nedir?

Controller, frontend tarafından gönderilen HTTP isteklerini karşılayan katmandır. Kullanıcıdan gelen istek ilk olarak Controller sınıfına ulaşır.

Controller'ın temel görevleri şunlardır:

- Gelen HTTP isteğini karşılamak
- URL adresini ilgili metoda yönlendirmek
- JSON verisini almak
- Gerekli parametreleri almak
- Service katmanını çağırmak
- İşlem sonucunu HTTP cevabı olarak frontend'e göndermek

Örneğin yeni bir kullanıcı kaydı oluşturulmak istendiğinde frontend `/api/users/register` adresine POST isteği gönderir. Bu istek Controller tarafından karşılanır.

Basit bir Controller örneği şu şekildedir:

```java
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponseDto> register(
            @RequestBody UserRegisterDto userRegisterDto) {

        UserResponseDto response = userService.register(userRegisterDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
```

Bu örnekte:

- `@RestController`, sınıfın REST API Controller'ı olduğunu belirtir.
- `@RequestMapping("/api/users")`, temel URL adresini belirler.
- `@PostMapping("/register")`, POST isteğinin hangi metot tarafından karşılanacağını belirler.
- `@RequestBody`, frontend'den gönderilen JSON verisini Java nesnesine dönüştürür.
- `ResponseEntity`, HTTP durum kodu ve cevap verisini birlikte döndürmeyi sağlar.

Controller içerisinde doğrudan veritabanı işlemi yapılması önerilmez. Controller yalnızca isteği almalı, Service katmanına iletmeli ve sonucu döndürmelidir.

## Service Nedir?

Service, uygulamanın iş kurallarının ve iş mantığının bulunduğu katmandır. Controller'dan gelen bilgiler Service katmanında değerlendirilir.

Service katmanının görevleri şunlardır:

- Gelen verilerin doğruluğunu kontrol etmek
- Alanların boş olup olmadığını denetlemek
- E-posta adresinin daha önce kullanılıp kullanılmadığını kontrol etmek
- Şifre kurallarını kontrol etmek
- Gerekli hesaplamaları yapmak
- Entity nesnesi oluşturmak
- Repository katmanını çağırmak
- Hata oluştuğunda uygun exception fırlatmak
- İşlem sonucunu DTO olarak Controller'a döndürmek

Bir kullanıcı kayıt sisteminde Service şu kontrolleri yapabilir:

- Ad alanı boş mu?
- Soyad alanı boş mu?
- E-posta biçimi doğru mu?
- E-posta daha önce kayıt edilmiş mi?
- Şifre en az sekiz karakter mi?
- Şifre güvenli mi?
- Kullanıcı bilgileri kaydedilmeye uygun mu?

Basit bir Service örneği:

```java
@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserResponseDto register(UserRegisterDto dto) {

        if (userRepository.existsByEmail(dto.getEmail())) {
            throw new RuntimeException("Bu e-posta adresi zaten kayıtlıdır.");
        }

        User user = new User();
        user.setName(dto.getName());
        user.setSurname(dto.getSurname());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());

        User savedUser = userRepository.save(user);

        return new UserResponseDto(
                savedUser.getId(),
                savedUser.getName(),
                savedUser.getSurname(),
                savedUser.getEmail()
        );
    }
}
```

Gerçek bir projede şifre doğrudan kaydedilmemelidir. Şifre, BCrypt gibi güvenli bir algoritmayla hashlenerek veritabanına kaydedilmelidir.

## Repository Nedir?

Repository, uygulama ile veritabanı arasındaki iletişimi sağlayan katmandır. Veri ekleme, silme, güncelleme ve sorgulama işlemleri Repository üzerinden gerçekleştirilir.

Spring Data JPA kullanıldığında Repository sınıflarında birçok temel işlem için SQL sorgusu yazmaya gerek kalmaz.

Örneğin:

```java
public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);
}
```

Bu örnekte:

- `JpaRepository<User, Long>`, User Entity'si üzerinde işlem yapılacağını ve id alanının Long türünde olduğunu belirtir.
- `existsByEmail`, belirtilen e-posta adresinin veritabanında bulunup bulunmadığını kontrol eder.
- `findByEmail`, e-posta adresine göre kullanıcı arar.

JpaRepository hazır olarak şu metotları sağlar:

- `save()` veri ekler veya günceller.
- `findById()` id değerine göre veri getirir.
- `findAll()` bütün kayıtları getirir.
- `deleteById()` id değerine göre veri siler.
- `count()` toplam kayıt sayısını verir.
- `existsById()` belirtilen id değerinin bulunup bulunmadığını kontrol eder.

## Entity Nedir?

Entity, veritabanındaki bir tabloyu temsil eden Java sınıfıdır. Entity sınıfındaki her nesne veritabanındaki bir satıra, sınıfın alanları ise tablodaki sütunlara karşılık gelir.

Bir kullanıcı tablosu için Entity örneği şu şekilde olabilir:

```java
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String surname;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    private LocalDateTime createdAt;
}
```

Bu örnekte:

- `@Entity`, sınıfın bir veritabanı Entity'si olduğunu belirtir.
- `@Table`, veritabanındaki tablo adını belirler.
- `@Id`, alanın birincil anahtar olduğunu belirtir.
- `@GeneratedValue`, id değerinin otomatik üretilmesini sağlar.
- `@Column(nullable = false)`, alanın boş bırakılamayacağını belirtir.
- `unique = true`, e-posta değerinin benzersiz olması gerektiğini ifade eder.

Entity sınıfı doğrudan frontend'e gönderilmemelidir. Bunun yerine DTO kullanılması daha güvenlidir.

## DTO Nedir?

DTO, "Data Transfer Object" ifadesinin kısaltmasıdır. Frontend ile backend arasında veri taşımak için kullanılan sınıflardır.

DTO kullanılmasının temel nedenleri şunlardır:

- Gereksiz bilgilerin frontend'e gönderilmesini engellemek
- Şifre gibi hassas bilgileri gizlemek
- Gelen verileri kontrol etmek
- Entity yapısını dış sistemlerden bağımsız tutmak
- API cevaplarını daha düzenli hale getirmek
- Güvenliği artırmak

Kullanıcı kayıt isteği için DTO örneği:

```java
public class UserRegisterDto {

    private String name;
    private String surname;
    private String email;
    private String password;
}
```

Kullanıcıya gönderilecek cevap için farklı bir DTO kullanılabilir:

```java
public class UserResponseDto {

    private Long id;
    private String name;
    private String surname;
    private String email;
}
```

Cevap DTO'sunda şifre alanı bulunmaz. Böylece kullanıcının şifresi frontend'e gönderilmez.

## Entity ve DTO Arasındaki Fark

Entity, veritabanındaki tabloyu temsil eder. DTO ise katmanlar veya sistemler arasında veri taşımak için kullanılır.

Entity içerisinde:

- Veritabanı alanları
- İlişkiler
- Birincil anahtar
- Veritabanı anotasyonları

bulunabilir.

DTO içerisinde ise yalnızca işlem için gerekli alanlar bulunur.

Örneğin User Entity içinde parola, oluşturulma tarihi, güncellenme tarihi ve kullanıcı rolü olabilir. Fakat kullanıcı profilini frontend'e gönderirken yalnızca ad, soyad ve e-posta bilgilerini içeren bir DTO kullanılabilir.

## JPA Nedir?

JPA, "Java Persistence API" ifadesinin kısaltmasıdır. Java uygulamaları ile ilişkisel veritabanları arasında veri işlemlerinin nasıl yapılacağını tanımlayan bir standarttır.

JPA doğrudan çalışan bir program değildir. Veritabanı işlemlerinin hangi kurallara göre yapılacağını belirleyen bir yapıdır. Bu standardı uygulayan araçlardan biri Hibernate'dir.

JPA sayesinde:

- Java sınıfları veritabanı tablolarıyla eşleştirilebilir.
- Nesneler veritabanına kaydedilebilir.
- Veriler Java nesnesi olarak alınabilir.
- Güncelleme ve silme işlemleri yapılabilir.
- Tablo ilişkileri tanımlanabilir.
- SQL kodu yazma ihtiyacı azaltılabilir.

JPA tarafından kullanılan bazı anotasyonlar şunlardır:

- `@Entity`
- `@Table`
- `@Id`
- `@GeneratedValue`
- `@Column`
- `@OneToOne`
- `@OneToMany`
- `@ManyToOne`
- `@ManyToMany`

## Hibernate Nedir?

Hibernate, Java projelerinde kullanılan bir ORM aracıdır ve JPA standardının en yaygın uygulamalarından biridir.

ORM, "Object Relational Mapping" ifadesinin kısaltmasıdır. Nesne yönelimli programlama ile ilişkisel veritabanı yapısı arasında eşleme yapar.

Java tarafında User nesnesi bulunurken, veritabanında users tablosu bulunur. Hibernate, User nesnesi ile users tablosu arasındaki dönüşümü gerçekleştirir.

Hibernate'in sağladığı avantajlar şunlardır:

- Java nesnelerini veritabanına kaydeder.
- SQL sorgularını otomatik oluşturabilir.
- Veritabanından gelen kayıtları Java nesnesine dönüştürür.
- Tablo ilişkilerini yönetir.
- Tekrarlanan veritabanı kodlarını azaltır.
- Farklı veritabanlarına geçişi kolaylaştırır.

JPA standarttır, Hibernate ise bu standardı uygulayan teknolojidir.

## Maven Nedir?

Maven, Java projelerinde kullanılan bir proje yönetim ve build aracıdır. Projenin bağımlılıklarını yönetir, kaynak kodu derler, testleri çalıştırır ve projeyi paketler.

Bir Spring Boot uygulaması geliştirirken birçok kütüphaneye ihtiyaç duyulur. Bunlar manuel olarak indirilmek yerine Maven aracılığıyla projeye eklenir.

Maven'ın temel görevleri şunlardır:

- Proje bağımlılıklarını indirmek
- Kütüphane sürümlerini yönetmek
- Kaynak kodu derlemek
- Testleri çalıştırmak
- JAR veya WAR dosyası oluşturmak
- Proje yapısını standart hale getirmek
- Pluginleri yönetmek

Sık kullanılan Maven komutları:

```bash
mvn clean
```

Projenin önceki derleme dosyalarını siler.

```bash
mvn compile
```

Kaynak kodu derler.

```bash
mvn test
```

Testleri çalıştırır.

```bash
mvn package
```

Projeyi paketler.

```bash
mvn clean package
```

Önce eski derleme dosyalarını siler, ardından projeyi derleyip paketler.

## pom.xml Ne İşe Yarar?

`pom.xml`, Maven projesinin temel yapılandırma dosyasıdır. POM, "Project Object Model" anlamına gelir.

Bu dosyada şu bilgiler bulunabilir:

- Projenin adı
- Projenin grup kimliği
- Projenin artifact adı
- Proje sürümü
- Java sürümü
- Kullanılan bağımlılıklar
- Maven pluginleri
- Projenin paketleme türü
- Build ayarları

Basit bir bağımlılık örneği:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

Bu bağımlılık Spring Boot ile REST API ve web uygulaması geliştirmek için gerekli kütüphaneleri projeye ekler.

Veritabanı işlemleri için şu bağımlılık kullanılabilir:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

PostgreSQL bağlantısı için:

```xml
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
    <scope>runtime</scope>
</dependency>
```

Maven, `pom.xml` dosyasını okuyarak gerekli kütüphaneleri internet üzerinden indirir ve projeye dahil eder.

## application.properties Nedir?

`application.properties`, Spring Boot uygulamasının yapılandırma ayarlarının tutulduğu dosyadır. Genellikle `src/main/resources` klasörü içerisinde bulunur.

Bu dosyada şu ayarlar yapılabilir:

- Uygulamanın çalışacağı port
- Veritabanı adresi
- Veritabanı kullanıcı adı
- Veritabanı şifresi
- JPA ve Hibernate ayarları
- Log ayarları
- Dosya yükleme sınırları
- Uygulama adı

Örnek:

```properties
server.port=8080

spring.datasource.url=jdbc:postgresql://localhost:5432/aihexa
spring.datasource.username=postgres
spring.datasource.password=1234

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Bu ayarlarda:

- `server.port`, uygulamanın çalışacağı portu belirler.
- `spring.datasource.url`, veritabanının bağlantı adresini belirtir.
- `spring.datasource.username`, veritabanı kullanıcı adını belirtir.
- `spring.datasource.password`, veritabanı şifresini belirtir.
- `spring.jpa.hibernate.ddl-auto=update`, Entity değişikliklerine göre tablo yapısının güncellenmesini sağlar.
- `spring.jpa.show-sql=true`, Hibernate tarafından oluşturulan SQL sorgularını konsolda gösterir.

Gerçek projelerde veritabanı şifrelerinin doğrudan GitHub'a yüklenmesi güvenli değildir. Hassas bilgiler çevre değişkenleri veya güvenli yapılandırma sistemleriyle saklanmalıdır.

## application.yml Nedir?

`application.yml`, `application.properties` dosyasının YAML biçimindeki alternatifidir. İki dosya da aynı amaçla kullanılır.

YAML yapısı girintilere dayalıdır ve iç içe ayarları daha okunabilir şekilde göstermeyi sağlar.

Aynı veritabanı ayarları YAML formatında şu şekilde yazılabilir:

```yaml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/aihexa
    username: postgres
    password: 1234

  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
```

`application.properties` ve `application.yml` arasında işlevsel olarak büyük bir fark yoktur. Tercih, proje ekibinin kullandığı yazım biçimine bağlıdır.

## HTTP Nedir?

HTTP, "Hypertext Transfer Protocol" ifadesinin kısaltmasıdır. Web tarayıcıları, frontend uygulamaları ve backend sunucuları arasındaki iletişimi sağlayan protokoldür.

Bir HTTP isteği genel olarak şu bilgilerden oluşur:

- İstek adresi
- HTTP metodu
- Header bilgileri
- Body verisi
- Kimlik doğrulama bilgileri

Backend ise isteğe karşılık bir HTTP cevabı gönderir. Bu cevapta:

- HTTP durum kodu
- Cevap verisi
- Header bilgileri
- Hata mesajı

bulunabilir.

## GET Metodu

GET, sunucudan veri almak için kullanılır. Veritabanındaki kayıtları listelemek veya belirli bir kaydı görüntülemek için tercih edilir.

Örnek:

```text
GET /api/users
```

Bütün kullanıcıları getirir.

```text
GET /api/users/5
```

ID değeri 5 olan kullanıcıyı getirir.

GET isteği normalde veri üzerinde değişiklik yapmamalıdır. Yalnızca veri okuma işlemi gerçekleştirmelidir.

## POST Metodu

POST, sunucuda yeni bir kayıt oluşturmak için kullanılır.

Örnek:

```text
POST /api/users
```

İstek gövdesi:

```json
{
  "name": "Elif",
  "surname": "İrem",
  "email": "elif@example.com",
  "password": "12345678"
}
```

Bu istek yeni bir kullanıcı oluşturabilir. Başarılı bir kayıt işleminde genellikle `201 Created` durum kodu döndürülür.

## PUT Metodu

PUT, var olan bir kaydın tamamını güncellemek için kullanılır.

Örnek:

```text
PUT /api/users/5
```

İstek gövdesi:

```json
{
  "name": "Elif",
  "surname": "İrem",
  "email": "yeniemail@example.com"
}
```

Bu işlem ID değeri 5 olan kullanıcının bilgilerini günceller.

PUT genellikle kaynağın bütün alanlarının güncellenmesi için kullanılır. Yalnızca belirli alanların güncellenmesi gerektiğinde PATCH metodu tercih edilebilir.

## DELETE Metodu

DELETE, sunucudaki bir kaydı silmek için kullanılır.

Örnek:

```text
DELETE /api/users/5
```

Bu istek ID değeri 5 olan kullanıcıyı siler.

Başarılı silme işleminde `200 OK` veya içerik dönmeyecekse `204 No Content` durum kodu kullanılabilir.

## PATCH Metodu

PATCH, mevcut bir kaydın yalnızca belirli alanlarını güncellemek için kullanılır.

Örneğin yalnızca kullanıcının e-posta adresi değiştirilecekse PATCH isteği gönderilebilir.

```text
PATCH /api/users/5
```

```json
{
  "email": "yeni@example.com"
}
```

## HTTP Status Kodları

HTTP durum kodları, backend tarafından gerçekleştirilen isteğin sonucunu frontend'e bildiren sayısal kodlardır.

### 200 OK

İstek başarıyla gerçekleştirilmiştir.

Örneğin kullanıcı listesi başarılı şekilde getirildiğinde `200 OK` döndürülebilir.

### 201 Created

Yeni bir kayıt başarıyla oluşturulmuştur.

Kullanıcı kayıt işlemi, ürün ekleme işlemi veya yeni bir gönderi oluşturma işlemi başarılı olduğunda kullanılır.

### 204 No Content

İşlem başarılıdır ancak cevap gövdesinde veri bulunmaz.

Silme işlemlerinde sıklıkla kullanılabilir.

### 400 Bad Request

Frontend tarafından gönderilen veri eksik, yanlış veya kurallara uygun değildir.

Örnek nedenler:

- E-posta alanının boş olması
- E-posta biçiminin hatalı olması
- Şifrenin çok kısa olması
- JSON yapısının yanlış olması
- Zorunlu bir alanın gönderilmemesi

### 401 Unauthorized

Kullanıcının kimliği doğrulanmamıştır.

Örneğin kullanıcı giriş yapmadan yalnızca üyelerin erişebileceği bir sayfaya ulaşmaya çalışırsa `401 Unauthorized` döndürülebilir.

### 403 Forbidden

Kullanıcının kimliği doğrulanmıştır fakat ilgili işlemi yapmaya yetkisi yoktur.

Örneğin normal bir kullanıcı yönetici paneline girmeye çalışırsa `403 Forbidden` döndürülebilir.

401 ile 403 arasındaki fark şudur:

- 401: Kullanıcı giriş yapmamıştır veya token geçersizdir.
- 403: Kullanıcı giriş yapmıştır ancak yetkisi yetersizdir.

### 404 Not Found

İstenen kaynak bulunamamıştır.

Örneğin ID değeri 999 olan bir kullanıcı veritabanında bulunmuyorsa `404 Not Found` döndürülebilir.

### 409 Conflict

İstek mevcut veriyle çakışmaktadır.

Örneğin daha önce kayıtlı olan bir e-posta adresiyle yeniden kullanıcı oluşturulmak istenirse `409 Conflict` kullanılabilir.

### 500 Internal Server Error

Backend tarafında beklenmeyen bir hata oluşmuştur.

Örnek nedenler:

- Veritabanı bağlantısının kesilmesi
- Null değer üzerinden işlem yapılması
- Kod içerisinde yakalanmamış bir hata oluşması
- Sunucu yapılandırmasının yanlış olması
- Beklenmeyen bir exception oluşması

## Backend Hata Mesajı Nasıl Okunur?

Backend'de bir hata meydana geldiğinde konsolda veya log dosyasında hata bilgileri görüntülenir. Bu hata mesajları rastgele satırlardan oluşmaz. Hatanın türü, nedeni ve oluştuğu konum hakkında bilgi verir.

Bir backend hata mesajı incelenirken şu sırayla hareket edilebilir:

1. Hata türü incelenir.
2. Hata mesajı okunur.
3. Hatanın hangi sınıfta oluştuğu bulunur.
4. Hatanın gerçekleştiği satır numarası kontrol edilir.
5. Hatanın hangi metottan çağrıldığı incelenir.
6. Hatanın ana nedeni bulunur.
7. Kullanıcı tarafından yazılan proje dosyaları öncelikli olarak kontrol edilir.

Örneğin:

```text
java.lang.NullPointerException:
Cannot invoke "User.getEmail()" because "user" is null
at com.aihexa.service.UserService.register(UserService.java:42)
```

Bu hata şu bilgileri verir:

- Hata türü `NullPointerException`dır.
- `user` nesnesi null durumundadır.
- `getEmail()` metodu null nesne üzerinden çağrılmaya çalışılmıştır.
- Hata `UserService` sınıfında oluşmuştur.
- Hatanın bulunduğu satır 42'dir.

Bu durumda ilk olarak `UserService.java` dosyasının 42. satırı kontrol edilmelidir.

## Stack Trace Nedir?

Stack trace, bir hata oluştuğunda programın hangi sınıf ve metotlardan geçerek hata noktasına ulaştığını gösteren ayrıntılı listedir.

Örnek:

```text
java.lang.RuntimeException: Bu e-posta zaten kayıtlıdır
    at com.aihexa.service.UserService.register(UserService.java:35)
    at com.aihexa.controller.UserController.register(UserController.java:28)
    at java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(...)
```

Bu stack trace şu şekilde yorumlanabilir:

- Ana hata `RuntimeException`dır.
- Hata mesajı "Bu e-posta zaten kayıtlıdır" şeklindedir.
- Hata ilk olarak `UserService` sınıfındaki `register` metodunda oluşmuştur.
- Daha sonra bu hata `UserController` sınıfına aktarılmıştır.
- Alttaki uzun sistem satırları Java ve Spring'in kendi iç çalışma yapısını gösterir.

Stack trace incelenirken proje paket adıyla başlayan satırlar öncelikli olarak incelenmelidir. Çünkü geliştiricinin değiştirebileceği kodlar genellikle bu satırlardadır.

## Exception Nedir?

Exception, uygulama çalışırken meydana gelen hata veya olağan dışı durumu ifade eder.

Yaygın exception türleri şunlardır:

- `NullPointerException`
- `IllegalArgumentException`
- `RuntimeException`
- `DataIntegrityViolationException`
- `MethodArgumentNotValidException`
- `EntityNotFoundException`
- `SQLException`

Örneğin aynı e-posta adresi veritabanında benzersiz olarak tanımlandıysa ve aynı e-posta yeniden eklenmeye çalışılırsa `DataIntegrityViolationException` oluşabilir.

## Kullanıcı Kayıt Sistemi Akışı

Kullanıcı kayıt sistemi, frontend'den başlayan ve veritabanında kayıt oluşturulmasıyla devam eden çok aşamalı bir süreçtir.

Genel akış şu şekildedir:

```text
React Form
→ JSON Veri
→ Spring Boot Controller
→ Service
→ Repository
→ Database
→ Response
→ Frontend Mesajı
```

## 1. Kullanıcı Hangi Bilgileri Girer?

Kullanıcı kayıt formunda genellikle şu bilgileri girer:

- Ad
- Soyad
- E-posta adresi
- Şifre
- Şifre tekrarı
- Telefon numarası
- Kullanıcı adı

Görevin temel örneğinde ad, soyad, e-posta ve şifre bilgilerinin kullanılması yeterlidir.

Frontend tarafında şu alanlar bulunabilir:

```text
Ad: Elif
Soyad: İrem
E-posta: elif@example.com
Şifre: 12345678
```

Kullanıcının girdiği bilgiler kayıt butonuna basılana kadar React uygulamasında tutulur.

## 2. React Bu Bilgileri Nasıl Toplar?

React, form alanlarına girilen değerleri `state` içerisinde saklar. Her input alanında değişiklik olduğunda `onChange` olayı çalışır ve ilgili state değeri güncellenir.

Örnek:

```jsx
const [formData, setFormData] = useState({
  name: "",
  surname: "",
  email: "",
  password: ""
});
```

Input alanında değişiklik olduğunda:

```jsx
const handleChange = (event) => {
  setFormData({
    ...formData,
    [event.target.name]: event.target.value
  });
};
```

Form gönderildiğinde:

```jsx
const handleSubmit = async (event) => {
  event.preventDefault();

  const response = await fetch("http://localhost:8080/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });
};
```

Burada:

- `event.preventDefault()` formun sayfayı yenilemesini engeller.
- `fetch()` backend'e HTTP isteği gönderir.
- `method: "POST"` yeni kayıt oluşturulacağını belirtir.
- `Content-Type: application/json` gönderilen verinin JSON olduğunu bildirir.
- `JSON.stringify(formData)` JavaScript nesnesini JSON metnine dönüştürür.

## 3. Backend'e Hangi Formatla Veri Gönderilir?

React tarafından toplanan bilgiler JSON formatına dönüştürülerek backend'e gönderilir.

Örnek JSON:

```json
{
  "name": "Elif",
  "surname": "İrem",
  "email": "elif@example.com",
  "password": "12345678"
}
```

Bu veri HTTP isteğinin body bölümünde gönderilir.

Backend isteği şu bilgilerle alır:

```text
HTTP Metodu: POST
Adres: /api/users/register
Content-Type: application/json
Body: Kullanıcı bilgileri
```

## 4. Controller Ne Yapar?

Spring Boot Controller gelen POST isteğini karşılar.

Controller şu işlemleri gerçekleştirir:

1. `/api/users/register` adresine gelen isteği yakalar.
2. JSON verisini `UserRegisterDto` nesnesine dönüştürür.
3. Gerekirse temel doğrulama sonuçlarını kontrol eder.
4. DTO'yu Service katmanına gönderir.
5. Service tarafından döndürülen sonucu alır.
6. Uygun HTTP status koduyla frontend'e cevap gönderir.

Örnek:

```java
@PostMapping("/register")
public ResponseEntity<UserResponseDto> register(
        @RequestBody UserRegisterDto dto) {

    UserResponseDto result = userService.register(dto);

    return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(result);
}
```

Kayıt başarılı olursa Controller `201 Created` döndürür.

## 5. Service Neyi Kontrol Eder?

Service kullanıcı kayıt işlemine ait bütün iş kurallarını kontrol eder.

Yapılabilecek kontroller şunlardır:

- Ad alanı boş mu?
- Soyad alanı boş mu?
- E-posta alanı boş mu?
- E-posta formatı doğru mu?
- E-posta daha önce kullanılmış mı?
- Şifre boş mu?
- Şifre yeterli uzunlukta mı?
- Şifre güvenlik kurallarına uygun mu?
- Girilen bilgiler kaydedilmeye uygun mu?

E-posta daha önce kayıtlıysa Service işlemi durdurur ve hata oluşturur.

Örnek:

```java
if (userRepository.existsByEmail(dto.getEmail())) {
    throw new EmailAlreadyExistsException(
            "Bu e-posta adresi daha önce kullanılmıştır."
    );
}
```

Şifre güvenli hale getirilir:

```java
String encodedPassword = passwordEncoder.encode(dto.getPassword());
```

Daha sonra DTO içerisindeki bilgiler Entity nesnesine aktarılır.

```java
User user = new User();
user.setName(dto.getName());
user.setSurname(dto.getSurname());
user.setEmail(dto.getEmail());
user.setPassword(encodedPassword);
user.setCreatedAt(LocalDateTime.now());
```

Son olarak Repository çağrılır:

```java
User savedUser = userRepository.save(user);
```

## 6. Repository Ne İşe Yarar?

Repository, Service tarafından hazırlanan User Entity nesnesini veritabanına kaydeder.

```java
User savedUser = userRepository.save(user);
```

`save()` metodu çalıştığında Hibernate gerekli SQL sorgusunu oluşturur.

Oluşabilecek SQL sorgusu mantıksal olarak şu şekildedir:

```sql
INSERT INTO users
(name, surname, email, password, created_at)
VALUES
('Elif', 'İrem', 'elif@example.com', 'hashlenmis_sifre', CURRENT_TIMESTAMP);
```

Repository ayrıca e-posta kontrolü için de kullanılabilir:

```java
boolean exists = userRepository.existsByEmail(dto.getEmail());
```

Bu işlem veritabanında aynı e-posta adresine sahip bir kullanıcının bulunup bulunmadığını kontrol eder.

## 7. Database'e Hangi Bilgiler Kaydedilir?

Kullanıcı kayıt işlemi başarılı olduğunda veritabanına şu bilgiler kaydedilebilir:

- Kullanıcı id değeri
- Ad
- Soyad
- E-posta adresi
- Hashlenmiş şifre
- Kullanıcı rolü
- Hesap durumu
- Oluşturulma tarihi
- Güncellenme tarihi

Örnek tablo:

| id | name | surname | email | password | role | created_at |
|---|---|---|---|---|---|---|
| 1 | Elif | İrem | elif@example.com | `$2a$10$...` | USER | 2026-07-21 |

Şifre veritabanına açık şekilde yazılmamalıdır. Örneğin `12345678` değeri doğrudan kaydedilmemelidir. Bunun yerine hashlenmiş bir değer kaydedilmelidir.

## 8. Database İşleminden Sonra Ne Olur?

Repository kaydı yaptıktan sonra kaydedilen User nesnesini Service katmanına döndürür.

Service, Entity nesnesini frontend'e doğrudan göndermek yerine bir cevap DTO'suna dönüştürür.

Örnek cevap DTO'su:

```json
{
  "id": 1,
  "name": "Elif",
  "surname": "İrem",
  "email": "elif@example.com"
}
```

Bu cevap içerisinde şifre bulunmaz.

Service sonucu Controller'a gönderir. Controller da frontend'e HTTP cevabı döndürür.

## 9. Backend Başarılı Olursa Frontend Ne Gösterir?

Kayıt başarılı olduğunda backend şu şekilde cevap verebilir:

```json
{
  "success": true,
  "message": "Kullanıcı kaydı başarıyla oluşturuldu.",
  "data": {
    "id": 1,
    "name": "Elif",
    "surname": "İrem",
    "email": "elif@example.com"
  }
}
```

HTTP durum kodu:

```text
201 Created
```

React, cevabın başarılı olduğunu kontrol eder ve kullanıcıya mesaj gösterir.

```jsx
if (response.ok) {
  setMessage("Hesabınız başarıyla oluşturuldu.");
}
```

Frontend tarafında şu mesajlardan biri gösterilebilir:

- Kayıt başarılı.
- Hesabınız başarıyla oluşturuldu.
- Giriş yapmak için yönlendiriliyorsunuz.
- Kullanıcı kaydı tamamlandı.

Başarılı işlem sonrasında kullanıcı giriş sayfasına yönlendirilebilir.

## 10. Backend Hata Verirse Frontend Ne Gösterir?

Backend doğrulama veya sistem hatasıyla karşılaşırsa uygun status kodu ve hata mesajı gönderir.

E-posta daha önce kayıtlıysa:

```json
{
  "success": false,
  "message": "Bu e-posta adresi daha önce kullanılmıştır."
}
```

HTTP durum kodu:

```text
409 Conflict
```

Şifre kısa ise:

```json
{
  "success": false,
  "message": "Şifre en az 8 karakter olmalıdır."
}
```

HTTP durum kodu:

```text
400 Bad Request
```

Sunucu hatası oluşursa:

```json
{
  "success": false,
  "message": "Kayıt işlemi sırasında sunucu hatası oluştu."
}
```

HTTP durum kodu:

```text
500 Internal Server Error
```

React hata mesajını okuyarak kullanıcıya uygun şekilde gösterir.

```jsx
const data = await response.json();

if (!response.ok) {
  setMessage(data.message);
}
```

Frontend kullanıcıya teknik stack trace göstermemelidir. Kullanıcıya anlaşılır bir mesaj verilmelidir. Ayrıntılı teknik hata bilgisi yalnızca backend loglarında tutulmalıdır.

## Kullanıcı Kayıt Akışının Tam Özeti

Kullanıcı React formuna ad, soyad, e-posta ve şifre bilgilerini girer. React bu bilgileri state yapısında tutar. Kullanıcı kayıt butonuna bastığında bilgiler JSON formatına dönüştürülür ve POST isteğiyle Spring Boot backend uygulamasına gönderilir.

Controller gelen isteği karşılar ve JSON verisini DTO nesnesine dönüştürür. DTO, Service katmanına iletilir. Service alanların boş olup olmadığını, e-posta adresinin daha önce kullanılıp kullanılmadığını ve şifrenin kurallara uygunluğunu kontrol eder.

Bilgiler doğruysa Service bir User Entity nesnesi oluşturur. Şifre güvenli biçimde hashlenir. Repository, Entity nesnesini veritabanına kaydeder. Veritabanı yeni kullanıcı kaydını oluşturur ve oluşan id değeriyle birlikte sonucu Repository'ye döndürür.

Repository sonucu Service katmanına iletir. Service Entity nesnesini güvenli bir cevap DTO'suna dönüştürür. Controller bu cevabı `201 Created` durum koduyla frontend'e gönderir.

React cevabı alır. İşlem başarılıysa "Hesabınız başarıyla oluşturuldu" mesajını gösterir. İşlem başarısızsa backend tarafından gönderilen uygun hata mesajını kullanıcıya gösterir.

## AIHEXA Projesinde Spring Boot Nerede Kullanılır?

AIHEXA bünyesinde geliştirilecek eğitim, yazılım, sağlık veya yapay zekâ tabanlı projelerde Spring Boot backend katmanında kullanılabilir.

Spring Boot'un kullanılabileceği alanlar şunlardır:

### Kullanıcı Kayıt Sistemi

Kullanıcıların ad, soyad, e-posta ve şifre bilgileriyle sisteme kayıt olması Spring Boot tarafından yönetilebilir. Kullanıcı bilgileri kontrol edilir ve veritabanına kaydedilir.

### Kullanıcı Giriş Sistemi

Kullanıcı giriş yaptığında e-posta ve şifre backend'e gönderilir. Spring Boot kullanıcı bilgilerini kontrol eder ve doğruysa giriş işlemini gerçekleştirir.

### Yetkilendirme Sistemi

Sistemde öğrenci, eğitmen, yönetici veya müşteri gibi farklı roller bulunabilir. Spring Boot, kullanıcı rollerine göre hangi sayfalara ve işlemlere erişilebileceğini kontrol edebilir.

### Eğitim Yönetim Sistemi

AIHEXA'nın eğitim projelerinde:

- Eğitim oluşturma
- Eğitim listeleme
- Ders ekleme
- Öğrenci kaydı
- Eğitmen yönetimi
- Eğitim içeriği görüntüleme
- Sertifika işlemleri

Spring Boot ile gerçekleştirilebilir.

### Sosyal Medya İçerik Yönetimi

AIHEXA için geliştirilecek içerik yönetim sisteminde:

- İçerik ekleme
- İçerik düzenleme
- İçerik silme
- Yayın tarihi belirleme
- Platform seçme
- İçerikleri listeleme

işlemleri Spring Boot REST API üzerinden yönetilebilir.

### İletişim Formları

Kullanıcıların web sitesindeki iletişim formundan gönderdiği ad, e-posta, telefon ve mesaj bilgileri Spring Boot tarafından alınabilir ve veritabanına kaydedilebilir.

### Randevu ve Başvuru Sistemi

Eğitim başvuruları, danışmanlık talepleri veya görüşme randevuları Spring Boot kullanılarak yönetilebilir.

### Veritabanı İşlemleri

Spring Data JPA ve Hibernate kullanılarak AIHEXA projelerindeki veriler PostgreSQL veya MySQL gibi veritabanlarında saklanabilir.

### React ile Veri İletişimi

React frontend uygulaması ile Spring Boot backend arasında REST API üzerinden veri alışverişi yapılabilir.

Örnek akış:

```text
React Kullanıcı Arayüzü
→ HTTP İsteği
→ Spring Boot REST API
→ Service Katmanı
→ Repository Katmanı
→ PostgreSQL Veritabanı
→ JSON Cevap
→ React Ekranı
```

### Raporlama ve Yönetim Paneli

Yönetim panelinde gösterilen:

- Kullanıcı sayısı
- Eğitim sayısı
- Başvuru sayısı
- Günlük ziyaretçi bilgileri
- Yeni kayıtlar
- İçerik istatistikleri

backend tarafından hesaplanıp frontend'e gönderilebilir.

## Spring Boot Kullanmanın AIHEXA İçin Avantajları

Spring Boot kullanılması şu avantajları sağlayabilir:

- Java tabanlı güçlü bir backend altyapısı oluşturur.
- REST API geliştirmeyi kolaylaştırır.
- React ile kolay şekilde iletişim kurabilir.
- Katmanlı mimari sayesinde kod düzenli olur.
- Veritabanı işlemleri JPA ve Hibernate ile kolaylaşır.
- Güvenlik mekanizmaları eklenebilir.
- Proje büyüdükçe yeni modüller eklemek kolaylaşır.
- Kurumsal projeler için uygun bir yapı sağlar.
- Test yazmayı ve hata yönetimini kolaylaştırır.
- Maven sayesinde bağımlılıklar merkezi olarak yönetilir.
