function App() {
    const [showSuccess, setShowSuccess] = React.useState(false);
    const [showCookieAnimation, setShowCookieAnimation] = React.useState(false);

    const handleSubmit = async (email) => {
        try {
            await addToWaitlist(email);
            setShowCookieAnimation(true);
            setTimeout(() => {
                setShowCookieAnimation(false);
                setShowSuccess(true);
            }, 2000);
        } catch (error) {
            reportError(error);
            alert('Oops! Something went wrong. Please try again.');
        }
    };

    return (
        <div data-name="landing-page" className="min-h-screen flex flex-col items-center justify-center p-4">
            {showCookieAnimation && <CookieAnimation />}
            <div className="text-center">
                <Cookie />
                <h1 data-name="main-title" className="text-6xl md:text-7xl font-bold mb-4 fortune-text neon-animation">
                    Fortune It
                </h1>
                <p data-name="subtitle" className="text-xl md:text-2xl mb-4 text-gray-700">
                    Snack your way into good fortune
                </p>
                <p data-name="launch-text" className="text-lg md:text-xl mb-8 retro-text">
                    Fortunately, we are launching soon
                </p>
                <div className="flex justify-center mb-12">
                    <WaitlistForm onSubmit={handleSubmit} />
                </div>
                <Features />
                <SuccessModal 
                    isOpen={showSuccess} 
                    onClose={() => setShowSuccess(false)} 
                />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
