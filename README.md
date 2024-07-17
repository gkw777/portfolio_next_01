# 포트폴리오( CarHub 클론 )
CarHub 클론 프로젝트입니다.
자동차 브랜드, 자동차 모델, 연료타입, 년도를 입력하여 해당 자동차의 정보를 보여주는 웹 페이지입니다.

### 프로젝트 구성 기술 안내
1. 프레임워크: NextJS
2. css 라이브러리: tailwindcss
3. UI 라이브러리: headlessui/react
4. 언어: TypeScript
5. 개발툴: vscode
6. 오픈 API: rapidapi.com <- 무료로 제공하는 API로 자동차의 정보를 불러오는 API
7. 자동차 이미지: imagin.studio 에서 이미지 API 호출( 개인에겐 API가 막혀있으며 모든 이미지가 나오질 않음 )
   
### 폴더 구조
![화면 캡처 2024-07-03 180219](https://github.com/gkw777/portfolio_next_01/assets/62530852/a25ef42c-1834-4c29-8ab6-6ff2b973061c)
1. app: 글로벌 css, 레이아웃, 페이지
2. components: 페이지에 표시될 UI 컴포넌트
3. constants: 자동차 브랜드, Fuel, Year, 칼럼과 footer 링크 정보
4. types: 글로벌 interface 정보
5. utils: api 함수 정의
6. public: 이미지 파일

### 이슈사항
#### Lighthouse 성능 지표 79점 LCP 3.6초 낮다(?).
![화면 캡처 2024-07-17 180639_111](https://github.com/user-attachments/assets/d170332f-bed0-46e3-8024-f8f15bf94bf7)
![화면 캡처 2024-07-17 180639_222](https://github.com/user-attachments/assets/2bc18aa5-7988-4833-af1c-1ea238466acb)
- 원인: hero 이미지와 BG 이미지의 해상도에 따라 높이 조절하지 않아 불필요한 높이를 가지고 있다라는 점.
- 해결점:
   - 먼저 BG 이미지를 css에서 url로 로드하는 방식을 next/Image 컴포넌트로 이미지 로드 처리
   - hero 이미지와 BG 이미지를 해상도에 따라 높이 조절 처리( 미디어 쿼리 min-width: 1280px: 100vh, 786px: 75vh, 그 외 해상도일때 35vh)
- 느낌점: 아직도 만족스럽진 않지만 불필요한 자리를 차지하지않게 미디어 쿼리를 좀 더 활용할 필요성이 있다.

## 데모 영상
![_2024_07_03_18_18_37_649-ezgif com-video-to-gif-converter (1)](https://github.com/gkw777/portfolio_next_01/assets/62530852/8b93d733-8a76-4b30-993d-bbd155b8271e)

## Screen View
### 데스크탑 화면
![screencapture-gkw777-portfolio-next-01-vercel-app-2024-07-03-17_00_38](https://github.com/gkw777/portfolio_next_01/assets/62530852/2eaba58c-2156-46d3-94fc-4679362d1b72)
### 테블릿 화면
![screencapture-gkw777-portfolio-next-01-vercel-app-2024-07-03-17_40_48](https://github.com/gkw777/portfolio_next_01/assets/62530852/c095a4d9-c2fc-4937-9645-f8b74d0e77e9)
### 모바일 화면
![screencapture-gkw777-portfolio-next-01-vercel-app-2024-07-03-17_39_25](https://github.com/gkw777/portfolio_next_01/assets/62530852/2d69a6f9-d4ad-4154-a011-da44c642834f)
