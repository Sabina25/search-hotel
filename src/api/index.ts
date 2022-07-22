export const request = (query, variables) => {
    return fetch('https://staging.sparrow.escapes.tech/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
    }).then((res) =>
        res
            .json()
            .then((result) => {
                return result;
            })
            .catch((err) => console.log(err))
    );
};
