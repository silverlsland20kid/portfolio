import { useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { worksData } from "./data/worksData";
import WorkPage from "./pages/WorkPage";
import WorkDetail from "./pages/WorkDetail";
import "./styles/App.css";
import Header from "./components/Header";
import LabPage from "./pages/LabPage";

export default function App() {

  // 페이지 이동 시 항상 맨 위로 이동시키는 컴포넌트
  function ScrollToTop() {
    const { pathname } = useLocation();

    // 페이지 이동 시 스크롤 초기화
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  // 마우스 커서 커스텀
  useEffect(() => {
    // dot = 실제 마우스 위치
    // ring = 부드럽게 따라오는 원형 커서
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    // 마우스 위치 추적
    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      // dot은 바로 이동
      gsap.set(dot, {
        x: mouseX,
        y: mouseY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // ring은 천천히 따라오게 설정
    // 값이 작을수록 더 부드럽고 느리게 움직임
    function cursorLoop() {
      ringX += (mouseX - ringX) * 0.08;
      ringY += (mouseY - ringY) * 0.08;

      gsap.set(ring, {
        x: ringX,
        y: ringY,
      });

      requestAnimationFrame(cursorLoop);
    }

    cursorLoop();

    // 클릭 가능한 요소에 hover 시 커서 스타일 변경되도록 설정
    document
      .querySelectorAll("a, .works__row, .contact__btn")
      .forEach((element) => {
        element.addEventListener("mouseenter", () =>
          ring.classList.add("is-hover"),
        );
        element.addEventListener("mouseleave", () =>
          ring.classList.remove("is-hover"),
        );
      });

    // GSAP ScrollTrigger 등록
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".display").forEach((heading) => {
      gsap.from(heading, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%",
        },
      });
    });

    gsap.from(".strength-card__inner", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".strengths",
        start: "top 60%",
        once: true,
      },
    });

    gsap.from(".works__row", {
      x: -20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.07,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".works",
        start: "top 60%",
        once: true,
      },
    });

    gsap.from(".timeline__row", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top 60%",
      },
    });

    // 스크롤 양에 따라 width 증가
    gsap.to(".progress", {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // cleanup 페이지 이동 시 기존 ScrollTrigger 제거
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>

      <ScrollToTop />
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
        <Route path="/lab" element={<LabPage />} />
      </Routes>
    </>
  );
}

function Home() {

  useEffect(() => {
    gsap.set(".hero__line", {
      clipPath: "inset(0 0 100% 0)",
    });

    gsap.to(".hero__line", {
      clipPath: "inset(0 0 0% 0)",
      duration: 1.2,
      stagger: 0.18,
      ease: "power4.out",
    });

    gsap.to(".hero__job", {
      y: 0,
      opacity: 1,
      delay: 0.5,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(".hero__scroll", {
      y: 10,
      opacity: 0.45,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    return () => {
      gsap.killTweensOf(".hero__line");
      gsap.killTweensOf(".hero__job");
      gsap.killTweensOf(".hero__scroll");
    };
  }, []);



  // Contact 섹션에 사용할 영상 목록
  const previewVideos = [
    {
      type: "mo",
      src: "/assets/video02_mo.mp4",
      link: "https://www.k-village.co.kr/exhibitionDetail?spexhNo=1774&page=1",
    },
    {
      type: "mo",
      src: "/assets/video07_mo.mp4",
      link: "https://www.hfashionmall.com/article/STORY/9711/view",
    },
    {
      type: "mo",
      src: "/assets/video11_mo.mp4",
      link: "https://www.hfashionmall.com/article/STYLE/10191/view",
    },
    {
      type: "mo",
      src: "/assets/video08_mo.mp4",
      link: "https://www.hfashionmall.com/article/STORY/9907/view",
    },
    {
      type: "pc",
      src: "/assets/video06.mp4",
      link: "https://www.hfashionmall.com/article/STYLE/9208/view",
    },
    {
      type: "pc",
      src: "/assets/video01.mp4",
      link: "https://www.k-village.co.kr/exhibitionDetail?spexhNo=1884&page=1",
    },
    {
      type: "pc",
      src: "/assets/video09.mp4",
      link: "https://www.hfashionmall.com/article/STORY/9822/view",
    },
  ];


  // 배열 랜덤 섞기 함수 [...arr] → 원본 배열 보호용 복사
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  // PC 영상 랜덤 2개
  const randomPcVideos = shuffle(
    previewVideos.filter((video) => video.type === "pc"),
  ).slice(0, 2);

  // mo 영상 랜덤 2개
  const randomMoVideos = shuffle(
    previewVideos.filter((video) => video.type === "mo"),
  ).slice(0, 2);

  // 최종 출력 영상 배열 pc 2개 + mobile 2개
  const randomVideos = [...randomPcVideos, ...randomMoVideos];

  return (
    <>
      <div className="progress"></div>

      <header className="hero" id="home">
        <div className="hero__top">
          <p className="hero__job">Web Publisher</p>
          <p>2026</p>
        </div>

        <h1 className="hero__name">
          <span className="hero__line">LEE</span>
          <span className="hero__line">EUN</span>
          <span className="hero__line">SEOM</span>
        </h1>

        <div className="hero__bottom">
          <p className="hero__bio">
            프로젝트마다 다른 요구와 목적을 읽고,<br /> 브랜드의 메시지를 화면 위에
            정확하게 구현하는 웹 퍼블리셔 이은섬입니다.
          </p>
          <p className="hero__scroll">Scroll ↓</p>
        </div>
      </header>

      <div className="marquee">
        <div className="marquee__inner">
          <span>
            Frontend Publisher | UI Interaction | Responsive Web | Accessibility | Motion & Animation
          </span>
          <span>
            Frontend Publisher | UI Interaction | Responsive Web | Accessibility | Motion & Animation
          </span>
          <span>
            Frontend Publisher | UI Interaction | Responsive Web | Accessibility | Motion & Animation
          </span>
        </div>
      </div>

      <main>
        <section className="about" id="about">
          <p className="section-label">01 About</p>
          <h2 className="display">
            ABOUT
            <br />
            ME
          </h2>

          <div className="about__grid">
            <blockquote className="about__quote">
              “좋은 인터페이스는 설명보다 먼저 흐름으로 이해된다고 생각합니다.”
            </blockquote>

            <div className="about__text">
              <p>
                저는 변화하는 상황 속에서 더 나은 방식을 찾는 과정을 자연스럽게
                받아들이는 퍼블리셔입니다. <br />
                서비스업과 웹 에이전시 경험을 거치며 다양한 사람들과 소통했고,
                책임감과 문제 해결력을 키웠습니다.
              </p>

              <div className="strengths">
                <article className="strength-card">
                  <div className="strength-card__inner">
                    <div className="strength-card__top">
                      <span className="strength-card__dot"></span>
                    </div>
                    <strong>UI Structure</strong>
                    <p>
                      콘텐츠의 우선순위를 정리하고, 사용자가 자연스럽게 읽을 수 있는
                      섹션 흐름을 설계합니다.
                    </p>
                  </div>
                </article>

                <article className="strength-card">
                  <div className="strength-card__inner">
                    <div className="strength-card__top">

                      <span className="strength-card__dot"></span>
                    </div>

                    <strong>Responsive Layout</strong>
                    <p>
                      PC와 모바일 환경에서 비율, 간격, 정렬이 어색하지 않도록
                      반응형 구조를 세밀하게 조정합니다.
                    </p>
                  </div>
                </article>

                <article className="strength-card">
                  <div className="strength-card__inner">
                    <div className="strength-card__top">
                      <span className="strength-card__dot"></span>
                    </div>

                    <strong>Interaction</strong>
                    <p>
                      GSAP, Swiper, React를 활용해 콘텐츠의 분위기를 살리는
                      부드러운 인터랙션을 구현합니다.
                    </p>
                  </div>
                </article>

                <article className="strength-card">
                  <div className="strength-card__inner">
                    <div className="strength-card__top">
                      <span className="strength-card__dot"></span>
                    </div>
                    <strong>Publishing Quality</strong>
                    <p>
                      디자인 의도를 유지하면서도 재사용과 유지보수를 고려한
                      HTML, CSS 구조를 작성합니다.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="works">
          <p className="section-label">02 Works</p>
          <h2 className="display">WORKS</h2>

          {worksData.slice(0, 3).map((work) => (
            <Link
              to={`/work/${work.slug}`}
              className="works__row"
              key={work.slug}
            >
              <p className="works__num">{work.num}</p>

              <div className="works__content">
                <h3 className="works__title">{work.title}</h3>
                <p className="works__category">{work.category}</p>

                <div className="works__meta">
                  <span>{work.role}</span>
                  <span>{work.skills.join(" / ")}</span>
                </div>
              </div>

            </Link>
          ))}

          <Link to="/work" className="works__more">
            전체 작업 보기 →
          </Link>
        </section>

        <section className="experience">
          <p className="section-label">03 Experience</p>
          <h2 className="display">EXPERIENCE</h2>

          <div className="timeline">
            <div className="timeline__row">
              <p className="timeline__date">2024.11 — 2025.08</p>

              <div>
                <h3 className="timeline__title">㈜미스터로맨스디지털랩</h3>

                <p className="timeline__role">퍼블리셔 · 주임/팀원</p>

                <ul>
                  <li>기획전, 매거진, 이벤트 상세페이지 퍼블리싱</li>
                  <li>브랜드별 톤앤매너에 맞춘 상세 콘텐츠 구현</li>
                </ul>
              </div>
            </div>

            <div className="timeline__row">
              <p className="timeline__date">2023.04 — 2024.03</p>

              <div>
                <h3 className="timeline__title">㈜오마이사이트</h3>

                <p className="timeline__role">쇼핑몰개발팀 · 퍼블리셔</p>

                <ul>
                  <li>디자인 시안 기반 퍼블리싱 작업</li>
                  <li>쇼핑몰 UI/UX 유지보수 및 버그 수정</li>
                  <li>솔루션 매뉴얼 작성 및 고객 홈페이지 유지보수</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="section-label">04 Contact</p>

          <div className="contact__grid">
            <div>
              <h2 className="contact__title">
                LET'S <span>TALK.</span>
              </h2>

              <p className="contact__copy">
                목적이 분명한 구조와 사용자가 이해하기 쉬운 흐름을 함께
                고민합니다.
              </p>

              <a href="mailto:dms*******@naver.com" className="contact__btn">
                이메일로 연락하기
              </a>
            </div>
            <div className="contact-preview-board">
              {randomVideos.map((video, index) => (
                <a
                  href={video.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`contact-preview-card contact-preview-card--${video.type} contact-preview-card--${index}`}
                  key={video.src}
                >
                  <div className="contact-preview-card__media">
                    <video src={video.src} autoPlay muted playsInline loop />
                  </div>
                </a>
              ))}

              <Link to="/lab" className="contact-preview__archive">
                VIEW FULL ARCHIVE ↗
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
