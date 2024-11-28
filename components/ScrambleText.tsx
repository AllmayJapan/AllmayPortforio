import React, { useEffect, useRef, useState } from 'react';
import TextScramble from '@/utils/TextScramble';

interface ScrambleTextProps {
    text: string;
    className?: string;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className }) => {
    const textRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false); // 要素が表示領域に入ったかを管理

    useEffect(() => {
        if (!textRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting); // 表示領域に入ったかをセット
            },
            {
                threshold: 0.1, // 10%以上が表示されたらトリガー
            }
        );

        observer.observe(textRef.current);

        return () => {
            if (textRef.current) observer.unobserve(textRef.current);
        };
    }, []);

    useEffect(() => {
        if (inView && textRef.current) {
            const fx = new TextScramble(textRef.current);
            fx.setText(text);
        }
    }, [inView, text]);

    return <div ref={textRef} className={className} />;
};

export default ScrambleText;
