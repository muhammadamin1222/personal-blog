document.addEventListener('DOMContentLoaded', function() {
    const floatingIconsContainer = document.querySelector('.floating-icons');
    
    const socialLinks = [
        "https://www.instagram.com/isomiddinov_m_life/",
        "https://www.youtube.com/@ITYechimlar_uz",
        "https://t.me/Muhammadamin_Isomiddinov_live",
        "https://t.me/m_i_life/"
    ];

    const iconClasses = [
        "fab fa-instagram",
        "fab fa-youtube",
        "fab fa-telegram-plane"
    ];

    // 50 ta ikonkani yaratish
    for (let i = 0; i < 50; i++) {
        const icon = document.createElement('div');
        icon.classList.add('icon');
        
        const randomLink = socialLinks[Math.floor(Math.random() * socialLinks.length)];
        const randomIcon = iconClasses[Math.floor(Math.random() * iconClasses.length)];
        
        // Ikonkani yaratish
        icon.innerHTML = `<a href="${randomLink}" target="_blank"><i class="${randomIcon}"></i></a>`;
        
        // Tasodifiy joylashtirish
        icon.style.top = `${Math.random() * 100}%`;
        icon.style.left = `${Math.random() * 100}%`;
        
        // Ikonani konteynerga qo'shish
        floatingIconsContainer.appendChild(icon);
    }
});
