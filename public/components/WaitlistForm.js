function WaitlistForm({ onSubmit }) {
    const [email, setEmail] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            await onSubmit(email);
            setEmail('');
        } catch (error) {
            reportError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form data-name="waitlist-form" onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                    data-name="email-input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Drop your email here"
                    required
                    className="flex-1 px-6 py-3 rounded-full border-2 border-pink-200 focus:outline-none input-glow text-gray-700"
                />
                <button
                    data-name="submit-button"
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-bold glow-button disabled:opacity-50"
                >
                    {isLoading ? (
                        <i className="fas fa-spinner fa-spin"></i>
                    ) : (
                        "Join Waitlist"
                    )}
                </button>
            </div>
        </form>
    );
}
