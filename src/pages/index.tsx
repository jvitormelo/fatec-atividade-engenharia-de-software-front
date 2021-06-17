import React from 'react'

import Image from 'next/image'
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
      <div className='flex min-h-[90vh] items-center justify-between p-8 font-sans'>
        <div className='lg:max-w-[60%] justify-center mb-20'>
          <span className='flex  font-bold text-2xl lg:text-5xl text-text-primary text-center'>Atividade de Laboratório de Engenharia de Software</span>
        </div>
        <div className='hidden lg:block'>
          <Image className='rounded-3xl' width={500} height={300} src={'/assets/images/nana.png'} />
        </div>
      </div>

      <div className='flex min-h-[100vh] justify-center'>
        <div className='flex lg:justify-between flex-col md:flex-row lg:flex-row xl:flex-row'>
          <div>
            <div className='flex justify-center text-3xl  font-bold'>Front</div>
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
            <div className='flex justify-center text-3xl mt-8 md:mt-0 lg:mt-0 xl:mt-0 font-bold'>Back</div>
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
      <Modal maxWidth={40} closeModal={() => setState((values) => ({ ...values, open: false }))} open={state.open}>
        <CreateAccount />
      </Modal>
    </Main>
  )
}

export default Index
