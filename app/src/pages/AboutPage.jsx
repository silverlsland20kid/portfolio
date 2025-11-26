import { useEffect, useRef, useState } from "react";
import ClockKST from "../components/ClockKST";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkDetailPage() {
  const contentRef = useRef(null);

  const personalityKeywords = [
    {
      id: "autonomy",
      label: "자율적 몰입",
      desc: "스스로 과제를 정의하고, 마감만 정해지면 알아서 깊게 파고드는 편입니다. 지시를 기다리기보다 먼저 구조를 잡고 제안하는 스타일입니다.",
    },
    {
      id: "challenge",
      label: "도전 선호",
      desc: "새로운 기술과 도메인에 대한 진입 장벽이 낮습니다. 처음 보는 라이브러리나 구조도 작은 실험 프로젝트로 빠르게 감을 잡는 방식을 선호합니다.",
    },
    {
      id: "justice",
      label: "정의·책임감",
      desc: "기준에 맞지 않는 결과물을 그냥 넘기지 못합니다. 맡은 일에 대해 책임을 느끼고, 완성도와 사용성을 기준에 맞추기 위해 끝까지 손보는 편입니다.",
    },
    {
      id: "coordination",
      label: "조율형 리더십",
      desc: "앞에서 끌기보다는 팀 안에서 흐름을 정리하고, 이해관계를 조율하는 역할에 강합니다. 기획·디자인·개발 사이의 언어를 번역하는 걸 좋아합니다.",
    },
    {
      id: "stability",
      label: "균형 잡힌 안정감",
      desc: "갑작스러운 변경이나 이슈 상황에서도 감정적으로 흔들리기보다, 해야 할 일을 정리하고 우선순위를 다시 세우는 편입니다.",
    },
  ];

  const [activeKeyword, setActiveKeyword] = useState("autonomy");

  useEffect(() => {
    const tags = document.querySelectorAll(".about-tag");

    tags.forEach((tag) => {
      gsap.set(tag, { transformPerspective: 600 });

      tag.addEventListener("mousemove", (e) => {
        const rect = tag.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(tag, {
          rotateY: x * 0.08,
          rotateX: -y * 0.08,
          duration: 0.25,
          ease: "power3.out",
        });
      });

      tag.addEventListener("mouseleave", () => {
        gsap.to(tag, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.35,
          ease: "power3.out",
        });
      });
    });
  }, []);

  useEffect(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 15,
      duration: 0.8,
      ease: "power2.out",
    });

    gsap.from(".about-tag", {
      opacity: 0,
      y: 6,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.05,
      delay: 0.2,
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
            신입과 경력의 경계에서 균형을 잡는 중고 신입 퍼블리셔
            <strong>이은섬</strong>입니다. <br /> 한 번의 실무 경험으로 현장을
            겪어봤고, 꼼꼼함은 기본 옵션입니다. 그렇다고 호기심과 패기를
            내려놓진 않았습니다.
            <br />
            <strong>배운 건 바로 써보고, 모르면 바로 묻는 타입</strong>
            입니다. 새로운 기술이나 문법을 접하면 작은 컴포넌트부터 적용해 보고,
            이해되지 않는 부분은 혼자 끙끙대기보다 팀과 공유하며 해결하는 방식을
            선호합니다. INFJ답게 조용하지만 단단한 편이며, 혼자 깊이 파고들되
            프로젝트 전체의 맥락과 팀의 목표를 먼저 생각합니다.
            <strong>“대충”</strong>은 저와 가장 거리가 먼 단어입니다. <br />
            마감 직전까지도 눈에 보이지 않는 부분을 한 번 더 점검하고, 이후
            유지보수까지 고려해 코드와 구조를 정리하려고 합니다.
          </p>
        </div>

        <div className="about-columns">
          {/* Experience */}
          <div className="about-block">
            <h2>Experience</h2>
            <ul>
              <li>
                <strong>(주)미스터로맨스</strong>
                <span className="about-block__txt">
                  November 2024 - July 2025
                </span>
                <br />
                Publisher, [Publishing Team]
                <br />
                랜딩 페이지 · 이벤트 페이지 퍼블리싱 및 운영, 반응형 구조 개선
              </li>
              <li>
                <strong>(주)오마이사이트</strong>
                <span className="about-block__txt">
                  April 2023 - March 2024
                </span>
                <br />
                Publisher, [Shopping Mall Development Team]
                <br />
                쇼핑몰 템플릿 마크업, UI 커스터마이징, 유지보수 작업
              </li>
            </ul>
          </div>

          {/* Personality */}
          <div className="about-block">
            <h2>Personality</h2>
            <div className="about-tags">
              {personalityKeywords.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={
                    "about-tag" +
                    (activeKeyword === item.id ? " about-tag--active" : "")
                  }
                  onMouseEnter={() => setActiveKeyword(item.id)}
                  onFocus={() => setActiveKeyword(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="about-tag-desc">
              {personalityKeywords.find((k) => k.id === activeKeyword)?.desc}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
