/* eslint-disable @next/next/no-img-element */
import NextImage from 'next/image';
import { environment } from '@/environments/environment';
import { MgnlContent } from '@magnolia/frontend-helpers-base';

const MGNL_AUTHOR = "magnoliaAuthor"

const fetchFromPublic = (url: string): string => url.includes(MGNL_AUTHOR) ? url.replace(MGNL_AUTHOR, "magnoliaPublic") : url;

const Image = ({
  image,
  alt,
  caption,
  styles
}: {
  image?: MgnlContent;
  alt: string;
  caption: string;
  styles?: string
}) => {
  if (image) {
    const imageLink = image['@link'] as string;
    const damURL = imageLink?.startsWith('https')
      ? `${imageLink}`
      : `${environment.damRawBase}${imageLink}`;

    return (
      <div>
        <NextImage src={fetchFromPublic(damURL)} alt={alt} className={styles} fill={true}/>
        {caption && <div className="text-center">{caption}</div>}
      </div>
    );
  }
  return null;
};

export default Image;
