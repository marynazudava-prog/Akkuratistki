/**
 * PROJECT REQUIREMENT: All errors and user messages MUST use console.log/console.error
 * DO NOT use alert() or throw new Error() - use console output for debugging only
 */
window.APP_DEBUG_MODE = true;
window.appLog = (...args) => {
  if (window.APP_DEBUG_MODE) {
    console.log('[DEBUG]', ...args);
  }
};

/**
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
    "serviceability_status_postal_match": "You are inside our service area.",
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
    "footer_apply": "Apply now",
    "form_main_service": "Main Service",
    "service_comprehensive": "Comprehensive Cleaning",
    "service_general": "General Cleaning",
    "service_specialized": "Specialized Cleaning",
    "form_rooms": "Rooms & Areas",
    "form_add_room": "Add Room",
    "form_furniture": "Soft Furniture & Carpets",
    "form_add_furniture": "Add Furniture",
    "form_add_mattress": "Add Mattress",
    "form_add_carpet": "Add Carpet",
    "form_additional": "Additional Services",
    "form_delivery": "Transportation",
    "form_total": "Total",
    "form_review": "Book Service",
    "form_confirm": "Confirm Booking",
    "form_contact_details": "Contact Details",
    "form_rooms": "Rooms",
    "form_furniture": "Furniture",
    "form_carpets_mattresses": "Carpets & Mattresses",
    "form_windows": "Windows",
    "form_additional": "Services",
    "carpet_width": "Width (m)",
    "carpet_length": "Length (m)",
    "carpet_dirtiness": "Dirtiness",
    "form_no_carpets": "No carpets added yet",
    "form_select_room_type": "Select Room Type",
    "form_add_room": "Add Room",
    "form_room_equipment": "Room Equipment",
    "form_service_type": "Service Type",
    "form_soft_furniture": "Soft Furniture",
    "form_carpets": "Carpets",
    "form_mattresses": "Mattresses",
    "form_add_carpet": "Add Carpet",
    "form_add_mattress": "Add Mattress",
    "form_windows_count": "Number of Windows",
    "form_additional_services": "Additional Services",
    "form_zip": "Postal Code",
    "form_review": "Book Service",
    "form_confirm": "Confirm Booking",
    "form_total": "Total",
    "form_approximate_cost_note": "* The displayed cost is approximate",
    "form_address_placeholder": "Address",
    "form_name_placeholder": "Full Name",
    "form_phone_placeholder": "Phone",
    "form_email_placeholder": "Email",
    "form_hide_contact": "Hide Contact Form",
    "success_title": "Thank You",
    "success_desc": "Your inquiry has been received. We will reach out to you shortly to provide VIP standards for your space.",
    "form_offline_message": "The form is currently offline. Please give us a call at +48452414234"
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
    "serviceability_status_postal_match": "Kod pocztowy mieści się w naszym obszarze.",
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
    "footer_apply": "Aplikuj teraz",
    "form_main_service": "Główna Usługa",
    "service_comprehensive": "Kompleksowe Sprzątanie",
    "service_general": "Sprzątanie Ogólne",
    "service_specialized": "Sprzątanie Specjalistyczne",
    "form_rooms": "Pomieszczenia i Obszary",
    "form_add_room": "Dodaj Pomieszczenie",
    "form_furniture": "Miękkie Meble i Dywany",
    "form_add_furniture": "Dodaj Mebel",
    "form_add_mattress": "Dodaj Materac",
    "form_add_carpet": "Dodaj Dywan",
    "form_additional": "Dodatkowe Usługi",
    "form_delivery": "Transport",
    "form_total": "Razem",
    "form_review": "Zamów Usługę",
    "form_confirm": "Potwierdź rezerwację",
    "form_contact_details": "Dane Kontaktowe",
    "form_rooms": "Pomieszczenia",
    "form_furniture": "Meble",
    "form_carpets_mattresses": "Dywany i Materace",
    "form_windows": "Okna",
    "form_additional": "Usługi",
    "form_select_room_type": "Wybierz typ pomieszczenia",
    "carpet_width": "Szerokość (m)",
    "carpet_length": "Długość (m)",
    "carpet_dirtiness": "Zabrudzenie",
    "form_no_carpets": "Nie dodano jeszcze żadnych dywanów",
    "form_add_room": "Dodaj pomieszczenie",
    "form_room_equipment": "Wyposażenie pomieszczenia",
    "form_service_type": "Typ usługi",
    "form_soft_furniture": "Miękkie meble",
    "form_carpets": "Dywany",
    "form_mattresses": "Materace",
    "form_add_carpet": "Dodaj dywan",
    "form_add_mattress": "Dodaj materac",
    "form_windows_count": "Liczba okien",
    "form_additional_services": "Usługi dodatkowe",
    "form_zip": "Kod pocztowy",
    "form_review": "Zamów usługę",
    "form_confirm": "Potwierdź rezerwację",
    "form_total": "Razem",
    "form_approximate_cost_note": "* Wyświetlony koszt jest przybliżony",
    "form_address_placeholder": "Adres",
    "form_name_placeholder": "Imię i nazwisko",
    "form_phone_placeholder": "Numer telefonu",
    "form_email_placeholder": "Email",
    "form_hide_contact": "Ukryj formularz kontaktowy",
    "success_title": "Dziękujemy",
    "success_desc": "Twoje zapytanie zostało odebrane. Skontaktujemy się wkrótce, aby zapewnić standard VIP dla Twojej przestrzeni.",
    "form_offline_message": "Formularz jest obecnie niedostępny. Prosimy o kontakt telefoniczny pod numerem +48452414234"
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
    "serviceability_status_postal_match": "Вы в зоне обслуживания.",
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
    "footer_apply": "Подать заявку",
    "form_main_service": "Основная услуга",
    "service_comprehensive": "Комплексная уборка",
    "service_general": "Генеральная уборка",
    "service_specialized": "Специализированная уборка",
    "form_rooms": "Помещения и зоны",
    "form_add_room": "Добавить помещение",
    "form_furniture": "Мягкая мебель и ковры",
    "form_add_furniture": "Добавить мебель",
    "form_add_mattress": "Добавить матрас",
    "form_add_carpet": "Добавить ковер",
    "form_additional": "Дополнительные услуги",
    "form_delivery": "Транспорт",
    "form_total": "Итого",
    "form_review": "Заказать услугу",
    "form_confirm": "Подтвердить бронирование",
    "form_contact_details": "Контактные данные",
    "form_rooms": "Помещения",
    "form_furniture": "Мебель",
    "form_carpets_mattresses": "Ковры и матрасы",
    "form_windows": "Окна",
    "form_additional": "Услуги",
    "form_select_room_type": "Выберите тип помещения",
    "carpet_width": "Ширина (м)",
    "carpet_length": "Длина (м)",
    "carpet_dirtiness": "Загрязненность",
    "form_no_carpets": "Еще не добавлено ни одного ковра",
    "form_add_room": "Добавить помещение",
    "form_room_equipment": "Оборудование помещения",
    "form_service_type": "Тип услуги",
    "form_soft_furniture": "Мягкая мебель",
    "form_carpets": "Ковры",
    "form_mattresses": "Матрасы",
    "form_add_carpet": "Добавить ковер",
    "form_add_mattress": "Добавить матрас",
    "form_windows_count": "Количество окон",
    "form_additional_services": "Дополнительные услуги",
    "form_zip": "Индекс",
    "form_review": "Заказать услугу",
    "form_confirm": "Подтвердить бронирование",
    "form_total": "Итого",
    "form_approximate_cost_note": "* Отображаемая стоимость приблизительная",
    "form_address_placeholder": "Адрес",
    "form_name_placeholder": "Полное имя",
    "form_phone_placeholder": "Номер телефона",
    "form_email_placeholder": "Email",
    "form_hide_contact": "Скрыть форму контакта",
    "success_title": "Спасибо",
    "success_desc": "Запрос получен. Мы свяжемся в ближайшее время, чтобы обеспечить чистоту уровня VIP.",
    "form_offline_message": "Форма временно недоступна. Пожалуйста, позвоните нам по телефону +48452414234"
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
function updateTranslationsForElements(lang) {
  appLog('updateTranslationsForElements called with lang:', lang, 'Available languages:', Object.keys(TRANSLATIONS));
  const elements = document.querySelectorAll("[data-i18n]");
  appLog('Found', elements.length, 'elements with data-i18n attributes');
  
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = TRANSLATIONS[lang] && TRANSLATIONS[lang][key];
    if (translation) {
      el.textContent = translation;
    } else {
      appLog('No translation found for key:', key, 'lang:', lang);
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.placeholder = TRANSLATIONS[lang][key];
    }
  });
}

window.setLanguage = setLanguage = function(lang) {
  appLog("setLanguage called with:", lang);
  if (!TRANSLATIONS[lang]) {
    return;
  }
  currentLang = lang;
  document.documentElement.lang = lang;
  appLog('Language changed to:', lang, 'Updating translations for all elements');
  updateTranslationsForElements(lang);
  updateQuote();
  if (typeof window.refreshServiceabilityModule === "function") {
    window.refreshServiceabilityModule();
  }
  
  // Update new form elements
  updateNewFormTranslations();
  
  localStorage.setItem("preferred_lang", lang);
}

function updateNewFormTranslations() {
  // Update room type options
  const roomTypeSelect = document.getElementById('room-type-select');
  if (roomTypeSelect) {
    Array.from(roomTypeSelect.options).forEach(option => {
      if (option.value) {
        const roomType = window.ROOM_TYPES.find(r => r.value === option.value);
        if (roomType) {
          option.textContent = getTranslatedText(roomType.translations, roomType.label);
        }
      }
    });
  }
  
  // Update furniture items
  const furnitureContainer = document.getElementById('furniture-list');
  if (furnitureContainer) {
    furnitureContainer.querySelectorAll('label[for^="furniture-"]').forEach(label => {
      const forId = label.getAttribute('for');
      const itemValue = forId.replace('furniture-', '');
      const item = window.window.FURNITURE_ITEMS.find(i => i.value === itemValue);
      if (item) {
        const translatedLabel = getTranslatedText(item.translations, item.label);
        const span = label.querySelector('span.font-medium');
        if (span) span.textContent = translatedLabel;
      }
    });
  }
  
  // Update additional services
  const servicesContainer = document.getElementById('additional-services-list');
  if (servicesContainer) {
    servicesContainer.querySelectorAll('.font-medium').forEach(span => {
      const serviceLabel = span.textContent;
      const service = window.window.ADDITIONAL_SERVICES.find(s => s.label === serviceLabel);
      if (service) {
        span.textContent = getTranslatedText(service.translations, service.label);
      }
    });
  }
  
  // Update room service types - re-populate from current room selection
  const serviceTypesContainer = document.getElementById('room-service-list');
  const serviceSectionContainer = document.getElementById('room-service-container');
  const equipmentSectionContainer = document.getElementById('room-equipment-container');
  const equipmentContainer = document.getElementById('room-equipment-list');
  
  if (serviceTypesContainer && serviceSectionContainer && !serviceSectionContainer.classList.contains('hidden')) {
    // Find the currently selected room type and re-show its equipment
    const roomTypeSelect = document.getElementById('room-type-select');
    const selectedRoomType = window.newFormState?.selectedRoomType || (roomTypeSelect ? roomTypeSelect.value : null);
    if (selectedRoomType) {
      showRoomEquipment(selectedRoomType);
    }
  }
  
  // Update room summary
  const roomsSummary = document.getElementById('rooms-summary');
  if (roomsSummary) {
    renderRoomsSummary();
  }
  
  // Update all translations for dynamically added elements
  updateTranslationsForElements(currentLang);
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
    statusEl.className = "text-2xl font-bold text-emerald-600 rounded-xl px-4 py-3 animate-pulse";
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
    const estimateForm = document.getElementById('estimate-form');
    if (estimateForm) estimateForm.classList.add('hidden');
    const successMsg = document.getElementById("success-msg");
    if (successMsg) {
      successMsg.classList.remove("hidden");
      // Translate success message elements
      successMsg.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translate(key);
      });
    }
  });
}
function initMapWithData(comprehensiveData) {
  const mapContainer = document.getElementById("map");
  if (!mapContainer) return;
  // Check if map is already initialized
  if (mapContainer._leaflet_id) return;
  const map = L.map("map").setView([51.7693, 19.4705], 11);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);
  
  // Initialize map with the pre-loaded comprehensive data
  const postalInput = document.getElementById("postal-input");
  const locationButton = document.getElementById("check-location-btn");
  
  // Use global serviceState
  window.serviceState.eligible = false;
  window.serviceState.postalCodes = new Set();
  window.serviceState.outlineRing = null;
  
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
  postalInput?.addEventListener("change", (e) => {
    // Sync with form postal code input
    const formPostalInput = document.getElementById('postal-code');
    if (formPostalInput && e.target.value) {
      formPostalInput.value = e.target.value;
      window.validateAndUpdatePostalCode(e.target.value);
    }
  });
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
    const normalizedCode = window.normalizePostalCode(postalInput.value);
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

    if (!window.serviceState.postalCodes.size) {
      if (serviceabilityState.verified) {
        setServiceabilityStatus("serviceability_status_loading", "info");
      } else {
        setEstimateFormVisible(false);
        setEstimateSubmissionEnabled(false);
        setServiceabilityStatus("serviceability_status_loading", "info");
      }
      return;
    }

    const isKnownCode = window.serviceState.postalCodes.has(normalizedCode);
    if (isKnownCode) {
      window.serviceState.eligible = true;
      markServiceable(SERVICEABILITY_MODE_POSTAL, "serviceability_status_postal_match");
      return;
    }

    window.serviceState.eligible = false;
    if (serviceabilityState.verified) {
      setServiceabilityStatus("serviceability_status_postal_miss", "error");
      return;
    }
    markNotServiceable("serviceability_status_postal_miss");
  }

  function evaluateLocation(point) {
    if (!window.serviceState.outlineRing) {
      if (serviceabilityState.verified) {
        setServiceabilityStatus("serviceability_status_loading", "info");
      } else {
        setEstimateFormVisible(false);
        setEstimateSubmissionEnabled(false);
        setServiceabilityStatus("serviceability_status_loading", "info");
      }
      return;
    }

    const isInside = pointInPolygon(point, window.serviceState.outlineRing);
    if (isInside) {
      window.serviceState.eligible = true;
      markServiceable(SERVICEABILITY_MODE_LOCATION, "serviceability_status_location_match");
      return;
    }

    window.serviceState.eligible = false;
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
        const point = [position.coords.longitude, position.coords.latitude];
        evaluateLocation(point);
        // Try to find the specific postal code for this location
        findAndSetPostalCodeForLocation(point);
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

  function findAndSetPostalCodeForLocation(point) {
    // Try to find which zone contains this point
    const zonesLayer = coverageLayers.zones;
    if (!zonesLayer) return;
    
    const layers = zonesLayer.getLayers();
    for (let i = 0; i < layers.length; i++) {
      const layer = layers[i];
      const feature = layer?.feature;
      if (!feature || !feature.geometry || !feature.properties) continue;
      
      const geometry = feature.geometry;
      const properties = feature.properties;
      
      // Get the polygon ring from the geometry
      let polygonRing = null;
      if (geometry.type === 'Polygon') {
        polygonRing = geometry.coordinates[0];
      } else if (geometry.type === 'MultiPolygon') {
        polygonRing = geometry.coordinates[0]?.[0];
      }
      
      if (polygonRing && pointInPolygon(point, polygonRing)) {
        // Found the zone, get its postal code
        const postalCode = properties.SYMBOL || properties.postalCode || properties.Name;
        if (postalCode) {
          // Set the postal code in both inputs
          const postalInputCoverage = document.getElementById('postal-input');
          const postalInputForm = document.getElementById('postal-code');
          if (postalInputCoverage) postalInputCoverage.value = postalCode;
          if (postalInputForm) {
            postalInputForm.value = postalCode;
            window.newFormState.postalCode = postalCode;
            // Trigger validation and price update
            window.validateAndUpdatePostalCode(postalCode);
          }
          return;
        }
      }
    }
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
    const layers = payload?.mapLayers || payload?.layers || {};
    const outlineData = layers.outline || payload.mapLayers?.outline || payload.outline || null;
    const zoneData = layers.zones || payload.mapLayers?.zones || payload.zones || null;
    const postalCodes = Array.isArray(payload?.postalCodes) ? payload.postalCodes : [];
    const postcodesData = Array.isArray(payload?.postcodes) ? payload.postcodes : [];

    if (outlineData) coverageLayers.outline.addData(outlineData);
    if (zoneData) coverageLayers.zones.addData(zoneData);
    window.serviceState.postalCodes = new Set(postalCodes.map(window.normalizePostalCode).filter(Boolean));
    window.serviceState.outlineRing = extractOutlineRing();
    
    // Store full postcode data for price calculation
    if (postcodesData.length > 0) {
      estimateAppData.postcodes = postcodesData;
    }

    updateCoverageLayerVisibility();

    const boundsSource = coverageLayers.zones.getLayers().length
      ? coverageLayers.zones
      : coverageLayers.outline;

    if (boundsSource.getLayers().length) {
      map.fitBounds(boundsSource.getBounds(), { padding: [20, 20] });
    }

    if (!window.serviceState.postalCodes.size) {
      setEstimateFormVisible(false);
      setEstimateSubmissionEnabled(false);
      setServiceabilityStatus("serviceability_status_loading", "info");
    } else if (!serviceabilityState.verified) {
      setServiceabilityStatus("serviceability_status_ready", "info");
    }

    tryAutoLocationRestore();
  }

  map.on("zoomend", updateCoverageLayerVisibility);

  // Use pre-loaded comprehensive data
  hydrateCoverageLayers(comprehensiveData);
  
  tryAutoLocationRestore();
}

// Fallback initMap function for when comprehensive data isn't available
function initMap() {
  const mapContainer = document.getElementById("map");
  if (!mapContainer) return;
  // Check if map is already initialized
  if (mapContainer._leaflet_id) return;
  const map = L.map("map").setView([51.7693, 19.4705], 11);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);
  
  // Use global serviceState
  window.serviceState.eligible = false;
  window.serviceState.postalCodes = new Set();
  window.serviceState.outlineRing = null;

  // Create coverage layers for fallback
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

  function setActiveCoverageLayer(layerName) {
    const nextLayer = coverageLayers[layerName];
    if (!nextLayer || activeCoverageLayer === nextLayer) return;

    if (activeCoverageLayer && map.hasLayer(activeCoverageLayer)) {
      map.removeLayer(activeCoverageLayer);
    }

    activeCoverageLayer = nextLayer;
    activeCoverageLayer.addTo(map);
  }

  function extractOutlineRing() {
    const outlineLayer = coverageLayers.outline.getLayers()[0];
    const geometry = outlineLayer?.feature?.geometry;
    if (!geometry || !geometry.coordinates) return null;
    if (geometry.type === "Polygon") return geometry.coordinates[0] || null;
    if (geometry.type === "MultiPolygon") return geometry.coordinates[0]?.[0] || null;
    return null;
  }

  function updateCoverageLayerVisibility() {
    const zoom = map.getZoom();
    if (zoom < 12) {
      setActiveCoverageLayer("outline");
      return;
    }

    setActiveCoverageLayer("zones");
  }

  function hydrateCoverageLayers(payload) {
    const layers = payload?.mapLayers || payload?.layers || {};
    const outlineData = layers.outline || payload.mapLayers?.outline || payload.outline || null;
    const zoneData = layers.zones || payload.mapLayers?.zones || payload.zones || null;
    const postalCodes = Array.isArray(payload?.postalCodes) ? payload.postalCodes : [];
    const postcodesData = Array.isArray(payload?.postcodes) ? payload.postcodes : [];

    if (outlineData) coverageLayers.outline.addData(outlineData);
    if (zoneData) coverageLayers.zones.addData(zoneData);
    window.serviceState.postalCodes = new Set(postalCodes.map(window.normalizePostalCode).filter(Boolean));
    window.serviceState.outlineRing = extractOutlineRing();
    
    // Store full postcode data for price calculation
    if (postcodesData.length > 0) {
      estimateAppData.postcodes = postcodesData;
    }

    updateCoverageLayerVisibility();

    const boundsSource = coverageLayers.zones.getLayers().length
      ? coverageLayers.zones
      : coverageLayers.outline;

    if (boundsSource.getLayers().length) {
      map.fitBounds(boundsSource.getBounds(), { padding: [20, 20] });
    }

    if (!window.serviceState.postalCodes.size) {
      setEstimateFormVisible(false);
      setEstimateSubmissionEnabled(false);
      setServiceabilityStatus("serviceability_status_no_data", "error");
    }
  }

  const gasWebAppUrl = 'https://script.google.com/macros/s/AKfycbxDMuovrEITeoHZh3P37KwB3_2Xc03TwXqTSJLuSo5dj31WGIwKSovhP30kquCyXnyq2Q/exec';
  const callbackName = `gasGeoJsonCallback${Date.now()}${Math.random().toString(36).slice(2).replace(/[^\w$]/g, '')}`;
  
  map.on("zoomend", updateCoverageLayerVisibility);
  
  loadJsonpData(gasWebAppUrl, callbackName)
    .then(hydrateCoverageLayers)
    .catch((error) => {
      console.error('Error fetching GeoJSON data:', error.message);
    });
    
  // Note: tryAutoLocationRestore() is omitted here as it requires additional nested functions
  // The main map functionality should work without it
}

/**
 * Estimate Form Functions
 * All options are loaded dynamically from the webapp metadata
 */

let estimateAppData = { prices: null, postcodes: null, mapLayers: null, metadata: null };

// Global state for serviceability
window.serviceState = {
  eligible: false,
  postalCodes: new Set(),
  outlineRing: null,
};

// New form state
window.newFormState = {
  selectedSection: 'rooms',
  selectedRoomType: null,
  rooms: [],
  furniture: [],
  carpets: [],
  mattresses: [],
  windows: 0,
  additionalServices: [],
  postalCode: null,
  deliveryCost: 0,
  deliveryDistance: 0,
  hasServices: false,
  contactFormVisible: false
};

// Global helper function to normalize postal codes
window.normalizePostalCode = function(value) {
  return String(value || "").trim().toUpperCase().replace(/\s+/g, "");
};

/**
 * Load data from Google Apps Script using JSONP (avoids CORS issues)
 * @param {string} url - The endpoint URL
 * @param {string} callbackName - Unique callback function name
 * @param {Object|string} [params] - Optional parameters to append to URL
 * @returns {Promise<Object>} - Promise that resolves with the data
 */
function loadJsonpData(url, callbackName, params = null) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      cleanup();
      reject(new Error('JSONP request timed out'));
    }, 10000);

    const cleanup = () => {
      clearTimeout(timeoutId);
      delete window[callbackName];
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };

    window[callbackName] = (data) => {
      cleanup();
      resolve(data);
    };

    let finalUrl = url;
    const urlObj = new URL(url);
    
    // Add params if provided
    if (params) {
      if (typeof params === 'string') {
        urlObj.search = params;
      } else if (typeof params === 'object') {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== null && value !== undefined) {
            urlObj.searchParams.append(key, value);
          }
        });
      }
    }
    
    // Add callback parameter
    urlObj.searchParams.append('callback', callbackName);
    finalUrl = urlObj.toString();

    const scriptElement = document.createElement('script');
    scriptElement.src = finalUrl;
    scriptElement.onerror = () => {
      cleanup();
      reject(new Error('JSONP request failed'));
    };

    document.body.appendChild(scriptElement);
  });
}


// Data loaded from webapp with new structure
let PRICE_DATA = {}; // New price data with translations

// Function to populate TRANSLATIONS from room types data
function populateTranslationsFromRoomTypes() {
  appLog('Populating translations from room types, count:', window.ROOM_TYPES ? window.ROOM_TYPES.length : 0);
  if (!window.ROOM_TYPES || !Array.isArray(window.ROOM_TYPES)) {
    appLog('WARNING: ROOM_TYPES is not available');
    return;
  }
  
  window.ROOM_TYPES.forEach(roomType => {
    if (!roomType.value) return;
    
    let roomTranslations = roomType.translations || roomType.translation || {};
    
    // Handle case where translation is full object with en/pl/ru structures
    if (roomTranslations.en && typeof roomTranslations.en === 'object') {
      const roomTranslationsNew = {};
      Object.keys(roomTranslations).forEach(lang => {
        const desc = roomTranslations[lang].description || '';
        // Extract room name from description like "Rooms - Living Room" or just "Living Room"
        const parts = desc.split('-');
        const roomName = parts.length > 1 ? parts.slice(1).join('-').trim() : desc.trim();
        roomTranslationsNew[lang] = roomName;
      });
      roomTranslations = roomTranslationsNew;
    }
    
    // Add room type translations
    const roomKey = `room_type_${roomType.value.toLowerCase().replace(/\s+\/\//g, '_').replace(/\//g, '_')}`;
    // Handle translation objects vs strings
    TRANSLATIONS.en[roomKey] = (roomTranslations.en && typeof roomTranslations.en === 'object') ? (roomTranslations.en.description || roomTranslations.en.label || roomType.label || roomType.value) : (roomTranslations.en || roomType.label || roomType.value);
    TRANSLATIONS.pl[roomKey] = (roomTranslations.pl && typeof roomTranslations.pl === 'object') ? (roomTranslations.pl.description || roomTranslations.pl.label || roomType.label || roomType.value) : (roomTranslations.pl || roomType.label || roomType.value);
    TRANSLATIONS.ru[roomKey] = (roomTranslations.ru && typeof roomTranslations.ru === 'object') ? (roomTranslations.ru.description || roomTranslations.ru.label || roomType.label || roomType.value) : (roomTranslations.ru || roomType.label || roomType.value);
    
    // Add service type translations
    if (roomType.serviceTypes) {
      appLog('Processing service types for room:', roomType.value, 'count:', roomType.serviceTypes.length);
      roomType.serviceTypes.forEach(serviceType => {
        if (serviceType.value) {
          appLog('Processing service type:', serviceType.value, 'has translations:', !!serviceType.translations, !!serviceType.translation);
          let serviceTranslations = serviceType.translations || serviceType.translation || {};
          appLog('Service type translations raw:', serviceTranslations);
          
          // Handle case where translation is full object with en/pl/ru structures
          if (serviceTranslations.en && typeof serviceTranslations.en === 'object') {
            appLog('Service type has object translations, converting...');
            const serviceTranslationsNew = {};
            Object.keys(serviceTranslations).forEach(lang => {
              const desc = serviceTranslations[lang].description || '';
              // Extract service type name from description like "Living Room - Essential" -> "Essential"
              const parts = desc.split('-');
              const serviceName = parts.length > 1 ? parts.slice(1).join('-').trim() : desc.trim();
              serviceTranslationsNew[lang] = serviceName;
            });
            serviceTranslations = serviceTranslationsNew;
          }
          
          const serviceKey = `service_type_${roomType.value.toLowerCase().replace(/\s+\/\//g, '_').replace(/\//g, '_')}_${serviceType.value.toLowerCase().replace(/\s+\/\//g, '_').replace(/\//g, '_')}`;
          appLog('Setting translation for service key:', serviceKey, 'en:', serviceTranslations.en || serviceType.label || serviceType.value);
          // Handle translation objects vs strings
          TRANSLATIONS.en[serviceKey] = (serviceTranslations.en && typeof serviceTranslations.en === 'object') ? (serviceTranslations.en.description || serviceTranslations.en.label || serviceType.label || serviceType.value) : (serviceTranslations.en || serviceType.label || serviceType.value);
          TRANSLATIONS.pl[serviceKey] = (serviceTranslations.pl && typeof serviceTranslations.pl === 'object') ? (serviceTranslations.pl.description || serviceTranslations.pl.label || serviceType.label || serviceType.value) : (serviceTranslations.pl || serviceType.label || serviceType.value);
          TRANSLATIONS.ru[serviceKey] = (serviceTranslations.ru && typeof serviceTranslations.ru === 'object') ? (serviceTranslations.ru.description || serviceTranslations.ru.label || serviceType.label || serviceType.value) : (serviceTranslations.ru || serviceType.label || serviceType.value);
        }
      });
    }
    
    // Add equipment translations
    if (roomType.equipment) {
      roomType.equipment.forEach((equip) => {
        let equipValue, equipLabel, equipTranslations;
        
        if (typeof equip === 'string') {
          equipValue = equip;
          equipLabel = equip;
          equipTranslations = {};
        } else if (typeof equip === 'object') {
          equipValue = equip.value || equip.label;
          equipLabel = equip.label || equip.value;
          equipTranslations = equip.translations || equip.translation || {};
          
          // Handle case where translation is full object with en/pl/ru structures
          if (equipTranslations.en && typeof equipTranslations.en === 'object') {
            const equipTranslationsNew = {};
            Object.keys(equipTranslations).forEach(lang => {
              const desc = equipTranslations[lang].description || '';
              // Extract equipment name from description like "Living Room - TV Stand" -> "TV Stand"
              const parts = desc.split('-');
              const equipName = parts.length > 1 ? parts.slice(1).join('-').trim() : desc.trim();
              equipTranslationsNew[lang] = equipName;
            });
            equipTranslations = equipTranslationsNew;
          }
        }
        
        if (equipValue) {
          const equipKey = `equipment_${equipValue.toLowerCase().replace(/\s+\/\//g, '_').replace(/\//g, '_')}`;
          // Handle translation objects vs strings
          TRANSLATIONS.en[equipKey] = (equipTranslations.en && typeof equipTranslations.en === 'object') ? (equipTranslations.en.description || equipTranslations.en.label || equipLabel) : (equipTranslations.en || equipLabel);
          TRANSLATIONS.pl[equipKey] = (equipTranslations.pl && typeof equipTranslations.pl === 'object') ? (equipTranslations.pl.description || equipTranslations.pl.label || equipLabel) : (equipTranslations.pl || equipLabel);
          TRANSLATIONS.ru[equipKey] = (equipTranslations.ru && typeof equipTranslations.ru === 'object') ? (equipTranslations.ru.description || equipTranslations.ru.label || equipLabel) : (equipTranslations.ru || equipLabel);
        }
      });
    }
  });
  
  appLog('Translations populated from room types');
  appLog('Sample TRANSLATIONS.en keys:', Object.keys(TRANSLATIONS.en).slice(0, 10));
  
  // Log some sample translation keys
  const sampleServiceKey = 'service_type_bedroom_essential';
  appLog('Sample service translation key:', sampleServiceKey, 'en:', TRANSLATIONS.en[sampleServiceKey], 'pl:', TRANSLATIONS.pl[sampleServiceKey]);
  
  const sampleEquipKey = 'equipment_wardrobe';
  appLog('Checking sample equipment key:', sampleEquipKey, 'value:', TRANSLATIONS.en[sampleEquipKey]);
}

// Initialize new form
function initNewFormWithData(comprehensiveData) {
  appLog('Initializing form with pre-loaded data, comprehensiveData keys:', Object.keys(comprehensiveData));
  appLog('Checking for Carpet data - comprehensiveData.Carpets:', comprehensiveData.Carpets ? comprehensiveData.Carpets.length : 'not found');
  appLog('Checking for Carpet data - comprehensiveData.prices:', comprehensiveData.prices ? Object.keys(comprehensiveData.prices) : 'not found');
  appLog('Initializing form with pre-loaded data, roomTypes:', comprehensiveData.roomTypes ? comprehensiveData.roomTypes.length : 0);
  
  // Store data globally for form functions
  if (comprehensiveData.roomTypes) {
    window.ROOM_TYPES = comprehensiveData.roomTypes;
    appLog('Stored ROOM_TYPES with', window.ROOM_TYPES.length, 'room types');
    
    // Log first room type details for debugging
    if (window.ROOM_TYPES.length > 0) {
      const firstRoom = window.ROOM_TYPES[0];
      appLog('First room type:', firstRoom.value, 'serviceTypes count:', firstRoom.serviceTypes ? firstRoom.serviceTypes.length : 0);
      if (firstRoom.serviceTypes && firstRoom.serviceTypes.length > 0) {
        appLog('First service type:', firstRoom.serviceTypes[0].value, 'translations:', firstRoom.serviceTypes[0].translations);
      }
      if (firstRoom.equipment && firstRoom.equipment.length > 0) {
        appLog('First equipment:', firstRoom.equipment[0].value, 'translations:', firstRoom.equipment[0].translations);
      }
    }
    
    // Populate translations from room types
    appLog('Calling populateTranslationsFromRoomTypes');
    populateTranslationsFromRoomTypes();
  } else {
    appLog('WARNING - comprehensiveData.roomTypes is empty or undefined');
  }
  if (comprehensiveData.furnitureItems) {
    window.FURNITURE_ITEMS = comprehensiveData.furnitureItems;
  }
  if (comprehensiveData.additionalServices) {
    window.ADDITIONAL_SERVICES = comprehensiveData.additionalServices;
  }
  if (comprehensiveData.carpetItems) {
    window.CARPET_ITEMS = comprehensiveData.carpetItems;
    appLog('CARPET_ITEMS loaded from comprehensiveData.carpetItems:', window.CARPET_ITEMS.length, 'items');
  }
  // Also check if carpet data is in metadata
  if (comprehensiveData.metadata && comprehensiveData.metadata.carpetItems) {
    window.CARPET_ITEMS = comprehensiveData.metadata.carpetItems;
    appLog('CARPET_ITEMS loaded from metadata.carpetItems:', window.CARPET_ITEMS.length, 'items');
  }
  // Also check if carpet data is in Carpets array
  if (comprehensiveData.Carpets) {
    window.CARPET_ITEMS = comprehensiveData.Carpets;
    appLog('CARPET_ITEMS loaded from comprehensiveData.Carpets:', window.CARPET_ITEMS.length, 'items');
  }
  // Check if carpet data is in prices.Carpets
  if (comprehensiveData.prices && comprehensiveData.prices.Carpets) {
    window.CARPET_ITEMS = comprehensiveData.prices.Carpets;
    appLog('CARPET_ITEMS loaded from comprehensiveData.prices.Carpets:', window.CARPET_ITEMS.length, 'items');
  }
  // Check if carpet data is in prices.carpetItems
  if (comprehensiveData.prices && comprehensiveData.prices.carpetItems) {
    window.CARPET_ITEMS = comprehensiveData.prices.carpetItems;
    appLog('CARPET_ITEMS loaded from comprehensiveData.prices.carpetItems:', window.CARPET_ITEMS.length, 'items');
  }
  if (comprehensiveData.dirtinessLevels) {
    if (!window.DIRTINESS_LEVELS || window.DIRTINESS_LEVELS.length === 0) {
      window.DIRTINESS_LEVELS = comprehensiveData.dirtinessLevels;
    } else {
      // Merge if already populated
      comprehensiveData.dirtinessLevels.forEach(level => {
        const exists = window.DIRTINESS_LEVELS.some(existing => 
          (typeof existing === 'string' && existing === level) ||
          (typeof existing === 'object' && (existing.value === level || existing.description === level)) ||
          (typeof level === 'object' && existing && (existing.value === level.value || existing.description === level.description))
        );
        if (!exists) {
          window.DIRTINESS_LEVELS.push(level);
        }
      });
    }
  }
  if (comprehensiveData.postcodes) {
    estimateAppData.postcodes = comprehensiveData.postcodes;
  }
  if (comprehensiveData.postalCodes) {
    estimateAppData.postcodes = comprehensiveData.postalCodes;
  }
  
  // Check if new form elements exist
  const formContainer = document.getElementById('form-container');
  if (!formContainer) {
    appLog('Form container not found, falling back to old form');
    return false;
  }
  
  const roomsSection = document.getElementById('rooms-section');
  const furnitureSection = document.getElementById('furniture-section');
  const carpetsSection = document.getElementById('carpets-mattresses-section');
  const windowsSection = document.getElementById('windows-section');
  const servicesSection = document.getElementById('services-section');
  
  if (!roomsSection || !furnitureSection || !carpetsSection || !windowsSection || !servicesSection) {
    appLog('Required form sections not found');
    return false;
  }
  
  // Setup section buttons
  setupSectionNavigation();
  
  // Setup form inputs
  setupFormInputs();
  
  // Populate form with the pre-loaded data
  populateNewFormWithData(comprehensiveData);
  
  // Final check: log CARPET_ITEMS state
  appLog('FINAL CHECK - CARPET_ITEMS:', window.CARPET_ITEMS ? window.CARPET_ITEMS.length + ' items' : 'NOT SET');
  if (window.CARPET_ITEMS) {
    window.CARPET_ITEMS.forEach(item => {
      appLog('  Carpet item:', item.description || item.value, 'pricePerSqm:', item.pricePerSqm);
    });
  }
  
  return true;
}

// Fallback function for when comprehensive data isn't available
function initNewForm() {
  appLog('Initializing form without pre-loaded data (fallback path)');
  
  // Check if new form elements exist
  const formContainer = document.getElementById('form-container');
  if (!formContainer) {
    appLog('Form container not found, falling back to old form');
    return false;
  }
  
  const roomsSection = document.getElementById('rooms-section');
  const furnitureSection = document.getElementById('furniture-section');
  const carpetsSection = document.getElementById('carpets-mattresses-section');
  const windowsSection = document.getElementById('windows-section');
  const servicesSection = document.getElementById('services-section');
  
  if (!roomsSection || !furnitureSection || !carpetsSection || !windowsSection || !servicesSection) {
    appLog('Required form sections not found');
    return false;
  }
  
  // Setup section buttons
  setupSectionNavigation();
  
  // Setup form inputs
  setupFormInputs();
  
  // Load data from webapp
  loadNewFormData();
  
  return true;
}

function populateNewFormWithData(comprehensiveData) {
  appLog('Populating form with pre-loaded data, ROOM_TYPES has', window.ROOM_TYPES ? window.ROOM_TYPES.length : 0, 'items');
  
  // Populate room types - use global ROOM_TYPES set by initNewFormWithData
  populateRoomTypes();
  
  // Populate furniture items - use global FURNITURE_ITEMS set by initNewFormWithData
  populateFurnitureItems();
  
  // Populate additional services - use global ADDITIONAL_SERVICES set by initNewFormWithData
  populateAdditionalServices();
  
  // Populate carpet options - use global DIRTINESS_LEVELS set by initNewFormWithData
  populateCarpetOptions();
}

function setupSectionNavigation() {
  const sectionBtns = document.querySelectorAll('.form-section-btn');
  const sectionContents = document.querySelectorAll('.form-section-content');
  
  sectionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSection = btn.getAttribute('data-section');
      
      // Update active button
      sectionBtns.forEach(b => {
        b.classList.remove('active');
        b.classList.add('border-transparent');
        b.classList.remove('border-primary/20');
      });
      btn.classList.add('active');
      btn.classList.remove('border-transparent');
      btn.classList.add('border-primary/20');
      
      // Show target section
      sectionContents.forEach(content => {
        if (content.id === `${targetSection}-section`) {
          content.classList.remove('hidden');
        } else {
          content.classList.add('hidden');
        }
      });
      
      window.newFormState.selectedSection = targetSection;
      appLog('Switched to section:', targetSection);
    });
  });
}

function setupFormInputs() {
  // Room type select
  const roomTypeSelect = document.getElementById('room-type-select');
  if (roomTypeSelect) {
    roomTypeSelect.addEventListener('change', (e) => {
      const selectedValue = e.target.value;
      window.newFormState.selectedRoomType = selectedValue;
      
      if (selectedValue) {
        // Show equipment for this room type
        showRoomEquipment(selectedValue);
        // Disable add room button until service type is selected
        const addRoomBtn = document.getElementById('add-room-btn');
        if (addRoomBtn) {
          addRoomBtn.disabled = true;
          addRoomBtn.classList.add('opacity-50', 'cursor-not-allowed');
          addRoomBtn.classList.remove('opacity-100', 'cursor-pointer');
        }
      } else {
        // Hide equipment
        const equipmentContainer2 = document.getElementById('room-equipment-container');
        if (equipmentContainer2) equipmentContainer2.classList.add('hidden');
        // Disable add room button
        const addRoomBtn = document.getElementById('add-room-btn');
        if (addRoomBtn) {
          addRoomBtn.disabled = true;
          addRoomBtn.classList.add('opacity-50', 'cursor-not-allowed');
          addRoomBtn.classList.remove('opacity-100', 'cursor-pointer');
        }
      }
    });
  }
  
  // Add Room button
  const addRoomBtn = document.getElementById('add-room-btn');
  if (addRoomBtn) {
    addRoomBtn.addEventListener('click', addRoomNew);
  }
  
  // Add Carpet button
  const addCarpetBtn = document.getElementById('add-carpet-btn');
  if (addCarpetBtn) {
    addCarpetBtn.addEventListener('click', addCarpetNew);
  }
  
  // Add Mattress button
  const addMattressBtn = document.getElementById('add-mattress-btn');
  if (addMattressBtn) {
    addMattressBtn.addEventListener('click', addMattressNew);
  }
  
  // Windows count input
  const windowsInput = document.getElementById('windows-count');
  if (windowsInput) {
    windowsInput.addEventListener('change', (e) => {
      window.newFormState.windows = parseInt(e.target.value) || 0;
      window.calculateNewFormPrice();
      window.checkBookServiceButton();
    });
  }
  
  // Postal code input
  const postalInput = document.getElementById('postal-code');
  if (postalInput) {
    // Set placeholder
    postalInput.placeholder = '90-000';
    
    // Add input event listener for immediate validation
    postalInput.addEventListener('input', (e) => {
      window.validateAndUpdatePostalCode(e.target.value);
    });
    
    // Also handle change event
    postalInput.addEventListener('change', (e) => {
      window.validateAndUpdatePostalCode(e.target.value);
    });
  }
  
  // Book Service button
  const bookServiceBtn = document.getElementById('book-service-btn');
  if (bookServiceBtn) {
    bookServiceBtn.addEventListener('click', toggleContactForm);
  }
  
  // Contact form inputs validation
  const contactInputs = ['fullname', 'phone', 'email'];
  contactInputs.forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener('input', checkContactFormValidity);
    }
  });
  
  // Confirm Booking button
  const confirmBtn = document.getElementById('confirm-booking');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', submitNewBooking);
  }
}

async function loadNewFormData() {
  try {
    appLog('Loading data from webapp');
    const callbackName = `newFormDataCallback${Date.now()}${Math.random().toString(36).slice(2).replace(/[^\w$]/g, '')}`;
    const webappUrl = 'https://script.google.com/macros/s/AKfycbxDMuovrEITeoHZh3P37KwB3_2Xc03TwXqTSJLuSo5dj31WGIwKSovhP30kquCyXnyq2Q/exec';
    
    // Load from default endpoint (includes all data: mapLayers, prices, postcodes, roomTypes, etc.)
    try {
      const data = await loadJsonpData(webappUrl, callbackName);
      appLog('Data loaded from default endpoint:', data);
      
      // Use the structured data from the endpoint
      if (data.roomTypes) {
        window.ROOM_TYPES = data.roomTypes;
      }
      if (data.furnitureItems) {
        window.FURNITURE_ITEMS = data.furnitureItems;
      }
      if (data.additionalServices) {
        window.ADDITIONAL_SERVICES = data.additionalServices;
      }
      if (data.carpetItems) {
        window.CARPET_ITEMS = data.carpetItems;
        appLog('CARPET_ITEMS loaded from data.carpetItems:', window.CARPET_ITEMS.length, 'items');
      }
      // Also check for Carpets array (capital C)
      if (data.Carpets) {
        window.CARPET_ITEMS = data.Carpets;
        appLog('CARPET_ITEMS loaded from data.Carpets:', window.CARPET_ITEMS.length, 'items');
      }
      // Check if carpet data is in prices.Carpets
      if (data.prices && data.prices.Carpets) {
        window.CARPET_ITEMS = data.prices.Carpets;
        appLog('CARPET_ITEMS loaded from data.prices.Carpets:', window.CARPET_ITEMS.length, 'items');
      }
      // Check if carpet data is in prices.carpetItems
      if (data.prices && data.prices.carpetItems) {
        window.CARPET_ITEMS = data.prices.carpetItems;
        appLog('CARPET_ITEMS loaded from data.prices.carpetItems:', window.CARPET_ITEMS.length, 'items');
      }
      if (data.dirtinessLevels) {
        // Preserve existing DIRTINESS_LEVELS if they have translations
        if (!window.DIRTINESS_LEVELS || window.DIRTINESS_LEVELS.length === 0) {
          window.DIRTINESS_LEVELS = data.dirtinessLevels;
        } else {
          // Merge, keeping existing items with translations
          data.dirtinessLevels.forEach(level => {
            const exists = window.DIRTINESS_LEVELS.some(existing => 
              (typeof existing === 'string' && existing === level) ||
              (typeof existing === 'object' && (existing.value === level || existing.description === level)) ||
              (typeof level === 'object' && existing && (existing.value === level.value || existing.description === level.description))
            );
            if (!exists) {
              window.DIRTINESS_LEVELS.push(level);
            }
          });
        }
      }
      // Backward compatibility: also check metadata
      if (data.metadata && data.metadata.roomTypes) {
        window.ROOM_TYPES = data.metadata.roomTypes;
      }
      if (data.metadata && data.metadata.furnitureItems) {
        window.FURNITURE_ITEMS = data.metadata.furnitureItems;
      }
      if (data.metadata && data.metadata.additionalServices) {
        window.ADDITIONAL_SERVICES = data.metadata.additionalServices;
      }
      if (data.metadata && data.metadata.carpetItems) {
        window.CARPET_ITEMS = data.metadata.carpetItems;
        appLog('CARPET_ITEMS loaded from metadata.carpetItems:', window.CARPET_ITEMS.length, 'items');
      }
      if (data.metadata && data.metadata.Carpets) {
        window.CARPET_ITEMS = data.metadata.Carpets;
        appLog('CARPET_ITEMS loaded from metadata.Carpets:', window.CARPET_ITEMS.length, 'items');
      }
      if (data.metadata && data.metadata.dirtinessLevels) {
        // Merge metadata dirtiness levels with existing
        data.metadata.dirtinessLevels.forEach(level => {
          const exists = window.DIRTINESS_LEVELS.some(existing => 
            (typeof existing === 'string' && existing === level) ||
            (typeof existing === 'object' && (existing.value === level || existing.description === level)) ||
            (typeof level === 'object' && existing && (existing.value === level.value || existing.description === level.description))
          );
          if (!exists) {
            window.DIRTINESS_LEVELS.push(level);
          }
        });
      }
      
      // Add room type, service type, and equipment translations to global TRANSLATIONS
      if (ROOM_TYPES) {
        ROOM_TYPES.forEach(roomType => {
          // Add room type translations
          if (roomType.value) {
            let roomTranslations = roomType.translations || roomType.translation || {};
            
            // Handle case where translation is full object with en/pl/ru structures
            if (roomTranslations.en && typeof roomTranslations.en === 'object') {
              const roomTranslationsNew = {};
              Object.keys(roomTranslations).forEach(lang => {
                const desc = roomTranslations[lang].description || '';
                // Extract room name from description like "Rooms - Living Room" or just "Living Room"
                const parts = desc.split('-');
                const roomName = parts.length > 1 ? parts.slice(1).join('-').trim() : desc.trim();
                roomTranslationsNew[lang] = roomName;
              });
              roomTranslations = roomTranslationsNew;
            }
            
            const roomKey = `room_type_${roomType.value.toLowerCase().replace(/\s+\/\//g, '_').replace(/\//g, '_')}`;
            if (!TRANSLATIONS.en[roomKey]) TRANSLATIONS.en[roomKey] = roomType.label || roomType.value;
            if (!TRANSLATIONS.pl[roomKey]) TRANSLATIONS.pl[roomKey] = roomTranslations.pl || roomType.label || roomType.value;
            if (!TRANSLATIONS.ru[roomKey]) TRANSLATIONS.ru[roomKey] = roomTranslations.ru || roomType.label || roomType.value;
            if (roomTranslations.en) TRANSLATIONS.en[roomKey] = roomTranslations.en;
            if (roomTranslations.pl) TRANSLATIONS.pl[roomKey] = roomTranslations.pl;
            if (roomTranslations.ru) TRANSLATIONS.ru[roomKey] = roomTranslations.ru;
          }
          
          // Add service type translations
          if (roomType.serviceTypes) {
            roomType.serviceTypes.forEach(serviceType => {
              if (serviceType.value) {
                let serviceTranslations = serviceType.translations || serviceType.translation || {};
                
                // Handle case where translation is full object with en/pl/ru structures
                if (serviceTranslations.en && typeof serviceTranslations.en === 'object') {
                  const serviceTranslationsNew = {};
                  Object.keys(serviceTranslations).forEach(lang => {
                    const desc = serviceTranslations[lang].description || '';
                    // Extract service type name from description like "Living Room - Essential" -> "Essential"
                    const parts = desc.split('-');
                    const serviceName = parts.length > 1 ? parts.slice(1).join('-').trim() : desc.trim();
                    serviceTranslationsNew[lang] = serviceName;
                  });
                  serviceTranslations = serviceTranslationsNew;
                }
                
                const serviceKey = `service_type_${roomType.value.toLowerCase().replace(/\s+\/\//g, '_').replace(/\//g, '_')}_${serviceType.value.toLowerCase().replace(/\s+\/\//g, '_').replace(/\//g, '_')}`;
                if (!TRANSLATIONS.en[serviceKey]) TRANSLATIONS.en[serviceKey] = serviceType.label || serviceType.value;
                if (!TRANSLATIONS.pl[serviceKey]) TRANSLATIONS.pl[serviceKey] = serviceTranslations.pl || serviceType.label || serviceType.value;
                if (!TRANSLATIONS.ru[serviceKey]) TRANSLATIONS.ru[serviceKey] = serviceTranslations.ru || serviceType.label || serviceType.value;
                if (serviceTranslations.en) TRANSLATIONS.en[serviceKey] = serviceTranslations.en;
                if (serviceTranslations.pl) TRANSLATIONS.pl[serviceKey] = serviceTranslations.pl;
                if (serviceTranslations.ru) TRANSLATIONS.ru[serviceKey] = serviceTranslations.ru;
              }
            });
          }
          
          // Add equipment translations
          if (roomType.equipment) {
            roomType.equipment.forEach((equip, index) => {
              let equipValue, equipLabel, equipTranslations;
              
              if (typeof equip === 'string') {
                equipValue = equip;
                equipLabel = equip;
                equipTranslations = {};
                roomType.equipment[index] = { value: equip, label: equip, translations: equipTranslations };
              } else if (typeof equip === 'object') {
                equipValue = equip.value || equip.label;
                equipLabel = equip.label || equip.value;
                equipTranslations = equip.translations || equip.translation || {};
                
                // Handle case where translation is full object with en/pl/ru structures
                // Extract equipment name from description in each language
                if (equipTranslations.en && typeof equipTranslations.en === 'object') {
                  const equipTranslationsNew = {};
                  Object.keys(equipTranslations).forEach(lang => {
                    const desc = equipTranslations[lang].description || '';
                    // Extract equipment name from description like "Living Room - TV Stand" -> "TV Stand"
                    const parts = desc.split('-');
                    const equipName = parts.length > 1 ? parts.slice(1).join('-').trim() : desc.trim();
                    equipTranslationsNew[lang] = equipName;
                  });
                  equipTranslations = equipTranslationsNew;
                }
              }
              
              if (equipValue) {
                const equipKey = `equipment_${equipValue.toLowerCase().replace(/\s+\/\//g, '_').replace(/\//g, '_')}`;
                if (!TRANSLATIONS.en[equipKey]) TRANSLATIONS.en[equipKey] = equipLabel;
                if (!TRANSLATIONS.pl[equipKey]) TRANSLATIONS.pl[equipKey] = equipTranslations.pl || equipLabel;
                if (!TRANSLATIONS.ru[equipKey]) TRANSLATIONS.ru[equipKey] = equipTranslations.ru || equipLabel;
                if (equipTranslations.en) TRANSLATIONS.en[equipKey] = equipTranslations.en;
                if (equipTranslations.pl) TRANSLATIONS.pl[equipKey] = equipTranslations.pl;
                if (equipTranslations.ru) TRANSLATIONS.ru[equipKey] = equipTranslations.ru;
              }
            });
          }
        });
      }
    } catch (e) {
      appLog('PRICES endpoint failed, trying default:', e);
      // Fallback to default endpoint
      const data = await loadJsonpData(webappUrl, callbackName);
      appLog('Data loaded from default endpoint:', data);
      
      // Parse data from default endpoint
      if (data.prices) {
        parseNewPriceDataFromDefault(data.prices);
      }
      if (data.allPrices) {
        parseNewPriceDataFromAllPrices(data.allPrices);
      }
      if (data.metadata) {
        parseNewMetadata(data.metadata);
      }
      // Store postcodes for delivery cost calculation
      if (data.postcodes) {
        estimateAppData.postcodes = data.postcodes;
        window.serviceState.postalCodes = new Set(data.postcodes.map(pc => window.normalizePostalCode(pc.postalCode)).filter(Boolean));
      }
    }
    
    // Populate form with data
    populateRoomTypes();
    populateFurnitureItems();
    populateAdditionalServices();
    populateCarpetOptions();
    
    // Update translations after data is loaded
    updateNewFormTranslations();
    
  } catch (error) {
    console.error('[NEW FORM] Error loading data:', error);
    // Show offline message instead of form
    showFormOfflineMessage();
  }
}

function parseNewPriceData(prices) {
  // The new PRICES tab has: Category, Description, Price Per Item, Price Per Sqm, Price Per Hour, Tooltip, Translation, Notes
  // Translation column contains JSON like {en:{category:"rooms", description:"bedroom-essential",...},pl:{},ru:{}}
  
  prices.forEach(row => {
    if (row.Translation) {
      try {
        const translation = JSON.parse(row.Translation);
        if (translation) {
          // Process rooms
          if (row.Category === 'Rooms' || row.Category === 'Equipment') {
            const descParts = row.Description.split('-');
            if (descParts.length >= 2) {
              const roomName = descParts[0].trim();
              const serviceType = descParts.slice(1).join('-').trim();
              
              // Find or create room type
              let roomType = window.ROOM_TYPES.find(r => r.value === roomName);
              if (!roomType) {
                roomType = {
                  value: roomName,
                  label: roomName,
                  equipment: [],
                  serviceTypes: [],
                  translations: {},
                  tooltip: row.Tooltip || ''
                };
                ROOM_TYPES.push(roomType);
              }
              
              // Add service type with translations
              const serviceTranslations = {};
              if (translation.en && translation.en.description) {
                serviceTranslations.en = translation.en.description.split('-').pop().trim();
              }
              if (translation.pl && translation.pl.description) {
                serviceTranslations.pl = translation.pl.description.split('-').pop().trim();
              }
              if (translation.ru && translation.ru.description) {
                serviceTranslations.ru = translation.ru.description.split('-').pop().trim();
              }
              
              roomType.serviceTypes.push({
                value: serviceType,
                label: serviceType,
                pricePerItem: row['Price Per Item'] || 0,
                pricePerSqm: row['Price Per Sqm'] || 0,
                pricePerHour: row['Price Per Hour'] || 0,
                tooltip: row.Tooltip || '',
                translations: serviceTranslations
              });
              
              // Add translations for room type
              if (translation.en) {
                roomType.translations.en = translation.en.description.split('-')[0].trim() || roomType.label;
              }
              if (translation.pl) {
                roomType.translations.pl = translation.pl.description.split('-')[0].trim() || roomType.label;
              }
              if (translation.ru) {
                roomType.translations.ru = translation.ru.description.split('-')[0].trim() || roomType.label;
              }
            }
          } 
          // Process furniture
          else if (row.Category === 'Furniture' || row.Category === 'Soft Furniture') {
            FURNITURE_ITEMS.push({
              value: row.Description,
              label: row.Description,
              pricePerItem: row['Price Per Item'] || 0,
              pricePerSqm: row['Price Per Sqm'] || 0,
              pricePerHour: row['Price Per Hour'] || 0,
              tooltip: row.Tooltip || '',
              translations: {
                en: translation.en ? translation.en.description : row.Description,
                pl: translation.pl ? translation.pl.description : row.Description,
                ru: translation.ru ? translation.ru.description : row.Description
              }
            });
          }
          // Process carpets
          else if (row.Category === 'Carpets') {
            // Handle carpet dirtiness levels
            DIRTINESS_LEVELS.push({
              value: row.Description,
              description: row.Description,
              translations: translation
            });
          }
          // Process additional services
          else if (row.Category === 'Additional Services' || row.Category === 'Services') {
            ADDITIONAL_SERVICES.push({
              value: row.Description,
              label: row.Description,
              pricePerItem: row['Price Per Item'] || 0,
              pricePerSqm: row['Price Per Sqm'] || 0,
              pricePerHour: row['Price Per Hour'] || 0,
              tooltip: row.Tooltip || '',
              translations: {
                en: translation.en ? translation.en.description : row.Description,
                pl: translation.pl ? translation.pl.description : row.Description,
                ru: translation.ru ? translation.ru.description : row.Description
              }
            });
          }
        }
      } catch (e) {
        console.error('[NEW FORM] Error parsing translation JSON:', e);
      }
    }
  });
  
  appLog('Parsed data:', {
    rooms: ROOM_TYPES.length,
    furniture: FURNITURE_ITEMS.length,
    services: ADDITIONAL_SERVICES.length,
    dirtiness: DIRTINESS_LEVELS.length
  });
}

function parseNewMetadata(metadata) {
  // Handle additional metadata from the webapp
  if (metadata.roomTypes) {
    // Merge with parsed data
    metadata.roomTypes.forEach(roomType => {
      const existing = ROOM_TYPES.find(r => r.value === roomType.value);
      if (existing) {
        Object.assign(existing, roomType);
      } else {
        ROOM_TYPES.push(roomType);
      }
    });
  }
  
  if (metadata.furnitureItems) {
    window.FURNITURE_ITEMS = [...window.FURNITURE_ITEMS, ...metadata.furnitureItems];
  }
  
  if (metadata.additionalServices) {
    window.ADDITIONAL_SERVICES = [...window.ADDITIONAL_SERVICES, ...metadata.additionalServices];
  }
  
  if (metadata.dirtinessLevels) {
    // Merge dirtiness levels, preserving objects with translations
    metadata.dirtinessLevels.forEach(level => {
      const exists = window.DIRTINESS_LEVELS.some(existing => 
        (typeof existing === 'string' && existing === level) ||
        (typeof existing === 'object' && (existing.value === level || existing.description === level)) ||
        (typeof level === 'object' && existing && (existing.value === level.value || existing.description === level.description))
      );
      if (!exists) {
        window.DIRTINESS_LEVELS.push(level);
      }
    });
  }
}

function parseNewPriceDataFromDefault(prices) {
  // Parse from default endpoint structure (prices by category)
  Object.entries(prices).forEach(([category, items]) => {
    items.forEach(row => {
      if (row.translation) {
        try {
          const translation = row.translation;
          
          // Process rooms
          if (category === 'Rooms' || category === 'Equipment') {
            const descParts = row.description.split('-');
            if (descParts.length >= 2) {
              const roomName = descParts[0].trim();
              const serviceType = descParts.slice(1).join('-').trim();
              
              // Find or create room type
              let roomType = window.ROOM_TYPES.find(r => r.value === roomName);
              if (!roomType) {
                roomType = {
                  value: roomName,
                  label: roomName,
                  equipment: [],
                  serviceTypes: [],
                  translations: {},
                  tooltip: row.tooltip || ''
                };
                ROOM_TYPES.push(roomType);
              }
              
              // Add service type with translations
              const serviceTranslations = {};
              if (translation.en && translation.en.description) {
                const desc = translation.en.description;
                serviceTranslations.en = desc.split('-').length > 1 ? desc.split('-').slice(1).join('-').trim() : serviceType;
              }
              if (translation.pl && translation.pl.description) {
                const desc = translation.pl.description;
                serviceTranslations.pl = desc.split('-').length > 1 ? desc.split('-').slice(1).join('-').trim() : serviceType;
              }
              if (translation.ru && translation.ru.description) {
                const desc = translation.ru.description;
                serviceTranslations.ru = desc.split('-').length > 1 ? desc.split('-').slice(1).join('-').trim() : serviceType;
              }
              
              roomType.serviceTypes.push({
                value: serviceType,
                label: serviceType,
                pricePerItem: row.pricePerItem,
                pricePerSqm: row.pricePerSqm,
                pricePerHour: row.pricePerHour,
                tooltip: row.tooltip,
                translations: serviceTranslations
              });
              
              // Add translations for room type
              if (translation.en && translation.en.description) {
                roomType.translations.en = translation.en.description.split('-')[0].trim();
              }
              if (translation.pl && translation.pl.description) {
                roomType.translations.pl = translation.pl.description.split('-')[0].trim();
              }
              if (translation.ru && translation.ru.description) {
                roomType.translations.ru = translation.ru.description.split('-')[0].trim();
              }
            }
          } 
          // Process furniture
          else if (category === 'Furniture' || category === 'Soft Furniture') {
            FURNITURE_ITEMS.push({
              value: row.description,
              label: row.description,
              pricePerItem: row.pricePerItem,
              pricePerSqm: row.pricePerSqm,
              pricePerHour: row.pricePerHour,
              tooltip: row.tooltip,
              translations: translation
            });
          }
          // Process mattresses
          else if (category === 'Mattresses') {
            if (!window.MATTRESS_ITEMS) {
              window.MATTRESS_ITEMS = [];
            }
            window.MATTRESS_ITEMS.push({
              value: row.description,
              label: row.description,
              pricePerItem: row.pricePerItem,
              pricePerSqm: row.pricePerSqm,
              pricePerHour: row.pricePerHour,
              tooltip: row.tooltip,
              translations: translation
            });
          }
          // Process carpets
          else if (category === 'Carpets') {
            if (!window.CARPET_ITEMS) {
              window.CARPET_ITEMS = [];
            }
            window.CARPET_ITEMS.push({
              value: row.description,
              label: row.description,
              pricePerItem: row.pricePerItem,
              pricePerSqm: row.pricePerSqm,
              pricePerHour: row.pricePerHour,
              tooltip: row.tooltip,
              translations: translation
            });
            DIRTINESS_LEVELS.push({
              value: row.description,
              description: row.description,
              translations: translation
            });
          }
          // Process additional services
          else if (category === 'Additional Services' || category === 'Services') {
            ADDITIONAL_SERVICES.push({
              value: row.description,
              label: row.description,
              pricePerItem: row.pricePerItem,
              pricePerSqm: row.pricePerSqm,
              pricePerHour: row.pricePerHour,
              tooltip: row.tooltip,
              translations: translation
            });
          }
        } catch (e) {
          console.error('[NEW FORM] Error parsing translation JSON:', e);
        }
      }
    });
  });
}

function parseNewPriceDataFromAllPrices(allPrices) {
  // Parse from allPrices array format
  allPrices.forEach(row => {
    if (row.category && row.description && row.translation) {
      try {
        const translation = row.translation;
        
        // Process rooms
        if (row.category === 'Rooms' || row.category === 'Equipment') {
          const descParts = row.description.split('-');
          if (descParts.length >= 2) {
            const roomName = descParts[0].trim();
            const serviceType = descParts.slice(1).join('-').trim();
            
            // Find or create room type
            let roomType = ROOM_TYPES.find(r => r.value === roomName);
            if (!roomType) {
              roomType = {
                value: roomName,
                label: roomName,
                equipment: [],
                serviceTypes: [],
                translations: {},
                tooltip: row.tooltip || ''
              };
              ROOM_TYPES.push(roomType);
            }
            
            // Add service type with translations
            const serviceTranslations = {};
            if (translation.en && translation.en.description) {
              const desc = translation.en.description;
              serviceTranslations.en = desc.split('-').length > 1 ? desc.split('-').slice(1).join('-').trim() : serviceType;
            }
            if (translation.pl && translation.pl.description) {
              const desc = translation.pl.description;
              serviceTranslations.pl = desc.split('-').length > 1 ? desc.split('-').slice(1).join('-').trim() : serviceType;
            }
            if (translation.ru && translation.ru.description) {
              const desc = translation.ru.description;
              serviceTranslations.ru = desc.split('-').length > 1 ? desc.split('-').slice(1).join('-').trim() : serviceType;
            }
            
            roomType.serviceTypes.push({
              value: serviceType,
              label: serviceType,
              pricePerItem: row.pricePerItem || 0,
              pricePerSqm: row.pricePerSqm || 0,
              pricePerHour: row.pricePerHour || 0,
              tooltip: row.tooltip || '',
              translations: serviceTranslations
            });
            
            // Add translations for room type
            if (translation.en && translation.en.description) {
              roomType.translations.en = translation.en.description.split('-')[0].trim() || roomType.label;
            }
            if (translation.pl && translation.pl.description) {
              roomType.translations.pl = translation.pl.description.split('-')[0].trim() || roomType.label;
            }
            if (translation.ru && translation.ru.description) {
              roomType.translations.ru = translation.ru.description.split('-')[0].trim() || roomType.label;
            }
          }
        } 
        // Process furniture
        else if (row.category === 'Furniture' || row.category === 'Soft Furniture') {
          FURNITURE_ITEMS.push({
            value: row.description,
            label: row.description,
            pricePerItem: row.pricePerItem || 0,
            pricePerSqm: row.pricePerSqm || 0,
            pricePerHour: row.pricePerHour || 0,
            tooltip: row.tooltip || '',
            translations: translation
          });
        }
        // Process carpets for dirtiness levels
        else if (row.category === 'Carpets') {
          DIRTINESS_LEVELS.push({
            value: row.description,
            description: row.description,
            translations: translation
          });
        }
        // Process additional services
        else if (row.category === 'Additional Services' || row.category === 'Services') {
          ADDITIONAL_SERVICES.push({
            value: row.description,
            label: row.description,
            pricePerItem: row.pricePerItem || 0,
            pricePerSqm: row.pricePerSqm || 0,
            pricePerHour: row.pricePerHour || 0,
            tooltip: row.tooltip || '',
            translations: translation
          });
        }
      } catch (e) {
        console.error('[NEW FORM] Error parsing translation JSON:', e);
      }
    }
  });
}

function showFormOfflineMessage() {
  const formContainer = document.getElementById('form-container');
  if (formContainer) {
    formContainer.innerHTML = `
      <div class="p-8 text-center">
        <p class="text-on-surface/80" data-i18n="form_offline_message"></p>
      </div>
    `;
  }
}

function populateRoomTypes() {
  appLog('populateRoomTypes called, ROOM_TYPES:', window.ROOM_TYPES ? window.ROOM_TYPES.length : 0, 'items');
  
  const select = document.getElementById('room-type-select');
  if (!select) {
    appLog('WARNING: room-type-select element not found');
    return;
  }
  
  appLog('Found room-type-select element, current options:', select.options.length);
  
  // Clear existing options (except the first one)
  while (select.options.length > 1) {
    select.remove(1);
  }
  
  appLog('Cleared existing options, now has:', select.options.length, 'options');
  
  // Add room types
  appLog('About to iterate ROOM_TYPES:', typeof window.ROOM_TYPES, Array.isArray(window.ROOM_TYPES), 'length:', window.ROOM_TYPES ? window.ROOM_TYPES.length : 'undefined');
  
  if (window.ROOM_TYPES && Array.isArray(window.ROOM_TYPES) && window.ROOM_TYPES.length > 0) {
    window.ROOM_TYPES.forEach((roomType, index) => {
      appLog('Adding room type option:', index, 'value:', roomType.value, 'label:', roomType.label, 'serviceTypes:', roomType.serviceTypes ? roomType.serviceTypes.length : 0);
      appLog('Room type translations:', roomType.translations);
    const option = document.createElement('option');
    option.value = roomType.value;
    option.textContent = getTranslatedText(roomType.translations, roomType.label);
    option.dataset.tooltip = roomType.tooltip || '';
    select.appendChild(option);
  });
  } else {
    appLog('ERROR: ROOM_TYPES is not valid - type:', typeof window.ROOM_TYPES, 'isArray:', Array.isArray(window.ROOM_TYPES));
  }
  
  appLog('Final room-type-select options count:', select.options.length);
  
  appLog('Room types populated:', window.ROOM_TYPES.length, 'items added to select element');
}

function populateFurnitureItems() {
  const container = document.getElementById('furniture-list');
  if (!container) return;
  
  if (window.FURNITURE_ITEMS.length === 0) {
    container.innerHTML = '<p class="text-center text-on-surface/60 text-sm py-4">Loading furniture items...</p>';
    return;
  }
  
  container.innerHTML = window.FURNITURE_ITEMS.map(item => {
    const translatedLabel = getTranslatedText(item.translations, item.label);
    const translatedTooltip = getTranslatedText(item.translations, item.tooltip || '');
    
    return `
      <div class="border border-primary/20 rounded-lg p-3 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <input type="checkbox" id="furniture-${item.value}" class="furniture-checkbox" data-item="${item.value}" data-price="${item.pricePerItem || 0}">
          <label for="furniture-${item.value}" class="cursor-pointer">
            <span class="font-medium">${translatedLabel}</span>
            ${translatedTooltip ? `<br><span class="text-xs text-on-surface/50">${translatedTooltip}</span>` : ''}
          </label>
        </div>
        <div class="flex items-center gap-2">
          <input type="number" value="1" min="1" class="w-16 p-2 border rounded text-center furniture-quantity" data-item="${item.value}" disabled>
          <span class="text-on-surface/60">x ${item.pricePerItem || 0} PLN</span>
        </div>
      </div>
    `;
  }).join('');
  
  // Setup furniture checkbox events
  container.querySelectorAll('.furniture-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const item = e.target.getAttribute('data-item');
      const quantityInput = container.querySelector(`.furniture-quantity[data-item="${item}"]`);
      
      if (e.target.checked) {
        // Add to furniture array
        window.newFormState.furniture.push({
          item: item,
          quantity: parseInt(quantityInput.value) || 1
        });
        quantityInput.disabled = false;
      } else {
        // Remove from furniture array
        window.newFormState.furniture = window.newFormState.furniture.filter(f => f.item !== item);
        quantityInput.disabled = true;
      }
      
      window.calculateNewFormPrice();
      window.checkBookServiceButton();
    });
  });
  
  // Setup quantity input events
  container.querySelectorAll('.furniture-quantity').forEach(input => {
    input.addEventListener('change', (e) => {
      const item = e.target.getAttribute('data-item');
      const value = parseInt(e.target.value) || 1;
      
      const furnitureItem = window.newFormState.furniture.find(f => f.item === item);
      if (furnitureItem) {
        furnitureItem.quantity = value;
        window.calculateNewFormPrice();
      }
    });
    
    // Only allow digits
    input.addEventListener('keydown', (e) => {
      if (!/^[\d\b]$/.test(e.key) && e.key !== 'ArrowUp' && e.key !== 'ArrowDown' && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab') {
        e.preventDefault();
      }
    });
  });
  
  appLog('Furniture items populated:', window.FURNITURE_ITEMS.length);
}

function populateAdditionalServices() {
  const container = document.getElementById('additional-services-list');
  if (!container) return;
  
  if (window.ADDITIONAL_SERVICES.length === 0) {
    container.innerHTML = '<p class="text-center text-on-surface/60 text-sm py-4">No additional services available</p>';
    return;
  }
  
  container.innerHTML = window.ADDITIONAL_SERVICES.map(service => {
    const translatedLabel = getTranslatedText(service.translations, service.label);
    const translatedTooltip = getTranslatedText(service.translations, service.tooltip || '');
    const price = service.pricePerItem || service.pricePerSqm || service.pricePerHour || 0;
    
    return `
      <label class="flex items-center gap-3 p-3 bg-white border rounded-lg cursor-pointer hover:shadow">
        <input type="checkbox" class="service-checkbox" data-value="${service.value}" data-price="${price}">
        <span class="flex-1">
          <span class="font-medium">${translatedLabel}</span>
          ${translatedTooltip ? `<br><span class="text-xs text-on-surface/50">${translatedTooltip}</span>` : ''}
        </span>
        <span class="text-on-surface/60">+ ${price} PLN</span>
      </label>
    `;
  }).join('');
  
  // Setup service checkbox events
  container.querySelectorAll('.service-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const value = e.target.getAttribute('data-value');
      const price = parseFloat(e.target.getAttribute('data-price')) || 0;
      
      if (e.target.checked) {
        window.newFormState.additionalServices.push(value);
      } else {
        window.newFormState.additionalServices = window.newFormState.additionalServices.filter(s => s !== value);
      }
      
      window.calculateNewFormPrice();
      window.checkBookServiceButton();
    });
  });
  
  appLog('Additional services populated:', window.ADDITIONAL_SERVICES.length);
}

function populateCarpetOptions() {
  // This will be used for dirtiness dropdown in carpet section
  // DIRTINESS_LEVELS is already populated
  appLog('Carpet options ready:', window.DIRTINESS_LEVELS.length);
}

function showRoomEquipment(roomTypeValue) {
  appLog('showRoomEquipment called with roomTypeValue:', roomTypeValue);
  const roomType = window.ROOM_TYPES.find(r => r.value === roomTypeValue);
  if (!roomType) {
    appLog('ERROR: Room type not found:', roomTypeValue);
    return;
  }
  
  appLog('Room type found:', roomType.value, 'serviceTypes:', roomType.serviceTypes ? roomType.serviceTypes.length : 0);
  if (roomType.serviceTypes) {
    appLog('Service types:', roomType.serviceTypes.map(st => ({value: st.value, translations: st.translations})));
  }
  
  const serviceContainer = document.getElementById('room-service-list');
  const serviceSectionContainer = document.getElementById('room-service-container');
  const equipmentContainer = document.getElementById('room-equipment-list');
  const equipmentSectionContainer = document.getElementById('room-equipment-container');
  
  if (!serviceContainer || !serviceSectionContainer) {
    appLog('ERROR: Service containers not found');
    return;
  }
  
  // Show service type selection
  serviceSectionContainer.classList.remove('hidden');
  
  // Populate service types as radio buttons
  if (roomType.serviceTypes && roomType.serviceTypes.length > 0) {
    appLog('Creating service type HTML for', roomType.serviceTypes.length, 'service types');
    serviceContainer.innerHTML = roomType.serviceTypes.map(serviceType => {
      const serviceKey = `service_type_${roomType.value.toLowerCase().replace(/\s+\/\//g, '_').replace(/\//g, '_')}_${serviceType.value.toLowerCase().replace(/\s+\/\//g, '_').replace(/\//g, '_')}`;
      appLog('Creating service type element with key:', serviceKey, 'value:', serviceType.value);
      return `
        <label class="flex items-center gap-2 px-3 py-1.5 bg-white border border-primary/20 rounded-lg cursor-pointer hover:bg-primary/5 text-sm">
          <input type="radio" name="room-service-type" class="room-service-radio" data-value="${serviceType.value}" data-price="${serviceType.pricePerItem || 0}">
          <span data-i18n="${serviceKey}"></span>
          ${serviceType.pricePerItem > 0 ? `<span class="text-primary text-xs ml-2">+${serviceType.pricePerItem} PLN</span>` : ''}
        </label>
      `;
    }).join('');
    
    // Setup service type radio buttons to enable Add Room button
    serviceContainer.querySelectorAll('.room-service-radio').forEach(radio => {
      radio.addEventListener('change', () => {
        const addRoomBtn = document.getElementById('add-room-btn');
        if (addRoomBtn) {
          addRoomBtn.disabled = false;
          addRoomBtn.classList.remove('opacity-50', 'cursor-not-allowed');
          addRoomBtn.classList.add('opacity-100', 'cursor-pointer');
        }
      });
    });
  } else {
    serviceContainer.innerHTML = '<p class="text-sm text-on-surface/60">No service types available for this room type</p>';
  }
  
  // Show equipment if available
  if (equipmentContainer && equipmentSectionContainer) {
    if (roomType.equipment && roomType.equipment.length > 0) {
      equipmentSectionContainer.classList.remove('hidden');
      equipmentContainer.innerHTML = roomType.equipment.map(equipment => {
        // Handle both string equipment and object equipment with translations
        const equipLabel = typeof equipment === 'string' ? equipment : (equipment.label || equipment.value);
        const equipValue = typeof equipment === 'string' ? equipment : (equipment.value || equipment.label);
        const equipPrice = typeof equipment === 'object' ? (equipment.pricePerItem || 0) : 0;
        const equipKey = `equipment_${equipValue.toLowerCase().replace(/\s+\/\//g, '_').replace(/\//g, '_')}`;
        
        return `
          <label class="flex items-center gap-2 px-3 py-1.5 bg-white border border-primary/20 rounded-lg cursor-pointer hover:bg-primary/5 text-sm">
            <input type="checkbox" class="room-equipment-checkbox" data-equipment="${equipValue}" data-price="${equipPrice}">
            <span data-i18n="${equipKey}"></span>
            ${equipPrice > 0 ? `<span class="text-primary text-xs ml-2">+${equipPrice} PLN</span>` : ''}
          </label>
        `;
      }).join('');
      
      // Update translations for dynamically added equipment elements
      appLog('Updating translations for equipment, currentLang:', currentLang);
      updateTranslationsForElements(currentLang);
      
      // Setup equipment checkboxes
      equipmentContainer.querySelectorAll('.room-equipment-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
          // Handle equipment selection
          appLog('Equipment selected:', e.target.getAttribute('data-equipment'));
        });
      });
    } else {
      equipmentSectionContainer.classList.add('hidden');
    }
  }
  
  // Update translations for dynamically added service type elements
  appLog('Updating translations for service types, currentLang:', currentLang);
  updateTranslationsForElements(currentLang);
}

function addRoomNew() {
  const selectedRoomType = window.newFormState.selectedRoomType;
  
  if (!selectedRoomType) {
    appLog('No room type selected');
    return;
  }
  
  const roomType = ROOM_TYPES.find(r => r.value === selectedRoomType);
  if (!roomType) return;
  
  // Get selected service type
  const serviceRadio = document.querySelector('.room-service-radio:checked');
  const selectedServiceType = serviceRadio ? serviceRadio.getAttribute('data-value') : roomType.serviceTypes[0]?.value || 'essential';
  
  // Get selected equipment
  const equipmentContainer = document.getElementById('room-equipment-list');
  const selectedEquipment = [];
  
  if (equipmentContainer) {
    equipmentContainer.querySelectorAll('.room-equipment-checkbox:checked').forEach(checkbox => {
      selectedEquipment.push(checkbox.getAttribute('data-equipment'));
    });
  }
  
  // Add room to state
  window.newFormState.rooms.push({
    roomType: selectedRoomType,
    equipment: selectedEquipment,
    serviceType: selectedServiceType
  });
  
  // Reset selection
  window.newFormState.selectedRoomType = null;
  const roomTypeSelect2 = document.getElementById('room-type-select');
  if (roomTypeSelect2) roomTypeSelect2.value = '';
  const serviceContainer2 = document.getElementById('room-service-container');
  if (serviceContainer2) serviceContainer2.classList.add('hidden');
  const equipmentContainer3 = document.getElementById('room-equipment-container');
  if (equipmentContainer3) equipmentContainer3.classList.add('hidden');
  
  // Clear service type selection
  document.querySelectorAll('.room-service-radio').forEach(radio => {
    radio.checked = false;
  });
  
  // Clear equipment selection
  if (equipmentContainer) {
    equipmentContainer.querySelectorAll('.room-equipment-checkbox').forEach(checkbox => {
      checkbox.checked = false;
    });
  }
  
  // Update summary
  renderRoomsSummary();
  
  // Calculate price
  window.calculateNewFormPrice();
  window.checkBookServiceButton();
  
  appLog('Room added:', selectedRoomType, 'with service:', selectedServiceType, 'and equipment:', selectedEquipment);
}

function renderRoomsSummary() {
  const container = document.getElementById('rooms-summary');
  if (!container) return;
  
  if (window.newFormState.rooms.length === 0) {
    container.innerHTML = '<p class="text-sm text-on-surface/60 text-center py-4"></p>';
    return;
  }
  
  const html = window.newFormState.rooms.map((room, index) => {
    const roomType = ROOM_TYPES.find(r => r.value === room.roomType);
    if (!roomType) return '';
    
    const roomKey = `room_type_${roomType.value.toLowerCase().replace(/\s+\/\//g, '_').replace(/\//g, '_')}`;
    const serviceType = roomType.serviceTypes.find(st => st.value === room.serviceType);
    const serviceKey = serviceType ? `service_type_${roomType.value.toLowerCase().replace(/\s+\/\//g, '_').replace(/\//g, '_')}_${serviceType.value.toLowerCase().replace(/\s+\/\//g, '_').replace(/\//g, '_')}` : null;
    const servicePrice = serviceType ? (serviceType.pricePerItem || 0) : 0;
    
    // Build equipment list with translations and prices
    let equipmentHtml = '';
    if (room.equipment && room.equipment.length > 0) {
      const equipmentItems = room.equipment.map(equipValue => {
        const equip = roomType.equipment.find(e => (typeof e === 'string' ? e : e.value) === equipValue);
        if (equip) {
          const equipLabel = typeof equip === 'string' ? equip : (equip.label || equip.value);
          const equipValueActual = typeof equip === 'string' ? equip : (equip.value || equip.label);
          const equipPrice = typeof equip === 'object' ? (equip.pricePerItem || 0) : 0;
          const equipKey = `equipment_${equipValueActual.toLowerCase().replace(/\s+\/\//g, '_').replace(/\//g, '_')}`;
          return equipPrice > 0 ? `<span data-i18n="${equipKey}"></span> +${equipPrice} PLN` : `<span data-i18n="${equipKey}"></span>`;
        }
        return ''; // fallback
      }).join(', ');
      equipmentHtml = `<br><span data-i18n="form_room_equipment"></span>: ${equipmentItems}`;
    }
    
    return `
      <div class="border border-primary/20 rounded-lg p-3 flex items-center justify-between">
        <div>
          <span class="font-medium" data-i18n="${roomKey}"></span>
          <div class="text-xs text-on-surface/60">
            <span data-i18n="${serviceKey || ''}"></span> ${servicePrice > 0 ? `+ ${servicePrice} PLN` : ''}
            ${equipmentHtml}
          </div>
        </div>
        <button type="button" onclick="removeRoomNew(${index})" class="text-rose-400 hover:text-rose-600 transition-colors">
          <span class="material-symbols-outlined">delete</span>
        </button>
      </div>
    `;
  }).join('');
  
  container.innerHTML = html;
  
  // Update translations for dynamically added elements
  setTimeout(() => updateTranslationsForElements(currentLang), 0);
}

function removeRoomNew(index) {
  window.newFormState.rooms.splice(index, 1);
  renderRoomsSummary();
  window.calculateNewFormPrice();
  window.checkBookServiceButton();
}

function addCarpetNew() {
  // Get default dirtiness - use first available or empty string
  let dirtinessValue = '';
  if (window.DIRTINESS_LEVELS && window.DIRTINESS_LEVELS.length > 0) {
    const defaultDirtiness = window.DIRTINESS_LEVELS[0];
    dirtinessValue = typeof defaultDirtiness === 'string' ? defaultDirtiness : (defaultDirtiness.description || defaultDirtiness.value || '');
  }
  appLog('Adding carpet with default dirtiness:', dirtinessValue, 'DIRTINESS_LEVELS count:', window.DIRTINESS_LEVELS ? window.DIRTINESS_LEVELS.length : 0);
  
  window.newFormState.carpets.push({
    width: 0,
    length: 0,
    dirtiness: dirtinessValue
  });
  renderCarpetsNew();
  window.calculateNewFormPrice();
  window.checkBookServiceButton();
}

function addMattressNew() {
  window.newFormState.mattresses.push({});
  renderMattressesNew();
  window.calculateNewFormPrice();
  window.checkBookServiceButton();
}

function renderCarpetsNew() {
  const container = document.getElementById('carpet-items');
  if (!container) return;
  
  container.innerHTML = window.newFormState.carpets.map((carpet, index) => `
    <div class="border border-primary/20 rounded-lg p-3">
      <div class="flex flex-wrap gap-3 items-end">
        <div class="flex-1 min-w-[120px]">
          <label class="block text-xs font-medium mb-1" data-i18n="carpet_width"></label>
          <input type="number" value="${carpet.width || ''}" onchange="updateCarpetNew(${index}, 'width', this.value); checkCarpetDimensions(${index})" min="0" step="0.01" class="w-full p-2 border rounded text-sm">
        </div>
        <div class="flex-1 min-w-[120px]">
          <label class="block text-xs font-medium mb-1" data-i18n="carpet_length"></label>
          <input type="number" value="${carpet.length || ''}" onchange="updateCarpetNew(${index}, 'length', this.value); checkCarpetDimensions(${index})" min="0" step="0.01" class="w-full p-2 border rounded text-sm">
        </div>
        <div class="flex-1 min-w-[150px]">
          <label class="block text-xs font-medium mb-1" data-i18n="carpet_dirtiness"></label>
          <select onchange="updateCarpetNew(${index}, 'dirtiness', this.value); window.calculateNewFormPrice(); window.checkBookServiceButton();" class="w-full p-2 border rounded text-sm">
            ${window.DIRTINESS_LEVELS.map(level => {
              const levelObj = typeof level === 'string' ? {description: level, translations: {}} : level;
              const displayText = getTranslatedText(levelObj.translations, levelObj.description || levelObj.label || levelObj.value || level);
              return `<option value="${levelObj.description || levelObj.value || level}" ${carpet.dirtiness === (levelObj.description || levelObj.value || level) ? 'selected' : ''}>${displayText}</option>`;
            }).join('')}
          </select>
        </div>
        <button type="button" onclick="removeCarpetNew(${index})" class="text-rose-400 hover:text-rose-600 transition-colors pb-2 flex-shrink-0">
          <span class="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  `).join('');
  
  if (window.newFormState.carpets.length === 0) {
    container.innerHTML = '<p class="text-center text-on-surface/60 text-sm py-4" data-i18n="form_no_carpets"></p>';
  }
  
  // Update translations for dynamically added elements
  setTimeout(() => updateTranslationsForElements(currentLang), 0);
}

function renderMattressesNew() {
  const container = document.getElementById('mattress-items');
  if (!container) return;
  
  container.innerHTML = window.newFormState.mattresses.map((mattress, index) => `
    <div class="border border-primary/20 rounded-lg p-3 space-y-2">
      <div>
        <label class="block text-xs font-medium mb-1">Mattress ${index + 1}</label>
        <p class="text-sm text-on-surface/60">Standard cleaning</p>
      </div>
      <div class="flex justify-end pt-2">
        <button type="button" onclick="removeMattressNew(${index})" class="text-rose-400 hover:text-rose-600 transition-colors">
          <span class="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  `).join('');
  
  if (window.newFormState.mattresses.length === 0) {
    container.innerHTML = '<p class="text-center text-on-surface/60 text-sm py-4">No mattresses added yet</p>';
  }
}

function checkCarpetDimensions(index) {
  const carpet = window.newFormState.carpets[index];
  if (carpet && carpet.width > 0 && carpet.length > 0 && carpet.dirtiness && carpet.dirtiness !== '') {
    window.calculateNewFormPrice();
    window.checkBookServiceButton();
  }
}

function updateCarpetNew(index, field, value) {
  if (window.newFormState.carpets[index]) {
    if (field === 'width' || field === 'length') {
      window.newFormState.carpets[index][field] = parseFloat(value) || 0;
    } else {
      window.newFormState.carpets[index][field] = value;
    }
  }
}

function removeCarpetNew(index) {
  window.newFormState.carpets.splice(index, 1);
  renderCarpetsNew();
  window.calculateNewFormPrice();
  window.checkBookServiceButton();
}

function removeMattressNew(index) {
  window.newFormState.mattresses.splice(index, 1);
  renderMattressesNew();
  window.calculateNewFormPrice();
  window.checkBookServiceButton();
}

function calculateNewFormPrice() {
  let total = 0;
  const priceEl = document.getElementById('total-price');
  
  if (!priceEl) return;
  
  // Rooms pricing
  window.newFormState.rooms.forEach(room => {
    const roomType = ROOM_TYPES.find(r => r.value === room.roomType);
    if (roomType) {
      // Find the selected service type
      const serviceType = roomType.serviceTypes.find(st => st.value === room.serviceType);
      if (serviceType) {
        total += serviceType.pricePerItem;
      }
      
      // Add equipment prices for this room
      if (room.equipment && room.equipment.length > 0) {
        room.equipment.forEach(equipName => {
          const equipment = roomType.equipment.find(e => e.value === equipName || e.label === equipName);
          if (equipment) {
            total += equipment.pricePerItem;
            appLog('Adding equipment price:', equipName, 'price:', equipment.pricePerItem);
          }
        });
      }
    }
  });
  
  // Furniture pricing
  window.newFormState.furniture.forEach(furn => {
    const item = window.FURNITURE_ITEMS.find(i => i.value === furn.item);
    if (item) {
      total += item.pricePerItem * furn.quantity;
    }
  });
  
  // Carpets pricing (based on area and dirtiness level)
  if (window.CARPET_ITEMS && window.CARPET_ITEMS.length > 0) {
    window.newFormState.carpets.forEach(carpet => {
      // Check that all required fields are set (width, length, dirtiness)
      if (carpet.width !== undefined && carpet.width !== null && 
          carpet.length !== undefined && carpet.length !== null &&
          carpet.dirtiness !== undefined && carpet.dirtiness !== null && carpet.dirtiness !== '') {
        // Find the carpet item that matches the dirtiness level
        const carpetItem = window.CARPET_ITEMS.find(item => 
          item.description === carpet.dirtiness || 
          item.value === carpet.dirtiness ||
          item.label === carpet.dirtiness
        );
        if (carpetItem && carpetItem.pricePerSqm !== undefined && carpetItem.pricePerSqm !== null) {
          const area = carpet.width * carpet.length;
          const carpetPrice = area * carpetItem.pricePerSqm;
          appLog('Carpet price:', carpetPrice, 'area:', area, 'rate:', carpetItem.pricePerSqm, 'dirtiness:', carpet.dirtiness);
          total += carpetPrice;
        } else {
          appLog('WARNING: No carpet item found for dirtiness:', carpet.dirtiness, 'Available:', window.CARPET_ITEMS ? window.CARPET_ITEMS.map(i => i.description) : 'CARPET_ITEMS not set');
        }
      }
    });
  } else {
    appLog('WARNING: CARPET_ITEMS is empty or not set');
  }
  
  // Mattresses pricing
  if (window.MATTRESS_ITEMS) {
    window.newFormState.mattresses.forEach(mattress => {
      const mattressItem = window.MATTRESS_ITEMS[0];
      if (mattressItem) {
        total += mattressItem.pricePerItem;
      }
    });
  }
  
  // Additional services
  window.newFormState.additionalServices.forEach(serviceValue => {
    const service = window.ADDITIONAL_SERVICES.find(s => s.value === serviceValue);
    if (service) {
      total += service.pricePerItem;
    }
  });
  
  // Transportation cost based on postal code
  if (window.newFormState.deliveryCost) {
    total += window.newFormState.deliveryCost;
  }
  
  // Update total display
  priceEl.textContent = Math.round(total * 100) / 100;
  
  appLog('Price calculated:', total);
  
  return total;
}

function validateAndUpdatePostalCode(postalCode) {
  const normalizedCode = window.normalizePostalCode(postalCode);
  const postalInput = document.getElementById('postal-code');
  
  // Store in state
  window.newFormState.postalCode = postalCode;
  
  // Validate against known postal codes
  if (window.serviceState.postalCodes && window.serviceState.postalCodes.size > 0) {
    const isValid = window.serviceState.postalCodes.has(normalizedCode);
    
    if (isValid) {
      // Valid postal code - get delivery info
      const postcodeData = estimateAppData.postcodes && estimateAppData.postcodes.find(pc => 
        window.normalizePostalCode(pc.postalCode) === normalizedCode
      );
      
      if (postcodeData) {
        window.newFormState.deliveryCost = postcodeData.deliveryCost || 0;
        window.newFormState.deliveryDistance = postcodeData.deliveryDistance || 0;
        appLog('Valid postal code:', postalCode, 'Delivery cost:', window.newFormState.deliveryCost);
      } else {
        window.newFormState.deliveryCost = 0;
        window.newFormState.deliveryDistance = 0;
      }
      
      // Update UI to show valid state
      if (postalInput) {
        postalInput.classList.remove('border-red-500', 'border-rose-500');
        postalInput.classList.add('border-green-500', 'border-primary');
      }
      
      // Recalculate price with delivery cost
      window.calculateNewFormPrice();
      window.checkBookServiceButton();
      
      return true;
    } else {
      // Invalid postal code
      window.newFormState.deliveryCost = 0;
      window.newFormState.deliveryDistance = 0;
      
      if (postalInput) {
        postalInput.classList.remove('border-green-500', 'border-primary');
        postalInput.classList.add('border-red-500', 'border-rose-500');
      }
      
      // Still recalculate (without delivery cost)
      window.calculateNewFormPrice();
      window.checkBookServiceButton();
      
      return false;
    }
  } else {
    // No postal code data loaded yet
    window.newFormState.postalCode = postalCode;
    window.newFormState.deliveryCost = 0;
    window.newFormState.deliveryDistance = 0;
    window.calculateNewFormPrice();
    window.checkBookServiceButton();
    return null;
  }
}

function checkBookServiceButton() {
  const btn = document.getElementById('book-service-btn');
  if (!btn) return;
  
  // Check if any service is selected
  const hasServices = window.newFormState.rooms.length > 0 || 
                     window.newFormState.furniture.length > 0 || 
                     window.newFormState.carpets.length > 0 || 
                     window.newFormState.mattresses.length > 0 || 
                     window.newFormState.windows > 0 ||
                     window.newFormState.additionalServices.length > 0;
  
  window.newFormState.hasServices = hasServices;
  
  if (hasServices) {
    btn.classList.remove('bg-primary/50', 'text-white/70', 'cursor-not-allowed', 'opacity-70', 'disabled');
    btn.classList.add('bg-primary', 'text-white', 'cursor-pointer');
  } else {
    btn.classList.add('bg-primary/50', 'text-white/70', 'cursor-not-allowed', 'opacity-70', 'disabled');
    btn.classList.remove('bg-primary', 'text-white', 'cursor-pointer');
  }
}

function toggleContactForm() {
  const btn = document.getElementById('book-service-btn');
  const contactForm = document.getElementById('contact-form');
  
  if (!btn || !contactForm) return;
  
  // Toggle contact form visibility
  const isVisible = !contactForm.classList.contains('hidden');
  
  if (isVisible) {
    // Hide contact form
    contactForm.classList.add('hidden');
    btn.innerHTML = '<span data-i18n="form_review"></span>';
    
    // Enable the button again
    btn.classList.remove('disabled', 'opacity-70', 'cursor-not-allowed');
    btn.classList.add('cursor-pointer');
  } else {
    // Show contact form
    contactForm.classList.remove('hidden');
    btn.innerHTML = '<span data-i18n="form_hide_contact"></span>';
    
    // Disable the button until contact info is filled
    btn.classList.add('disabled', 'opacity-70', 'cursor-not-allowed');
    btn.classList.remove('cursor-pointer');
    
    // Focus first input
    const firstInput = contactForm.querySelector('input');
    if (firstInput) firstInput.focus();
  }
  
  // Update button text with translation
  const btnSpan = btn.querySelector('[data-i18n]');
  if (btnSpan) {
    const key = btnSpan.getAttribute('data-i18n');
    btnSpan.textContent = translate(key);
  }
  
  // Update confirm button state
  checkContactFormValidity();
}

function checkContactFormValidity() {
  const confirmBtn = document.getElementById('confirm-booking');
  if (!confirmBtn) return;
  
  const fullname = document.getElementById('fullname')?.value?.trim();
  const phone = document.getElementById('phone')?.value?.trim();
  const email = document.getElementById('email')?.value?.trim();
  
  const isValid = fullname && phone && email;
  
  if (isValid) {
    confirmBtn.classList.remove('disabled', 'opacity-70');
  } else {
    confirmBtn.classList.add('disabled', 'opacity-70');
  }
}

async function submitNewBooking(e) {
  if (e) e.preventDefault();
  
  const confirmBtn = document.getElementById('confirm-booking');
  const spinner = confirmBtn?.querySelector('.spinner');
  const buttonText = confirmBtn?.querySelector('.button-text');
  
  // Show loading state
  if (confirmBtn) confirmBtn.disabled = true;
  if (spinner) spinner.style.display = 'inline-flex';
  if (buttonText) buttonText.classList.add('opacity-50');
  
  try {
    // Collect form data
    const formData = {
      rooms: window.newFormState.rooms,
      furniture: window.newFormState.furniture,
      carpets: window.newFormState.carpets,
      mattresses: window.newFormState.mattresses,
      windows: window.newFormState.windows,
      additionalServices: window.newFormState.additionalServices,
      postalCode: window.newFormState.postalCode,
      address: document.getElementById('address')?.value,
      fullname: document.getElementById('fullname')?.value,
      phone: document.getElementById('phone')?.value,
      email: document.getElementById('email')?.value,
      total: parseFloat(document.getElementById('total-price')?.textContent || '0'),
      language: currentLang
    };
    
    appLog('Submitting booking:', formData);
    
    // Here you would submit to the webapp backend
    // For now, just show success message
    const contactForm = document.getElementById('contact-form');
    const successMsg = document.getElementById('success-msg');
    
    if (contactForm) contactForm.classList.add('hidden');
    if (successMsg) {
      successMsg.classList.remove('hidden');
      // Translate success message
      successMsg.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translate(key);
      });
    }
    
    // Reset form state
    resetNewForm();
    
  } catch (error) {
    console.error('[NEW FORM] Submission error:', error);
  } finally {
    // Hide loading state
    if (confirmBtn) confirmBtn.disabled = false;
    if (spinner) spinner.style.display = 'none';
    if (buttonText) buttonText.classList.remove('opacity-50');
  }
}

function resetNewForm() {
  // Reset form state
  window.newFormState = {
    selectedSection: 'rooms',
    selectedRoomType: null,
    rooms: [],
    furniture: [],
    carpets: [],
    mattresses: [],
    windows: 0,
    additionalServices: [],
    postalCode: null,
    deliveryCost: 0,
    deliveryDistance: 0,
    hasServices: false,
    contactFormVisible: false
  };
  
  // Reset UI
  const roomTypeSelect = document.getElementById('room-type-select');
  if (roomTypeSelect) roomTypeSelect.value = '';
  const equipmentContainer = document.getElementById('room-equipment-container');
  if (equipmentContainer) equipmentContainer.classList.add('hidden');
  const windowsInput = document.getElementById('windows-count');
  if (windowsInput) windowsInput.value = '0';
  const postalInput = document.getElementById('postal-code');
  if (postalInput) {
    postalInput.value = '';
    postalInput.classList.remove('border-green-500', 'border-primary', 'border-red-500', 'border-rose-500');
    postalInput.classList.add('border-primary/30');
  }
  
  // Re-render sections
  renderRoomsSummary();
  renderCarpetsNew();
  renderMattressesNew();
  
  // Reset total
  const totalPriceEl = document.getElementById('total-price');
  if (totalPriceEl) totalPriceEl.textContent = '0';
  
  // Reset contact form
  const contactFormEl = document.getElementById('contact-form');
  if (contactFormEl) contactFormEl.classList.add('hidden');
  const addressEl = document.getElementById('address');
  if (addressEl) addressEl.value = '';
  const fullnameEl = document.getElementById('fullname');
  if (fullnameEl) fullnameEl.value = '';
  const phoneEl = document.getElementById('phone');
  if (phoneEl) phoneEl.value = '';
  const emailEl = document.getElementById('email');
  if (emailEl) emailEl.value = '';
  
  // Reset Book Service button
  window.checkBookServiceButton();
}

// Helper function to get translated text
function getTranslatedText(translations, fallback) {
  if (!translations) return fallback || '';
  
  // Handle new structure where translations[lang] is an object with description field
  if (translations[currentLang] && typeof translations[currentLang] === 'object') {
    return translations[currentLang].description || translations[currentLang].label || fallback || '';
  }
  
  // Handle old structure where translations[lang] is a string
  if (translations[currentLang]) {
    return translations[currentLang];
  }
  
  // Fallback to English
  if (translations.en) {
    if (typeof translations.en === 'object') {
      return translations.en.description || translations.en.label || fallback || '';
    }
    return translations.en;
  }
  
  return fallback || '';
}

// Add missing translation keys for the new form
function addMissingTranslations() {
  const missingTranslations = {
    en: {
      form_hide_contact: "Hide Contact Form"
    },
    pl: {
      form_hide_contact: "Ukryj formularz kontaktowy"
    },
    ru: {
      form_hide_contact: "Скрыть форму контакта"
    }
  };
  
  Object.keys(missingTranslations).forEach(lang => {
    if (TRANSLATIONS[lang]) {
      Object.assign(TRANSLATIONS[lang], missingTranslations[lang]);
    }
  });
}

// Initialize the application when DOM is ready
document.addEventListener("DOMContentLoaded", async ()=>{
  appLog('DOMContentLoaded fired');
  initLanguage();
  addMissingTranslations();
  const yearEl=document.getElementById("copyright-year");
  if(yearEl)yearEl.textContent=new Date().getFullYear();
  initCityBranding(document.querySelector("select"));
  initFormSubmission();
  
  // Load comprehensive data ONCE and use for both map and form
  const webappUrl = 'https://script.google.com/macros/s/AKfycbxDMuovrEITeoHZh3P37KwB3_2Xc03TwXqTSJLuSo5dj31WGIwKSovhP30kquCyXnyq2Q/exec';
  const callbackName = `mainDataCallback${Date.now()}${Math.random().toString(36).slice(2).replace(/[^\w$]/g, '')}`;
  
  try {
    const comprehensiveData = await loadJsonpData(webappUrl, callbackName);
    appLog('Comprehensive data loaded:', comprehensiveData.type, 'roomTypes count:', comprehensiveData.roomTypes ? comprehensiveData.roomTypes.length : 0);
    
    // Debug: log the first few room types if they exist
    if (comprehensiveData.roomTypes && comprehensiveData.roomTypes.length > 0) {
      appLog('First room type:', comprehensiveData.roomTypes[0]);
    }
    
    // Store data globally
    window.comprehensiveData = comprehensiveData;
    estimateAppData.prices = comprehensiveData.prices || estimateAppData.prices;
    estimateAppData.postcodes = comprehensiveData.postcodes || comprehensiveData.postalCodes || estimateAppData.postcodes;
    estimateAppData.mapLayers = comprehensiveData.mapLayers || estimateAppData.mapLayers;
    estimateAppData.metadata = comprehensiveData.metadata || estimateAppData.metadata;
    
    appLog('Stored roomTypes:', comprehensiveData.roomTypes ? comprehensiveData.roomTypes.length : 0, 'items');
    appLog('Metadata roomTypes:', comprehensiveData.metadata && comprehensiveData.metadata.roomTypes ? comprehensiveData.metadata.roomTypes.length : 0, 'items');
    
    // Initialize map with comprehensive data
    await initMapWithData(comprehensiveData);
    
    appLog('About to initialize form with comprehensive data');
    // Initialize form
    initNewFormWithData(comprehensiveData);
    console.log('[DEBUG] Form initialized successfully');
  } catch (error) {
    appLog('ERROR: Failed to load comprehensive data:', error.message);
    // Fallback: initialize without data
    initMap();
    initNewForm();
    appLog('Form initialized successfully (fallback path)');
    // Check the final state of room types
    const roomSelect = document.getElementById('room-type-select');
    if (roomSelect) {
      appLog('Final check - room-type-select has', roomSelect.options.length, 'options');
    } else {
      appLog('Final check - room-type-select element not found');
    }
  }
});
