// DOM 요소들
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// 모바일 메뉴 토글
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 스크롤 시 네비게이션 바 스타일 변경
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// 스무스 스크롤링
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 100; // 네비게이션 바 높이만큼 조정
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 애니메이션 요소들 관찰 시작
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-item, .track-card, .contact-item, .about-info');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// 현재 섹션에 따른 네비게이션 활성화
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 타이핑 효과
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 페이지 로드 시 타이핑 효과 적용
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title .name');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// 사운드 웨이브 애니메이션 강화
function animateSoundWave() {
    const waveBars = document.querySelectorAll('.wave-bar');
    waveBars.forEach((bar, index) => {
        bar.style.animationDelay = `${index * 0.1}s`;
    });
}

// 페이지 로드 시 사운드 웨이브 애니메이션 시작
document.addEventListener('DOMContentLoaded', () => {
    animateSoundWave();
});

// 스크롤 진행률 표시
function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // 진행률 바 생성 또는 업데이트
    let progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #FF6B9D, #C44569, #533483);
            z-index: 10001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = scrollPercent + '%';
}

// 스크롤 진행률 업데이트
window.addEventListener('scroll', updateScrollProgress);

// 트랙 카드 호버 효과
document.querySelectorAll('.track-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-5px) scale(1)';
    });
    
    card.addEventListener('click', () => {
        // 트랙 클릭 시 SoundCloud 링크로 이동
        window.open('https://soundcloud.com/blackpalette', '_blank');
    });
});

// 스킬 아이템 호버 효과
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(15px)';
        item.style.borderLeftColor = '#FF6B9D';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(10px)';
        item.style.borderLeftColor = '#C44569';
    });
});

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 스크롤 진행률 초기화
    updateScrollProgress();
    
    // 모든 이미지가 로드된 후 애니메이션 시작
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// 키보드 네비게이션 지원
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // ESC 키로 모바일 메뉴 닫기
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// 터치 디바이스 지원 개선
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // 위로 스와이프
            console.log('Swiped up');
        } else {
            // 아래로 스와이프
            console.log('Swiped down');
        }
    }
}

// 성능 최적화를 위한 디바운스 함수
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 스크롤 이벤트 최적화
const optimizedScrollHandler = debounce(() => {
    updateScrollProgress();
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// 뮤직 섹션 특별 효과
function initMusicSection() {
    const musicSection = document.querySelector('#music');
    if (musicSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 뮤직 섹션이 보일 때 사운드 웨이브 애니메이션 강화
                    const soundWave = document.querySelector('.sound-wave');
                    if (soundWave) {
                        soundWave.style.animation = 'pulse 2s infinite';
                    }
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(musicSection);
    }
}

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
    
    .sound-wave.pulse {
        animation: pulse 2s infinite;
    }
`;
document.head.appendChild(style);

// 페이지 로드 시 뮤직 섹션 초기화
document.addEventListener('DOMContentLoaded', initMusicSection);

// 연락처 링크 클릭 효과
document.querySelectorAll('.contact-item a').forEach(link => {
    link.addEventListener('click', (e) => {
        // 클릭 시 약간의 피드백 효과
        link.style.transform = 'scale(1.05)';
        setTimeout(() => {
            link.style.transform = 'scale(1)';
        }, 150);
    });
});

// 스크롤 시 텍스트 페이드 인 효과
function initTextFadeIn() {
    const textElements = document.querySelectorAll('.about-intro, .tagline-main, .section-subtitle');
    
    const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });
    
    textElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        textObserver.observe(el);
    });
}

// 페이지 로드 시 텍스트 페이드 인 초기화
document.addEventListener('DOMContentLoaded', initTextFadeIn); 
window.addEventListener('scroll', optimizedScrollHandler); 