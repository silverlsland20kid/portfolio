import { Link, useParams } from "react-router-dom";
import { worksData } from "../data/worksData";
import { workProjects } from "../data/workProjects";
import "../styles/WorkDetail.css";


// WorkDetail 메인 컴포넌트
export default function WorkDetail() {
  // URL 에서 slug 값을 가져옴
  const { slug } = useParams();

  // worksData 안에서 slug 와 일치하는 카테고리 찾기
  // 카테고리 상세 페이지용
  const category = worksData.find((item) => item.slug === slug);

  // workProjects 객체의 key 중 slug 와 같은 프로젝트 찾기
  // 대소문자 구분 없이 비교하기 위해 toLowerCase 사용
  const projectKey = Object.keys(workProjects).find(
    (key) => key.toLowerCase() === slug.toLowerCase(),
  );

  // projectKey 가 존재하면 실제 프로젝트 데이터 가져오기
  const project = projectKey ? workProjects[projectKey] : null;

  // 실제 프로젝트 상세
  if (project) {
    return <ProjectCase project={project} />;
  }

  // 카테고리 상세
  if (category) {
    return <CategoryDetail work={category} />;
  }

  // not found => 아무 데이터도 없을 경우
  return (
    <main className="sub-page">
      <section className="work-detail">
        <h1 className="work-detail__title">NOT FOUND</h1>

        <Link to="/work" className="works__more">
          목록으로 돌아가기
        </Link>
      </section>
    </main>
  );
}

// 실제 프로젝트 상세 컴포넌트
function ProjectCase({ project }) {
  return (
    <main className="sub-page">
      <section className="project-detail">
        <Link to="/work" className="work-detail__back">
          ← Back to Archive
        </Link>

        <div className="project-detail__hero">
          <div className="project-detail__hero-content">
            <p className="section-label">{project.year}</p>

            <h1 className="project-detail__title">{project.title}</h1>

            <p className="project-detail__subtitle">{project.subtitle}</p>
          </div>

          {/* 썸네일 이미지 넣기 */}
          {project.image && (
            <div className="project-detail__hero-thumb">
              <img src={project.image} alt={project.title} />
            </div>
          )}
        </div>

        <div className="project-detail__actions">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              View Site ↗
            </a>
          )}

          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              Github ↗
            </a>
          )}
        </div>

        <div className="project-detail__meta">
          <div>
            <span>Role</span>
            <strong>{project.role}</strong>
          </div>

          <div>
            <span>Duration</span>
            <strong>{project.duration}</strong>
          </div>

          <div>
            <span>Contribution</span>

            {/* contribution 값이 없으면 기본 문구 출력 */}
            <strong>{project.contribution || "퍼블리싱 작업 참여"}</strong>
          </div>
        </div>

        <div className="project-detail__section">
          <div className="project-detail__section-title">
            <span>01</span>
            <h2>Overview</h2>
          </div>

          <div
            className="project-detail__desc"
            dangerouslySetInnerHTML={{
              __html: project.description,
            }}
          />
        </div>

        <div className="project-detail__section">
          <div className="project-detail__section-title">
            <span>02</span>
            <h2>Skills</h2>
          </div>

          <ul className="project-detail__skills">
            {project.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="project-detail__bottom">
          <Link to="/work" className="works__more">
            ← 전체 작업 보기
          </Link>
        </div>
      </section>
    </main>
  );
}

function CategoryDetail({ work }) {
  return (
    <main className="sub-page">
      <section className="work-detail">
        <Link to="/work" className="work-detail__back">
          ← Back to Archive
        </Link>

        <div className="work-detail__hero">
          <p className="section-label">{work.category}</p>

          <h1 className="work-detail__title">{work.title}</h1>

          <p className="work-detail__lead">{work.desc}</p>
        </div>

        <div className="detail-project-grid">
          {work.projects?.map((project) => (
            <Link
              to={project.link}
              className="detail-project-card"
              key={project.title}
            >
              <div className="detail-project-card__image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="detail-project-card__text">
                <span>{project.subtitle}</span>

                <strong>{project.title}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
