async function addToWaitlist(email) {
    try {
        const response = await fetch('/api/waitlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) {
            throw new Error('Failed to join waitlist');
        }

        return await response.json();
    } catch (error) {
        console.error('Waitlist error:', error);
        throw new Error('Failed to join waitlist. Please try again.');
    }
}
