import {Chakra_Petch} from 'next/font/google';
import {Roboto} from 'next/font/google';
import { Noto_Sans_JP } from 'next/font/google';
import { NextPage } from 'next';
import { Button, Typography } from '@mui/material';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaRust } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiLaravel, SiRocket } from 'react-icons/si';
import SkillGauge from '@/components/SkillGauge';
import IconAnimation from '@/components/IconAnimation';
import BackgroundVideo from '@/components/BackGroundVideo';
import Header from '@/components/Header';
import TypingAnimation from '@/components/ScrambleText';

const Chakra = Chakra_Petch({
    subsets: ['latin'],
    weight: '600',
    style: 'normal',

});

const roboto = Roboto({
    subsets: ['latin'],
    weight: '500',
    style: 'normal',
});

const noto_Sans = Noto_Sans_JP({
    subsets: ['latin'],
    weight: '500',
    style: 'normal',
});

const skills = [
    { skill: "JavaScript", level: 85, color: "#f7df1e" },
    { skill: "TypeScript", level: 75, color: "#007acc" },
    { skill: "React", level: 90, color: "#61dbfb" },
    { skill: "Node.js", level: 80, color: "#68a063" },
    { skill: "PHP", level: 70, color: "#777bb4" },
    { skill: "Rust", level: 60, color: "#000000" },
    { skill: "Laravel", level: 65, color: "#ff2d20" },
    { skill: "Next.js", level: 85, color: "#000000" },
    { skill: "HTML", level: 95, color: "#e34f26" },
    { skill: "CSS", level: 90, color: "#1572b6" },
    { skill: "Rocket", level: 50, color: "#f74c00" },
];

const Home: NextPage = () => {
    return (
        <div>
            <Header />
            <BackgroundVideo />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    color: '#fff', // テキストが背景と重なる場合に視認性を高める
                }}
                >

                <Typography class variant="h1" color="primary" className={Chakra.className} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                    <TypingAnimation text="Yoshikawa's Portfolio" />
                </Typography>
            </div>
            <div
                style = {{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    gap: '3rem',
                }}
            >
                <Typography variant='h1' color='primary' className={Chakra.className} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                    <TypingAnimation text= "Concept" />
                </Typography>
                <Typography variant='body1' className={noto_Sans.className} 
                    style={{ maxWidth: '800px',
                        lineHeight: '1.6',
                        fontSize: '1.5rem',
                        color: '#fff',
                        padding: '20px 40px',
                        backgroundColor: 'rgba(25, 118, 210, 0.3)',
                        border: '3px, solid, rgba(25, 118, 210, 1)',
                        }}>
                    常に新しい挑戦を受け入れ、誠実に。期待を超える成果を。<br />
                    技術と想像力の融合でポジティブな変化をクライアントへ届けます。
                </Typography>
            </div>
            <div
                style = {{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    gap: '3rem',
                    //alignItems: 'center',
                    color: '#fff',
                }}
            >
                <Typography variant='h1' color='primary' className={Chakra.className} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                    <TypingAnimation text= "skills" />
                </Typography>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <IconAnimation>
                    <FaReact size={60} color="#61DBFB" />
                    <FaNodeJs size={60} color="#68A063" />
                    <SiNextdotjs size={60} color="#000000" style={{ filter: 'drop-shadow(2px 2px 4px rgba(255, 255, 255, 0.8))',}} />
                    <SiTypescript size={60} color="#007ACC" />
                    <FaHtml5 size={60} color="#E34F26" />
                    <FaCss3Alt size={60} color="#1572B6" />
                    <FaJsSquare size={60} color="#F7DF1E" />
                    <FaPhp size={60} color='#777BB4' />
                    <SiLaravel size={60} color="#FF2D20" />
                    <FaRust size={60} color='#000000' style={{ filter: 'drop-shadow(2px 2px 4px rgba(255, 255, 255, 0.8))',}} />
                    <SiRocket size={60} color='#F74C00' />
                    </IconAnimation>
                </div>

            </div>
            <div
                style = {{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    gap: '3rem',
                }}
            >
                <Typography variant='h1' color='primary' className={Chakra.className} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                    <TypingAnimation text= "Product" />
                </Typography>
                <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', padding: 0,}}>
                    <li>
                        <a href="#" className={noto_Sans.className} style={{ color: '#61DBFB', textDecoration: 'none', fontSize: '1.5rem', }}>
                            <figcaption>
                                <p style={{ textAlign: 'center'}}>
                                    Cyber SUSHI
                                </p>
                            </figcaption>
                            <figure>
                                <img src="assets/images/Portforio.webp" alt="サイバー寿司屋" style={{width: '100%'}} />
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={noto_Sans.className} style={{ color: '#61DBFB', textDecoration: 'none', fontSize: '1.5rem', }}>
                            <figcaption>
                                <p style={{ textAlign: 'center' }}>
                                    旅館 夫事元の覚
                                </p>
                            </figcaption>
                            <figure>
                                <img src="assets/images/Onsen.webp" alt="夫事元の箒" style={{ width: '100%' }} />
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={noto_Sans.className} style={{ color: '#61DBFB', textDecoration: 'none', fontSize: '1.5rem', }}>
                            <figcaption>
                                <p style={{ textAlign: 'center' }}>
                                    ホウキタリスト Muneyoshi Bro 公式ホームページ
                                </p>
                            </figcaption>
                            <figure>
                                <img src="assets/images/Rock_houki.webp" alt="Muneyoshi Bro ホームページ" style={{ width: '100%'}}/>
                            </figure>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={noto_Sans.className} style={{ color: '#61DBFB', textDecoration: 'none', fontSize: '1.5rem', }}>
                            <figcaption>
                                <p style={{ textAlign: 'center' }}>
                                    Mitarashi Mirai研究所
                                </p>
                            </figcaption>
                            <figure>
                                <img src="assets/images/Mitarashi.webp" alt="Mitarashi Mirai研究所 ホームページ" style={{ width: '100%'}}/>
                            </figure>
                        </a>
                    </li>
                </ul>

            </div>
            <div
                style = {{
                    height: '100vh',
                }}
            >
                <Typography variant='h1' color='primary' className={Chakra.className} style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
                    <TypingAnimation text= "Contact" />
                </Typography>
            </div>
        </div>
    );
};

export default Home;
