'use client';
import Link from "next/link";
import Image from '../../fragments/Image';
import ICardProps from "./Card.model";
import { getPublishDate } from "@/app/utils/date";

const Card = ({
  heroImage,
  publishDate,
  title,
  description,
  path
}: ICardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-sm">      
      {heroImage && (
        <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          <Image
            id={heroImage}
            alt={title}
            styles="object-cover object-center w-full h-full transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      <div className="p-4 flex flex-col gap-2">
        {publishDate && (
          <span className="text-sm text-gray-500">{getPublishDate(publishDate)}</span>
        )}
        {title && <h3 className="text-lg font-bold text-gray-900">{title}</h3>}
        {description && (
          <p className="text-gray-700 text-sm line-clamp-3">{description}</p>
        )}
        {path && (
          <Link
            href={path}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-2 inline-block font-bold text-black
              after:absolute after:left-0 after:-bottom-0.5
              after:h-[2px] after:w-0 after:bg-black
              after:transition-all after:duration-300
              hover:after:w-full relative
            "
          >
            Read More &#8250;
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;