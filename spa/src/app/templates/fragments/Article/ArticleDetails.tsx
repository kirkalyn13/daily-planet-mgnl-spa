import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from '@fortawesome/free-regular-svg-icons';

interface IArticleDetailsProps {
    author: string,
    publishDate: string,
    readTime: number
}

const getPublishDate = (datetime: string): string => datetime.split("T")[0]

const ArticleDetails = ({ author, publishDate, readTime = 0 }: IArticleDetailsProps) => {
  return (
    <div>
        <h2 className='pb-4 font-bold text-l flex'>
            {`Article | By: ${author} | ${getPublishDate(publishDate)} `}
            <FontAwesomeIcon icon={faClock} className="w-5 h-5 text-black ms-2 me-1"/>
            {`${readTime} min`}
        </h2>
    </div>
  )
}

export default ArticleDetails