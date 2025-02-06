function SuccessModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div data-name="success-modal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl">
                <div className="text-center">
                    <div className="text-5xl mb-4 shake-animation">🎉</div>
                    <h3 className="text-2xl font-bold mb-4 fortune-text">You're In!</h3>
                    <p className="text-gray-600 mb-6">
                        Thanks for joining our waitlist! We'll let you know when Fortune It drops.
                    </p>
                    <button
                        data-name="close-button"
                        onClick={onClose}
                        className="px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-bold glow-button"
                    >
                        Awesome!
                    </button>
                </div>
            </div>
        </div>
    );
}
