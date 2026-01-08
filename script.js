document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MOBİL MENÜ AYARLARI ---
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.getElementById('mobileNav');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
    }

    // --- 2. AKTİF LİNK AYARI ---
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });

    // --- 3. BANNER SLIDER ---
    const slides = document.querySelectorAll('.banner-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 4000; 

        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, slideInterval);
    }

    // --- 4. AÇILIŞ EKRANI MANTIĞI (ÖNEMLİ KISIM) ---
    const splashScreen = document.getElementById('splash-screen');
    const mainHeader = document.getElementById('main-header');
    const mainContent = document.getElementById('main-content');
    const enterBtn = document.getElementById('enter-btn');

    if (splashScreen) {
        // Kontrol: Daha önce giriş yapıldı mı?
        if (sessionStorage.getItem('siteGirisYapildi') === 'true') {
            // Evet yapıldı, direkt içeriği göster, splash'i sil.
            splashScreen.style.display = 'none';
            if(mainHeader) mainHeader.classList.remove('hidden');
            if(mainContent) mainContent.classList.remove('hidden');
        } else {
            // Hayır, ilk giriş. Butona tıklamayı bekle.
            if(enterBtn) {
                enterBtn.addEventListener('click', () => {
                    // Animasyonlu çıkış
                    splashScreen.style.opacity = '0';
                    splashScreen.style.transition = 'opacity 0.8s ease'; 
                    
                    setTimeout(() => {
                        splashScreen.style.display = 'none';
                        if(mainHeader) mainHeader.classList.remove('hidden');
                        if(mainContent) mainContent.classList.remove('hidden');
                    }, 800); 

                    // Tarayıcıya not düş: Giriş yapıldı.
                    sessionStorage.setItem('siteGirisYapildi', 'true');
                    window.scrollTo(0, 0);
                });
            }
        }
    }
});
