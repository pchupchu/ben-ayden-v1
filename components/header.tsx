import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image
              src='./logo.svg'
              width={100}
              height={48}
              priority
              alt='logo'
            />
          </Link>
          <button type='button' className='btn btn-sm'>
            Work with me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
