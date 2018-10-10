export function getUrlWithParams(
    url: string,
    params: {[key: string]: any}
): string {
    Object.keys(params).forEach(key => {
        const value = params[key];
        url = url.replace(`:${key}`, value);
    });
    return url;
}
