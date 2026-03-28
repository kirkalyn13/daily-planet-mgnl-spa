import { environment } from '@/environments/environment';

const MGNL_AUTHOR = "magnoliaAuthor"
const MGNL_PUBLIC = "magnoliaPublic"

export const fetchFromPublic = (url: string): string => url.includes(MGNL_AUTHOR) ? url.replace(MGNL_AUTHOR, MGNL_PUBLIC) : url;
export const getPublicLinkFromID = (id: string): string => `${environment.damRawBase}/${MGNL_PUBLIC}/dam/${id}`
