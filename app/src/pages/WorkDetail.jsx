import { Link, useParams } from "react-router-dom";
import { worksData } from "../data/worksData";
import "../styles/WorkDetail.css";

export default function WorkDetail() {
  const { slug } = useParams();
  const work = worksData.find((item) => item.slug === slug);

  if (!work) {
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

  return (
    <main className="sub-page">
      <section className="work-detail">
        <Link to="/work" className="work-detail__back">
          ← Back to Archive
        </Link>

        <div className="work-detail__hero">
          <p className="section-label">{work.category}</p>
        </div>

        <div className="work-detail__meta">
          <div>
            <span>Period</span>
            <strong>{work.period}</strong>
          </div>

          <div>
            <span>Role</span>
            <strong>{work.role}</strong>
          </div>

          <div>
            <span>Skills</span>
            <ul>
              {work.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="work-detail__section">
          <div className="work-detail__section-title">
            <span>01</span>
            <h2>Overview</h2>
          </div>

          <p>
            이 페이지는 {work.title}에 대한 작업 흐름과 구현 포인트를 정리한
            상세 페이지입니다. 단순히 결과물만 나열하기보다, 어떤 방향으로
            구조를 잡고 어떤 기술을 활용했는지 보여주는 데 집중했습니다.
          </p>
        </div>

        <div className="work-detail__section">
          <div className="work-detail__section-title">
            <span>02</span>
            <h2>Key Points</h2>
          </div>

          <ul className="work-detail__point-list">
            {work.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="work-detail__section">
          <div className="work-detail__section-title">
            <span>03</span>
            <h2>Selected Works</h2>
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
        </div>

        <div className="work-detail__bottom">
          <Link to="/" className="works__more">
            메인으로 돌아가기
          </Link>

          <Link to="/work" className="works__more">
            전체 작업 보기 →
          </Link>
        </div>
      </section>
    </main>
  );
}
