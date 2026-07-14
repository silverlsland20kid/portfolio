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
    // Cursor Elements
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    // Cursor Position
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    // Animation Frame
    let animationFrameId;

    // Cursor Move
    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      // Dot Move
      if (dot) {
        gsap.set(dot, {
          x: mouseX,
          y: mouseY,
        });
      }
    };

    // Cursor Event
    window.addEventListener("mousemove", handleMouseMove);

    // Ring Move
    const cursorLoop = () => {
      ringX += (mouseX - ringX) * 0.08;
      ringY += (mouseY - ringY) * 0.08;

      // Ring Position
      if (ring) {
        gsap.set(ring, {
          x: ringX,
          y: ringY,
        });
      }

      // Loop
      animationFrameId = requestAnimationFrame(cursorLoop);
    };

    // Ring Start
    cursorLoop();

    // Hover Elements
    const hoverElements = document.querySelectorAll(
      "a, .works__row, .contact__btn",
    );

    // Cursor Hover Enter
    const handleHoverEnter = () => {
      ring?.classList.add("is-hover");
    };

    // Cursor Hover Leave
    const handleHoverLeave = () => {
      ring?.classList.remove("is-hover");
    };

    // Cursor Hover Event
    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", handleHoverEnter);
      element.addEventListener("mouseleave", handleHoverLeave);
    });

    // ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Section Titles
    gsap.utils.toArray(".display").forEach((heading) => {
      gsap.from(heading, {
        yPercent: 110,
        duration: 0.9,
        ease: "power4.out",

        // Title Trigger
        scrollTrigger: {
          trigger: heading,
          start: "top 88%",
          once: true,
        },
      });
    });

    // About Timeline
    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".about__grid",
        start: "top 78%",
        once: true,
      },
    });

    // About Quote
    aboutTimeline
      .from(".about__quote", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

      // About Text
      .from(
        ".about__text > p",
        {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.45",
      )

      // About Cards
      .from(
        ".strength-card",
        {
          y: 28,
          opacity: 0,
          duration: 0.65,
          stagger: 0.09,
          ease: "power3.out",
        },
        "-=0.3",
      );

    // Works Rows
    gsap.utils.toArray(".works__row").forEach((row) => {
      // Works Elements
      const num = row.querySelector(".works__num");
      const title = row.querySelector(".works__title");
      const category = row.querySelector(".works__category");
      const meta = row.querySelector(".works__meta");

      // Works Timeline
      const worksTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top 88%",
          once: true,
        },
      });

      // Works Number
      worksTimeline
        .from(num, {
          x: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        })

        // Works Title
        .from(
          title,
          {
            x: 0,
            y: 22,
            opacity: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.3",
        )

        // Works Category And Meta
        .from(
          [category, meta],
          {
            y: 12,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.3",
        );
    });

    // Experience Rows
    gsap.utils.toArray(".timeline__row").forEach((row) => {
      // Experience Elements
      const date = row.querySelector(".timeline__date");
      const content = row.querySelector(".timeline__content");

      // Experience Timeline
      const experienceTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: "top 86%",
          once: true,
        },
      });

      // Experience Date
      experienceTimeline
        .from(date, {
          y: 14,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        })

        // Experience Content
        .from(
          content,
          {
            y: 20,
            opacity: 0,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.3",
        );
    });

    // Contact Timeline
    const contactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".contact",
        start: "top 65%",
        once: true,
      },
    });

    // Contact Text
    contactTimeline
      .from(".contact__grid > div:first-child", {
        x: -36,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
      })

      // Contact Videos
      .from(
        ".contact-preview-board",
        {
          x: 36,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
        },
        "-=0.6",
      );

    // Scroll Progress
    gsap.to(".progress", {
      width: "100%",
      ease: "none",

      // Progress Trigger
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Cleanup
    return () => {
      // Cursor Event Remove
      window.removeEventListener("mousemove", handleMouseMove);

      // Cursor Loop Remove
      cancelAnimationFrame(animationFrameId);

      // Hover Event Remove
      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleHoverEnter);
        element.removeEventListener("mouseleave", handleHoverLeave);
      });

      // ScrollTrigger Remove
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
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
    // Hero Elements
    const hero = document.querySelector(".hero");
    const heroGlow = document.querySelector(".hero__glow");

    // Hero Timeline
    const introTimeline = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
    });

    // Hero Name Start
    gsap.set(".hero__line", {
      clipPath: "inset(0 0 100% 0)",
      y: 40,
      opacity: 0,
    });

    // Hero Text Start
    gsap.set(
      [
        ".hero__job",
        ".hero__tagline",
        ".hero__year",
        ".hero__bottom-content",
        ".hero__scroll",
      ],
      {
        y: 18,
        opacity: 0,
      },
    );

    // Hero Name Animation
    introTimeline
      .to(".hero__line", {
        clipPath: "inset(0 0 0% 0)",
        y: 0,
        opacity: 1,
        duration: 1.15,
        stagger: 0.16,
      })

      // Hero Top Animation
      .to(
        [".hero__job", ".hero__tagline", ".hero__year"],
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.65",
      )

      // Hero Bottom Animation
      .to(
        [".hero__bottom-content", ".hero__scroll"],
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.45",
      );

    // Glow Move
    const handleHeroMouseMove = (event) => {
      if (!hero || !heroGlow) return;

      // Hero Position
      const rect = hero.getBoundingClientRect();

      // Mouse Position
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // Glow Animation
      gsap.to(heroGlow, {
        x: mouseX,
        y: mouseY,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    // Glow Leave
    const handleHeroMouseLeave = () => {
      if (!heroGlow) return;

      gsap.to(heroGlow, {
        opacity: 0.35,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    // Glow Events
    hero?.addEventListener("mousemove", handleHeroMouseMove);
    hero?.addEventListener("mouseleave", handleHeroMouseLeave);

    // Cleanup
    return () => {
      // Timeline Remove
      introTimeline.kill();

      // Glow Events Remove
      hero?.removeEventListener("mousemove", handleHeroMouseMove);
      hero?.removeEventListener("mouseleave", handleHeroMouseLeave);

      // Hero Tween Remove
      gsap.killTweensOf([
        ".hero__line",
        ".hero__job",
        ".hero__tagline",
        ".hero__year",
        ".hero__bottom-content",
        ".hero__scroll",
        ".hero__glow",
      ]);
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
        {/* 마우스에 반응하는 배경 조명 */}
        <div className="hero__glow" aria-hidden="true"></div>

        <div className="hero__top">
          <div className="hero__intro">
            <p className="hero__job">Interactive Web Publisher</p>

            <p className="hero__tagline">
              Building clear interfaces with motion and structure.
            </p>
          </div>

          <p className="hero__year">2026</p>
        </div>

        <h1 className="hero__name">
          <span className="hero__line">LEE</span>
          <span className="hero__line">EUN</span>
          <span className="hero__line">SEOM</span>
        </h1>

        <div className="hero__bottom">
          <div className="hero__bottom-content">
            <p className="hero__bio">
              프로젝트마다 다른 요구와 목적을 읽고
              <br />
              브랜드의 메시지를 화면 위에 정확하게 구현하는
              <br className="hero__bio-break" />웹 퍼블리셔 이은섬입니다.
            </p>
          </div>

          <p className="hero__scroll">
            <span>Scroll</span>
            <span className="hero__scroll-arrow">↓</span>
          </p>
        </div>
      </header>

      <div className="marquee">
        <div className="marquee__inner">
          <span>
            Frontend Publisher | UI Interaction | Responsive Web | Accessibility
            | Motion & Animation
          </span>
          <span>
            Frontend Publisher | UI Interaction | Responsive Web | Accessibility
            | Motion & Animation
          </span>
          <span>
            Frontend Publisher | UI Interaction | Responsive Web | Accessibility
            | Motion & Animation
          </span>
        </div>
      </div>

      <main>
        <section className="about" id="about">
          <p className="section-label">01 About</p>
          {/* Section Title */}
          <div className="display-mask">
            <h2 className="display">
              ABOUT
              <br />
              ME
            </h2>
          </div>

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
                      콘텐츠의 우선순위를 정리하고, 사용자가 자연스럽게 읽을 수
                      있는 섹션 흐름을 설계합니다.
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
          {/* Section Title */}
          <div className="display-mask">
            <h2 className="display">WORKS</h2>
          </div>

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
            <span>전체 작업 보기</span>
            <span className="works__more-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </section>

        <section className="experience">
          <p className="section-label">03 Experience</p>
          <div className="display-mask">
            {/* Section Title */}
            <h2 className="display">EXPERIENCE</h2>
          </div>

          <div className="timeline">
            <div className="timeline__row">
              {/* Experience Date */}
              <p className="timeline__date">2024.11 — 2025.08</p>

              {/* Experience Content */}
              <div className="timeline__content">
                <h3 className="timeline__title">㈜미스터로맨스디지털랩</h3>

                <p className="timeline__role">퍼블리셔 · 주임/팀원</p>

                <ul>
                  <li>기획전, 매거진, 이벤트 상세페이지 퍼블리싱</li>
                  <li>브랜드별 톤앤매너에 맞춘 상세 콘텐츠 구현</li>
                </ul>
              </div>
            </div>

            <div className="timeline__row">
              {/* Experience Date */}
              <p className="timeline__date">2023.04 — 2024.03</p>

              {/* Experience Content */}
              <div className="timeline__content">
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
                <span>이메일로 연락하기</span>
                <span className="contact__btn-arrow" aria-hidden="true">
                  ↗
                </span>
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
