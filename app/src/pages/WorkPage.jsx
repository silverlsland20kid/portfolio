import { Link } from "react-router-dom";
import { worksData } from "../data/worksData";

export default function WorkPage() {
  return (
    <main className="sub-page">
      <section className="work-list">
        <p className="section-label">All Works</p>

        <h1 className="display">
          PROJECT
          <br />
          ARCHIVE
        </h1>

        <div className="work-category-list">
          {worksData.map((category) => (
            <article className="work-category" key={category.slug}>
              <div className="work-category__head">
                <p className="works__num">{category.num}</p>

                <div>
                  <h2 className="works__title">{category.title}</h2>
                </div>
              </div>

              <div className="detail-project-grid">
                {category.projects.map((project) => (
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

              {/* <Link to={`/work/${category.slug}`} className="works__more">
                자세히 보기 →
              </Link> */}
            </article>
          ))}
        </div>

        <Link to="/" className="works__more">
          ← 메인으로 돌아가기
        </Link>
      </section>
    </main>
  );
}
