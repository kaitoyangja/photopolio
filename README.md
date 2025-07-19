# Shepherd — Music. Data. Direction.

Pitchfork/GRAMMY 스타일의 감각적이고 정제된 뮤직 매거진 포맷으로 제작된 Shepherd의 포트폴리오 웹사이트입니다.

## 🎵 아티스트 프로필

**Shepherd (a.k.a. Lee Dooyoung)**
- **직함**: Musician / Data Strategy Student
- **장르**: 감각적인 힙합, 몽환적 사운드, 실험적인 비트
- **SoundCloud**: [Black Palette](https://soundcloud.com/blackpalette)
- **Instagram**: [@dress_so_red](https://instagram.com/dress_so_red)

## 🚀 주요 특징

- **뮤직 매거진 스타일**: Pitchfork/GRAMMY 공식 사이트에서 영감을 받은 감각적이고 정제된 디자인
- **이중 정체성 표현**: 아티스트(뮤지션) & 데이터 기반 경영 전공자로서의 브랜딩
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **인터랙티브 요소**: 사운드 웨이브 애니메이션, 타이핑 효과, 스크롤 애니메이션
- **모던 타이포그래피**: Playfair Display + Inter 폰트 조합

## 📁 파일 구조

```
shepherd-portfolio/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 기능
└── README.md           # 프로젝트 설명서
```

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary Black**: #000000
- **Pure White**: #FFFFFF
- **Accent Red**: #FF3C38
- **Background Gray**: #F5F5F5

### 타이포그래피
- **Headings**: Playfair Display (Serif)
- **Body Text**: Inter (Sans-serif)

### 레이아웃
- **Grid System**: CSS Grid 기반 반응형 레이아웃
- **Spacing**: 8rem 섹션 패딩, 6rem 그리드 갭
- **Typography Scale**: 4.5rem (Hero) → 3.5rem (Section) → 2rem (Subsection)

## 🎵 섹션 구성

### 1. Hero Section
- **이름**: Shepherd (a.k.a. Lee Dooyoung)
- **직함**: Musician / Data Strategy Student
- **태그라인**: "Music. Data. Direction."
- **서브태그라인**: "Logic and chaos, in harmony."
- **시각적 요소**: 사운드 웨이브 애니메이션

### 2. About Shepherd
- **슬로건**: "Strategic by mind, expressive by nature."
- **자기소개**: 서울에서 활동 중인 뮤지션이자 데이터 기반 경영 전공자
- **개인 정보**: 이름, 출생년도, 학력, 위치

### 3. Music
- **아티스트명**: Black Palette (SoundCloud)
- **사운드 아이덴티티**: 감각적인 힙합, 몽환적 사운드, 실험적인 비트
- **트랙 카드**: 3개의 대표 트랙 (플레이스홀더)

### 4. Skills & Certifications
- **자격증**: COS PRO 3급, TOEIC 910점, TOEIC Speaking AL
- **도구**: Logic Pro X, Cubase, HTML/CSS/JS, Excel/Power BI, Python
- **관심 분야**: 음악 제작, AI 기반 비즈니스 분석, 인터랙티브 미디어 아트

### 5. Contact
- **이메일**: skiswim877@gmail.com
- **소셜**: Instagram, SoundCloud
- **CTA**: "Let's build together — music, stories, or systems."

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Grid, Flexbox, 애니메이션, 반응형 디자인
- **JavaScript (ES6+)**: DOM 조작, 이벤트 처리, 인터랙션
- **Google Fonts**: Playfair Display, Inter
- **CSS Animations**: 키프레임 애니메이션, 트랜지션

## 🚀 시작하기

1. 프로젝트를 다운로드하거나 클론합니다
2. `index.html` 파일을 웹 브라우저에서 엽니다
3. 또는 로컬 서버를 실행합니다:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx serve .
   ```

## 📱 반응형 브레이크포인트

- **데스크톱**: 1200px 이상
- **태블릿**: 768px - 1199px
- **모바일**: 767px 이하

## 🎯 커스터마이징

### 개인 정보 수정
`index.html`에서 다음 내용들을 수정하세요:

```html
<!-- Hero Section -->
<span class="name">Shepherd</span>
<span class="subtitle">a.k.a. Lee Dooyoung</span>
<p class="hero-role">Musician / Data Strategy Student</p>

<!-- About Section -->
<div class="info-item">
    <h3>Name</h3>
    <p>이두영 (Lee Dooyoung)</p>
</div>
```

### 트랙 정보 업데이트
```html
<div class="track-card">
    <div class="track-info">
        <h3>트랙 제목</h3>
        <p>트랙 설명</p>
        <span class="track-date">2024</span>
    </div>
</div>
```

### 실제 트랙 이미지 추가
```html
<div class="track-artwork">
    <img src="track-image.jpg" alt="트랙 아트워크">
</div>
```

### SoundCloud 위젯 추가
```html
<div class="soundcloud-widget">
    <iframe width="100%" height="166" scrolling="no" frameborder="no" 
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/TRACK_ID">
    </iframe>
</div>
```

## 🎨 디자인 커스터마이징

### 색상 변경
`styles.css`에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다:

```css
:root {
    --primary-black: #000000;
    --pure-white: #FFFFFF;
    --accent-red: #FF3C38;
    --bg-gray: #F5F5F5;
}
```

### 폰트 변경
```html
<!-- Google Fonts에서 다른 폰트 선택 -->
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 🔧 추가 기능 구현

### 실제 SoundCloud 연동
```javascript
// SoundCloud API 연동
const SC = require('soundcloud');
SC.initialize({
    client_id: 'YOUR_CLIENT_ID'
});

SC.get('/users/blackpalette/tracks', function(tracks) {
    // 트랙 정보 표시
});
```

### 이메일 폼 연동
```javascript
// EmailJS 연동
emailjs.init("YOUR_USER_ID");
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    name: name,
    email: email,
    message: message
});
```

### 분석 도구 추가
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌐 배포

### GitHub Pages
1. GitHub 저장소에 코드를 푸시
2. Settings > Pages에서 배포 설정
3. `main` 브랜치에서 배포

### Netlify
1. Netlify에 GitHub 저장소 연결
2. 자동 배포 설정
3. 커스텀 도메인 설정 (선택사항)

### Vercel
1. Vercel에 GitHub 저장소 연결
2. 자동 배포 및 프리뷰 설정

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여

버그 리포트나 기능 제안은 이슈를 통해 제출해주세요.

## 📞 연락처

- **이메일**: skiswim877@gmail.com
- **Instagram**: @dress_so_red
- **SoundCloud**: soundcloud.com/blackpalette

---

**참고**: 이 포트폴리오는 Shepherd의 아티스트 브랜딩과 데이터 기반 역량을 동시에 보여주기 위해 제작되었습니다. 음악과 분석이라는 두 영역을 넘나드는 하이브리드형 인재의 정체성을 반영한 디자인입니다. 