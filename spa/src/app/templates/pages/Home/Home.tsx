import { EditableArea } from '@magnolia/react-editor';
import Footer from '../../fragments/Footer';
import IHomeProps from './Home.model';

const Home = ({ title, main, footer }: IHomeProps) => {
  return (
    <div className='flex flex-col justify-between min-h-[calc(100vh-5rem)]'>
      {title && (
        <header className='hidden'>
          <h1 className='sr-only'>{title}</h1>
        </header>
      )}

      <main>{main && <EditableArea content={main} />}</main>

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

export default Home;
