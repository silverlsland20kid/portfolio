export const worksData = [
  {
    slug: "portfolio-renewal",
    num: "01",
    title: "개인 퍼블리싱 프로젝트",
    category: "Personal",
    desc: "다양한 웹사이트 구조를 분석하고 React, GSAP 기반 인터랙션과 반응형 레이아웃을 구현한 개인 작업입니다.",
    skills: ["React", "CSS", "GSAP", "Interaction"],
    period: "2025 — 2026",
    role: "구조 분석 / 퍼블리싱 / 인터랙션 구현",
    contribution: {
  planning: "레이아웃 구조 및 인터랙션 분석",
  publishing: "100%",
  interaction: "GSAP 기반 모션 구현",
},
    points: [
      "원본 사이트의 레이아웃 구조와 인터랙션 흐름 분석",
      "React 컴포넌트 단위로 섹션 구조 재구성",
      "GSAP 기반 텍스트·스크롤 모션 구현"
    ],
    implementation: [
      "GSAP ScrollTrigger를 활용해 스크롤 흐름에 따라 콘텐츠가 자연스럽게 노출되도록 구현했습니다.",

      "원본 사이트의 인터랙션 속도와 easing을 분석해 유사한 사용자 경험을 재현했습니다.",

      "콘텐츠 집중도를 높이기 위해 타이포와 이미지 간 시선 흐름을 고려해 레이아웃을 구성했습니다.",

      "불필요한 애니메이션 사용을 줄이고 브랜드 무드 전달에 필요한 인터랙션만 적용했습니다."
    ],
    projects: [
      {
        title: "AGENCY CREATIVE AUDIO",
        subtitle: "Clonecoding",
        image: "/thumbs/sample07.png",
        link: "/work/Agencycreativeaudio",
      },
      {
        title: "Fitz",
        subtitle: "Earphone Brand",
        image: "/thumbs/sample09.png",
        link: "/work/Fitz",
      },
      {
        title: "Nasmedia",
        subtitle: "Clonecoding",
        image: "/thumbs/sample11.png",
        link: "/work/Nasmedia",
      },
      {
        title: "Daewoong",
        subtitle: "Clonecoding",
        image: "/thumbs/sample12.png",
        link: "/work/Daewoong",
      },
      {
        title: "Dasoni",
        subtitle: "Clonecoding",
        image: "/thumbs/sample13.png",
        link: "/work/Dasoni",
      },
      {
        title: "Subway",
        subtitle: "Clonecoding",
        image: "/thumbs/sample10.png",
        link: "/work/Subway",
      },
    ],
  },
  {
    slug: "brand-promotion",
    num: "02",
    title: "브랜드 기획전 페이지",
    category: "Work",
    desc: "K2, Eider, Handsome, Kolonmall 등 브랜드 콘텐츠 퍼블리싱 작업입니다.",
    skills: ["HTML", "CSS", "JavaScript", "Swiper"],
    period: "2024.11 — 2025.08",
    role: "랜딩 페이지 · 이벤트 페이지 퍼블리싱 및 운영, 반응형 구조 개선",
    contribution: {
      publishing: "100%",
      design: "디자인 시안 기반 구현",
      maintenance: "운영 및 수정 대응"
    },
    points: [
      "브랜드별 톤앤매너에 맞춘 반응형 상세페이지 구현",
      "Swiper 기반 상품/콘텐츠 슬라이드 커스텀",
      "PC/MO 환경에 맞춘 이미지·텍스트 배치 최적화"
    ],
    implementation: [
      "반복되는 콘텐츠 영역은 공통 클래스 구조로 정리해 유지보수성을 높였습니다.",
      "브랜드별 시안의 간격, 폰트 크기, 이미지 비율을 실제 디바이스 기준으로 조정했습니다.",
      "기획전 특성상 짧은 일정 안에서 빠르게 수정 대응이 가능하도록 단순하고 명확한 마크업 구조를 사용했습니다."
    ],
    troubleShooting: [
      {
        problem: "모바일에서 이미지와 텍스트 간격이 브랜드별로 다르게 깨지는 문제",
        solution: "공통 여백 기준을 잡고, 브랜드별 예외 케이스만 별도 클래스로 분리했습니다."
      }
    ],
    projects: [
      {
        title: "K2 / Eider",
        subtitle: "Exhibition Publishing",
        image: "/thumbs/sample00.png",
        link: "/work/KVILLAGE",
      },
      {
        title: "Handsome",
        subtitle: "Magazine Publishing",
        image: "/thumbs/sample03.png",
        link: "/work/Handsome",
      },
      {
        title: "Kolonmall",
        subtitle: "Exhibition Publishing",
        image: "/thumbs/sample04.png",
        link: "/work/Kolonmall",
      },
    ],
  },
  {
    slug: "shoppingmall-maintenance",
    num: "03",
    title: "쇼핑몰 유지보수",
    category: "Work",
    desc: "쇼핑몰 템플릿 마크업, UI 커스터마이징, 유지보수 작업, 버그 수정",
    skills: ["HTML", "CSS", "jQuery", "Cross Browsing"],
    period: "2023.04 — 2024.03",
    role: "퍼블리싱 / 유지보수 / 고객 응대",
    points: [
      "자체 솔루션 기반 쇼핑몰 템플릿 마크업 수정",
      "UI 깨짐, 반응형 오류, 브라우저별 스타일 이슈 대응",
      "고객이 직접 관리할 수 있도록 매뉴얼 작성 및 운영 지원"
    ],
    implementation: [
      "기존 코드 구조를 파악한 뒤 영향 범위를 최소화해 수정했습니다.",
      "공통 영역과 개별 페이지 스타일을 분리해 유지보수성을 높였습니다.",
      "관리자 사용성을 고려해 반복 수정 요청이 적도록 매뉴얼을 작성했습니다."
    ],
    troubleShooting: [
      {
        problem: "기존 템플릿 수정 시 다른 페이지 UI가 함께 깨지는 문제",
        solution: "수정 범위를 페이지 단위 클래스로 제한해 스타일 충돌을 줄였습니다."
      }
    ],
    projects: [
      {
        title: "Namdo-mall",
        subtitle: "Publishing, Maintenance",
        image: "/thumbs/sample06.png",
        link: "/work/Namdomall",
      },
      {
        title: "Yeongam-mall",
        subtitle: "Publishing, Maintenance",
        image: "/thumbs/sample05.png",
        link: "/work/Yeongammall",
      },
    ],
  },
];
