import React from "react";

interface SkillGaugeProps {
    skill: string;
    level: number; // 0〜100の習熟度
    color?: string; // カスタムカラー
}

const SkillGauge: React.FC<SkillGaugeProps> = ({ skill, level, color = "#4caf50" }) => {
    return (
        <div style={{ marginBottom: "1rem" }}>
            <div style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{skill}</div>
            <div
                style={{
                    height: "1rem",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        width: `${level}%`,
                        height: "100%",
                        backgroundColor: color,
                        borderRadius: "0.5rem",
                        transition: "width 0.5s ease-in-out",
                    }}
                />
            </div>
        </div>
    );
};

export default SkillGauge;
