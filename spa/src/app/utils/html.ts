import DOMPurify from 'dompurify';

export const sanitizeHTML = (html: string): string => {
  if (typeof window === 'undefined') return html;
  
  const purify = DOMPurify(window);
  
  return purify.sanitize(html, {
    ADD_TAGS: ['iframe'],
    ADD_ATTR: ['src', 'width', 'height', 'frameborder', 'allowfullscreen', 'title', 'allow'],
  });
};