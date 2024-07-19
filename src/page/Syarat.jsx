import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import Input from '../components/input/Input'
import Button from '../components/button/Button'
import { useNavigate } from 'react-router-dom'
import Click from '../assets/sound/click.wav'
import { ArrowBigLeft } from 'lucide-react';
import { useGlobalState } from '../context/GlobalStateContext';

const Syarat = () => {
    const { nama, setNama, zodiac, setZodiac } = useGlobalState();

    useEffect(() => {
        const storedNama = localStorage.getItem('nama');
        const storedZodiac = localStorage.getItem('zodiac');
        if (storedNama) setNama(storedNama);
        if (storedZodiac) setZodiac(storedZodiac);
    }, [setNama, setZodiac]);

    useEffect(() => {
        localStorage.setItem('nama', nama);
        localStorage.setItem('zodiac', zodiac);
    }, [nama, zodiac]);
    const click = new Audio(Click)

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        click.play()
        setTimeout(() => {
            if (nama === '' || zodiac === '') {
                alert('Nama dan Zodiac harus diisi!')
                return
            }else{
                navigate('/cek')
            }
        }, 300)
    }

    const handleBack = () => {
        navigate('/')
    }

    return (
        <div className={clsx('h-screen w-full fixed', 'bg-no-repeat bg-cover', 'bg-[url(assets/image/bg-kocheng3.jpg)]')}>
            <div className={clsx('h-screen w-full relative', 'bg-black bg-opacity-35')}>
                <div className={clsx('py-8 flex flex-col justify-center items-center')}>
                    <header className={clsx('text-center')}>
                        <h1 className={clsx('font-juice', 'text-white text-6xl')}>
                            LENGKAPI <br /> SYARATNYA
                        </h1>
                    </header>
                    <form className={clsx('mt-28 flex flex-col justify-center items-center gap-12')} onSubmit={handleSubmit}>
                        <Input
                            type='text'
                            placeholder='Nama Kamu...'
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                        />
                        <Input
                            type='text'
                            placeholder='Zodiac Kamu...'
                            value={zodiac}
                            onChange={(e) => setZodiac(e.target.value)}
                        />
                        <div className='mt-16'>
                            <Button id='submit' type='submit' label='SUDAH' />
                        </div>
                        <ArrowBigLeft color='white' onClick={handleBack} className='absolute bottom-[18%] left-8'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Syarat
