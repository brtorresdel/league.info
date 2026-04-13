export const getOptimizedImg = (url) => {
    if (!url) return '';

    const cleanUrl = url.replace(/^https?:\/\//, '');

    return `https://images.weserv.nl/?url=${cleanUrl}&output=webp&q=80&il`;
}

export const getLocalImg = (relativePath) => {
    if (!relativePath) return '';
    
    // Ensure path starts with /
    const absolutePath = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;
    
    const baseUrl = import.meta.env.BASE_URL || '/';
    // Remove trailing slash from baseUrl if present
    const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    
    return `${cleanBaseUrl}${absolutePath}`;
}