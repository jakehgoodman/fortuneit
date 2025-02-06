async function addToWaitlist(email) {
    try {
        const waitlistData = {
            email: email,
            signupDate: new Date().toISOString()
        };
        
        const response = await trickleCreateObject('waitlist', waitlistData);
        return response;
    } catch (error) {
        reportError(error);
        throw new Error('Failed to join waitlist. Please try again.');
    }
}
