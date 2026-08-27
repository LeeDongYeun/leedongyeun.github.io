# Dongyeun personal page v2

`wjuni.com`의 핵심 레이아웃(상단 배너, 프로필 카드, 고정 섹션 메뉴, 타임라인형 이력서)을 참고해 새로 작성한 독립형 정적 웹사이트입니다. 기존 `leedongyeun.github.io` 디렉터리는 수정하지 않았습니다.

## 내 정보 수정하기

대부분의 내용은 **`data.js` 한 파일**만 수정하면 됩니다.

- 이름/직함/사진: `profile`
- Scholar/GitHub/LinkedIn: `socials`
- 소속/이메일/지역/CV: `contacts`
- 자기소개: `about`
- 경력: `experience`
- 학력: `education`
- 논문: `publications`
- 수상: `awards`

사진이나 CV를 교체할 때는 `assets/`에 파일을 넣고 `data.js`의 경로를 바꾸세요. 자기소개 문장에서는 `<b>...</b>`, `<a href="...">...</a>` 같은 간단한 HTML을 사용할 수 있습니다.

상단 풍경 이미지는 `assets/hero-desktop-v2.webp`와 `assets/hero-mobile-v2.webp`입니다. 레이아웃의 크기, 색, 간격은 `styles.css`에 있으며 Poppins 폰트는 `assets/fonts/`에 포함되어 있습니다.

## 로컬에서 확인하기

이 디렉터리에서 아래 명령을 실행하세요.

```bash
python3 -m http.server 8000
```

그다음 브라우저에서 `http://localhost:8000`을 여세요.

## GitHub Pages에 올리기

완성본을 사용할 때는 이 디렉터리의 파일을 GitHub Pages 저장소 루트로 복사하면 됩니다. 별도 빌드 과정이나 npm 패키지는 필요하지 않습니다.

## 파일 구조

```text
dongyeun-page-v2/
├── index.html      # 페이지 뼈대
├── styles.css      # 디자인/반응형 스타일
├── data.js         # 수정할 개인 정보
├── app.js          # 데이터 렌더링과 메뉴 동작
└── assets/
    ├── hero-desktop-v2.webp
    ├── hero-mobile-v2.webp
    ├── fonts/
    ├── profile.jpg
    └── CV_DongyeunLee.pdf
```
