import React from 'react'

import { Meta } from '../layout/Meta'
import { Main } from '../templates/Main'
import { Navbar } from '../components/home/navbar'
import { TechCard } from '../components/home/tech_card'
import { Modal } from '../components/global/modal'
import { CreateAccount } from '../components/home/create_account'
import { useHomeController } from '../controllers/useHomeController'

const Index = () => {
  const { state, setState } = useHomeController()

  return (
    <Main
      meta={(
        <Meta
          title='Home'
          description='Trabalho para sexta que vem'
        />
      )}
    >
      <Navbar openCreateAccount={() => setState((values) => ({ ...values, open: true }))} />
      <div className='flex h-[100vh] p-4 md:p-8 lg:p-8 flex-col '>
        <span className='flex justify-center text-2xl md:text-3xl lg:text-3xl text-primary-dark text-center'>Atividade de Laboratório de Engenharia de Software</span>
        <img
          className='max-h-[10rem] max-w-[30.23rem] mx-auto my-8 rounded-xl'
          alt={'nextJs'}
          src={'https://c4.wallpaperflare.com/wallpaper/286/891/609/anime-c-programming-blue-eyes-book-cover-hd-wallpaper-preview.jpg'} />
        <div>

          <div>
            <div className='flex  max-w-[900px] mx-auto lg:justify-around flex-col md:flex-row lg:flex-row xl:flex-row'>
              <div>
                <div className='flex justify-center text-3xl text-white'>Front</div>
                <div className='flex flex-col items-center'>
                  <TechCard
                    img='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
                    name='React' description={'Framework de JS para criar interfaces reativas.'} />
                  <TechCard
                    img='https://tailwindcss.com/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg'
                    name='Tailwind' description={'Framework de CSS para fazer a estilização.'} />
                  <TechCard
                    img='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png'
                    name='NextJS' description='Framework de React para produção.' />
                </div>
              </div>
              <div>
                <div className='flex justify-center text-3xl mt-8 md:mt-0 lg:mt-0 xl:mt-0 text-white'>Back</div>
                <div className='flex flex-col items-center'>
                  <TechCard img='https://cdn.iconscout.com/icon/free/png-512/node-js-1-1174935.png' name='NodeJS'
                            description={'Runtime de JS que possibilita o JS ser rodado em server.'} />
                  <TechCard img='https://expressjs.com/images/express-facebook-share.png'
                            description='Framework de NodeJS para criação de API' name='Express' />
                  <TechCard img='https://tsed.io/prisma-2.svg' name='Prisma'
                            description='ORM para interagir com o banco Postgres' />
                </div>
              </div>
            </div>

          </div>

        </div>
        <Modal closeModal={() => setState((values) => ({ ...values, open: false }))} open={state.open} >
          <CreateAccount />
        </Modal>
      </div>

    </Main>
  )
}

export default Index
