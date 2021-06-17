import Link from 'next/link'
import React, { useCallback } from 'react'
import { ImExit } from 'react-icons/im'
import { useRouter } from 'next/router'

import styles from './sidebar.module.css'
import { NestedRoute } from './nested_route'

export const Sidebar = ({ routes = [] }: { routes: any[] }) => {
  const { route } = useRouter()

  const activeRoute = useCallback((url: string) => {
    return url === route
  }, [route])

  const nestedRoutes = useCallback(({ url, name, nested, icon }) => {
    if (nested?.length) {
      return <NestedRoute activeRoute={activeRoute} key={name} route={{ url, name, nested }} />
    }

    return (
      <Link key={name} href={url}>
        <div className={activeRoute(url) ? styles.selectRoute : styles.route}>
          <span>{name}</span> <span>{icon}</span>
        </div>
      </Link>
    )
  }, [route])

  return (
    <div className='sticky flex flex-col left-0 top-0 p-8 h-screen justify-between '>
      <div className='text-white text-2xl font-bold mb-8'>Study Wisely</div>
      <div className='grid grid-flow-row gap-3'>
        {routes.map((route) => nestedRoutes({ ...route }))}
      </div>
      <Link href={'/logout'}>
        <div
          className={styles.logout}
        >
          <div>Sair</div>
          <div>
            <ImExit />
          </div>
        </div>
      </Link>
    </div>
  )
}
