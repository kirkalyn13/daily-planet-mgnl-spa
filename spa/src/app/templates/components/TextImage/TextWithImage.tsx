import { decodeIfEscaped } from '@magnolia/frontend-helpers-base';
import Image from '../../fragments/Image';
import ITextWithImageProps from './TextWithImage.model';

const TextWithImage = ({
  image,
  altText,
  text,
  caption,
  isImageFirst = false,
}: ITextWithImageProps) => {
  return (
    <div className="py-6 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div
          className={isImageFirst ? 'md:order-2' : 'md:order-1'}
          dangerouslySetInnerHTML={{ __html: decodeIfEscaped(text) }}
        />
        <div
          className={`relative w-full h-64 md:h-full ${
            isImageFirst ? 'md:order-1' : 'md:order-2'
          }`}
        >
          <Image
            image={image}
            alt={altText || ''}
            caption={caption || ''}
            styles="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TextWithImage;