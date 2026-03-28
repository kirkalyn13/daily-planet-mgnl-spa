import { decodeIfEscaped } from "@magnolia/frontend-helpers-base";

export const stripHtml = (html: string) => html.replace(/<[^>]+>/g, '');
export const truncate = (text: string, maxLength: number) => {
  return text.length > maxLength
    ? text.substring(0, maxLength) + '...'
    : text;
};

export const getDescriptionPreview = (text: string): string => {
    const rawText = stripHtml(decodeIfEscaped(text));
    return truncate(rawText, 150);
}