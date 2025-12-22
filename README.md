# selinoncu.github.io
<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>İki Dünyayı Taşımak - Selin Öncü</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        /* --- CSS BAŞLANGIÇ --- */
        :root {
            --primary-blue: #105285;
            --hero-gradient-start: #0f3d68;
            --hero-gradient-end: #186cb5;
            --card-blue: #15558d;
            --bg-light: #f4f8fb;
            --text-dark: #333333;
            --text-grey: #666666;
            --footer-bg: #0d3b66;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Montserrat', sans-serif; background-color: var(--bg-light); color: var(--text-dark); line-height: 1.6; overflow-x: hidden; }
        a { text-decoration: none; color: inherit; transition: 0.3s; cursor: pointer; }
        ul { list-style: none; }
        img { max-width: 100%; display: block; }
        
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; position: relative; }
        .section-padding { padding: 80px 0; }
        .hidden { display: none !important; }

        /* Butonlar */
        .btn {
            display: inline-block; padding: 14px 35px; border-radius: 30px;
            font-weight: 700; font-size: 0.95rem; cursor: pointer; border: none; text-align: center; transition: all 0.3s ease;
        }
        .btn-primary { background-color: var(--primary-blue); color: white; }
        .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(16, 82, 133, 0.2); }
        .btn-white { background-color: white; color: var(--primary-blue); }
        .btn-white:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2); }

        /* --- ANİMASYONLAR --- */
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* DÜZELTME: Opacity varsayılan olarak 1 yapıldı, animasyonla geliyor */
        .animate-up {
            animation: fadeInUp 1s ease-out forwards;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }
        
        @keyframes breathe {
            0%, 100% { transform: scale(1); box-shadow: 0 0 40px rgba(255,255,255,0.1); }
            50% { transform: scale(1.05); box-shadow: 0 0 60px rgba(255,255,255,0.3); }
        }

        /* --- DÜZELTİLMİŞ SLOGAN EFEKTİ --- */
        .gradient-text {
            background: linear-gradient(45deg, #105285, #186cb5, #5fa4d6, #105285);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            background-clip: text;
            color: var(--primary-blue); /* Fallback rengi (Görünürlük garantisi için) */
            -webkit-text-fill-color: transparent; /* Yazının içini şeffaf yapıp arkaplanı gösterir */
            animation: gradientMove 6s ease infinite;
            display: inline-block; /* Bazen render hatasını çözer */
        }

        @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        /* --- HEADER / MENÜ --- */
        header { 
            background: white; 
            padding: 15px 0; 
            position: fixed; 
            width: 100%;
            top: 0; 
            z-index: 1500; 
            box-shadow: 0 2px 10px rgba(0,0,0,0.05); 
        }
        #main-content { margin-top: 80px; } 

        .nav-container { display: flex; justify-content: space-between; align-items: center; }
        .logo-text { font-weight: 800; font-size: 1.2rem; color: var(--primary-blue); line-height: 1.2; text-align: center; cursor: pointer; z-index: 1001; }
        
        .nav-links { display: flex; gap: 30px; }
        .nav-links a { font-weight: 700; font-size: 0.9rem; color: var(--primary-blue); opacity: 0.7; position: relative; }
        .nav-links a:hover, .nav-links a.active { opacity: 1; }
        .nav-links a::after {
            content: ''; position: absolute; width: 0; height: 2px; bottom: -5px; left: 0;
            background-color: var(--primary-blue); transition: width 0.3s;
        }
        .nav-links a:hover::after, .nav-links a.active::after { width: 100%; }

        .social-icons { display: flex; gap: 15px; }
        .social-icons a { color: var(--primary-blue); font-size: 1.2rem; }

        .hamburger { display: none; cursor: pointer; z-index: 1001; }
        .bar { display: block; width: 25px; height: 3px; margin: 5px auto; transition: all 0.3s ease-in-out; background-color: var(--primary-blue); }

        .hamburger.active .bar:nth-child(2) { opacity: 0; }
        .hamburger.active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .hamburger.active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        .mobile-nav {
            position: fixed; left: -100%; top: 0; width: 100%; height: 100vh;
            background-color: white; flex-direction: column; justify-content: center; align-items: center;
            gap: 40px; transition: 0.4s; z-index: 1000; display: flex;
        }
        .mobile-nav.active { left: 0; }
        .mobile-nav a { font-size: 1.5rem; font-weight: 700; color: var(--primary-blue); }


        /* --- 1. AÇILIŞ EKRANI --- */
        #splash-screen {
            background: radial-gradient(circle at center, var(--hero-gradient-end), var(--hero-gradient-start));
            height: 100vh; display: flex; flex-direction: column;
            justify-content: center; align-items: center; text-align: center; color: white;
            position: fixed; top: 0; left: 0; width: 100%; z-index: 2000; padding: 20px;
        }
        .hero-circle {
            width: 120px; height: 120px; border: 2px solid rgba(255,255,255,0.3); border-radius: 50%; margin-bottom: 30px;
            background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent);
            animation: breathe 4s infinite ease-in-out;
        }
        .hero-title { font-size: 3rem; font-weight: 800; margin-bottom: 15px; letter-spacing: 1px; }
        .hero-subtitle { font-size: 0.8rem; letter-spacing: 3px; font-weight: 700; margin-bottom: 30px; text-transform: uppercase; opacity: 0.8; }
        .hero-desc { max-width: 700px; font-size: 1.1rem; margin-bottom: 50px; opacity: 0.95; line-height: 1.7; font-weight: 400; }
        .hero-logos { display: flex; gap: 20px; margin-top: 50px; align-items: center; flex-wrap: wrap; justify-content: center; }
        .hero-logos img { height: 45px; filter: brightness(0) invert(1); opacity: 0.9; }

        /* --- ANA SAYFA --- */
        .page-section { min-height: 85vh; display: flex; flex-direction: column; animation: fadeIn 0.6s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .home-split { display: grid; grid-template-columns: 1.2fr 1fr; gap: 50px; align-items: center; }
        .big-heading { font-size: 3rem; font-weight: 800; line-height: 1.2; margin-bottom: 30px; }
        
        .placeholder-box {
            background-color: white; border-radius: 20px; width: 100%; height: 400px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.05); display: flex; align-items: center; justify-content: center;
            position: relative; overflow: hidden;
        }
        .partner-logos-right { display: flex; justify-content: flex-end; gap: 15px; margin-top: 20px; align-items: center; flex-wrap: wrap; }
        .partner-text { text-align: right; font-size: 0.75rem; color: #999; display: block; width: 100%; margin-bottom: 5px; }
        .partner-logos-right img { height: 45px; }

        /* --- PROJELER SAYFASI --- */
        .projects-header { text-align: center; margin-bottom: 60px; }
        .page-title { font-size: 2.5rem; color: var(--primary-blue); font-weight: 800; margin-bottom: 15px; }
        .page-subtitle { color: var(--text-grey); font-size: 1rem; }
        
        .project-card { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; margin-bottom: 80px; align-items: center; }
        .project-card:nth-child(even) .p-info { order: -1; }
        .p-img { height: 350px; border-radius: 15px; background-color: #f8f9fa; position: relative; overflow: hidden; width: 100%; }
        .p-img::after {
             content: ''; position: absolute; top:0; left:0; right:0; bottom:0;
             background: linear-gradient(to top right, transparent 49%, #e0e0e0 49%, #e0e0e0 51%, transparent 51%),
                         linear-gradient(to bottom right, transparent 49%, #e0e0e0 49%, #e0e0e0 51%, transparent 51%);
        }
        .p-info h3 { font-size: 1.8rem; color: var(--primary-blue); margin-bottom: 15px; font-weight: 700; }
        
        /* Rapor ve Notlar Bölümü Stili */
        .report-section { background-color: white; padding: 40px; border-radius: 20px; box-shadow: 0 5px 20px rgba(0,0,0,0.03); margin-bottom: 60px; }
        .quote-box {
            background-color: #f0f7ff; border-left: 5px solid var(--primary-blue);
            padding: 20px; border-radius: 0 10px 10px 0; font-style: italic; color: #555;
            height: 100%;
        }

        /* Hakkımızda */
        .about-card { background: white; border-radius: 20px; padding: 40px; margin-bottom: 30px; box-shadow: 0 5px 25px rgba(0,0,0,0.03); }
        .card-head { border-bottom: 3px solid var(--primary-blue); display: inline-block; margin-bottom: 20px; padding-bottom: 5px; color: var(--primary-blue); font-size: 1.4rem; font-weight: 800; }
        .collab-logos { display: flex; gap: 20px; margin-top: 20px; align-items: center; flex-wrap: wrap; }
        .collab-logos img { height: 50px; }
        .executor-flex { display: flex; justify-content: space-between; align-items: center; gap: 30px; }
        .avatar-circle { width: 150px; height: 150px; border-radius: 50%; background: #eee; overflow: hidden; flex-shrink: 0; position: relative; }
        .avatar-circle::after {
             content: ''; position: absolute; top:0; left:0; right:0; bottom:0;
             background: linear-gradient(to top right, transparent 49%, #ddd 49%, #ddd 51%, transparent 51%),
                         linear-gradient(to bottom right, transparent 49%, #ddd 49%, #ddd 51%, transparent 51%);
        }
        .avatar-circle img { width: 100%; height: 100%; object-fit: cover; position: relative; z-index: 1; }

        /* İletişim */
        .contact-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; }
        .contact-info h2 { font-size: 2.5rem; color: var(--primary-blue); font-weight: 800; margin-bottom: 20px; }
        .contact-item { display: flex; align-items: center; margin-bottom: 20px; font-weight: 700; color: var(--primary-blue); }
        .c-icon { width: 40px; height: 40px; background: #eff6fc; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary-blue); margin-right: 15px; flex-shrink: 0; }
        .contact-form-card { background: var(--card-blue); padding: 40px; border-radius: 20px; color: white; box-shadow: 0 20px 50px rgba(21, 85, 141, 0.3); }
        .form-control { width: 100%; padding: 12px; background: rgba(255,255,255,0.15); border: 1px solid transparent; border-radius: 8px; color: white; font-family: inherit; margin-top: 5px; }
        .btn-submit { width: 100%; background: white; color: var(--card-blue); padding: 15px; border: none; border-radius: 10px; font-weight: 800; cursor: pointer; margin-top: 10px; }

        .site-footer { background: var(--footer-bg); color: white; text-align: center; padding: 40px 0; font-size: 0.8rem; margin-top: auto; }

        /* --- MOBİL UYUMLULUK (RESPONSIVE) --- */
        @media (max-width: 992px) {
            .nav-links { display: none; }
            .hamburger { display: block; }
            .social-icons { display: none; }

            .home-split, .project-card, .contact-layout, .executor-flex { grid-template-columns: 1fr; gap: 40px; }
            .project-card:nth-child(even) .p-info { order: 0; }
            
            .hero-title { font-size: 2.2rem; }
            .big-heading { font-size: 2rem; }
            .placeholder-box { height: 300px; }
            
            .executor-flex { flex-direction: column-reverse; text-align: center; }
            .avatar-circle { margin-bottom: 20px; }
            
            .partner-logos-right { justify-content: center; }
            .partner-text { text-align: center; }
            .section-padding { padding: 60px 0; }
        }
    </style>
</head>
<body>

    <section id="splash-screen">
        <div class="hero-circle"></div>
        <h1 class="hero-title animate-up">İKİ DÜNYAYI TAŞIMAK</h1>
        <div class="hero-subtitle animate-up delay-1">BELGESEL • SOSYAL MEDYA • AFİŞ SERİSİ</div>
        <p class="hero-desc animate-up delay-2">
            Ebeveynlerin sadece "bakım veren" değil, hayalleri, mücadeleleri ve kendilerine has hikayeleriyle var olan bireyler olduğunu hatırlatan dijital bir farkındalık yolculuğu.
        </p>
        <button onclick="enterSite()" class="btn btn-white animate-up delay-3">Hikayeyi Keşfet</button>

        <div class="hero-logos animate-up delay-3">
            <img src="logo-engelli-meclisi.png" alt="Engelli Meclisi">
            <img src="logo-kent-konseyi.png" alt="İzmir Kent Konseyi">
            <img src="logo-yasar-uni.png" alt="Yaşar Üniversitesi">
        </div>
    </section>


    <header id="main-header" class="hidden">
        <div class="container nav-container">
            <div class="logo-text" onclick="showPage('home')">İKİ DÜNYAYI<br>TAŞIMAK</div>
            
            <nav>
                <ul class="nav-links">
                    <li><a onclick="showPage('home')" id="nav-home" class="active">Ana Sayfa</a></li>
                    <li><a onclick="showPage('projects')" id="nav-projects">Projeler</a></li>
                    <li><a onclick="showPage('about')" id="nav-about">Hakkımızda</a></li>
                    <li><a onclick="showPage('contact')" id="nav-contact">İletişim</a></li>
                </ul>
            </nav>

            <div class="social-icons">
                <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
            </div>

            <div class="hamburger" onclick="toggleMobileMenu()">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>

        <div class="mobile-nav" id="mobileNav">
            <a onclick="showPage('home'); toggleMobileMenu()">Ana Sayfa</a>
            <a onclick="showPage('projects'); toggleMobileMenu()">Projeler</a>
            <a onclick="showPage('about'); toggleMobileMenu()">Hakkımızda</a>
            <a onclick="showPage('contact'); toggleMobileMenu()">İletişim</a>
            <div style="margin-top: 20px; display: flex; gap: 20px;">
                <a href="https://instagram.com" target="_blank" style="font-size: 1.5rem;"><i class="fab fa-instagram"></i></a>
                <a href="https://youtube.com" target="_blank" style="font-size: 1.5rem;"><i class="fab fa-youtube"></i></a>
            </div>
        </div>
    </header>


    <main id="main-content" class="hidden">
        
        <div id="page-home" class="page-section">
            <div class="section-padding" style="flex-grow: 1;">
                <div class="container home-split">
                    <div class="home-text">
                        <h2 class="big-heading animate-up gradient-text">ENGELLİ ÇOCUĞA<br>SAHİP EBEVEYNLERİN<br>GÖRÜNMEYEN<br>HİKAYESİ</h2>
                        
                        <p class="animate-up delay-1">
                            Bu proje, İzmir’de yaşayan ebeveynlerin sesini duyurmayı, deneyimlerini paylaşmayı ve birbirimizden güç almayı hedefliyor. Sadece zorlukları değil, umudu ve dayanışmayı da konuşuyoruz.
                        </p>
                        <button onclick="showPage('projects')" class="btn btn-primary animate-up delay-2">Projeler</button>
                    </div>
                    <div class="image-side animate-up delay-2">
                        <div class="placeholder-box"></div>
                        <div class="partner-logos-right">
                            <small class="partner-text">Bu proje İzmir Kent Konseyi Engelli Meclisi iş birliği ile yürütülmektedir.</small>
                            <img src="logo-engelli-meclisi.png" alt="Logo">
                            <img src="logo-kent-konseyi.png" alt="Logo">
                            <img src="logo-yasar-uni.png" alt="Logo">
                        </div>
                    </div>
                </div>
            </div>
            <footer class="site-footer">
                <div class="container">
                    <p style="font-weight:700; margin-bottom:10px;">2025 - 2026 Selin Öncü - Bitirme Projesi</p>
                    <p style="opacity:0.7;">Danışmanlar: Dr. Mert Seven, Dr. Simge Gökbayrak Yelken</p>
                </div>
            </footer>
        </div>

        <div id="page-projects" class="page-section hidden">
            <div class="section-padding" style="flex-grow: 1;">
                <div class="container">
                    <div class="projects-header">
                        <h2 class="page-title">Projeler</h2>
                        <p class="page-subtitle">İki Dünyayı Taşımak projesi, görünmeyen emeği farklı dijital mecralarda görünür kılıyor.</p>
                    </div>

                    <div class="project-card">
                        <div class="p-img"></div>
                        <div class="p-info">
                            <h3>Belgesel Projesi</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <button class="btn btn-primary"><i class="fab fa-youtube"></i> Youtube'a Git</button>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="p-img"></div>
                        <div class="p-info">
                            <h3>Sosyal Medya Kampanyası</h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <button class="btn btn-primary"><i class="fab fa-instagram"></i> Instagram'a Git</button>
                        </div>
                    </div>

                    <div class="project-card">
                        <div class="p-img"></div>
                        <div class="p-info">
                            <h3>Afiş Serisi #BirEbeveyninGünü</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Sed sagittis, susto vulputate aliquet.</p>
                            <button class="btn btn-primary"><i class="fab fa-instagram"></i> Instagram'a Git</button>
                        </div>
                    </div>

                    <div class="report-section">
                        <div class="card-head" style="font-size: 1.5rem;">Saha Araştırması & Rapor</div>
                        <p style="margin-bottom: 20px;">
                            Engelli çocuğu olan ebeveynlerle gerçekleştirdiğimiz birebir görüşmelerden derlenen bu rapor; onların "bir günleri nasıl geçiyor", "kendilerine vakit ayırabiliyorlar mı" ve "kendileri için bir dilekleri olsa ne olurdu" gibi sorulara verdikleri samimi yanıtlardan yola çıkarak hazırlanmıştır. Ebeveynlerin görünmeyen rutinlerine ve iç dünyalarına ışık tutan kapsamlı bir saha analizidir.
                        </p>
                        
                        <h4 style="color:var(--primary-blue); margin-top:30px;">Ebeveynlerden Notlar</h4>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
                            <div class="quote-box">
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
                            </div>
                            <div class="quote-box">
                                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
                            </div>
                            <div class="quote-box">
                                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                            </div>
                            <div class="quote-box">
                                "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
                            </div>
                        </div>
                        
                        <div style="margin-top: 30px; text-align: right;">
                            <button class="btn btn-primary">Raporu İncele (PDF)</button>
                        </div>
                    </div>

                </div>
            </div>
            <footer class="site-footer">
                <div class="container">
                    <p style="font-weight:700; margin-bottom:10px;">2025 - 2026 Selin Öncü - Bitirme Projesi</p>
                    <p style="opacity:0.7;">Danışmanlar: Dr. Mert Seven, Dr. Simge Gökbayrak Yelken</p>
                </div>
            </footer>
        </div>

        <div id="page-about" class="page-section hidden">
            <div class="section-padding" style="flex-grow: 1;">
                <div class="container">
                    <div class="about-card">
                        <div class="card-head">Proje Hakkında</div>
                        <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 30px;" class="home-split">
                            <p>İki Dünyayı Taşımak, İzmir'de yaşayan ve engelli çocuğu olan ebeveynlerin yaşam pratiklerine, sosyal hayattaki varoluşlarına ve kimlik inşalarına odaklanan bir projedir. Amacımız, ebeveynleri sadece 'bakım veren' rolüyle değil, çok yönlü bireyler olarak ele almak ve toplumsal farkındalığı bu yönde dönüştürmektir.</p>
                            <div class="p-img" style="height: 200px;"></div>
                        </div>
                    </div>

                    <div class="about-card">
                        <div class="card-head">İş Birliği</div>
                        <p>Bu proje, İzmir'in ortak aklı ve uzlaşma merkezi olan <strong>İzmir Kent Konseyi</strong> ve çatısı altında faaliyet gösteren <strong>Engelli Meclisi</strong> iş birliği ile yürütülmektedir.</p>
                        <div class="collab-logos">
                            <img src="logo-engelli-meclisi.png" alt="Logo">
                            <img src="logo-kent-konseyi.png" alt="Logo">
                            <img src="logo-yasar-uni.png" alt="Logo">
                        </div>
                    </div>

                    <div class="about-card">
                        <div class="card-head">Proje Yürütücüsü</div>
                        <div class="executor-flex">
                            <p>
                                Yaşar Üniversitesi Yeni Medya ve İletişim Bölümü son sınıf öğrencisi olan <strong>Selin Öncü</strong>, lisans bitirme projesi kapsamında 'İki Dünyayı Taşımak' çalışmasını yürütmektedir.
                            </p>
                            <div class="avatar-circle">
                                <img src="selin-oncu-foto.jpg" alt="Selin Öncü">
                            </div>
                        </div>
                    </div>

                    <div class="advisors" style="text-align: center; margin-top: 50px;">
                        <h3 style="color:var(--primary-blue); margin-bottom:25px; font-weight: 800;">Proje Danışmanları</h3>
                        <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                            <span style="background:var(--primary-blue); color:white; padding:10px 20px; border-radius:30px;">Dr. Mert Seven</span>
                            <span style="background:var(--primary-blue); color:white; padding:10px 20px; border-radius:30px;">Dr. Simge Gökbayrak Yelken</span>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="site-footer">
                <div class="container">
                    <p style="font-weight:700; margin-bottom:10px;">2025 - 2026 Selin Öncü - Bitirme Projesi</p>
                    <p style="opacity:0.7;">Danışmanlar: Dr. Mert Seven, Dr. Simge Gökbayrak Yelken</p>
                </div>
            </footer>
        </div>

        <div id="page-contact" class="page-section hidden">
            <div class="section-padding" style="flex-grow: 1;">
                <div class="container">
                    <div class="contact-layout">
                        <div class="contact-info">
                            <h2>İletişime Geçin</h2>
                            <p style="margin-bottom: 50px; color: var(--text-grey);">Görüşlerinizi, önerilerinizi veya kendi ebeveynlik hikayenizi bizimle paylaşabilirsiniz.</p>
                            <div class="contact-item"><div class="c-icon"><i class="fas fa-envelope"></i></div><span>selinoncu7@gmail.com</span></div>
                            <div class="contact-item"><div class="c-icon"><i class="fab fa-youtube"></i></div><span>İki Dünyayı Taşımak</span></div>
                            <div class="contact-item"><div class="c-icon"><i class="fab fa-instagram"></i></div><span>@ikidunyayitasimak</span></div>
                            <div style="margin-top: 50px; color: #5fa4d6; font-weight: 700;">#İkiDünyaTekHayat #BizimHikayemiz</div>
                        </div>
                        <div class="contact-form-card">
                            <form>
                                <div style="margin-bottom: 20px;">
                                    <label style="display:block; margin-bottom:5px;">Ad</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div style="margin-bottom: 20px;">
                                    <label style="display:block; margin-bottom:5px;">Soyad</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div style="margin-bottom: 20px;">
                                    <label style="display:block; margin-bottom:5px;">E-posta</label>
                                    <input type="email" class="form-control">
                                </div>
                                <div style="margin-bottom: 20px;">
                                    <label style="display:block; margin-bottom:5px;">Mesaj</label>
                                    <textarea class="form-control" rows="5"></textarea>
                                </div>
                                <button type="submit" class="btn-submit">Gönder</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="site-footer">
                <div class="container">
                    <p style="font-weight:700; margin-bottom:10px;">2025 - 2026 Selin Öncü - Bitirme Projesi</p>
                    <p style="opacity:0.7;">Danışmanlar: Dr. Mert Seven, Dr. Simge Gökbayrak Yelken</p>
                </div>
            </footer>
        </div>

    </main>

    <script>
        // Siteye giriş
        function enterSite() {
            document.getElementById('splash-screen').style.display = 'none';
            document.getElementById('main-header').classList.remove('hidden');
            document.getElementById('main-content').classList.remove('hidden');
            showPage('home');
        }

        // Mobil Menü Aç/Kapa
        function toggleMobileMenu() {
            const hamburger = document.querySelector('.hamburger');
            const mobileNav = document.getElementById('mobileNav');
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
        }

        // Sayfa Değiştirme
        function showPage(pageId) {
            // Tüm sayfaları gizle
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => page.classList.add('hidden'));

            // İstenen sayfayı göster
            const targetPage = document.getElementById('page-' + pageId);
            targetPage.classList.remove('hidden');
            
            // Animasyonun tekrar çalışması için class'ı silip tekrar ekle (Trick)
            if(pageId === 'home'){
                const animatedElements = targetPage.querySelectorAll('.animate-up');
                animatedElements.forEach(el => {
                    el.style.animation = 'none';
                    el.offsetHeight; /* trigger reflow */
                    el.style.animation = null; 
                });
            }

            // Menü linklerini güncelle
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.getElementById('nav-' + pageId);
            if(activeLink) activeLink.classList.add('active');

            // En üste kaydır
            window.scrollTo(0, 0);
        }
    </script>

</body>
</html>
