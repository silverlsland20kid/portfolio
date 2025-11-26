import { useParams } from "react-router-dom";
import { workProjects } from "../data/workProjects";
import ClockKST from "../components/ClockKST";

export default function WorkDetailPage() {
  const { slug } = useParams();
  const project = workProjects[slug];

  if (!project)
    return (
      <div style={{ padding: "40px", color: "#fff" }}>
        프로젝트 정보를 찾을 수 없습니다.
      </div>
    );

  // description을 문단 단위로 나누기 (보기 좋게)
  const paragraphs = project.description
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);

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
      <section className="about-main project-detail-wrap work-detail--kr">
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
          <div className="work-detail__description">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
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

        {/* (옵션) 배운 점 / 회고 섹션 */}
        {project.learnings && project.learnings.length > 0 && (
          <section className="work-detail__section">
            <h2 className="work-detail__section-title">What I Learned</h2>
            <ul className="work-detail__list">
              {project.learnings.map((item, idx) => (
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
                  Live Demo
                </a>
              )}
            </div>
          </section>
        )}
      </section>
    </div>
  );
}
