async function addToWaitlist(email) {
    try {
        const response = await fetch('/api/waitlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || data.error || 'Failed to join waitlist');
        }

        return data;
    } catch (error) {
        console.error('Waitlist error:', error);
        throw error;
    }
}
