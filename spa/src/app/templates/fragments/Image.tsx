/* eslint-disable @next/next/no-img-element */
import NextImage from 'next/image';
import { environment } from '@/environments/environment';
import { MgnlContent } from '@magnolia/frontend-helpers-base';
import { fetchFromPublic, getPublicLinkFromID } from '@/app/utils/image';

interface IImageProps {
  image?: MgnlContent;
  alt?: string;
  caption?: string;
  styles?: string;
  id?: string
}

const Image = ({
  image,
  alt,
  caption,
  styles,
  id
}: IImageProps) => {
  let damURL;

  if (image) {
    const imageLink = id ? getPublicLinkFromID(id) : image['@link'] as string;
    damURL = imageLink?.startsWith('http')
      ? `${imageLink}`
      : `${environment.damRawBase}${imageLink}`;

    console.log(damURL)

    
  }

  if (id) damURL = getPublicLinkFromID(id)

  if (damURL) {
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
