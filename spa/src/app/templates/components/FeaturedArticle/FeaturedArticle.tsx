import Image from '../../fragments/Image';
import { decodeIfEscaped } from '@magnolia/frontend-helpers-base';
import IFeaturedArticleProps from "./FeaturedArticle.model";
import { getDescriptionPreview, stripHtml } from '@/app/utils/text';
import Link from 'next/link';
import { getPublishDate } from '@/app/utils/date';

const FeaturedArticle = ({
  article
}: IFeaturedArticleProps) => {
  const articleTitle = article["title"]
  const articlePath = article["@path"]
  const publishDate = getPublishDate(article["publishDate"])
  const previewText = getDescriptionPreview(article["description"])
  const heroImage = article["heroImage"]

  return (
    <div className="w-full max-w-5xl mx-auto px-6 md:px-8 my-8 text-center">
      <div className="relative w-full h-64 md:h-[500px] lg:h-[600px]">
        <Image
          id={heroImage}
          alt={articleTitle}
          styles="object-contain object-center w-full h-full"
        />
      </div>
      <h3 className="font-bold text-2xl mb-4">{articleTitle}</h3>
      <span className="italic">{publishDate}</span>
      <div dangerouslySetInnerHTML={{ __html: decodeIfEscaped(previewText)}} className="max-w-3xl mx-auto my-4 text-justify"/>
      <Link
        href={articlePath ?? "/"}
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative inline-block font-bold text-black
          after:absolute after:left-0 after:-bottom-0.5
          after:h-[2px] after:w-0 after:bg-black
          after:transition-all after:duration-300
          hover:after:w-full
          mx-auto my-4 text-lg
        ">
        Read &#8250;
      </Link>
    </div>
  );
};

export default FeaturedArticle