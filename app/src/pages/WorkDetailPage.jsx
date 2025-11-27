import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { workProjects } from "../data/workProjects";
import ClockKST from "../components/ClockKST";

// GSAP 플러그인 등록
export default function WorkDetailPage() {
  // URL 파라미터에서 slug 추출 후 해당 프로젝트 데이터 로드
  const { slug } = useParams();
  // slug에 해당하는 프로젝트 정보 가져오기
  const project = workProjects[slug];
  // 페이지 전체 레퍼런스
  const pageRef = useRef(null);
  // 페이지 내 네비게이션 훅
  const navigate = useNavigate();
  useEffect(() => {
    const el = document.querySelector(".link-to-lab");
    if (el) {
      el.style.cursor = "pointer";
      el.addEventListener("click", () => navigate("/lab"));
    }

    return () => {
      if (el) el.removeEventListener("click", () => navigate("/lab"));
    };
  }, []);

  // 페이지 진입 시 GSAP 애니메이션 적용
  useEffect(() => {
    // 이 페이지 안에서만 GSAP 적용
    const ctx = gsap.context(() => {
      // 페이지 전체 살짝 아래에서 위로 + 페이드인
      gsap.from(pageRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.8,
        ease: "power2.out",
      });

      // 타이틀 / 섹션들은 조금 더 디테일하게 순차 등장
      gsap.from(".work-detail__header", {
        opacity: 0,
        y: 8,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.1,
      });

      // 섹션들 순차 등장
      gsap.from(".work-detail__section", {
        opacity: 0,
        y: 12,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
        delay: 0.18,
      });
    }, pageRef);

    // 클린업 함수: 페이지 떠날 때 애니메이션 정리
    return () => ctx.revert();
  }, []);

  // 프로젝트 정보가 없으면 간단 메시지 출력
  if (!project)
    return (
      <div style={{ padding: "40px", color: "#fff" }}>
        프로젝트 정보를 찾을 수 없습니다.
      </div>
    );
  return (
    <div className="project-list project-detail-page">
      {/* SIDE (Clock + City) */}
      <aside className="project-list__side">
        <div className="project-list__info-row">
          <div className="project-list__circle-wrap">
            <div className="project-list__circle"></div>
            <div className="project-list__clock">
              <ClockKST />
            </div>
          </div>
        </div>

        <div className="project-list__info-row">
          <div className="project-list__circle-wrap">
            <div className="project-list__circle"></div>
            <div className="project-list__city">
              <span className="project-list__city-link">seoul</span>
            </div>
          </div>
        </div>

        <div className="project-list__info-row">
          <div className="project-list__circle-wrap">
            <div className="project-list__city"></div>
          </div>
        </div>
      </aside>

      {/* DETAIL CONTENT */}
      <section
        className="about-main project-detail-wrap work-detail--kr"
        ref={pageRef}
      >
        {/* HERO 영역: 타이틀 + 서브타이틀 */}
        <header className="work-detail__header">
          <h1 className="work-detail__title">{project.title}</h1>
          {project.subtitle && (
            <p className="work-detail__subtitle">{project.subtitle}</p>
          )}
        </header>

        {/* META 정보 블록 */}
        <section className="work-detail__meta">
          <div className="work-detail__meta-item">
            <span className="work-detail__meta-label">YEAR</span>
            <span className="work-detail__meta-value">{project.year}</span>
          </div>

          {project.duration && (
            <div className="work-detail__meta-item">
              <span className="work-detail__meta-label">DURATION</span>
              <span className="work-detail__meta-value">
                {project.duration}
              </span>
            </div>
          )}

          {project.role && (
            <div className="work-detail__meta-item">
              <span className="work-detail__meta-label">ROLE</span>
              <span className="work-detail__meta-value">{project.role}</span>
            </div>
          )}

          {project.skills && (
            <div className="work-detail__meta-item work-detail__meta-item--full">
              <span className="work-detail__meta-label">SKILLS</span>
              <span className="work-detail__meta-value">
                {project.skills.join(" · ")}
              </span>
            </div>
          )}
        </section>

        {/* OVERVIEW / DESCRIPTION */}
        <section className="work-detail__section">
          <h2 className="work-detail__section-title">Overview</h2>
          <div
            className="work-detail__description"
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></div>
        </section>

        {/* (옵션) 하이라이트 섹션 - 나중에 workProjects에 추가하면 자동 노출됨 */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="work-detail__section">
            <h2 className="work-detail__section-title">Highlights</h2>
            <ul className="work-detail__list">
              {project.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 링크 버튼 영역 (GitHub / Demo) */}
        {(project.github || project.demo) && (
          <section className="work-detail__section work-detail__section--links">
            <div className="work-detail__links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-detail__link-btn"
                >
                  GitHub Repository
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-detail__link-btn work-detail__link-btn--secondary"
                >
                  LINK
                </a>
              )}
            </div>
          </section>
        )}
      </section>
    </div>
  );
}
