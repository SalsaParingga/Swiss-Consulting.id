// ==========================================
// LANGUAGE SYSTEM
// ==========================================

let currentLanguage = localStorage.getItem("language") || "en";


// ==========================================
// TRANSLATION DATA
// ==========================================

const translations = {

    // ==========================================
    // ENGLISH
    // ==========================================

    en: {

        // =========================
        // NAVIGATION
        // =========================

        "nav.home": "Home",
        "nav.about": "About",
        "nav.services": "Services",
        "nav.portfolio": "Portfolio",
        "nav.contact": "Contact",


        // =========================
        // HOME
        // =========================

        "hero.subtitle":
            "WELCOME TO SWISS CONSULTING",

        "hero.title":
            "Swiss Precision. Indonesian Hospitality. Flawless Execution.",

        "hero.description":
            "Over two decades of Swiss construction mastery, protecting your luxury property investment in Indonesia.",

        "home.about":
            "ABOUT US",

        "home.about.title":
            "22 Years of Swiss Construction Experience",

        "home.about.description":
            " Building a luxury villa or premium commercial property requires more than excellent design — it requires precision, strict quality standards, and experienced supervision. With over 22 years of experience in the Swiss construction industry, Steven Riehl helps property owners and investors ensure every project is built to the highest standards. Now based in Bandung, he provides independent construction supervision and quality consulting throughout Indonesia.",

        "home.about.button":
            "READ MORE",

        "home.services":
            "OUR SERVICES",

        "home.services.title":
            "What We Do",

        "home.services.description":
            "Professional Swiss construction supervision, quality consulting, and project management for luxury developments in Indonesia.",

        "home.services.button":
            "READ MORE",


        // =========================
        // ABOUT
        // =========================

        "about.hero.title":
            "About Us",

        "about.hero.description":
            "Bringing Swiss Engineering Excellence to Luxury Construction Projects in Indonesia.",

        "about.who":
            "WHO WE ARE",

        "about.title":
            "22 Years of Swiss Construction Experience",

        "about.description1":
            "Building luxury villas and premium commercial properties requires much more than excellent design. It demands precision, strict supervision, and uncompromising quality standards.",

        "about.description2":
            "Steven Riehl was trained in Switzerland and has spent more than two decades working on high-end construction projects following European quality standards.",

        "about.description3":
            "Today he helps investors and property owners throughout Indonesia protect their investment with independent construction supervision and professional quality consulting.",

        "about.contact":
            "Contact Us",

        "about.portfolio":
            "View Portfolio",

        "about.why.subtitle":
            "WHY CHOOSE US",

        "about.why.title":
            "Why Clients Trust Swiss Consulting",

        "about.why.card1.title":
            "22+ Years Experience",

        "about.why.card1.description":
            "Professional Swiss construction experience.",

        "about.why.card2.title":
            "Quality Control",

        "about.why.card2.description":
            "Every project follows great standards.",

        "about.why.card3.title":
            "Independent Supervision",

        "about.why.card3.description":
            "Protecting clients throughout every construction stage.",

        "about.purpose.title":
            "Our Purpose",

        "about.purpose.description":
            "To become Indonesia's trusted Swiss consulting partner and the preferred choice for businesses seeking excellence and expertise.",

        "about.mission.title":
            "Mission",

        "about.mission.description":
            "Deliver professional supervision and quality consulting for your project.",

        "about.values.title":
            "Values",

        "about.values.precision":
            "Swiss Precision",

        "about.values.integrity":
            "Integrity",

        "about.values.transparency":
            "Transparency",

        "about.values.professionalism":
            "Professionalism",

        "about.counter.experience":
            "Years Experience",

        "about.counter.quality":
            "Quality Commitment",

        "about.counter.projects":
            "Projects",

        "about.counter.support":
            "Support",

        "about.cta.title":
            "Ready to Build with Swiss Quality?",

        "about.cta.description":
            "Let's discuss your project today.",

        "about.cta.button":
            "Contact Now",


        // =========================
        // SERVICES
        // =========================

        "services.hero.subtitle":
            "OUR SERVICES",

        "services.hero.title":
            "Swiss Construction Supervision & Quality Consulting",

        "services.hero.description":
            "Professional Swiss construction supervision, quality inspections, and project consulting for luxury villas and premium commercial properties across Indonesia.",

        "services.section.subtitle":
            "WHAT WE DO",

        "services.section.title":
            "Services We Provide",

        "services.section.description":
            "Professional services tailored to meet your construction and quality requirements.",

        "services.service1.title":
            "Owner Representation",

        "services.service1.description":
            "Representing property owners during construction, especially for overseas investors.",

        "services.service2.title":
            "Construction Site Supervision",

        "services.service2.description":
            "Independent supervision throughout every stage of construction to ensure Swiss-quality execution.",

        "services.service3.title":
            "Quality Control Inspection",

        "services.service3.description":
            "Detailed inspection of workmanship, materials, and construction quality.",

        "services.service4.title":
            "Technical Consultation",

        "services.service4.description":
            "Professional advice before and during construction to minimize costly mistakes.",

        "services.service5.title":
            "Tile & Finish Inspection",

        "services.service5.description":
            "Swiss precision inspection for tiling, alignment, waterproofing, and finishing.",

        "services.service6.title":
            "Luxury Villa Supervision",

        "services.service6.description":
            "Specialized supervision for luxury villas, private residences, and premium homes.",

        "services.process.subtitle":
            "OUR PROCESS",

        "services.process.title":
            "How We Work",

        "services.process.description":
            "Every project follows a structured workflow to ensure quality, efficiency, and client satisfaction.",

        "services.process.step1.title":
            "Consultation",

        "services.process.step1.description":
            "Understanding your project, requirements and expectations.",

        "services.process.step2.title":
            "Site Assessment",

        "services.process.step2.description":
            "Reviewing drawings, contractors, and construction plans.",

        "services.process.step3.title":
            "Construction Supervision",

        "services.process.step3.description":
            "Monitoring workmanship, materials, construction progress, and quality standards.",

        "services.process.step4.title":
            "Final Quality Inspection",

        "services.process.step4.description":
            "Conducting a comprehensive inspection before project handover to ensure Swiss-quality execution.",

        "services.faq.subtitle":
            "FAQ",

        "services.faq.title":
            "Frequently Asked Questions",

        "services.faq.q1":
            "Do you supervise private residential projects?",

        "services.faq.a1":
            "Yes. We supervise villas, private homes, and commercial buildings.",

        "services.faq.q2":
            "Can you work with my existing contractor?",

        "services.faq.a2":
            "Yes. We provide independent supervision without replacing your contractor.",

        "services.faq.q3":
            "Do you work with overseas investors?",

        "services.faq.a3":
            "Absolutely. We provide reports, photos, and regular updates.",

        "services.faq.q4":
            "Which areas do you serve?",

        "services.faq.a4":
            "Bandung, Jakarta, and selected projects throughout Indonesia.",

        "services.cta.title":
            "Ready to Build with Swiss Quality?",

        "services.cta.description":
            "Let's discuss your project today.",

        "services.cta.button":
            "Get Started",


        // ==========================================
        // PORTFOLIO - ENGLISH
        // ==========================================

        "portfolio.hero.subtitle":
            "OUR WORKS",

        "portfolio.hero.title":
            "Swiss Construction Reference Project by Steven Riehl",

        "portfolio.hero.description":
            "Explore our reference project of luxury villas, commercial buildings, and construction projects completed with Swiss quality standards.",

        "portfolio.section.subtitle":
            "PORTFOLIO",

        "portfolio.section.title":
            "Featured Construction Projects",

        "portfolio.section.description":
            "Showcasing selected construction supervision, quality consulting, and premium building projects delivered with Swiss engineering excellence.",

        "portfolio.filter.all":
            "All",

        "portfolio.filter.reference":
            "Reference Project",

        "portfolio.project1.title":
            "Marble Interior",

        "portfolio.project1.description":
            "Elegant stone finishes with refined details.",

        "portfolio.project2.title":
            "Modern Garage",

        "portfolio.project2.description":
            "Spacious design with clean architectural lines.",

        "portfolio.project3.title":
            "Luxury Hall",

        "portfolio.project3.description":
            "Sophisticated interior with premium finishes.",

        "portfolio.project4.title":
            "Modern Kitchen Cabinetry",

        "portfolio.project4.description":
            "Elegant custom cabinetry with marble finishes.",

        "portfolio.project5.title":
            "Contemporary Staircase",

        "portfolio.project5.description":
            "Elegant curves with refined lighting.",

        "portfolio.project6.title":
            "Luxury Red Kitchen",

        "portfolio.project6.description":
            "Bold cabinetry with premium finishes.",

        "portfolio.project7.title":
            "Luxury Bathroom",

        "portfolio.project7.description":
            "Sophisticated bathroom featuring premium stone finishes, a freestanding bathtub, and natural light.",

        "portfolio.project8.title":
            "Marble Bathroom",

        "portfolio.project8.description":
            "Elegant marble bathroom with a freestanding bathtub and warm ambient lighting.",

        "portfolio.project9.title":
            "Bathroom Vanity",

        "portfolio.project9.description":
            "Contemporary bathroom featuring custom vanities, premium finishes, and refined details.",

        "portfolio.project10.title":
            "Elegant Bath",

        "portfolio.project10.description":
            "Refined design with luxurious details.",

        "portfolio.project11.title":
            "Spiral Staircase",

        "portfolio.project11.description":
            "Elegant curves with a luxurious gold handrail.",

        "portfolio.project12.title":
            "Modern Vanity",

        "portfolio.project12.description":
            "Clean design with custom cabinetry.",

        "portfolio.project13.title":
            "Luxury Kitchen",

        "portfolio.project13.description":
            "Bold cabinetry with premium finishes.",

        "portfolio.project14.title":
            "Luxury Wardrobe",

        "portfolio.project14.description":
            "Elegant built-in storage with refined details.",

        "portfolio.project15.title":
            "Modern Storage",

        "portfolio.project15.description":
            "Clean built-in storage with elegant details.",

        "portfolio.project16.title":
            "Modern Corridor",

        "portfolio.project16.description":
            "Elegant curves with subtle lighting.",

        "portfolio.project17.title":
            "Grand Interior",

        "portfolio.project17.description":
            "Elegant space with refined lighting.",

        "portfolio.project18.title":
            "Custom Cabinetry",

        "portfolio.project18.description":
            "Refined storage with modern details.",

        "portfolio.project19.title":
            "Herringbone Flooring",

        "portfolio.project19.description":
            "Elegant flooring with a timeless pattern.",

        "portfolio.project20.title":
            "Custom Cabinetry",

        "portfolio.project20.description":
            "Clean design with functional storage.",

        "portfolio.project21.title":
            "Modern Washroom",

        "portfolio.project21.description":
            "Clean lines with elegant fixtures.",

        "portfolio.cta.title":
            "Ready to Build with Swiss Quality?",

        "portfolio.cta.description":
            "Let's discuss your project today.",

        "portfolio.cta.button":
            "Start Your Project",


        // ==========================================
        // CONTACT - ENGLISH
        // ==========================================

        "contact.hero.subtitle":
            "CONTACT US",

        "contact.hero.title":
            "Let's Start Your Next Project",

        "contact.hero.description":
            "We would love to hear your ideas and help turn them into a successful construction project with high quality standards.",

        "contact.info.subtitle":
            "GET IN TOUCH",

        "contact.info.title":
            "Contact Information",

        "contact.info.description":
            "Feel free to contact us anytime.",

        "contact.office":
            "Office",

        "contact.phone":
            "Phone",

        "contact.email":
            "Email",

        "contact.form.name":
            "Your Name",

        "contact.form.email":
            "Email Address",

        "contact.form.subject":
            "Subject",

        "contact.form.message":
            "Write Your Message",

        "contact.form.button":
            "Send Message",

        "contact.cta.title":
            "Ready to Build with Swiss Quality?",

        "contact.cta.description":
            "Let's discuss your project today.",

        "contact.cta.button":
            "Get Started",


        // =========================
        // OLD CONTACT KEYS
        // =========================

        "contact.title":
            "Ready to Build with Swiss Quality?",

        "contact.button":
            "Contact Us",


        // =========================
        // FOOTER
        // =========================

        "footer.title":
            "SWISS CONSULTING",

        "footer.description":
            "Providing Swiss construction supervision, quality consulting, and project management for luxury developments in Indonesia.",

        "footer.quicklinks":
            "Quick Links",

        "footer.services":
            "Services",

        "footer.follow":
            "Follow Us",

        "footer.copyright":
            "©2026 Swiss Consulting."


    },


    // ==========================================
    // INDONESIAN
    // ==========================================

    id: {

        // =========================
        // NAVIGATION
        // =========================

        "nav.home":
            "Beranda",

        "nav.about":
            "Tentang Kami",

        "nav.services":
            "Layanan",

        "nav.portfolio":
            "Portofolio",

        "nav.contact":
            "Kontak",


        // =========================
        // HOME
        // =========================

        "hero.subtitle":
            "SELAMAT DATANG DI SWISS CONSULTING",

        "hero.title":
            "Presisi Swiss. Keramahan Indonesia. Eksekusi Sempurna.",

        "hero.description":
            "Lebih dari dua dekade pengalaman dalam konstruksi Swiss untuk menjaga investasi properti mewah Anda di Indonesia.",

        "home.about":
            "TENTANG KAMI",

        "home.about.title":
            "22 Tahun Pengalaman Konstruksi Swiss",

        "home.about.description":
            "Membangun villa mewah atau properti komersial premium membutuhkan lebih dari sekadar desain yang unggul. Dibutuhkan ketelitian, standar kualitas yang tinggi, serta pengawasan berpengalaman untuk memastikan setiap detail terlaksana dengan sempurna. Dengan pengalaman lebih dari 22 tahun di industri konstruksi Swiss, Steven Riehl membantu pemilik properti dan investor memastikan setiap proyek dibangun sesuai standar kualitas tertinggi. Kini berbasis di Bandung, Steven Riehl menyediakan layanan pengawasan konstruksi independen dan konsultasi kualitas untuk proyek-proyek properti di seluruh Indonesia.",

        "home.about.button":
            "SELENGKAPNYA",

        "home.services":
            "LAYANAN KAMI",

        "home.services.title":
            "Apa yang Kami Lakukan",

        "home.services.description":
            "Pengawasan konstruksi Swiss, konsultasi kualitas, dan manajemen proyek profesional untuk pembangunan properti mewah di Indonesia.",

        "home.services.button":
            "SELENGKAPNYA",


        // =========================
        // ABOUT
        // =========================

        "about.hero.title":
            "Tentang Kami",

        "about.hero.description":
            "Menghadirkan Keunggulan Teknik Swiss untuk Proyek Konstruksi Mewah di Indonesia.",

        "about.who":
            "SIAPA KAMI",

        "about.title":
            "22 Tahun Pengalaman dalam Pengawasan Konstruksi Swiss & Konsultasi Kualitas",

        "about.description1":
            "Membangun vila mewah dan properti komersial premium membutuhkan lebih dari sekadar desain yang luar biasa. Dibutuhkan ketelitian, pengawasan yang ketat, dan standar kualitas yang tanpa kompromi.",

        "about.description2":
            "Steven Riehl mendapatkan pendidikan di Swiss dan telah menghabiskan lebih dari dua dekade mengerjakan proyek konstruksi kelas atas dengan mengikuti standar kualitas Eropa.",

        "about.description3":
            "Saat ini, ia membantu investor dan pemilik properti di seluruh Indonesia melindungi investasi mereka melalui pengawasan konstruksi independen dan konsultasi kualitas profesional.",

        "about.contact":
            "Hubungi Kami",

        "about.portfolio":
            "Lihat Portofolio",

        "about.why.subtitle":
            "MENGAPA MEMILIH KAMI",

        "about.why.title":
            "Mengapa Klien Mempercayai Swiss Consulting",

        "about.why.card1.title":
            "Pengalaman 22+ Tahun",

        "about.why.card1.description":
            "Pengalaman profesional dalam konstruksi berstandar Swiss.",

        "about.why.card2.title":
            "Pengendalian Kualitas",

        "about.why.card2.description":
            "Setiap proyek mengikuti standar kualitas yang tinggi.",

        "about.why.card3.title":
            "Pengawasan Independen",

        "about.why.card3.description":
            "Melindungi klien di setiap tahap konstruksi.",

        "about.purpose.title":
            "Tujuan Kami",

        "about.purpose.description":
            "Menjadi mitra konsultasi Swiss terpercaya di Indonesia dan pilihan utama bagi bisnis yang mencari keunggulan dan keahlian.",

        "about.mission.title":
            "Misi",

        "about.mission.description":
            "Memberikan pengawasan profesional dan konsultasi kualitas untuk proyek Anda.",

        "about.values.title":
            "Nilai-Nilai Kami",

        "about.values.precision":
            "Ketelitian Swiss",

        "about.values.integrity":
            "Integritas",

        "about.values.transparency":
            "Transparansi",

        "about.values.professionalism":
            "Profesionalisme",

        "about.counter.experience":
            "Tahun Pengalaman",

        "about.counter.quality":
            "Komitmen Kualitas",

        "about.counter.projects":
            "Proyek",

        "about.counter.support":
            "Dukungan",

        "about.cta.title":
            "Siap Membangun dengan Kualitas Swiss?",

        "about.cta.description":
            "Mari diskusikan proyek Anda hari ini.",

        "about.cta.button":
            "Hubungi Sekarang",


        // =========================
        // SERVICES
        // =========================

        "services.hero.subtitle":
            "LAYANAN KAMI",

        "services.hero.title":
            "Pengawasan Konstruksi Swiss & Konsultasi Kualitas",

        "services.hero.description":
            "Pengawasan konstruksi berstandar Swiss, inspeksi kualitas, dan konsultasi proyek profesional untuk vila mewah dan properti komersial premium di seluruh Indonesia.",

        "services.section.subtitle":
            "APA YANG KAMI LAKUKAN",

        "services.section.title":
            "Layanan yang Kami Sediakan",

        "services.section.description":
            "Layanan profesional yang disesuaikan dengan kebutuhan konstruksi dan kualitas proyek Anda.",

        "services.service1.title":
            "Perwakilan Pemilik",

        "services.service1.description":
            "Mewakili pemilik properti selama proses konstruksi, terutama bagi investor dari luar negeri.",

        "services.service2.title":
            "Pengawasan Lokasi Konstruksi",

        "services.service2.description":
            "Pengawasan independen di setiap tahap konstruksi untuk memastikan pelaksanaan sesuai standar kualitas Swiss.",

        "services.service3.title":
            "Inspeksi Pengendalian Kualitas",

        "services.service3.description":
            "Pemeriksaan secara detail terhadap pengerjaan, material, dan kualitas konstruksi.",

        "services.service4.title":
            "Konsultasi Teknis",

        "services.service4.description":
            "Saran teknis profesional sebelum dan selama konstruksi untuk meminimalkan kesalahan yang merugikan.",

        "services.service5.title":
            "Inspeksi Keramik & Finishing",

        "services.service5.description":
            "Pemeriksaan dengan ketelitian Swiss terhadap pemasangan keramik, keselarasan, waterproofing, dan finishing.",

        "services.service6.title":
            "Pengawasan Vila Mewah",

        "services.service6.description":
            "Pengawasan khusus untuk vila mewah, rumah pribadi, dan hunian premium.",

        "services.process.subtitle":
            "PROSES KAMI",

        "services.process.title":
            "Bagaimana Kami Bekerja",

        "services.process.description":
            "Setiap proyek mengikuti alur kerja yang terstruktur untuk memastikan kualitas, efisiensi, dan kepuasan klien.",

        "services.process.step1.title":
            "Konsultasi",

        "services.process.step1.description":
            "Memahami proyek, kebutuhan, dan harapan Anda.",

        "services.process.step2.title":
            "Penilaian Lokasi",

        "services.process.step2.description":
            "Meninjau gambar kerja, kontraktor, dan rencana konstruksi.",

        "services.process.step3.title":
            "Pengawasan Konstruksi",

        "services.process.step3.description":
            "Memantau pengerjaan, material, perkembangan konstruksi, dan standar kualitas.",

        "services.process.step4.title":
            "Inspeksi Kualitas Akhir",

        "services.process.step4.description":
            "Melakukan pemeriksaan menyeluruh sebelum serah terima proyek untuk memastikan pelaksanaan sesuai standar kualitas Swiss.",

        "services.faq.subtitle":
            "FAQ",

        "services.faq.title":
            "Pertanyaan yang Sering Diajukan",

        "services.faq.q1":
            "Apakah Anda mengawasi proyek rumah pribadi?",

        "services.faq.a1":
            "Ya. Kami mengawasi vila, rumah pribadi, dan bangunan komersial.",

        "services.faq.q2":
            "Apakah Anda dapat bekerja dengan kontraktor yang sudah saya pilih?",

        "services.faq.a2":
            "Ya. Kami memberikan pengawasan independen tanpa menggantikan kontraktor Anda.",

        "services.faq.q3":
            "Apakah Anda bekerja dengan investor dari luar negeri?",

        "services.faq.a3":
            "Tentu. Kami menyediakan laporan, foto, dan pembaruan secara berkala.",

        "services.faq.q4":
            "Di wilayah mana Anda melayani proyek?",

        "services.faq.a4":
            "Bandung, Jakarta, dan proyek-proyek tertentu di seluruh Indonesia.",

        "services.cta.title":
            "Siap Membangun dengan Kualitas Swiss?",

        "services.cta.description":
            "Mari diskusikan proyek Anda hari ini.",

        "services.cta.button":
            "Mulai Sekarang",


        // ==========================================
        // PORTFOLIO - INDONESIAN
        // ==========================================

        "portfolio.hero.subtitle":
            "HASIL KARYA KAMI",

        "portfolio.hero.title":
            "Proyek Referensi Konstruksi Swiss oleh Steven Riehl",

        "portfolio.hero.description":
            "Jelajahi proyek referensi kami yang mencakup vila mewah, bangunan komersial, dan proyek konstruksi yang diselesaikan dengan standar kualitas Swiss.",

        "portfolio.section.subtitle":
            "PORTOFOLIO",

        "portfolio.section.title":
            "Proyek Konstruksi Unggulan",

        "portfolio.section.description":
            "Menampilkan pilihan proyek pengawasan konstruksi, konsultasi kualitas, dan pembangunan premium yang dikerjakan dengan keunggulan teknik Swiss.",

        "portfolio.filter.all":
            "Semua",

        "portfolio.filter.reference":
            "Proyek Referensi",

        "portfolio.project1.title":
            "Interior Marmer",

        "portfolio.project1.description":
            "Finishing batu yang elegan dengan detail yang sempurna.",

        "portfolio.project2.title":
            "Garasi Modern",

        "portfolio.project2.description":
            "Desain luas dengan garis arsitektur yang bersih.",

        "portfolio.project3.title":
            "Hall Mewah",

        "portfolio.project3.description":
            "Interior berkelas dengan finishing premium.",

        "portfolio.project4.title":
            "Kabinet Dapur Modern",

        "portfolio.project4.description":
            "Kabinet custom yang elegan dengan finishing marmer.",

        "portfolio.project5.title":
            "Tangga Kontemporer",

        "portfolio.project5.description":
            "Lekukan elegan dengan pencahayaan yang sempurna.",

        "portfolio.project6.title":
            "Dapur Merah Mewah",

        "portfolio.project6.description":
            "Kabinet berani dengan finishing premium.",

        "portfolio.project7.title":
            "Kamar Mandi Mewah",

        "portfolio.project7.description":
            "Kamar mandi berkelas dengan finishing batu premium, bathtub freestanding, dan pencahayaan alami.",

        "portfolio.project8.title":
            "Kamar Mandi Marmer",

        "portfolio.project8.description":
            "Kamar mandi marmer elegan dengan bathtub freestanding dan pencahayaan hangat.",

        "portfolio.project9.title":
            "Vanity Kamar Mandi",

        "portfolio.project9.description":
            "Kamar mandi kontemporer dengan vanity custom, finishing premium, dan detail yang elegan.",

        "portfolio.project10.title":
            "Kamar Mandi Elegan",

        "portfolio.project10.description":
            "Desain elegan dengan detail yang mewah.",

        "portfolio.project11.title":
            "Tangga Spiral",

        "portfolio.project11.description":
            "Lekukan elegan dengan pegangan tangga berwarna emas yang mewah.",

        "portfolio.project12.title":
            "Vanity Modern",

        "portfolio.project12.description":
            "Desain bersih dengan kabinet custom.",

        "portfolio.project13.title":
            "Dapur Mewah",

        "portfolio.project13.description":
            "Kabinet berani dengan finishing premium.",

        "portfolio.project14.title":
            "Lemari Mewah",

        "portfolio.project14.description":
            "Penyimpanan built-in yang elegan dengan detail yang sempurna.",

        "portfolio.project15.title":
            "Penyimpanan Modern",

        "portfolio.project15.description":
            "Penyimpanan built-in yang bersih dengan detail elegan.",

        "portfolio.project16.title":
            "Koridor Modern",

        "portfolio.project16.description":
            "Lekukan elegan dengan pencahayaan yang lembut.",

        "portfolio.project17.title":
            "Interior Megah",

        "portfolio.project17.description":
            "Ruang elegan dengan pencahayaan yang sempurna.",

        "portfolio.project18.title":
            "Kabinet Custom",

        "portfolio.project18.description":
            "Penyimpanan berkelas dengan detail modern.",

        "portfolio.project19.title":
            "Lantai Herringbone",

        "portfolio.project19.description":
            "Lantai elegan dengan pola klasik yang tak lekang oleh waktu.",

        "portfolio.project20.title":
            "Kabinet Custom",

        "portfolio.project20.description":
            "Desain bersih dengan penyimpanan yang fungsional.",

        "portfolio.project21.title":
            "Kamar Mandi Modern",

        "portfolio.project21.description":
            "Garis desain yang bersih dengan perlengkapan elegan.",

        "portfolio.cta.title":
            "Siap Membangun dengan Kualitas Swiss?",

        "portfolio.cta.description":
            "Mari diskusikan proyek Anda hari ini.",

        "portfolio.cta.button":
            "Mulai Proyek Anda",


        // ==========================================
        // CONTACT - INDONESIAN
        // ==========================================

        "contact.hero.subtitle":
            "HUBUNGI KAMI",

        "contact.hero.title":
            "Mari Mulai Proyek Anda Berikutnya",

        "contact.hero.description":
            "Kami ingin mendengar ide-ide Anda dan membantu mewujudkannya menjadi proyek konstruksi yang sukses dengan standar kualitas tinggi.",

        "contact.info.subtitle":
            "HUBUNGI KAMI",

        "contact.info.title":
            "Informasi Kontak",

        "contact.info.description":
            "Jangan ragu untuk menghubungi kami kapan saja.",

        "contact.office":
            "Kantor",

        "contact.phone":
            "Telepon",

        "contact.email":
            "Email",

        "contact.form.name":
            "Nama Anda",

        "contact.form.email":
            "Alamat Email",

        "contact.form.subject":
            "Subjek",

        "contact.form.message":
            "Tulis Pesan Anda",

        "contact.form.button":
            "Kirim Pesan",

        "contact.cta.title":
            "Siap Membangun dengan Kualitas Swiss?",

        "contact.cta.description":
            "Mari diskusikan proyek Anda hari ini.",

        "contact.cta.button":
            "Mulai Sekarang",


        // =========================
        // OLD CONTACT KEYS
        // =========================

        "contact.title":
            "Siap Membangun dengan Kualitas Swiss?",

        "contact.button":
            "Hubungi Kami",


        // =========================
        // FOOTER
        // =========================

        "footer.title":
            "SWISS CONSULTING",

        "footer.description":
            "Menyediakan pengawasan konstruksi Swiss, konsultasi kualitas, dan manajemen proyek untuk pengembangan properti mewah di Indonesia.",

        "footer.quicklinks":
            "Tautan Cepat",

        "footer.services":
            "Layanan",

        "footer.follow":
            "Ikuti Kami",

        "footer.copyright":
            "©2026 Swiss Consulting."

    }

};


// ==========================================
// CHANGE LANGUAGE
// ==========================================

function changeLanguage() {

    currentLanguage =
        currentLanguage === "en" ? "id" : "en";

    localStorage.setItem(
        "language",
        currentLanguage
    );

    applyLanguage();

}


// ==========================================
// APPLY LANGUAGE
// ==========================================

function applyLanguage() {

    // ======================================
    // TRANSLATE NORMAL TEXT
    // ======================================

    const elements =
        document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {

        const key =
            element.getAttribute("data-i18n");

        if (
            translations[currentLanguage] &&
            translations[currentLanguage][key]
        ) {

            element.textContent =
                translations[currentLanguage][key];

        }

    });


    // ======================================
    // TRANSLATE PLACEHOLDER
    // ======================================

    const placeholderElements =
        document.querySelectorAll("[data-i18n-placeholder]");

    placeholderElements.forEach((element) => {

        const key =
            element.getAttribute("data-i18n-placeholder");

        if (
            translations[currentLanguage] &&
            translations[currentLanguage][key]
        ) {

            element.placeholder =
                translations[currentLanguage][key];

        }

    });


    // ======================================
    // UPDATE LANGUAGE BUTTON
    // ======================================

    const languageButton =
        document.getElementById("languageButton");

    if (languageButton) {

        if (currentLanguage === "en") {

            languageButton.textContent =
                "🇬🇧 EN";

        } else {

            languageButton.textContent =
                "🇮🇩 ID";

        }

    }


    // ======================================
    // UPDATE HTML LANG
    // ======================================

    document.documentElement.lang =
        currentLanguage;

}


// ==========================================
// RUN WHEN PAGE LOADS
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        applyLanguage();

    }
);