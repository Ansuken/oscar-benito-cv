import DOMPurify from 'dompurify';
export const sanitizedDOM = (data: string) => ({
    __html: DOMPurify.sanitize(data)
});