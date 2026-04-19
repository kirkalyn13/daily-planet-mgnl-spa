import IFrameProps from "./IFrame.model";
import { decodeIfEscaped } from '@magnolia/frontend-helpers-base';
import { sanitizeHTML } from "@/app/utils/html";

const IFrame = ({ code }: IFrameProps) => {
  return (
    <div
        className='py-6 px-8 text-center w-full h-auto'
        dangerouslySetInnerHTML={{ __html: sanitizeHTML(decodeIfEscaped(code)) }}
    />
    );
};

export default IFrame;