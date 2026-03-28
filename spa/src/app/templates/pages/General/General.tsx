import { EditableArea } from '@magnolia/react-editor';
import Footer from '../../fragments/Footer';
import IGeneralProps from './General.model';

const General = ({ title, main, footer }: IGeneralProps) => {
  return (
    <div className='flex flex-col justify-between min-h-[calc(100vh-5rem)]'>
      {title && (
        <header className='hidden'>
          <h1 className='sr-only'>{title}</h1>
        </header>
      )}

      <main className="w-full max-w-5xl mx-auto px-6 md:px-8 my-8">{main && <EditableArea content={main} />}</main>

      {footer && (
        <EditableArea
          className={'footer bg-black text-white px-8'}
          content={footer}
          customView={Footer}
        />
      )}
    </div>
  );
};

export default General;
