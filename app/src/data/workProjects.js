export const workProjects = {
  //서브웨이
  Subway: {
    title: "Subway – Clonecoding",
    subtitle: "Subway hompage Redesign & Clonecoding",
    description: `
      Subway 브랜드의 구조와 사용자 경험을 재해석한 클론코딩 프로젝트입니다.<br />
      단순 UI 복제를 넘어 실제 서비스 흐름(메뉴 탐색)을사용자 관점에서 다시 정리하고,<br />
      필요한 인터랙션과 정보를 재조합하는 데 집중했습니다.<br />
      <br />
      전체 레이아웃은 실제 브랜드 무드를 유지하면서도,
      React 기반의 컴포넌트 구조를 통해 유지보수성과 확장성을 높였습니다.
      또한 반응형 레이아웃과 스크롤/호버 인터랙션을 세밀하게 조정하는 방법도 모색했습니다.<br />
      이번 프로젝트는 디자인 시스템 분석, 브랜드 톤 앤 매너 이해,
      UI 구조화, 실제 서비스 UX 흐름을 코드로 풀어내는 과정 등을 학습하고 정리하는 데 중점을 둔 작업입니다.
    `,
    year: "2025",
    role: "UI/UX Designer · Publisher",
    duration: "약 1주",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React",
      "React Router",
      "Slick",
    ],

    github:
      "https://github.com/silverlsland20kid/portfolio/tree/main/projects/subway",
    demo: "https://subway-liart.vercel.app/",
  },

  //나스미디어
  Nasmedia: {
    title: "Nasmedia – Clonecoding",
    subtitle: "Nasmedia hompage Clonecoding",
    description: `
      나스미디어 자회사의 홈페이지 클론코딩 프로젝트입니다.<br />
      사용자의 입력(마우스 휠, 터치 스와이프)을 감지하여 섹션을 전환하는 기능을 중점으로 제작해보았으며,<br />
      전체 화면 슬라이드되는 기능을 통해 사용자가 섹션을 전환할 때 화면이 부드럽게 위아래로 이동하도록 작업했습니다.<br />
<br />
      각 섹션의 배경 테마(밝음/어두움)에 따라 헤더 스타일 자동 변경되는 구조를 분석하며, 
      자회사의 아이덴티티를 느낄 수 있는 브랜드 톤 앤 매너 이해, 여러 애니메이션 css를 학습하고 정리하는 데 중점을 둔 작업입니다.
    `,
    year: "2025",
    role: "Publishing",
    duration: "약 2주",
    skills: ["HTML5", "CSS", "JavaScript(ES6+)", "React"],

    github:
      "https://github.com/silverlsland20kid/portfolio/tree/main/projects/nasmedia",
    demo: "https://nasmedia-alpha.vercel.app/",
  },

  //투두앱
  todoapp: {
    title: "todoapp – Project",
    subtitle: "todoapp Project",
    description: `
      이 프로젝트는 리액트(useReducer) 기반의 상태 관리와 미니멀한 UI/UX를 중심으로 구현한 Todo 애플리케이션입니다. <br />
      사용자 경험을 우선으로 고려해, 복잡한 기능 없이도 할 일을 빠르게 기록·완료·검색할 수 있도록 설계했습니다.<br />

      전체적인 디자인은 **톤온톤(Tone-on-tone) 구성과 포인트 컬러(#F7CD46)**를 사용해 <br />
      간결하면서도 시각적으로 안정감을 주도록 구성했으며, <br />
      주요 인터랙션은 부드러운 애니메이션과 자연스러운 포커스 스타일로 완성했습니다.<br />
    `,
    year: "2025",
    role: "Publishing",
    duration: "약 1주",
    skills: ["HTML5", "CSS", "JavaScript(ES6+)", "React"],

    github:
      "https://github.com/silverlsland20kid/portfolio/tree/main/projects/todoapp",
    demo: "https://daewoong-nine.vercel.app",
  },

  //대웅제약
  Daewoong: {
    title: "Daewoong – Clonecoding",
    subtitle: "Daewoong hompage Clonecoding",
    description: `
      대웅제약 자회사의 홈페이지 클론코딩 프로젝트입니다.<br />
      제약회사인만큼 정보를 사용자에게 많이 전달해야 하는점을 고려하여 swiper 를 통해 클론코딩으로 제작해보았으며,
      각 섹션 클릭시 페이지가 이동하는 구조를 분석하며 제이쿼리로 작성하여 작업해보았습니다.<br />

      자회사의 아이덴티티를 느낄 수 있는 브랜드 톤 앤 매너 이해, 학습하고 정리하는 데 중점을 둔 작업입니다.
    `,
    year: "2025",
    role: "Publishing",
    duration: "약 1주",
    skills: ["HTML5", "CSS", "JavaScript(ES6+)", "swiper.js"],

    github:
      "https://github.com/silverlsland20kid/portfolio/tree/main/projects/daewoong",
    demo: "https://daewoong-nine.vercel.app/",
  },

  //다소니
  Dasoni: {
    title: "Dasoni – Clonecoding",
    subtitle: "Dasoni hompage Redesign & Clonecoding",
    description: `
      다소니 심리상담센터 홈페이지 클론코딩 프로젝트입니다.<br />
      각 섹션은 스크롤 위치를 계산하여 요소별로 순차 애니메이션이 적용되도록 jQuery 기반의 스크롤 인터랙션을 직접 구성했습니다.
      제목, 설명, 리스트가 단계적으로 등장하는 구조로 상담센터의 편안한 분위기와 정보전달의 흐름을 고려한 방식으로 작업했습니다.<br />
      <br />
      또한 예약·검사·후기 등 반복되는 UI 패턴을 리스트 기반으로 공통화하여<br />
      콘텐츠 구조를 더 직관적으로 파악할 수 있도록 jQuery와 bxSlider 중심으로 제작해보았습니다.
    `,
    year: "2025",
    role: "Publishing",
    duration: "약 2주",
    skills: ["HTML5", "CSS", "JavaScript(ES6+)", "swiper.js", "bxslider"],

    github:
      "https://github.com/silverlsland20kid/portfolio/tree/main/projects/daewoong",
    demo: "https://dasoni-five.vercel.app/",
  },

  //KVILLAGE
  KVILLAGE: {
    title: "K.VILLAGE publishing",
    subtitle: "K.VILLAGE publishing",
    description: `
      K.VILLAGE 회사 내의 여러 브랜드 (k2, eider 등) 전시/이벤트를 소개하는 원페이지 퍼블리싱을 담당했습니다.<br />
      디자인 시안과 컴포넌트 가이드를 바탕으로 시맨틱 마크업과 반응형 레이아웃을 구현했고,<br />
      상품 슬라이드, 앵커 네비게이션, 스크롤 인터랙션 등을 크로스브라우징 기준에 맞춰 작업했습니다.<br />
      <br />
      회사 프로젝트 특성상 실제 소스 코드는 비공개이며, 퍼블리싱 담당 영역과 기여도를 중심으로 설명하고 있습니다.<br />
      공개 가능한 화면만 캡처하여 <span class="link-to-lab">포트폴리오에 정리</span>했습니다.
    `,
    year: "2025",
    role: "Publishing",
    duration: "원페이지 기준 약 1~3일",
    skills: [
      "HTML5",
      "CSS3 (반응형)",
      "JavaScript",
      "jQuery",
      "Swiper.js",
      "Photoshop",
    ],

    github: null,
    demo: null,
  },

  //Handsome
  Handsome: {
    title: "Handsome publishing",
    subtitle: "Handsome publishing",
    description: `
      Handsome 브랜드의 이벤트, 매거진을 소개하는 원페이지 퍼블리싱을 담당했습니다.<br />
      디자인 시안과 컴포넌트 가이드를 바탕으로 시맨틱 마크업과 반응형 레이아웃을 구현했고,<br />
      상품 슬라이드, 앵커 네비게이션, 스크롤 인터랙션 등을 크로스브라우징 기준에 맞춰 작업했습니다.<br />
      <br />
      회사 프로젝트 특성상 실제 소스 코드는 비공개이며, 퍼블리싱 담당 영역과 기여도를 중심으로 설명하고 있습니다.<br />
      공개 가능한 화면만 캡처하여 <span class="link-to-lab">포트폴리오에 정리</span>했습니다.
    `,
    year: "2025",
    role: "Publishing",
    duration: "원페이지 기준 약 1~3일",
    skills: [
      "HTML5",
      "CSS3 (반응형)",
      "JavaScript",
      "jQuery",
      "Swiper.js",
      "Photoshop",
    ],

    github: null,
    demo: null,
  },

  //kolonmall
  kolonmall: {
    title: "kolonmall publishing",
    subtitle: "kolonmall publishing",
    description: `
      kolonmall 브랜드의 매거진을 소개하는 원페이지 퍼블리싱을 담당했습니다.<br />
      디자인 시안과 컴포넌트 가이드를 바탕으로 시맨틱 마크업과 반응형 레이아웃을 구현했고,<br />
      상품 슬라이드, 앵커 네비게이션, 스크롤 인터랙션 등을 크로스브라우징 기준에 맞춰 작업했습니다.<br />
      <br />
      회사 프로젝트 특성상 실제 소스 코드는 비공개이며, 퍼블리싱 담당 영역과 기여도를 중심으로 설명하고 있습니다.<br />
      공개 가능한 화면만 캡처하여 <span class="link-to-lab">포트폴리오에 정리</span>했습니다.<br />
    `,
    year: "2025",
    role: "Publishing",
    duration: "원페이지 기준 약 1~3일",
    skills: [
      "HTML5",
      "CSS3 (반응형)",
      "JavaScript",
      "jQuery",
      "Swiper.js",
      "Photoshop",
    ],

    github: null,
    demo: null,
  },

  //Agencycreativeaudio
  Agencycreativeaudio: {
    title: "agency-creative-audio – Clonecoding",
    subtitle: "agency-creative-audio Clonecoding",
    description: `
      agency-creative-audio 홈페이지 클론코딩 프로젝트입니다.<br />
      각 섹션은 스크롤 위치를 계산하여 요소별로 순차 애니메이션이 적용되도록 
      GSAP 기반의 스크롤 인터랙션으로 클론코딩으로 작업했습니다.<br />
      각섹션마다 여러 효과를 주어 사용자로 하여금 호기심과 부드러운 ui,ux 경험을 중심으로 제작하였으며<br />
      제목, 설명, 리스트가 부드럽고 단계적으로 등장하는 구조로 편안한 분위기와 여러 애니메이션을 학습하고 정리하는데 중점을 둔 작업입니다.
    `,
    year: "2024",
    role: "Publishing",
    duration: "약 1주",
    skills: ["HTML5", "CSS", "JavaScript(ES6+)", "GSAP"],

    github:
      "https://github.com/silverlsland20kid/portfolio/tree/main/projects/Agencycreativeaudio",
    demo: "https://agencycreativeaudio.vercel.app/",
  },

  //남도장터
  Namdomall: {
    title: "Namdomall publishing & Maintenance",
    subtitle: "Namdomall publishing & Maintenance",
    description: `
      Namdomall 홈페이지 부분 퍼블리싱, 유지보수를 담당했습니다.<br />
      자체 솔루션을 활용하여 리뉴얼 및 부분 홈페이지 퍼블리싱 작업을 진행했었고,<br />
      컴포넌트 가이드를 바탕으로 시맨틱 마크업과 반응형 레이아웃을 작업했습니다.<br />
      상품 슬라이드, 앵커 네비게이션, 스크롤 인터랙션 등을 크로스브라우징 기준에 맞춰 작업하였으며,<br />
      쇼핑몰 CS팀과 끊임없이 소통하며 유지개발 및 개발 프로그램의 버그 확인 및 리뉴얼 수정 업무를 도맡아 진행했습니다.
      <br />
      회사 프로젝트 특성상 실제 소스 코드는 비공개이며, 퍼블리싱 담당 영역과 유지보수 중심으로 설명하고 있습니다.<br />
      ※ 현재 사이트는 이후 리뉴얼로 구조와 UI가 변경되었을 수 있습니다.<br />
    `,
    year: "2023",
    role: "Publishing , Maintenance",
    duration: "11개월",
    skills: ["HTML5", "CSS3 (반응형)", "JavaScript", "jQuery", "Photoshop"],

    github: null,
    demo: "https://www.jnmall.kr/",
  },

  //영암몰
  Yeongammall: {
    title: "Yeongammall publishing & Maintenance",
    subtitle: "Yeongammall publishing & Maintenance",
    description: `
      Yeongammall 홈페이지 전체 퍼블리싱, 유지보수를 담당했습니다.<br />
      자체 솔루션을 활용하여 전체 홈페이지 퍼블리싱 작업을 진행했었고,
      컴포넌트 가이드를 바탕으로 시맨틱 마크업과 반응형 레이아웃을 작업했습니다.<br />
      상품 슬라이드, 앵커 네비게이션, 스크롤 인터랙션 등을 크로스브라우징 기준에 맞춰 작업하였으며,<br />
      쇼핑몰 오픈 이후에는 CS팀과 끊임없이 소통하며 유지개발 및 개발 프로그램의 버그 확인 및 리뉴얼 수정 업무를 도맡아 진행했습니다.
      <br />
      회사 프로젝트 특성상 실제 소스 코드는 비공개이며, 퍼블리싱 담당 영역과 유지보수 중심으로 설명하고 있습니다.<br />
      ※ 현재 사이트는 이후 리뉴얼로 구조와 UI가 변경되었을 수 있습니다.<br />
    `,
    year: "2023",
    role: "Publishing , Maintenance",
    duration: "1개월~1개월2주",
    skills: ["HTML5", "CSS3 (반응형)", "JavaScript", "jQuery", "Photoshop"],

    github: null,
    demo: "https://yeongammall.co.kr/",
  },

  //Earphone
  Fitz: {
    title: "Earphone-brand (Fitz)",
    subtitle: "Earphone-brand (Fitz)",
    description: `
      Earphone-brand Fitz 라는 브랜드를 직접 디자인, 퍼블리싱한 프로젝트입니다.<br />
      평소에 관심있었던 이어폰 기기들을 생각하여 자체 브랜딩 및 홈페이지를 제작해보았으며,
      시맨틱 마크업 기준으로 반응형 레이아웃을 작업했습니다.<br />
      jQuery,bootstrap 기반으로 각섹션 마다 사용자로부터 상품이 돋보이도록 ui,ux 경험을 중심으로 작업했습니다.<br />
      부족한 점이 많이 보이지만 처음 코딩을 배운 후 직접 디자인까지 세심하게 작업하며 진행해본 프로젝트입니다.
    `,
    year: "2024",
    role: "Publishing",
    duration: "약 2주",
    skills: ["HTML5", "CSS", "JavaScript(ES6+)", "jQuery"],

    github:
      "https://github.com/silverlsland20kid/portfolio/tree/main/projects/Fitz",
    demo: "https://fitz-alpha.vercel.app/",
  },
};
