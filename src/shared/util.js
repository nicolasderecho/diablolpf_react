export const isBlank = (string) => string === '';

export const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const matchesArrayFilter = (filter, array) => {
    const regExp = new RegExp(escapeRegExp(filter), 'i');
    return isBlank(filter) || array.some((prop) => regExp.test(prop));
};