import { decodeIfEscaped } from '@magnolia/frontend-helpers-base';
import ITextProps from './Text.model';

const Text = ({ text }: ITextProps) => {
  return (
    <div
      className='py-6 px-8 text-center'
      dangerouslySetInnerHTML={{ __html: decodeIfEscaped(text) }}
    ></div>
  );
};

export default Text;
