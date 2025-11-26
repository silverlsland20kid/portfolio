import ClockKST from "./ClockKST";

export default function ProjectSide() {
  return (
    <aside className="project-list__side">
      {/* 시계 행 */}
      <div className="project-list__info-row">
        <div className="project-list__circle-wrap">
          <div className="project-list__circle"></div>
          <div className="project-list__clock">
            {/* 나중에 동작하게 만들 Clock 컴포넌트 */}
            <ClockKST />
          </div>
        </div>
      </div>

      {/* 도시 행 */}
      <div className="project-list__info-row">
        <div className="project-list__circle-wrap">
          <div className="project-list__circle"></div>
          <div className="project-list__city">
            <a href="#" className="project-list__city-link">
              seoul
            </a>
          </div>
        </div>
      </div>

      {/* 빈 행 */}
      <div className="project-list__info-row">
        <div className="project-list__circle-wrap">
          <div className="project-list__city"></div>
        </div>
      </div>
    </aside>
  );
}
