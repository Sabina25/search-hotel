export const request = async (query: string, variables: object) => {
    const response = await fetch('https://staging.sparrow.escapes.tech/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
    });
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(response);
};
