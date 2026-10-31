import { agentGroups, dispatcher } from "../data/agent-team";

/**
 * Data-driven org chart for the engineering agent team.
 * Rendered from the same roster data as the group cards below it,
 * so the chart and the cards can never drift apart.
 */

const GROUP_ACCESS: Record<string, string> = {
  research: "READ ONLY",
  product: "READ ONLY",
  growth: "READ ONLY",
  build: "MAY EDIT CODE",
  release: "GATED",
};

const COL_X = [24, 258, 492, 726, 960];
const COL_W = 216;
const GROUP_Y = 164;
const GROUP_H = 330;

export default function AgentTeamDiagram() {
  return (
    <svg
      className="atd-svg"
      viewBox="0 0 1200 520"
      role="img"
      aria-label="Org chart: xing-chief the dispatcher at the top; Research, Product, Growth, Build and Release groups below."
    >
      {/* connector: dispatcher down to the bus, bus across, drops to groups */}
      <path
        className="atd-wire"
        d={`M 600 112 V 140 M 132 140 H 1068 ${COL_X.map(
          (x) => `M ${x + COL_W / 2} 140 V ${GROUP_Y}`,
        ).join(" ")}`}
      />

      {/* dispatcher */}
      <g>
        <rect className="atd-box atd-box--chief" x={330} y={16} width={540} height={96} rx={14} />
        <text className="atd-kicker" x={600} y={46} textAnchor="middle">
          DISPATCHER
        </text>
        <text className="atd-chief-name" x={600} y={76} textAnchor="middle">
          {dispatcher.id}
        </text>
        <text className="atd-duty" x={600} y={99} textAnchor="middle">
          {dispatcher.dutyEn}
        </text>
      </g>

      {agentGroups.map((group, gi) => {
        const x = COL_X[gi];
        const cx = x + COL_W / 2;
        return (
          <g key={group.id}>
            <rect className="atd-box" x={x} y={GROUP_Y} width={COL_W} height={GROUP_H} rx={14} />
            <rect x={x} y={GROUP_Y} width={COL_W} height={7} fill={group.accent} />
            <text className="atd-group-name" x={x + 16} y={GROUP_Y + 38}>
              {group.name.en.replace(/ .*$/, "")}
            </text>
            <text className="atd-kicker" x={x + 16} y={GROUP_Y + 58}>
              {group.members.length} AGENTS · {GROUP_ACCESS[group.id]}
            </text>
            <line
              className="atd-divider"
              x1={x + 16}
              y1={GROUP_Y + 72}
              x2={x + COL_W - 16}
              y2={GROUP_Y + 72}
            />
            {group.members.map((member, mi) => {
              const my = GROUP_Y + 104 + mi * 76;
              return (
                <g key={member.id}>
                  <text className="atd-member-name" x={x + 16} y={my}>
                    {member.id}
                  </text>
                  <text className="atd-duty" x={x + 16} y={my + 21}>
                    {member.dutyEn}
                  </text>
                  {mi < group.members.length - 1 && (
                    <line
                      className="atd-divider atd-divider--faint"
                      x1={x + 16}
                      y1={my + 40}
                      x2={x + COL_W - 16}
                      y2={my + 40}
                    />
                  )}
                </g>
              );
            })}
            <text className="atd-keyline" x={cx} y={GROUP_Y + GROUP_H - 16} textAnchor="middle">
              {group.id === "release"
                ? "human OK before production"
                : group.id === "build"
                  ? "narrow write access"
                  : "look, check, report"}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
