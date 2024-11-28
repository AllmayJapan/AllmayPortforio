import React from "react";

const Octagon: React.FC<{ size?: number; color?: string; borderColor?: string; borderWidth?: number }> = ({
    size = 200,
    color = '#1976d2',
    borderColor = '#1976d2',
    borderWidth = 6,
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="octagon"
        >
        </svg>
    )
}