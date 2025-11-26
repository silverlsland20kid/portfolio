import { useEffect, useRef } from "react";
import ClockKST from "../components/ClockKST";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkDetailPage() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 15,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="project-list">
      {/* Side (시계/도시 등) */}
      <aside className="project-list__side">
        {/* 시계 행 */}
        <div className="project-list__info-row">
          <div className="project-list__circle-wrap">
            <div className="project-list__circle"></div>
            <div className="project-list__clock">
              <ClockKST />
            </div>
          </div>
        </div>

        {/* 도시 행 */}
        <div className="project-list__info-row">
          <div className="project-list__circle-wrap">
            <div className="project-list__circle"></div>
            <div className="project-list__city">
              <span className="project-list__city-link">seoul</span>
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

      {/* Main Intro Section */}
      <section className="about-main" ref={contentRef}>
        <div className="about-intro">
          <p>
            신입? 경력? 그 경계에서 균형을 잡는
            <strong>중고신입 퍼블리셔 이은섬</strong>입니다.
            <br />
            실무는 이미 한 번 겪어봤고, 꼼꼼함은 기본 옵션. 그렇다고 호기심과
            패기까지 버리진 않았습니다.
            <br />
            “배운 건 바로 써먹고, 모르면 부끄러워 말고 바로 묻는다.” 이런 자세로
            프로젝트를 돌파합니다.
            <br />
            현장의 감각, 신입의 에너지, 그리고 약간의 위트.
            <br />
            INFJ로서 조용하지만 단단한 신념을 가지고 있고, 혼자 깊이 고민하지만
            팀의 목표를 위해선 누구보다 주도적으로 움직입니다. 동료와 프로젝트
            전체의 맥락을 먼저 생각합니다.
            <br />
            <strong>“대충”</strong>은 저와 가장 거리가 먼 단어입니다.
            <br />
            마감 직전에도, 눈에 보이지 않는 부분까지 최적화하고 싶어서 한 번 더
            체크하는 게 저의 직업병입니다.
          </p>
        </div>

        <div className="about-columns">
          {/* Experience */}
          <div className="about-block">
            <h2>Experience</h2>
            <ul>
              <li>
                <strong>(주)미스터로맨스</strong>
                <br />
                November 2024 – July 2025
                <br />
                publisher
                <br />
                [publishing team]
              </li>
              <li>
                <strong>(주)오마이사이트</strong>
                <br />
                April 2023 – March 2024
                <br />
                publisher
                <br />
                [Shopping Mall Development team]
              </li>
            </ul>
          </div>

          {/* Personality */}
          <div className="about-block">
            <h2>Personality</h2>
            <ul>
              <li className="mb-0">
                자유롭게 도전하고 책임질 수 있는 업무를 선호
              </li>
              <li className="mb-0">새로운 프로젝트에 잘 적응함</li>
            </ul>

            <img
              src="/assets/personalitytest.png"
              alt="personality test"
              className="about-aptitude-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
