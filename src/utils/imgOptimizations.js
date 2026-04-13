export const getOptimizedImg = (url) => {
    if (!url) return '';

    const cleanUrl = url.replace(/^https?:\/\//, '');

    return `https://images.weserv.nl/?url=${cleanUrl}&output=webp&q=80&il`;
}