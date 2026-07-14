import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/LabPage.css";

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

export default function LabPage() {
  const videos = [
    {
      type: "mo",
      src: "/assets/video02_mo.mp4",
      link: "https://www.k-village.co.kr/exhibitionDetail?spexhNo=1774&page=1",
      external: true,
    },
    {
      type: "mo",
      src: "/assets/video07_mo.mp4",
      link: "https://www.hfashionmall.com/article/STORY/9711/view",
      external: true,
    },
    {
      type: "pc",
      src: "/assets/video06.mp4",
      link: "https://www.hfashionmall.com/article/STYLE/9208/view",
      external: true,
    },
    {
      type: "mo",
      src: "/assets/video11_mo.mp4",
      link: "https://www.hfashionmall.com/article/STYLE/10191/view",
      external: true,
    },
    {
      type: "mo",
      src: "/assets/video08_mo.mp4",
      link: "https://www.hfashionmall.com/article/STORY/9907/view",
      external: true,
    },
    {
      type: "pc",
      src: "/assets/video01.mp4",
      link: "https://www.k-village.co.kr/exhibitionDetail?spexhNo=1884&page=1",
      external: true,
    },
    {
      type: "pc",
      src: "/assets/video09.mp4",
      link: "https://www.hfashionmall.com/article/STORY/9822/view",
      external: true,
    },
    {
      type: "mo",
      src: "/assets/video09_mo.mp4",
      link: "https://www.hfashionmall.com/article/STORY/9822/view",
      external: true,
    },
    {
      type: "mo",
      src: "/assets/video10_mo.mp4",
      link: "https://www.kolonsport.com/Special/246759",
      external: true,
    },
    {
      type: "pc",
      src: "/assets/video12.mp4",
      link: "https://www.k-village.co.kr/magazineDetail?magazineNo=789",
      external: true,
    },
    {
      type: "mo",
      src: "/assets/video13_mo.mp4",
      link: "https://www.k-village.co.kr/magazineDetail?magazineNo=804",
      external: true,
    },
    {
      type: "mo",
      src: "/assets/video14_mo.mp4",
      link: "https://m.k-village.co.kr/magazineDetail?magazineNo=826",
      external: true,
    },
  ];

  // 콘텐츠 레퍼런스
  const contentRef = useRef(null);

  // TOP으로 스크롤 이동 함수
  const backToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 페이지 진입 시 GSAP 애니메이션 적용
  useEffect(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 15,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="project-list project-list-lab">
      {/* 왼쪽 사이드 영역 */}
      <aside className="project-list__side">
        {/* Skills */}
        <div className="project-list__info-row">
          <div className="project-list__circle-wrap">
            <div className="project-list__circle"></div>
            <div className="project-list__skills" id="skillsSection">
              <div className="project-list__label">Experiments</div>
              <ul className="project-list__skills-list">
                <li>HTML5 / CSS3 </li>
                <li>JavaScript, jQuery, React, TypeScript</li>
                <li>Figma, Photoshop</li>
                <li>Swiper, GSAP, bxSlider</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Attitude */}
        <div className="project-list__info-row">
          <div className="project-list__circle-wrap">
            <div className="project-list__circle"></div>
            <div className="project-list__attitude" id="attitudeSection">
              <ul className="project-list__attitude-list">
                <li>
                  디테일과 구조를 함께 고려하며 새로운 기술과 시도를 꾸준히 적용
                </li>
                <li>
                  문제 발생 시 빠르게 원인을 찾고 피드백을 반영해 완성도를 높임
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>

      {/* 비디오 그리드 */}
      <section
        className="lab-videos"
        aria-label="실험 영상 목록"
        ref={contentRef}
      >
        <div className="lab-videos__grid">
          {videos.map((v, i) => (
            <article key={v.src + i} className={`video-card item--${v.type}`}>
              <div className={`video-card__frame video-card__frame--${v.type}`}>
                <a
                  href={v.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-item"
                >
                  <video
                    className="video-card__media"
                    src={v.src}
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="auto"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="back-to-top">
          <a href="#" onClick={backToTop}>
            ↑ BACK TO TOP
          </a>
        </p>
      </section>
    </div>
  );
}
