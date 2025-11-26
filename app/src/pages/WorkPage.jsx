import { Link } from "react-router-dom";
import ProjectSide from "../components/ProjectSide";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const handleMouseEnter = (thumbUrl) => {
    const viewer = document.getElementById("cardThumbViewer");
    if (thumbUrl && viewer) {
      viewer.style.backgroundImage = `url('${thumbUrl}')`;
      viewer.classList.add("is-active");
    }
  };

  const handleMouseLeave = () => {
    const viewer = document.getElementById("cardThumbViewer");
    if (viewer) {
      viewer.classList.remove("is-active");
      viewer.style.backgroundImage = "";
    }
  };
  const pageRef = useRef(null);

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

    return () => ctx.revert();
  }, []);

  return (
    <div className="project-list work-hero-fade">
      {/* 왼쪽 사이드(시계/도시) */}
      <ProjectSide />

      {/* 가운데 썸네일 뷰어 */}
      <div className="project-list__thumb-viewer" id="cardThumbViewer"></div>

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
            onMouseEnter={() => handleMouseEnter("/thumbs/sample10.png")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="project-card__content project-card__content--figma">
              <div className="project-card__title">Subway</div>
              <div className="project-card__subtitle">Clonecoding</div>
            </div>
          </Link>

          <Link
            to="/work/Nasmedia"
            className="project-card__link work-card-anim"
            onMouseEnter={() => handleMouseEnter("/thumbs/sample11.png")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="project-card__content project-card__content--figma">
              <div className="project-card__title">Nasmedia</div>
              <div className="project-card__subtitle">Clonecoding</div>
            </div>
          </Link>

          <Link
            to="/work/Daewoong"
            className="project-card__link work-card-anim"
            onMouseEnter={() => handleMouseEnter("/thumbs/sample12.png")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="project-card__content project-card__content--figma">
              <div className="project-card__title">Daewoong</div>
              <div className="project-card__subtitle">Clonecoding</div>
            </div>
          </Link>

          <Link
            to="/work/Dasoni"
            className="project-card__link work-card-anim"
            onMouseEnter={() => handleMouseEnter("/thumbs/sample13.png")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="project-card__content project-card__content--figma">
              <div className="project-card__title">Dasoni therapy</div>
              <div className="project-card__subtitle">Clonecoding</div>
            </div>
          </Link>

          <Link
            to="/work/KVILLAGE"
            className="project-card__link work-card-anim"
            onMouseEnter={() => handleMouseEnter("/thumbs/sample00.png")}
            onMouseLeave={handleMouseLeave}
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
            onMouseEnter={() => handleMouseEnter("/thumbs/sample03.png")}
            onMouseLeave={handleMouseLeave}
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
            onMouseEnter={() => handleMouseEnter("/thumbs/sample04.png")}
            onMouseLeave={handleMouseLeave}
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
            onMouseEnter={() => handleMouseEnter("/thumbs/sample07.png")}
            onMouseLeave={handleMouseLeave}
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
            onMouseEnter={() => handleMouseEnter("/thumbs/sample06.png")}
            onMouseLeave={handleMouseLeave}
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
            onMouseEnter={() => handleMouseEnter("/thumbs/sample05.png")}
            onMouseLeave={handleMouseLeave}
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
            to="/work/ear-phone-brandpage"
            className="project-card__link work-card-anim"
            onMouseEnter={() => handleMouseEnter("/thumbs/sample09.png")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="project-card__content project-card__content--recchiuti">
              <div className="project-card__title">Earphone-brand</div>
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
