export const stripHtml = (string) => {
    return string.replace(/<[^>]*>?/gm, '');
}
