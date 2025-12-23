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
        // Eğer dosya adı eşleşiyorsa veya ana sayfadaysak aktif yap
        if(link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });

    // --- 3. AÇILIŞ EKRANI MANTIĞI (DÜZELTİLEN KISIM) ---
    const splashScreen = document.getElementById('splash-screen');
    const mainHeader = document.getElementById('main-header');
    const mainContent = document.getElementById('main-content');
    
    // Butonu hem ID hem de HTML yapısından bulmaya çalışalım (Garanti olsun)
    const enterBtn = document.getElementById('enter-btn') || document.querySelector('#splash-screen button');

    if (splashScreen) {
        // KONTROL: Kullanıcı daha önce giriş yaptı mı?
        if (sessionStorage.getItem('siteGirisYapildi') === 'true') {
            // EVET: Açılış ekranını hemen yok et, içeriği göster
            splashScreen.style.display = 'none';
            if(mainHeader) mainHeader.classList.remove('hidden');
            if(mainContent) mainContent.classList.remove('hidden');
        } else {
            // HAYIR: İlk giriş, açılış ekranı kalsın.
            
            // Eğer butonda eski onclick varsa temizle
            if(enterBtn) {
                enterBtn.removeAttribute('onclick');
                
                // Tıklama olayını ekle
                enterBtn.addEventListener('click', () => {
                    // Efektli geçiş
                    splashScreen.style.opacity = '0';
                    
                    setTimeout(() => {
                        splashScreen.style.display = 'none';
                        if(mainHeader) mainHeader.classList.remove('hidden');
                        if(mainContent) mainContent.classList.remove('hidden');
                    }, 500); // 0.5sn animasyon süresi

                    // Tarayıcıya "Giriş Yapıldı" notunu kaydet
                    sessionStorage.setItem('siteGirisYapildi', 'true');
                    window.scrollTo(0, 0);
                });
            }
        }
    }
});