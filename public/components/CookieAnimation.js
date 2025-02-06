function CookieAnimation() {
    return (
        <div data-name="cookie-animation" className="fixed inset-0 pointer-events-none">
            <div className="cookie-shower">
                {[...Array(5)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute text-4xl cookie-fall"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${3 + Math.random() * 2}s`
                        }}
                    >
                        🥠
                    </div>
                ))}
            </div>
        </div>
    );
}
