const BackgroundVideo = () => {
    console.log("BackgroundVideo loaded");
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1,
                filter: 'brightness(0.6)',
            }}
        >
            <source src="/assets/videos/backGround.webm" type="video/webm" />
        </video>
    );
};

export default BackgroundVideo;
