const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'dum0dces',
    dataset: 'production',
    apiVersion: '2024-02-26',
    useCdn: true,
});


if (!client) {
    throw new Error('Failed to create Sanity client');
}

module.exports = client;

