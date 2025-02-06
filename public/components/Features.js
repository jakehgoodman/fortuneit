function Features() {
    return (
        <div data-name="features-section" className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 px-4">
            <div data-name="feature-flavor" className="feature-item bounce-animation">
                <i className="fas fa-cookie text-3xl text-pink-500 mb-2"></i>
                <h3 className="font-bold text-xl mb-2">Bold Flavors</h3>
                <div className="zigzag mb-2"></div>
            </div>
            <div data-name="feature-fortune" className="feature-item bounce-animation" style={{animationDelay: "0.2s"}}>
                <i className="fas fa-magic text-3xl text-purple-500 mb-2"></i>
                <h3 className="font-bold text-xl mb-2">Playful Fortunes</h3>
                <div className="zigzag mb-2"></div>
            </div>
            <div data-name="feature-healthy" className="feature-item bounce-animation" style={{animationDelay: "0.4s"}}>
                <i className="fas fa-heart text-3xl text-yellow-500 mb-2"></i>
                <h3 className="font-bold text-xl mb-2">Feel-good Cookie</h3>
                <div className="zigzag mb-2"></div>
            </div>
        </div>
    );
}
