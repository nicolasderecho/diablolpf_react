export const isBlank = (string) => string === '';

export const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export const matchesArrayFilter = (filter, array) => {
    const regExp = new RegExp(escapeRegExp(filter), 'i');
    return isBlank(filter) || array.some((prop) => regExp.test(prop));
};

export const randomString = () =>  Math.random().toString(36).substr(2, 9);
export const buildId = () => `${randomString()}-${randomString()}-${randomString()}-${randomString()}`;

window.buildId = buildId;