import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

export default function LabPage() {
  const videos = [
    { type: "mo", src: "/assets/video02_mo.mp4" },
    { type: "mo", src: "/assets/video07_mo.mp4" },
    { type: "pc", src: "/assets/video06.mp4" },
    { type: "mo", src: "/assets/video05_mo.mp4" },
    { type: "mo", src: "/assets/video08_mo.mp4" },
    { type: "pc", src: "/assets/video01.mp4" },
    { type: "pc", src: "/assets/video09.mp4" },
    { type: "mo", src: "/assets/video09_mo.mp4" },
    { type: "mo", src: "/assets/video10_mo.mp4" },
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
                <li>JavaScript (ES6+), jQuery, React, TypeScript</li>
                <li>Figma & photoshop</li>
                <li>swiper, gsap, bxslider</li>
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
                  디테일과 구조를 모두 챙기는 퍼블리싱, 신기술/새로운 시도에
                  <br />
                  거부감이 생기지 않도록 스스로를 가스라이팅
                </li>
                <li>
                  문제 발생 시 빠른 리서치 및 대응 -- 피드백 반영 & 꾸준한
                  개선병 있음
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
                <video
                  className="video-card__media"
                  src={v.src}
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="auto"
                />
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
