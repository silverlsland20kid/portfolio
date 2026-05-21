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

  function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      gsap.set(dot, {
        x: mouseX,
        y: mouseY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

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

    gsap.registerPlugin(ScrollTrigger);

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

    gsap.from(".strength-card", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".strengths",
        start: "top 85%",
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
        start: "top 85%",
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
        start: "top 85%",
      },
    });

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

  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const randomPcVideos = shuffle(
    previewVideos.filter((video) => video.type === "pc"),
  ).slice(0, 2);
  const randomMoVideos = shuffle(
    previewVideos.filter((video) => video.type === "mo"),
  ).slice(0, 2);

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
            프로젝트마다 다른 요구와 목적을 읽고, 브랜드의 메시지를 화면 위에
            정확하게 구현하는 웹 퍼블리셔 이은섬입니다.
          </p>
          <p>Scroll ↓</p>
        </div>
      </header>

      <div className="marquee">
        <div className="marquee__inner">
          <span>
            HTML5 ✦ CSS3 ✦ JavaScript ✦ jQuery ✦ React ✦ GSAP ✦ Swiper ✦ Figma ✦
            Responsive Web ✦
          </span>
          <span>
            HTML5 ✦ CSS3 ✦ JavaScript ✦ jQuery ✦ React ✦ GSAP ✦ Swiper ✦ Figma ✦
            Responsive Web ✦
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
                  <strong>Structure First</strong>
                  <p>
                    화면의 분위기보다 먼저, 사용자가 자연스럽게 흐름을 따라갈 수
                    있는 구조를 고민합니다.
                  </p>
                </article>

                <article className="strength-card">
                  <strong>Detail Matters</strong>
                  <p>
                    작은 간격, 움직임, 전환 방식까지 전체 경험의 톤을 결정한다고
                    생각합니다.
                  </p>
                </article>

                <article className="strength-card">
                  <strong>Flexible Build</strong>
                  <p>
                    디자인 의도를 유지하면서도 반응형과 유지보수를 고려한 구조를
                    설계합니다.
                  </p>
                </article>

                <article className="strength-card">
                  <strong>Keep Exploring</strong>
                  <p>
                    클론코딩과 개인 프로젝트를 통해 새로운 인터랙션과 레이아웃
                    방식을 꾸준히 실험합니다.
                  </p>
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

              <div>
                <h3 className="works__title">{work.title}</h3>
                <p className="works__category">{work.category}</p>
              </div>

              <p className="works__desc">{work.desc}</p>
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
