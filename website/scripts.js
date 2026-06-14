window.APP_DEBUG_MODE = true;
window.appLog = (...args) => {
  if (window.APP_DEBUG_MODE) {
    console.log('[Akkuratistki Debug]:', ...args);
  }
};

document.addEventListener("DOMContentLoaded",()=>{
  initLanguage();
  initEstimateForm();
  const yearEl=document.getElementById("copyright-year");
  if(yearEl)yearEl.textContent=new Date().getFullYear();
  initCityBranding(document.querySelector("select"));
  initFormSubmission();
  initMap()
});/**
 * Internationalization data
 * @constant {Object}
 */
// TRANSLATIONS_START
const TRANSLATIONS = {
  "en": {
    "nav_home": "Home",
    "nav_services": "Services",
    "nav_prices": "Prices",
    "nav_coverage": "Service Area",
    "nav_contact": "Contact",
    "nav_contact_btn": "Get a Quote",
    "hero_badge": "Art of Purity",
    "hero_desc": "Premium VIP cleaning services. We ensure harmony in your most intimate surroundings through meticulous, invisible care.",
    "focus_title": "Our Focus",
    "focus_desc": "We believe that a clean space is a silent sanctuary. Our services are tailored to the needs of those who value excellence over standard utility.",
    "service_1_badge": "01. Residential",
    "service_1_title": "Residential Interior",
    "service_1_desc": "Detail cleaning for private houses, summer houses, flats, and residences where you reside constantly or occasionally.",
    "service_2_badge": "02. Commercial",
    "service_2_title": "Small Commercial",
    "service_2_desc": "Constant hygienic maintenance for offices, shops, hairdressers, and similar spaces with frequent external visitors.",
    "service_3_badge": "03. Upholstery",
    "service_3_title": "Premium Upholstery & Carpet Care",
    "service_3_desc": "Specialized deep extraction cleaning for couches, chairs, armchairs, mattresses, and carpets using professional, eco-friendly products.",
    "prices_title": "Pricing",
    "prices_desc": "We offer transparent, value-based pricing models. Each project is unique, requiring a customized precision plan.",
    "price_1_title": "Comprehensive Cleaning",
    "price_1_desc": "Complete interior cleaning for maintained spaces. Focus on harmony and pristine surfaces.",
    "price_2_title": "General Cleaning",
    "price_2_desc": "Intensive restoration for spaces requiring surgical attention. Includes appliances and hidden corners.",
    "price_3_title": "Post-Renovation Cleaning",
    "price_3_desc": "Recurring maintenance for villas and boutiques. Dedicated professional assigned to your space.",
    "price_4_title": "Upholstery and Carpet Cleaning",
    "price_4_desc": "We use 4.5-atmosphere water vacuums and pro-grade cleaners to tackle tough stains like pet accidents, food spills, ink, and even blood (though some spots can be tricky).",
    "price_4_includes": "2-seat couch and two small pillows.",
    "price_5_title": "Commercial Cleaning",
    "price_5_desc": "Keep your office, salon, or retail space spotless. We provide deep, hygienic cleaning for high-traffic areas where cleanliness matters most.",
    "price_5_includes": "Full sanitization and maintenance tailored to your business needs.",
    "price_popular_tag": "Most Popular",
    "price_base_package": "Base Package (1 room, kitchen, bathroom, hallway)",
    "price_post_renovation": "Post-Renovation Cleaning",
    "price_unit_sqm": "/ sqr.m.",
    "prices_discount_title": "The Detail Discount",
    "prices_discount_desc": "",
    "coverage_title": "Service Area",
    "coverage_desc": "We provide our elite VIP cleaning services in the following regions.",
    "coverage_1_title": "Zone 1 (Łódź Districts)",
    "coverage_1_desc": "Bałuty, Górna, Polesie, Śródmieście, Widzew.",
    "coverage_2_title": "Zone 2 (Agglomeration Towns)",
    "coverage_2_desc": "Zgierz, Pabianice, Konstantynów Łódzki, Aleksandrów Łódzki, Rzgów, Ksawerów, Andrespol, Nowosolna.",
    "coverage_3_title": "Nationwide",
    "coverage_3_desc": "Specialized power washing and boutique projects",
    "onboarding_title": "How it works",
    "map_zone1_title": "Zone 1 (Łódź Districts)",
    "map_zone1_desc": "Bałuty, Górna, Polesie, Śródmieście, Widzew.",
    "map_zone2_title": "Zone 2 (Agglomeration Towns)",
    "map_zone2_desc": "Zgierz, Pabianice, Konstantynów Łódzki, Aleksandrów Łódzki, Rzgów, Ksawerów, Andrespol, Nowosolna.",
    "step_1": "Request",
    "step_2": "Confirmation of Receipt",
    "step_3": "First Consultation",
    "step_4": "Scheduling",
    "step_5": "Confirmation Visit*",
    "step_6": "Actual Service",
    "step_7": "Feedback",
    "feedback_title": "Customer Feedback",
    "feedback_desc": "What our clients say about the Akkuratistki experience.",
    "feedback_1_text": "\"Their attention to detail is truly unparalleled. My home has never felt so balanced and serene. A masterclass in professional cleaning.\"",
    "feedback_1_author": "— Anna K., Warsaw",
    "feedback_2_text": "\"The only service I trust with my boutique gallery in Łódź. Silent, meticulous, and professional beyond expectations.\"",
    "feedback_2_author": "— Marek V., Łódź",
    "feedback_3_text": "\"Absolute peace of mind. They don't just clean; they elevate the entire atmosphere. My private retreat is now truly private.\"",
    "feedback_3_author": "— Elena S., Private Client",
    "contact_title": "Start your journey to absolute calm",
    "contact_desc": "Based on your requirements, we will design a personalized VIP cleaning plan for your space. Precision is our signature.",
    "estimate_form_title": "Get Your Estimate",
    "location_advice_title": "Discovery Consultation",
    "location_advice_desc": "Providing your specific location allows us to optimize logistics and offer exclusive early-access windows in your area.",
    "serviceability_action": "Check My Location",
    "serviceability_helper": "Share your location or enter a postal code below. If the address is covered, you can book immediately and get an estimate.",
    "serviceability_status_default": "Use the location button or enter a postal code to verify serviceability.",
    "serviceability_status_restored": "Your location is inside our service area.",
    "serviceability_status_loading": "Service data is still loading. Try again in a moment.",
    "serviceability_status_ready": "Service area loaded. Use location or postal code to check eligibility.",
    "serviceability_status_checking": "Checking your location…",
    "serviceability_status_geolocation_unavailable": "Geolocation is not available in this browser. Enter your postal code instead.",
    "serviceability_status_location_denied": "Location access was denied. Enter your postal code instead.",
    "serviceability_status_location_match": "Your location is inside our service area.",
    "serviceability_status_location_miss": "Your location is outside our current service area.",
    "serviceability_status_postal_format": "Enter a postal code in the format 90-123.",
    "serviceability_status_postal_match": "Postal code is inside our service area. You can book the service and get an estimate.",
    "serviceability_status_postal_miss": "This postal code is outside our current service area.",
    "form_zip": "Postal Code",
    "form_area": "Area Name",
    "form_street": "Street Name (optional)",
    "form_fullname": "Full Name",
    "form_phone": "Phone Number (optional)",
    "form_floor_placeholder": "Floor Level",
    "form_floor_ground": "Ground floor",
    "form_floor_first": "1st floor",
    "form_floor_second": "2nd floor",
    "estimated_price_label": "Estimated Price:",
    "form_name_label": "Name",
    "form_email_label": "Email",
    "form_city_label": "City",
    "form_sqft_label": "Sqm",
    "form_postal_label": "Postal",
    "form_address_label": "Address (Optional)",
    "form_options_label": "Services Needed",
    "form_option_couch": "Couch",
    "form_option_chairs": "Chairs",
    "form_option_carpets": "Carpets",
    "form_option_windows": "Windows",
    "form_option_kitchen": "Kitchen",
    "form_option_fridge": "Fridge",
    "form_option_oven": "Oven",
    "form_message_label": "Additional Details",
    "form_submit": "Send Inquiry",
    "city_warsaw": "Warsaw",
    "city_lodz": "Lodz",
    "city_other": "Other",
    "success_title": "Thank You",
    "success_desc": "Your inquiry has been received. We will reach out to you shortly to provide VIP standards for your space.",
    "success_back": "Back to home",
    "footer_carriers": "Fill in the form if you wish to work with us as a carrier.",
    "footer_apply": "Apply now"
  },
  "pl": {
    "nav_home": "Start",
    "nav_services": "Usługi",
    "nav_prices": "Cennik",
    "nav_coverage": "Zasięg",
    "nav_contact": "Kontakt",
    "nav_contact_btn": "Wyceń Projekt",
    "hero_badge": "Sztuka Czystości",
    "hero_desc": "Ekskluzywne usługi sprzątania VIP. Zapewniamy harmonię w Twoim otoczeniu poprzez skrupulatną troskę.",
    "focus_title": "Nasza Misja",
    "focus_desc": "Wierzymy, że czysta przestrzeń to cicha świątynia. Nasze usługi są skrojone na miarę potrzeb tych, którzy cenią doskonałość.",
    "service_1_badge": "01. Rezydencje",
    "service_1_title": "Wnętrza Mieszkalne",
    "service_1_desc": "Szczegółowe sprzątanie domów prywatnych, domków letniskowych, mieszkań i rezydencji, w których przebywasz na stałe lub okazjonalnie.",
    "service_2_badge": "02. Komercyjne",
    "service_2_title": "Małe Powierzchnie Komercyjne",
    "service_2_desc": "Stałe utrzymanie higieny dla biur, sklepów, salonów fryzjerskich i innych miejsc odwiedzanych przez wielu klientów.",
    "service_3_badge": "03. Tapicerki",
    "service_3_title": "Profesjonalne Pranie",
    "service_3_desc": "Specjalistyczne pranie na mokro kanap, krzeseł, foteli, materacy i dywanów przy użyciu profesjonalnego, ekologicznego sprzętu i środków.",
    "prices_title": "Cennik",
    "prices_desc": "Oferujemy przejrzyste, oparte na wartości modele cenowe. Każdy projekt jest wyjątkowy.",
    "price_1_title": "Kompleksowe Sprzątanie",
    "price_1_desc": "Kompletne czyszczenie wnętrz dla utrzymanych przestrzeni. Koncentracja na harmonii i nieskazitelnych powierzchniach.",
    "price_2_title": "Sprzątanie Ogólne",
    "price_2_desc": "Intensywna renowacja dla przestrzeni wymagających chirurgicznej uwagi. Obejmuje urządzenia i ukryte zakamarki.",
    "price_3_title": "Sprzątanie po Remoncie",
    "price_3_desc": "Cykliczna konserwacja dla willi i butików. Dedykowany specjalista przypisany do Twojej przestrzeni.",
    "price_4_title": "Pranie tapicerki i dywanów",
    "price_4_desc": "Używamy odkurzaczy wodnych o sile 4,5 atmosfery i profesjonalnej chemii, by usunąć trudne plamy, takie jak mocz zwierząt, jedzenie, markery czy krew (choć przy krwi nie dajemy 100% gwarancji).",
    "price_4_includes": "Kanapa 2-osobowa i dwie małe poduszki.",
    "price_5_title": "Sprzątanie komercyjne",
    "price_5_desc": "Zadbaj o higienę w biurze, salonie lub lokalu. Zapewniamy profesjonalne sprzątanie miejsc o dużym natężeniu ruchu, gdzie czystość to podstawa.",
    "price_5_includes": "Kompleksowa dezynfekcja i utrzymanie czystości dostosowane do Twojego biznesu.",
    "price_popular_tag": "Najpopularniejszy",
    "price_base_package": "Pakiet podstawowy (1 pokój, kuchnia, łazienka, korytarz)",
    "price_post_renovation": "Sprzątanie po remoncie",
    "price_unit_sqm": "/ mkw.",
    "prices_discount_title": "Zniżka za Szczegóły",
    "prices_discount_desc": "",
    "coverage_title": "Obszar Działań",
    "coverage_desc": "Świadczymy nasze elitarne usługi sprzątania VIP w następujących regionach.",
    "coverage_1_title": "Strefa 1 (Dzielnice Łodzi)",
    "coverage_1_desc": "Bałuty, Górna, Polesie, Śródmieście, Widzew.",
    "coverage_2_title": "Strefa 2 (Miejscowości Aglomeracji)",
    "coverage_2_desc": "Zgierz, Pabianice, Konstantynów Łódzki, Aleksandrów Łódzki, Rzgów, Ksawerów, Andrespol, Nowosolna.",
    "coverage_3_title": "Cała Polska",
    "coverage_3_desc": "Specjalistyczne mycie ciśnieniowe i projekty butikowe",
    "onboarding_title": "Jak to działa",
    "map_zone1_title": "Strefa 1 (Dzielnice Łodzi)",
    "map_zone1_desc": "Bałuty, Górna, Polesie, Śródmieście, Widzew.",
    "map_zone2_title": "Strefa 2 (Miejscowości Aglomeracji)",
    "map_zone2_desc": "Zgierz, Pabianice, Konstantynów Łódzki, Aleksandrów Łódzki, Rzgów, Ksawerów, Andrespol, Nowosolna.",
    "step_1": "Zapytanie",
    "step_2": "Potwierdzenie otrzymania",
    "step_3": "Pierwsza konsultacja",
    "step_4": "Harmonogram",
    "step_5": "Wizyta wstępna*",
    "step_6": "Realizacja usługi",
    "step_7": "Opinia",
    "feedback_title": "Opinie Klientów",
    "feedback_desc": "Co nasi klienci mówią o doświadczeniu z Akkuratistki.",
    "feedback_1_text": "\"Ich dbałość o szczegóły jest naprawdę bezprecedensowa. Mój dom nigdy nie czuł się tak zrównoważony i spokojny. Mistrzostwo w profesjonalnym sprzątaniu.\"",
    "feedback_1_author": "— Anna K., Warszawa",
    "feedback_2_text": "\"Jedyna usługa, której ufam w mojej butikowej galerii w Łodzi. Cicha, skrupulatna i profesjonalna ponad oczekiwania.\"",
    "feedback_2_author": "— Marek V., Łódź",
    "feedback_3_text": "\"Absolutny spokój ducha. Oni nie tylko sprzątają; podnoszą atmosferę całego miejsca. Mój dom jest teraz naprawdę prywatny.\"",
    "feedback_3_author": "— Elena S., Klient Prywatny",
    "contact_title": "Zacznij podróż do spokoju",
    "contact_desc": "Na podstawie Twoich wymagań zaprojektujemy spersonalizowany plan sprzątania VIP. Precyzja to nasz podpis.",
    "estimate_form_title": "Otrzymaj wycenę",
    "location_advice_title": "Konsultacja Wstępna",
    "location_advice_desc": "Podanie konkretnej lokalizacji pozwala nam zoptymalizować logistykę i zaoferować ekskluzywne terminy.",
    "serviceability_action": "Sprawdź moją lokalizację",
    "serviceability_helper": "Udostępnij lokalizację albo wpisz kod pocztowy poniżej. Jeśli adres jest w zasięgu, możesz od razu zarezerwować usługę i dostać wycenę.",
    "serviceability_status_default": "Użyj przycisku lokalizacji lub wpisz kod pocztowy, aby sprawdzić dostępność usługi.",
    "serviceability_status_restored": "Twoja lokalizacja mieści się w naszym obszarze.",
    "serviceability_status_loading": "Dane strefy wciąż się ładują. Spróbuj ponownie za chwilę.",
    "serviceability_status_ready": "Strefa została załadowana. Użyj lokalizacji lub kodu pocztowego, aby sprawdzić dostępność.",
    "serviceability_status_checking": "Sprawdzam Twoją lokalizację…",
    "serviceability_status_geolocation_unavailable": "Geolokalizacja nie jest dostępna w tej przeglądarce. Wpisz kod pocztowy.",
    "serviceability_status_location_denied": "Dostęp do lokalizacji został odrzucony. Wpisz kod pocztowy.",
    "serviceability_status_location_match": "Twoja lokalizacja mieści się w naszym obszarze.",
    "serviceability_status_location_miss": "Twoja lokalizacja jest poza naszym aktualnym obszarem usług.",
    "serviceability_status_postal_format": "Wpisz kod pocztowy w formacie 90-123.",
    "serviceability_status_postal_match": "Kod pocztowy mieści się w naszym obszarze. Możesz zamówić usługę i dostać wycenę.",
    "serviceability_status_postal_miss": "Ten kod pocztowy jest poza naszym aktualnym obszarem usług.",
    "form_zip": "Kod Pocztowy",
    "form_area": "Nazwa obszaru",
    "form_street": "Nazwa ulicy (opcjonalnie)",
    "form_fullname": "Imię i nazwisko",
    "form_phone": "Numer telefonu (opcjonalnie)",
    "form_floor_placeholder": "Poziom piętra",
    "form_floor_ground": "Parter",
    "form_floor_first": "1. piętro",
    "form_floor_second": "2. piętro",
    "estimated_price_label": "Szacowana cena:",
    "form_name_label": "Imię",
    "form_email_label": "Email",
    "form_city_label": "Miasto",
    "form_sqft_label": "Mkw",
    "form_postal_label": "Kod",
    "form_address_label": "Adres (Opcjonalnie)",
    "form_options_label": "Potrzebne Usługi",
    "form_option_couch": "Kanapa",
    "form_option_chairs": "Krzesła",
    "form_option_carpets": "Dywany",
    "form_option_windows": "Okna",
    "form_option_kitchen": "Kuchnia",
    "form_option_fridge": "Lodówka",
    "form_option_oven": "Piekarnik",
    "form_message_label": "Dodatkowe Informacje",
    "form_submit": "Wyślij Zapytanie",
    "city_warsaw": "Warszawa",
    "city_lodz": "Łódź",
    "city_other": "Inne",
    "success_title": "Dziękujemy",
    "success_desc": "Twoje zapytanie zostało odebrane. Skontaktujemy się wkrótce, aby zapewnić standard VIP dla Twojej przestrzeni.",
    "success_back": "Powrót",
    "footer_carriers": "Wypełnij formularz, jeśli chcesz pracować z nami jako przewoźnik.",
    "footer_apply": "Aplikuj teraz"
  },
  "ru": {
    "nav_home": "Главная",
    "nav_services": "Услуги",
    "nav_prices": "Цены",
    "nav_coverage": "Зона Обслуживания",
    "nav_contact": "Контакт",
    "nav_contact_btn": "Запросить цену",
    "hero_badge": "Искусство Чистоты",
    "hero_desc": "Элитные услуги VIP-уборки. Мы обеспечиваем гармонию в вашем окружении с безупречной точностью.",
    "focus_title": "Наша Миссия",
    "focus_desc": "Мы верим, что чистое пространство — это тихая обитель. Наши услуги адаптированы под нужды тех, кто ценит совершенство.",
    "service_1_badge": "01. Резиденции",
    "service_1_title": "Жилые Интерьеры",
    "service_1_desc": "Детальная уборка частных домов, дач, квартир и резиденций для вашего постоянного или сезонного проживания.",
    "service_2_badge": "02. Коммерция",
    "service_2_title": "Малый Бизнес",
    "service_2_desc": "Регулярное поддержание гигиены в офисах, магазинах, парикмахерских и других пространствах с высокой посещаемостью.",
    "service_3_badge": "03. Мягкая Мебель",
    "service_3_title": "Профессиональная Химчистка",
    "service_3_desc": "Специализированная влажная чистка диванов, стульев, кресел, матрасов и ковров с использованием профессиональных и экологичных средств.",
    "prices_title": "Цены",
    "prices_desc": "Прозрачные модели ценообразования. Каждый проект уникален.",
    "price_1_title": "Поддерживающая уборка",
    "price_1_desc": "Полная внутренняя уборка для поддерживаемых помещений. Сосредоточение на гармонии и чистоте.",
    "price_2_title": "Генеральная уборка",
    "price_2_desc": "Интенсивная реновация для пространств, требующих хирургического внимания.",
    "price_3_title": "Уборка после ремонта",
    "price_3_desc": "Регулярное обслуживание вилл и бутиков. Выделенный специалист для вашего пространства.",
    "price_4_title": "Чистка мягкой мебели и ковров",
    "price_4_desc": "Мощные пылесосы (4,5 атм) и профессиональная химия справятся с любыми пятнами: от еды и маркеров до мочи животных и даже крови (без гарантии полного удаления).",
    "price_4_includes": "Двухместный диван и две маленькие подушки.",
    "price_5_title": "Коммерческая уборка",
    "price_5_desc": "Безупречная чистота для офисов, салонов и магазинов. Мы обеспечиваем высокий стандарт гигиены в помещениях с большой проходимостью.",
    "price_5_includes": "Профессиональная санитарная обработка и поддержание порядка для вашего бизнеса.",
    "price_popular_tag": "Самый популярный",
    "price_base_package": "Базовый пакет (1 комната, кухня, ванная, коридор)",
    "price_post_renovation": "Уборка после ремонта",
    "price_unit_sqm": "/ кв.м.",
    "prices_discount_title": "Скидка за детали",
    "prices_discount_desc": "",
    "coverage_title": "Зона покрытия",
    "coverage_desc": "Мы предоставляем элитные услуги VIP-уборки в следующих регионах.",
    "coverage_1_title": "Зона 1 (Районы Лодзи)",
    "coverage_1_desc": "Балуты, Гурна, Полесье, Сродместье, Видзев.",
    "coverage_2_title": "Зона 2 (Города агломерации)",
    "coverage_2_desc": "Згеж, Пабянице, Константынув-Лодзинский, Александрув-Лодзинский, Жгув, Ксаверув, Андресполь, Новосольна.",
    "coverage_3_title": "По всей стране",
    "coverage_3_desc": "Специализированная мойка и бутик-проекты",
    "onboarding_title": "Как это работает",
    "map_zone1_title": "Зона 1 (Районы Лодзи)",
    "map_zone1_desc": "Балуты, Гурна, Полесье, Сродместье, Видзев.",
    "map_zone2_title": "Зона 2 (Города агломерации)",
    "map_zone2_desc": "Згеж, Пабянице, Константынув-Лодзинский, Александрув-Лодзинский, Жгув, Ксаверув, Андресполь, Новосольна.",
    "step_1": "Запрос",
    "step_2": "Подтверждение получения",
    "step_3": "Первая консультация",
    "step_4": "Согласование графика",
    "step_5": "Предварительный визит*",
    "step_6": "Оказание услуги",
    "step_7": "Обратная связь",
    "feedback_title": "Отзывы",
    "feedback_desc": "Что говорят наши клиенты об опыте работы с Akkuratistki.",
    "feedback_1_text": "\"Их внимание к деталям поистине беспрецедентно. Мой дом никогда не казался таким гармоничным и спокойным. Мастер-класс по профессиональной уборке.\"",
    "feedback_1_author": "— Анна К., Варшава",
    "feedback_2_text": "\"Единственный сервис, которому я доверяю свою бутик-галерею в Лодзи. Тихая, тщательная и профессиональная работа.\"",
    "feedback_2_author": "— Marek V., Łódź",
    "feedback_3_text": "\"Абсолютное спокойствие. Они не просто убирают; они меняют всю атмосферу. Мой частный дом теперь действительно стал уютным.\"",
    "feedback_3_author": "— Elena S., Частный клиент",
    "contact_title": "Путь к спокойствию",
    "contact_desc": "Мы разработаем индивидуальный план VIP-уборки для вашего пространства. Аккуратность — наша подпись.",
    "estimate_form_title": "Получить оценку",
    "location_advice_title": "Консультация",
    "location_advice_desc": "Локация помогает нам оптимизировать логистику и предложить лучшие окна доступа.",
    "serviceability_action": "Проверить мою локацию",
    "serviceability_helper": "Разрешите доступ к геолокации или введите почтовый индекс ниже. Если адрес обслуживается, вы сможете сразу забронировать услугу и получить оценку.",
    "serviceability_status_default": "Используйте кнопку геолокации или введите почтовый индекс, чтобы проверить доступность.",
    "serviceability_status_restored": "Вы в зоне обслуживания.",
    "serviceability_status_loading": "Данные зоны ещё загружаются...",
    "serviceability_status_ready": "Используйте геолокацию или почтовый индекс для проверки.",
    "serviceability_status_checking": "Проверяю вашу локацию…",
    "serviceability_status_geolocation_unavailable": "Геолокация недоступна в этом браузере. Введите почтовый индекс.",
    "serviceability_status_location_denied": "Доступ к локации отклонён. Введите почтовый индекс.",
    "serviceability_status_location_match": "Вы в зоне обслуживания.",
    "serviceability_status_location_miss": "Ваша локация находится вне нашей текущей зоны обслуживания.",
    "serviceability_status_postal_format": "Введите почтовый индекс в формате 90-123.",
    "serviceability_status_postal_match": "Почтовый индекс находится в нашей зоне обслуживания. Вы можете забронировать услугу и получить оценку.",
    "serviceability_status_postal_miss": "Этот почтовый индекс находится вне нашей текущей зоны обслуживания.",
    "form_zip": "Индекс",
    "form_area": "Название района",
    "form_street": "Название улицы (необязательно)",
    "form_fullname": "Полное имя",
    "form_phone": "Номер телефона (необязательно)",
    "form_floor_placeholder": "Этаж",
    "form_floor_ground": "Первый этаж",
    "form_floor_first": "2-й этаж",
    "form_floor_second": "3-й этаж",
    "estimated_price_label": "Оценочная цена:",
    "form_name_label": "Имя",
    "form_email_label": "Email",
    "form_city_label": "Город",
    "form_sqft_label": "Кв.м",
    "form_postal_label": "Индекс",
    "form_address_label": "Адрес (Опционально)",
    "form_options_label": "Услуги",
    "form_option_couch": "Диван",
    "form_option_chairs": "Стулья",
    "form_option_carpets": "Ковры",
    "form_option_windows": "Okna",
    "form_option_kitchen": "Кухня",
    "form_option_fridge": "Холодильник",
    "form_option_oven": "Духовка",
    "form_message_label": "Детали",
    "form_submit": "Отправить запрос",
    "city_warsaw": "Варшава",
    "city_lodz": "Лодзь",
    "city_other": "Другое",
    "success_title": "Спасибо",
    "success_desc": "Запрос получен. Мы свяжемся в ближайшее время, чтобы обеспечить чистоту уровня VIP.",
    "success_back": "Назад",
    "footer_carriers": "Заполните форму, если хотите работать перевозчиком.",
    "footer_apply": "Подать заявку"
  }
};
// TRANSLATIONS_END
const QUOTES = {
  pl: ["Tam, gdzie przytulność rodzi się z troski.", "Łatwy, uczciwy i troskliwy.", "Czystość zaczyna się od troski.", "Gdzie czystość staje się nawykiem.", "Przytulność zaczyna się od czystości."],
  ru: ["Там, где уют рождается из заботы.", "Легко, честно и с заботой.", "Чистота начинается с заботы.", "Где чистота становится привычкой.", "Уют начинается с чистоты."],
  en: ["Where coziness is born from care.", "Easy, honest, and caring.", "Purity begins with care.", "Where cleanliness becomes a habit.", "Coziness starts with purity."]
};
let currentLang = "pl";
function translate(key) {
  return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS.en?.[key] || key;
}
window.setLanguage = function(lang) {
  console.log("setLanguage called with:", lang);
  if (!TRANSLATIONS[lang]) {
    return;
  }
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (TRANSLATIONS[lang][key]) {
      el.placeholder = TRANSLATIONS[lang][key];
    }
  });
  updateQuote();
  if (typeof window.refreshServiceabilityModule === "function") {
    window.refreshServiceabilityModule();
  }
  localStorage.setItem("preferred_lang", lang);
}
function updateQuote() {
  const quoteEl = document.getElementById("hero-quote");
  if (quoteEl && QUOTES[currentLang]) {
    const langQuotes = QUOTES[currentLang];
    const words = langQuotes[Math.floor(Math.random() * langQuotes.length)].split(" ");
    const lastThree = words.slice(-3).join(" ");
    const remaining = words.slice(0, -3).join(" <br/> ");
    quoteEl.innerHTML = `${remaining} <br/> <span class="font-script text-primary">${lastThree}</span>`;
  }
}
function initLanguage() {
  const saved = localStorage.getItem("preferred_lang");
  if (saved && TRANSLATIONS[saved]) {
    setLanguage(saved);
  } else {
    const browserLang = navigator.language || navigator.userLanguage;
    const shortLang = (browserLang || "pl").split("-")[0];
    setLanguage(TRANSLATIONS[shortLang] ? shortLang : "pl");
  }
}
const SERVICEABILITY_STORAGE_KEY = "serviceability_verified";
const SERVICEABILITY_SOURCE_KEY = "serviceability_source";
const SERVICEABILITY_MODE_LOCATION = "location";
const SERVICEABILITY_MODE_POSTAL = "postal";
const serviceabilityState = {
  verified: false,
  source: null,
  statusKey: "serviceability_status_default",
  statusVariant: "info",
};
function renderServiceabilityStatus() {
  const statusEl = document.getElementById("serviceability-status");
  if (!statusEl) return;
  statusEl.textContent = translate(serviceabilityState.statusKey);
  if (serviceabilityState.statusVariant === "success") {
    statusEl.className = "text-4xl font-bold text-emerald-600 rounded-xl px-4 py-3 animate-pulse";
  } else if (serviceabilityState.statusVariant === "error") {
    statusEl.className = "text-2xl font-bold text-rose-600 rounded-xl px-4 py-3";
  } else {
    statusEl.className = "text-2xl font-bold text-slate-800 rounded-xl px-4 py-3";
  }
}
function setServiceabilityStatus(statusKey, statusVariant = "info") {
  serviceabilityState.statusKey = statusKey;
  serviceabilityState.statusVariant = statusVariant;
  renderServiceabilityStatus();
}
function setEstimateFormVisible(visible) {
  // Always visible now
}
function setEstimateSubmissionEnabled(enabled) {
  // Always enabled now
}
function persistServiceability(source, verified) {
  localStorage.setItem(SERVICEABILITY_STORAGE_KEY, verified ? "true" : "false");
  localStorage.setItem(SERVICEABILITY_SOURCE_KEY, source || "");
}
function markServiceable(source, statusKey) {
  serviceabilityState.verified = true;
  serviceabilityState.source = source;
  persistServiceability(source, true);
  setEstimateFormVisible(true);
  setEstimateSubmissionEnabled(true);
  setServiceabilityStatus(statusKey, "success");
}
function markNotServiceable(statusKey) {
  serviceabilityState.verified = false;
  serviceabilityState.source = null;
  persistServiceability("", false);
  setEstimateFormVisible(false);
  setEstimateSubmissionEnabled(false);
  setServiceabilityStatus(statusKey, "error");
}
function restoreServiceabilityFromStorage() {
  const savedVerified = localStorage.getItem(SERVICEABILITY_STORAGE_KEY) === "true";
  const savedSource = localStorage.getItem(SERVICEABILITY_SOURCE_KEY);
  if (!savedVerified) {
    setEstimateFormVisible(false);
    setEstimateSubmissionEnabled(false);
    setServiceabilityStatus("serviceability_status_default", "info");
    return;
  }
  serviceabilityState.verified = true;
  serviceabilityState.source = savedSource || null;
  setEstimateFormVisible(true);
  setEstimateSubmissionEnabled(true);
  setServiceabilityStatus("serviceability_status_restored", "success");
}
window.refreshServiceabilityModule = function() {
  renderServiceabilityStatus();
};
function validatePostalCodeFormat(value) {
  return /^\d{2}-\d{3}$/.test(String(value || "").trim());
}
function initPostalValidation(input, check) {
  input?.addEventListener("input", (e) => {
    const val = e.target.value;
    const isPolish = /^\d{2}-\d{3}$/.test(val);
    if (isPolish) {
      const prefix = val.substring(0, 2);
      const activePrefixes = ["90", "91", "92", "93", "94", "00", "01", "02", "03", "04", "05"];
      const isValid = activePrefixes.includes(prefix);
      check.style.opacity = "1";
      check.textContent = isValid ? "check_circle" : "error";
      check.className = "absolute right-0 top-1/2 -translate-y-1/2 material-symbols-outlined transition-luxury " + (isValid ? "text-primary" : "text-error");
    } else {
      check.style.opacity = "0";
    }
  });
}
function initCityBranding(select) {
  select?.addEventListener("change", (e) => {
    document.querySelectorAll('img[src*="assets/logo_"]').forEach(logo => {
      logo.src = e.target.value === "lodz" ? "assets/logo_purple_lodz.svg" : "assets/logo_purple.svg";
    });
  });
}
function initFormSubmission() {
  const form = document.getElementById("contact-form");
  const submitButton = document.getElementById("estimate-submit");
  form?.addEventListener("submit", (e) => {
    if (submitButton?.disabled) {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    form.classList.add("hidden");
    document.getElementById("success-msg").classList.remove("hidden");
  });
}
function initMap() {
  const mapContainer = document.getElementById("map");
  if (!mapContainer) return;
  const map = L.map("map").setView([51.7693, 19.4705], 11);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);
  const gasWebAppUrl = 'https://script.google.com/macros/s/AKfycbxDMuovrEITeoHZh3P37KwB3_2Xc03TwXqTSJLuSo5dj31WGIwKSovhP30kquCyXnyq2Q/exec';
  const callbackName = `gasGeoJsonCallback_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  const postalInput = document.getElementById("postal-input");
  const locationButton = document.getElementById("check-location-btn");
  const serviceState = {
    eligible: false,
    postalCodes: new Set(),
    outlineRing: null,
  };
  restoreServiceabilityFromStorage();
  function tryAutoLocationRestore() {
    if (localStorage.getItem(SERVICEABILITY_STORAGE_KEY) === "true" && localStorage.getItem(SERVICEABILITY_SOURCE_KEY) === SERVICEABILITY_MODE_LOCATION) {
      if (navigator.permissions?.query) {
        navigator.permissions.query({ name: "geolocation" }).then((result) => {
          if (result.state === "granted") {
            handleGeolocationCheck();
          }
        }).catch(() => {});
      }
    }
  }
  postalInput?.addEventListener("input", evaluatePostalCode);
  locationButton?.addEventListener("click", handleGeolocationCheck);
  const coverageLayers = {
    outline: L.geoJSON(null, {
      style: {
        color: "#6b5cff",
        weight: 3,
        fillColor: "#6b5cff",
        fillOpacity: 0.05,
      },
    }),
    zones: L.geoJSON(null, {
      style: {
        color: "#7c3aed",
        weight: 2,
        fillColor: "#a78bfa",
        fillOpacity: 0.12,
      },
      onEachFeature: (feature, layer) => {
        const zoneName = feature?.properties?.zone_name || feature?.properties?.name || "Zone";
        layer.bindTooltip(zoneName, { sticky: true });
      },
    }),
  };
  let activeCoverageLayer = null;

  function normalizePostalCode(value) {
    return String(value || "").trim().toUpperCase().replace(/\s+/g, "");
  }

  function pointInPolygon(point, polygonRing) {
    if (!polygonRing || polygonRing.length < 3) return false;
    const x = point[0];
    const y = point[1];
    let inside = false;

    for (let current = 0, previous = polygonRing.length - 1; current < polygonRing.length; previous = current, current += 1) {
      const xi = polygonRing[current][0];
      const yi = polygonRing[current][1];
      const xj = polygonRing[previous][0];
      const yj = polygonRing[previous][1];
      const intersects = ((yi > y) !== (yj > y)) &&
        (x < ((xj - xi) * (y - yi)) / ((yj - yi) || 1e-12) + xi);
      if (intersects) {
        inside = !inside;
      }
    }

    return inside;
  }

  function extractOutlineRing() {
    const outlineLayer = coverageLayers.outline.getLayers()[0];
    const geometry = outlineLayer?.feature?.geometry;
    if (!geometry || !geometry.coordinates) return null;
    if (geometry.type === "Polygon") return geometry.coordinates[0] || null;
    if (geometry.type === "MultiPolygon") return geometry.coordinates[0]?.[0] || null;
    return null;
  }

  function evaluatePostalCode() {
    if (!postalInput) return;
    const normalizedCode = normalizePostalCode(postalInput.value);
    if (!normalizedCode) {
      if (serviceabilityState.verified) {
        setServiceabilityStatus("serviceability_status_restored", "success");
      } else {
        setEstimateFormVisible(false);
        setEstimateSubmissionEnabled(false);
        setServiceabilityStatus("serviceability_status_default", "info");
      }
      return;
    }

    if (!serviceState.postalCodes.size) {
      if (serviceabilityState.verified) {
        setServiceabilityStatus("serviceability_status_loading", "info");
      } else {
        setEstimateFormVisible(false);
        setEstimateSubmissionEnabled(false);
        setServiceabilityStatus("serviceability_status_loading", "info");
      }
      return;
    }

    const isKnownCode = serviceState.postalCodes.has(normalizedCode);
    if (isKnownCode) {
      serviceState.eligible = true;
      markServiceable(SERVICEABILITY_MODE_POSTAL, "serviceability_status_postal_match");
      return;
    }

    serviceState.eligible = false;
    if (serviceabilityState.verified) {
      setServiceabilityStatus("serviceability_status_postal_miss", "error");
      return;
    }
    markNotServiceable("serviceability_status_postal_miss");
  }

  function evaluateLocation(point) {
    if (!serviceState.outlineRing) {
      if (serviceabilityState.verified) {
        setServiceabilityStatus("serviceability_status_loading", "info");
      } else {
        setEstimateFormVisible(false);
        setEstimateSubmissionEnabled(false);
        setServiceabilityStatus("serviceability_status_loading", "info");
      }
      return;
    }

    const isInside = pointInPolygon(point, serviceState.outlineRing);
    if (isInside) {
      serviceState.eligible = true;
      markServiceable(SERVICEABILITY_MODE_LOCATION, "serviceability_status_location_match");
      return;
    }

    serviceState.eligible = false;
    if (serviceabilityState.verified) {
      setServiceabilityStatus("serviceability_status_location_miss", "error");
      return;
    }
    markNotServiceable("serviceability_status_location_miss");
  }

  function handleGeolocationCheck() {
    if (!navigator.geolocation) {
      if (serviceabilityState.verified) {
        setServiceabilityStatus("serviceability_status_geolocation_unavailable", "error");
      } else {
        markNotServiceable("serviceability_status_geolocation_unavailable");
      }
      return;
    }

    setServiceabilityStatus("serviceability_status_checking", "info");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        evaluateLocation([position.coords.longitude, position.coords.latitude]);
      },
      () => {
        if (serviceabilityState.verified) {
          setServiceabilityStatus("serviceability_status_location_denied", "error");
        } else {
          markNotServiceable("serviceability_status_location_denied");
        }
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 300000,
      }
    );
  }

  if (postalInput) {
    postalInput.addEventListener("input", evaluatePostalCode);
  }

  if (locationButton) {
    locationButton.addEventListener("click", handleGeolocationCheck);
  }

  function setActiveCoverageLayer(layerName) {
    const nextLayer = coverageLayers[layerName];
    if (!nextLayer || activeCoverageLayer === nextLayer) return;

    if (activeCoverageLayer && map.hasLayer(activeCoverageLayer)) {
      map.removeLayer(activeCoverageLayer);
    }

    activeCoverageLayer = nextLayer;
    activeCoverageLayer.addTo(map);
  }

  function updateCoverageLayerVisibility() {
    const zoom = map.getZoom();
    if (zoom < 12) {
      setActiveCoverageLayer("outline");
      return;
    }
    if (zoom < 15) {
      setActiveCoverageLayer("zones");
      return;
    }
    setActiveCoverageLayer("zones");
  }

  function hydrateCoverageLayers(payload) {
    const layers = payload?.layers || {};
    const outlineData = layers.outline || payload.outline || null;
    const zoneData = layers.zones || payload.zones || null;
    const postalCodes = Array.isArray(payload?.postalCodes) ? payload.postalCodes : [];

    if (outlineData) coverageLayers.outline.addData(outlineData);
    if (zoneData) coverageLayers.zones.addData(zoneData);
    serviceState.postalCodes = new Set(postalCodes.map(normalizePostalCode).filter(Boolean));
    serviceState.outlineRing = extractOutlineRing();

    updateCoverageLayerVisibility();

    const boundsSource = coverageLayers.zones.getLayers().length
      ? coverageLayers.zones
      : coverageLayers.outline;

    if (boundsSource.getLayers().length) {
      map.fitBounds(boundsSource.getBounds(), { padding: [20, 20] });
    }

    if (!serviceState.postalCodes.size) {
      setEstimateFormVisible(false);
      setEstimateSubmissionEnabled(false);
      setServiceabilityStatus("serviceability_status_loading", "info");
    } else if (!serviceabilityState.verified) {
      setServiceabilityStatus("serviceability_status_ready", "info");
    }

    tryAutoLocationRestore();
  }

  map.on("zoomend", updateCoverageLayerVisibility);

  window[callbackName] = (geoJsonData) => {
    try {
      hydrateCoverageLayers(geoJsonData);
    } finally {
      delete window[callbackName];
      script.remove();
    }
  };

  const script = document.createElement('script');
  script.src = `${gasWebAppUrl}?callback=${encodeURIComponent(callbackName)}`;
  script.onerror = () => {
    delete window[callbackName];
    script.remove();
    console.error('Error fetching GeoJSON data: JSONP request failed');
  };
  document.body.appendChild(script);
}
