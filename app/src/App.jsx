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
    // 의존성 배열에 pathname을 추가하여 URL이 변경될 때만 실행
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    // 해당 컴포넌트는 화면에 HTML을 출력하지 않고 기능만 수행하므로 null을 반환
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

      // Dot Move (애니메이션 시간을 주지 않고 요소의 속성을 즉시 변경)
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

      // 브라우저 화면이 갱신되는 시점마다 cursorLoop를 다시 실행
      animationFrameId = requestAnimationFrame(cursorLoop);
    };

    // Ring Start
    cursorLoop();

    // hover 시킬 요소들을 모두 선택
    const hoverElements = document.querySelectorAll(
      "a, .works__row, .contact__btn",
    );

    // 마우스가 올라가면 다음 클래스가 추가되어 ring의 스타일이 변경됨
    const handleHoverEnter = () => {
      ring?.classList.add("is-hover");
    };

    // 마우스가 벗어나면 제거 (?. => optional chaining임. ring 요소가 없더라도 오류가 발생하지 않도록 보호)
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

    // 섹션 제목 애니메이션 시작
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

    // About Timeline (About 섹션 내부 요소를 따로 실행하지 않고 하나의 타임라인으로 연결하여 실행)
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

      // About Text (앞 애니메이션이 완전히 끝나기 0.45초 전에 다음 애니메이션을 시작)
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

      // About Cards (stagger => 여러 개의 .strength-card를 0.09초 간격으로 순차 실행)
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

    // Works Rows (각 행마다 별도의 타임라인을 생성하여 스크롤 시 애니메이션 실행)
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

        // Works Category And Meta (배열의 첫 번째 요소인 category가 먼저 나타나고, meta가 0.08초 뒤에 나타남)
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
      // Experience Elements (날짜와 내용을 분리해 실행)
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

    // Contact Text (텍스트는 왼쪽에서 나타나도록 설정)
    contactTimeline
      .from(".contact__grid > div:first-child", {
        x: -36,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
      })

      // Contact Videos (비디오는 오른쪽에서 나타나도록 설정)
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

    // Cleanup 함수 (useEffect 안에서 반환하는 함수는 컴포넌트가 사라질 때 실행됨)
    return () => {
      // Cursor Event Remove (마우스 이동 이벤트 제거)
      window.removeEventListener("mousemove", handleMouseMove);

      // Cursor Loop Remove (반복 중단)
      cancelAnimationFrame(animationFrameId);

      // Hover Event Remove (Hover 이벤트 제거)
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

    // Hero Name Start (애니메이션 실행 전에 아래쪽에서 100% 잘라 요소가 보이지 않도록 설정)
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

    // Hero 마우스 조명 위치 계산
    const handleHeroMouseMove = (event) => {
      if (!hero || !heroGlow) return;

      // Hero가 브라우저 화면에서 어느 위치에 있는지 계산
      const rect = hero.getBoundingClientRect();

      // Mouse Position
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // 마우스 조명 애니메이션 (overwrite: "auto" => 마우스가 빠르게 움직일 때 이전 이동 애니메이션이 계속 쌓이지 않도록 기존 Tween을 적절히 덮어씌움)
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

  // Contact 섹션에 사용할 영상 배열 목록
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
              “새로운 도구를 빠르게 익히고 실제 화면에 적용하며 작업의 범위를
              넓혀가고 있습니다.”
            </blockquote>

            <div className="about__text">
              <p>
                웹 퍼블리싱을 기반으로 UI/UX와 Figma를 학습하며 화면의 구조와
                사용 흐름을 보는 시야를 넓혀왔습니다. <br />
                최근에는 다양한 AI 프로그램과 프롬프트 작성 방법을 학습하며
                이미지, 콘텐츠, 인터랙션 아이디어를 구체화하는 데 활용하고
                있습니다.
              </p>

              <div className="strengths">
                <article className="strength-card">
                  <div className="strength-card__inner">
                    <div className="strength-card__top">
                      <span className="strength-card__dot"></span>
                    </div>

                    <strong>Think in Flow</strong>
                    <p>
                      콘텐츠를 바로 구현하기보다 무엇이 먼저 보여야 하는지,
                      사용자가 어떤 순서로 읽게 될지를 먼저 정리합니다.
                    </p>
                  </div>
                </article>

                <article className="strength-card">
                  <div className="strength-card__inner">
                    <div className="strength-card__top">
                      <span className="strength-card__dot"></span>
                    </div>

                    <strong>Share and Solve</strong>
                    <p>
                      막히는 부분은 혼자 오래 끌기보다 질문하고 공유합니다.
                      빠르게 방향을 맞추고 해결하는 협업 방식을 선호합니다.
                    </p>
                  </div>
                </article>

                <article className="strength-card">
                  <div className="strength-card__inner">
                    <div className="strength-card__top">
                      <span className="strength-card__dot"></span>
                    </div>

                    <strong>Learn and Apply</strong>
                    <p>
                      Figma와 UI/UX, AI 도구와 프롬프트 작성까지 새로운 방법을
                      익히고 실제 작업에 적용합니다.
                    </p>
                  </div>
                </article>

                <article className="strength-card">
                  <div className="strength-card__inner">
                    <div className="strength-card__top">
                      <span className="strength-card__dot"></span>
                    </div>

                    <strong>Work in Sync</strong>
                    <p>
                      필요한 부분은 묻고 공유하며 방향을 맞춥니다. 협업
                      과정에서도 맡은 작업은 끝까지 책임지고 마무리합니다.
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
