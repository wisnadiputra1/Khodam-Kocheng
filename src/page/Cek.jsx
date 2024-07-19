import React, { Fragment, useState, useEffect } from 'react';
import { useGlobalState } from '../context/GlobalStateContext';
import clsx from 'clsx';
import Button from '../components/button/Button';
import data from '../data/data-kucing.json';
import defaultImage from '../assets/image/default.jpg';
import Meow from '../assets/sound/meow.mp3';
import { ArrowBigLeft, Info, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import icon from '../assets/image/instagram.png'
import icon2 from '../assets/image/donation.png'

const miaw = new Audio(Meow);

const Cek = () => {

  const [popup, setPopup] = useState(false)

  const navigate = useNavigate()

  const { nama } = useGlobalState();
  const [randomNumber, setRandomNumber] = useState(null);
  const [show, setShow] = useState(true)
  
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateRandomNumber = () => {
    miaw.play();
    const number = getRandomInt(1, data.length);
    setRandomNumber(number);
    const selectedItem = data[number - 1];
    localStorage.setItem('selectedItem', JSON.stringify(selectedItem)); 
    setShow(false)
  };

  useEffect(() => {
    const storedItem = localStorage.getItem('selectedItem');
    if (storedItem) {
      const item = JSON.parse(storedItem);
      const index = data.findIndex(d => d.id === item.id);
      setRandomNumber(index + 1); 
    }
  }, []);

  const handleBack = () => {
    navigate('/syarat')
    setShow(true)
  }

  const handleInfo = () => {
    setPopup(true)
  }

  const selectedItem = randomNumber !== null ? data[randomNumber - 1] : null;
  const img = selectedItem ? selectedItem.url : defaultImage;

  console.log(img);

  return (
    <div className={clsx('h-screen w-full overflow-hidden', 'bg-no-repeat bg-cover bg-center', 'bg-[url(assets/image/bg-kocheng4.jpg)]')}>
      <div className={clsx('h-screen w-full relative', 'bg-black bg-opacity-50')}>
        <div className={clsx('py-8 flex flex-col justify-center items-center relative')}>
          <header className={clsx('text-center')}>
            <h1 className={clsx('font-juice', 'text-white text-6xl', 'mb-3')}>
              HAI {nama}
            </h1>
            <span className='font-lancelot text-white text-xl'>
              KHODAM KAMU<br />HARI INI ADALAH
            </span>
          </header>

          <Fragment>
            <div 
              className={clsx('w-[170px] h-[228px] relative mt-8', 'rounded-xl drop-shadow-lg ')}
            >
              <img src={img} className={clsx('w-full h-full bg-cover rounded-xl', 'border-2 border-white')} alt="Kucing" />
              {!selectedItem && (
                <span className={clsx('absolute bottom-1 left-[60px]', 'text-4xl font-lancelot')}>
                  ????
                </span>
              )}
            </div>
            <div className={clsx('font-lancelot text-center', 'mt-8')}>
              <p className='mb-2 text-xl'>KHOCENG</p>
              <span>"{selectedItem ? selectedItem.title : '????'}"</span>
            </div>
            {selectedItem && show === false ? (
              <div className={clsx('mt-8')}>
                <p className={clsx('text-5xl font-lancelot text-[#FFA704]')}>{selectedItem.tier}</p>
              </div>
            ):<div className={clsx('mt-8')}>
                <Button id='generate' label='CEK' onClick={generateRandomNumber} />
              </div>
            }
          </Fragment>
          <ArrowBigLeft color='white' onClick={handleBack} className='absolute bottom-10 left-8'/>
          <Info color='white' className='absolute right-8 bottom-10' onClick={handleInfo}/>
        </div>
        <div className={clsx(`bg-custom-gray-100 w-full h-[170px] absolute bottom-0 duration-200 drop-shadow-xl rounded-t-lg`, !popup ?`  translate-y-[100%]` : 'translate-y-0' )}>
            <div className='grid grid-cols-3 px-3 py-3'>
              <span></span>
              <h2 className='text-xl font-lancelot text-center'>About Creator</h2>
              <div className='flex justify-end'>
                <X onClick={() => setPopup(false)}/>
              </div>
            </div>
            <div className='flex gap-8 justify-center items-center mt-4'>
              <a href="https://www.instagram.com/wisna___" target='_blank'>
                <img src={icon} alt="" className='w-10'/>
              </a>
              <a href="https://saweria.co/KhodamKhoceng" target='_blank'>
                <img src={icon2} alt="" className='w-10'/>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cek;
