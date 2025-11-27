import { Link } from "react-router-dom";
import ProjectSide from "../components/ProjectSide";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const pageRef = useRef(null); // 페이지 레퍼런스
  const thumbViewerRef = useRef(null); // 썸네일 뷰어 레퍼런스

  // 마우스 엔터 시 썸네일 뷰어 처리
  const handleMouseEnter = (thumbUrl, e) => {
    const viewer = thumbViewerRef.current; // 뷰어 레퍼런스 가져오기
    if (!viewer || !thumbUrl) return; // 뷰어나 썸네일 URL이 없으면 종료

    // 1) 배경 이미지 교체
    viewer.style.backgroundImage = `url('${thumbUrl}')`;

    // 2) is-active 클래스 추가
    viewer.classList.add("is-active");

    // 3) 이전 트윈 정리
    gsap.killTweensOf(viewer);

    // 4) GSAP로 등장 애니메이션
    gsap.fromTo(
      viewer,
      { scale: 0.8, autoAlpha: 0, y: 8 },
      {
        scale: 1.1,
        autoAlpha: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out",
      }
    );

    // 카드도 살짝 떠오르게
    if (e?.currentTarget) {
      gsap.to(e.currentTarget, {
        y: -6,
        scale: 1.1,
        duration: 0.25,
        ease: "power2.out",
      });
    }
  };

  // 마우스 리브 시 썸네일 뷰어 처리
  const handleMouseLeave = (e) => {
    const viewer = thumbViewerRef.current;

    // 뷰어가 없으면 종료
    if (viewer) {
      // 이전 트윈 정리
      gsap.killTweensOf(viewer);

      // GSAP로 사라지는 애니메이션
      gsap.to(viewer, {
        scale: 0.8,
        autoAlpha: 0,
        y: 4,
        duration: 0.25,
        ease: "power2.inOut",
        onComplete: () => {
          viewer.style.backgroundImage = "";
          // is-active도 같이 제거
          viewer.classList.remove("is-active");
        },
      });
    }

    // 카드 원위치
    if (e?.currentTarget) {
      gsap.to(e.currentTarget, {
        y: 0,
        scale: 1,
        duration: 0.25,
        ease: "power2.out",
      });
    }
  };

  // 마우스 무브 시 썸네일 뷰어 위치 업데이트
  const handleMouseMove = (e) => {
    const viewer = thumbViewerRef.current;
    // 뷰어가 없으면 종료
    if (!viewer) return;

    const offset = 50; // 마우스에서 살짝 떨어져 보이게 하는 오프셋
    const { clientX, clientY } = e; // 마우스 좌표 가져오기

    // position: fixed 기준
    viewer.style.left = clientX + offset + "px";
    viewer.style.top = clientY + offset + "px";
  };

  // 홈페이지 인트로애니메이션 추가 GSAP
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 페이지 자체 페이드만 유지
      gsap.from(pageRef.current, {
        opacity: 0,
        y: 8,
        duration: 0.8,
        ease: "power2.out",
      });

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
            start: "top 99.9%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });
    }, pageRef);

    // 정리 함수
    return () => ctx.revert();
  }, []);

  return (
    <div className="project-list work-hero-fade">
      {/* 왼쪽 사이드(시계/도시) */}
      <ProjectSide />

      {/* 가운데 썸네일 뷰어 */}
      <div
        className="project-list__thumb-viewer"
        id="cardThumbViewer"
        ref={thumbViewerRef}
      ></div>

      {/* 오른쪽 연도 영역 */}
      <div className="project-list__years">
        <div className="project-list__year-item">[2025]</div>
        <div className="project-list__year-item"></div>
        <div className="project-list__year-item"></div>
        <div className="project-list__year-item"></div>
        <div className="project-list__year-item"></div>
        <div className="project-list__year-item"></div>
        <div className="project-list__year-item"></div>
        <div className="project-list__year-item">[2024]</div>
        <div className="project-list__year-item">[2023]</div>
      </div>

      {/* 프로젝트 카드 리스트 */}
      <section className="project-list__cards" ref={pageRef}>
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
                Clonecoding
                <br />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
