import { decodeIfEscaped } from '@magnolia/frontend-helpers-base';
import IRichTextProps from './RichText.model';

const RichText = ({ text }: IRichTextProps) => {
  return (
    <div
      className='py-6 px-8 text-center'
      dangerouslySetInnerHTML={{ __html: decodeIfEscaped(text) }}
    ></div>
  );
};

export default RichText;
