import { FiInstagram } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { metaData } from 'utils/data-profile';

const social = [
  {
    id: 1,
    link: metaData.instagram,
    icon: <FiInstagram size={20} />,
    className: 'instagram',
    title: 'instagram',
  },
];

const Footer = () => (
  <footer className='flex items-center justify-center w-full px-16 bg-white shadow-footer py-30px lg:px-35px lg:justify-between mt-4'>
    <p className='text-gray-900 text-center'>
      Copyright &copy; {new Date().getFullYear()}{' '}
      <Link
        className='font-semibold transition-colors duration-200 ease-in-out hover:text-orange-500'
        to='#'
      >
        {metaData.name}.
      </Link>{' '}
      All rights reserved
    </p>

    <div className='items-center hidden lg:flex'>
      {social.map((item, index) => (
        <a
          href={item.link}
          className={`social ${item.className}`}
          key={index}
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='sr-only'>{item.title}</span>
          {item.icon}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
