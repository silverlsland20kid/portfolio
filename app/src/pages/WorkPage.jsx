import { Link } from "react-router-dom";
import ProjectSide from "../components/ProjectSide";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/WorkPage.css";

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// Main Projects
const mainProjects = [
  {
    title: "AGENCY CREATIVE AUDIO",
    subtitle: "Clonecoding",
    desc: "감각적인 오디오 브랜드 사이트를 기반으로 인터랙션과 레이아웃 구현을 연습한 프로젝트입니다.",
    image: "/thumbs/sample07.png",
    link: "/work/Agencycreativeaudio",
  },
  {
    title: "Fitz",
    subtitle: "Earphone Brand",
    desc: "이어폰 브랜드 콘셉트의 개인 프로젝트로, 제품 중심 UI와 브랜드 무드를 구현했습니다.",
    image: "/thumbs/sample09.png",
    link: "/work/Fitz",
  },
  {
    title: "Nasmedia",
    subtitle: "Clonecoding",
    desc: "기업형 웹사이트 구조와 콘텐츠 배치를 클론코딩한 프로젝트입니다.",
    image: "/thumbs/sample11.png",
    link: "/work/Nasmedia",
  },
  {
    title: "Daewoong",
    subtitle: "Clonecoding",
    desc: "제약/기업 사이트의 정돈된 정보 구조와 반응형 레이아웃을 구현했습니다.",
    image: "/thumbs/sample12.png",
    link: "/work/Daewoong",
  },
];

// Commercial Works
const commercialWorks = [
  {
    year: "2025",
    items: [
      {
        title: "K2 / Eider",
        subtitle: "exhibition publishing",
        link: "/work/KVILLAGE",
      },
      {
        title: "Handsome",
        subtitle: "magazine publishing",
        link: "/work/Handsome",
      },
      {
        title: "Kolonmall",
        subtitle: "exhibition publishing",
        link: "/work/Kolonmall",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Namdo-mall",
        subtitle: "publishing, maintenance",
        link: "/work/Namdomall",
      },
      {
        title: "Yeongam-mall",
        subtitle: "publishing, maintenance",
        link: "/work/Yeongammall",
      },
    ],
  },
];

// Lab Archive
const labProjects = [
  {
    title: "Subway",
    subtitle: "Clonecoding",
    image: "/thumbs/sample10.png",
    link: "/work/Subway",
  },
  {
    title: "Todo-App",
    subtitle: "React Project",
    image: "/thumbs/sample14.png",
    link: "/work/todoapp",
  },
  {
    title: "Dasoni therapy",
    subtitle: "Clonecoding",
    image: "/thumbs/sample13.png",
    link: "/work/Dasoni",
  },
];

// 모바일 썸네일 데이터
const mobileThumbData = [
  { src: "/thumbs/sample10.png", label: "Subway", link: "/work/Subway" },
  { src: "/thumbs/sample11.png", label: "Nasmedia", link: "/work/Nasmedia" },
  { src: "/thumbs/sample14.png", label: "Todo-App", link: "/work/todoapp" },
  { src: "/thumbs/sample12.png", label: "Daewoong", link: "/work/Daewoong" },
  {
    src: "/thumbs/sample13.png",
    label: "Dasoni therapy",
    link: "/work/Dasoni",
  },
  { src: "/thumbs/sample00.png", label: "K2 / Eider", link: "/work/KVILLAGE" },
  { src: "/thumbs/sample03.png", label: "Handsome", link: "/work/Handsome" },
  { src: "/thumbs/sample04.png", label: "Kolonmall", link: "/work/kolonmall" },
  {
    src: "/thumbs/sample07.png",
    label: "Agency Creative Audio",
    link: "/work/Agencycreativeaudio",
  },
  { src: "/thumbs/sample06.png", label: "Namdo-mall", link: "/work/Namdomall" },
  {
    src: "/thumbs/sample05.png",
    label: "Yeongam-mall",
    link: "/work/Yeongammall",
  },
  { src: "/thumbs/sample09.png", label: "Fitz", link: "/work/Fitz" },
];

// 모바일 썸네일 스트립 컴포넌트
// function MobileThumbStrip() {
//   return (
//     <div className="mobile-thumb-strip">
//       {/* <div className="mobile-thumb-strip__label">PROJECT PREVIEW</div> */}
//       <div className="mobile-thumb-strip__inner">
//         {mobileThumbData.map((item) => (
//           <Link
//             to={item.link}
//             key={item.label}
//             className="mobile-thumb-strip__item"
//           >
//             <div className="mobile-thumb-strip__img-wrap">
//               <img src={item.src} alt={item.label} />
//             </div>
//             <span className="mobile-thumb-strip__caption">{item.label}</span>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

export default function WorkPage() {
  // 홈페이지 인트로애니메이션 추가 GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".work-card-anim", { opacity: 0, y: 14 }); // 초기상태 고정

      // 카드들 하나씩 등장 애니메이션
      gsap.utils.toArray(".work-card-anim").forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          delay: i * 0.06,
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });

      // 모바일 썸네일 스트립 전체 컨테이너 등장
      gsap.from(".mobile-thumb-strip", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".mobile-thumb-strip",
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // 각 썸네일 아이템들 살짝씩 순차 등장
      gsap.utils.toArray(".mobile-thumb-strip__item").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 12,
          scale: 0.96,
          duration: 0.5,
          delay: i * 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".mobile-thumb-strip",
            start: "top 95%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });
    });

    // 정리 함수
    return () => ctx.revert();
  }, []);

  return (
    <div className="project-list work-hero-fade project-list--about">
      {/* 왼쪽 사이드(시계/도시) */}
      <ProjectSide />

      {/* 가운데 썸네일 뷰어 */}
      <div className="project-list__thumb-viewer" id="cardThumbViewer"></div>

      {/* 오른쪽 연도 영역 */}
      {/* <div className="project-list__years">
        <div className="project-list__year-item">[2025]</div>
        <div className="project-list__year-item"></div>
        <div className="project-list__year-item"></div>
        <div className="project-list__year-item"></div>
        <div className="project-list__year-item"></div>
        <div className="project-list__year-item"></div>
        <div className="project-list__year-item"></div>
        <div className="project-list__year-item"></div>
        <div className="project-list__year-item">[2024]</div>
        <div className="project-list__year-item">[2023]</div>
      </div> */}

      {/* 프로젝트 카드 리스트 */}
      {/* <section className="project-list__cards" ref={pageRef}>
        <div className="project-list__card-wrap">
          <Link
            to="/work/Subway"
            className="project-card__link work-card-anim"
            onMouseEnter={(e) => handleMouseEnter("/thumbs/sample10.png", e)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <div className="project-card__content project-card__content--figma">
              <div className="project-card__title">Subway</div>
              <div className="project-card__subtitle">Clonecoding</div>
            </div>
          </Link>

          <Link
            to="/work/Nasmedia"
            className="project-card__link work-card-anim"
            onMouseEnter={(e) => handleMouseEnter("/thumbs/sample11.png", e)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <div className="project-card__content project-card__content--figma">
              <div className="project-card__title">Nasmedia</div>
              <div className="project-card__subtitle">Clonecoding</div>
            </div>
          </Link>

          <Link
            to="/work/todoapp"
            className="project-card__link work-card-anim"
            onMouseEnter={(e) => handleMouseEnter("/thumbs/sample14.png", e)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <div className="project-card__content project-card__content--figma">
              <div className="project-card__title">Todo-App</div>
              <div className="project-card__subtitle">Project</div>
            </div>
          </Link>

          <Link
            to="/work/Daewoong"
            className="project-card__link work-card-anim"
            onMouseEnter={(e) => handleMouseEnter("/thumbs/sample12.png", e)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <div className="project-card__content project-card__content--figma">
              <div className="project-card__title">Daewoong</div>
              <div className="project-card__subtitle">Clonecoding</div>
            </div>
          </Link>

          <Link
            to="/work/Dasoni"
            className="project-card__link work-card-anim"
            onMouseEnter={(e) => handleMouseEnter("/thumbs/sample13.png", e)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <div className="project-card__content project-card__content--figma">
              <div className="project-card__title">Dasoni therapy</div>
              <div className="project-card__subtitle">Clonecoding</div>
            </div>
          </Link>

          <Link
            to="/work/KVILLAGE"
            className="project-card__link work-card-anim"
            onMouseEnter={(e) => handleMouseEnter("/thumbs/sample00.png", e)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <div className="project-card__content project-card__content--new-exp">
              <div className="project-card__title">
                K2 / Eider <span>(exhibition)</span>
              </div>
              <div className="project-card__subtitle">
                publishing
                <br />
              </div>
            </div>
          </Link>

          <Link
            to="/work/Handsome"
            className="project-card__link work-card-anim"
            onMouseEnter={(e) => handleMouseEnter("/thumbs/sample03.png", e)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <div className="project-card__content project-card__content--circle">
              <div className="project-card__title">
                Handsome <span>(magazine)</span>
              </div>
              <div className="project-card__subtitle">
                publishing
                <br />
              </div>
            </div>
          </Link>

          <Link
            to="/work/kolonmall"
            className="project-card__link work-card-anim"
            onMouseEnter={(e) => handleMouseEnter("/thumbs/sample04.png", e)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <div className="project-card__content project-card__content--snap">
              <div className="project-card__title">
                Kolonmall <span>(exhibition)</span>
              </div>
              <div className="project-card__subtitle">
                publishing
                <br />
              </div>
            </div>
          </Link>

          <Link
            to="/work/Agencycreativeaudio"
            className="project-card__link work-card-anim"
            onMouseEnter={(e) => handleMouseEnter("/thumbs/sample07.png", e)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <div className="project-card__content project-card__content--retour">
              <div className="project-card__title">AGENCY CREATIVE AUDIO</div>
              <div className="project-card__subtitle">
                Clonecoding
                <br />
              </div>
            </div>
          </Link>

          <Link
            to="/work/Namdomall"
            className="project-card__link work-card-anim"
            onMouseEnter={(e) => handleMouseEnter("/thumbs/sample06.png", e)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <div className="project-card__content project-card__content--eames">
              <div className="project-card__title">Namdo-mall</div>
              <div className="project-card__subtitle">
                publishing, maintenance
              </div>
            </div>
          </Link>

          <Link
            to="/work/Yeongammall"
            className="project-card__link work-card-anim"
            onMouseEnter={(e) => handleMouseEnter("/thumbs/sample05.png", e)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <div className="project-card__content project-card__content--recchiuti">
              <div className="project-card__title">Yeongam-mall</div>
              <div className="project-card__subtitle">
                publishing, maintenance
                <br />
              </div>
            </div>
          </Link>

          <Link
            to="/work/Fitz"
            className="project-card__link work-card-anim"
            onMouseEnter={(e) => handleMouseEnter("/thumbs/sample09.png", e)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            <div className="project-card__content project-card__content--recchiuti">
              <div className="project-card__title">Fitz (Earphone-brand)</div>
              <div className="project-card__subtitle">
                Project
                <br />
              </div>
            </div>
          </Link>
        </div>
      </section> */}

      <section className="featured-projects">
        <h2>Main Projects</h2>

        <div className="featured-projects__grid">
          {mainProjects.map((project) => (
            <Link
              to={project.link}
              className="featured-card work-card-anim"
              key={project.title}
            >
              <div className="featured-card__image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="featured-card__text">
                <span>{project.subtitle}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="commercial-works">
        <h2>Commercial Works</h2>

        {commercialWorks.map((group) => (
          <div
            className="commercial-works__group work-card-anim"
            key={group.year}
          >
            <strong>[{group.year}]</strong>

            <ul>
              {group.items.map((item) => (
                <li key={item.title}>
                  <Link to={item.link}>
                    <span>{item.title}</span>
                    <em>{item.subtitle}</em>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="lab-archive">
        <h2>Lab Archive</h2>

        <div className="lab-archive__list">
          {labProjects.map((project) => (
            <Link
              to={project.link}
              className="lab-card work-card-anim"
              key={project.title}
            >
              <img src={project.image} alt={project.title} />
              <div>
                <strong>{project.title}</strong>
                <span>{project.subtitle}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 모바일 전용 썸네일 스트립 */}
      {/* <MobileThumbStrip /> */}
    </div>
  );
}
