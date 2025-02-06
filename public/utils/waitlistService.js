async function addToWaitlist(email) {
    try {
        const response = await fetch('/api/waitlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email }),
        });

        // Check if response is JSON
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('Server error: Invalid response format');
        }

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || data.error || 'Failed to join waitlist');
        }

        return data;
    } catch (error) {
        console.error('Waitlist error:', error);
        if (error.message.includes('Invalid response format')) {
            throw new Error('Server error: Please try again later');
        }
        throw error;
    }
}
