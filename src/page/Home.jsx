import clsx from 'clsx'
import React from 'react'
import Button from '../components/button/Button'
import { useNavigate } from 'react-router-dom'
import Click from '../assets/sound/click.wav'

const Home = () => {
    const click = new Audio(Click)

    const navigate = useNavigate()

    const handleClick = () => {
        click.play()
        setTimeout(() => {
            navigate('/syarat')
        },300)
    }

  return (
    <div className={clsx('h-screen w-full', 'bg-no-repeat bg-cover', 'bg-[url(assets/image/bg-kocheng2.jpg)]')}>
        <div className={clsx('bg-black bg-opacity-65', 'w-full h-screen', 'flex justify-center')}>
            <div className={clsx('flex flex-col justify-center items-center')}>
                <header className={clsx('text-center')}>
                    <h1 className={clsx('font-juice', 'text-6xl text-white')}>CEK KHODAM</h1>
                    <p className={clsx('font-lancelot', 'text-white text-xl')}>KOCHENG</p>
                </header>
                <div className={clsx('mt-40', 'flex justify-center')}>
                    <Button id="start" label="MULAI" onClick={handleClick} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home