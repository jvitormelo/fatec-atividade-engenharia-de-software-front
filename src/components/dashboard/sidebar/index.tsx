import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import { ImExit, ImArrowDown2, ImArrowUp2 } from 'react-icons/im'
import { useRouter } from 'next/router'

import styles from './sidebar.module.css'

export const Sidebar = ({ routes = [] }: { routes: any[] }) => {
  const { route } = useRouter()

  const activeRoute = useCallback((url: string) => {
    return url === route
  }, [route])

  const NestedRoute = ({ route }: { route: { name: string, url: string, nested: { name: string, url: string, icon?:string }[] } }) => {
    const [open, setOpen] = useState(true)
    const toggleOpen = useCallback(() => {
      setOpen((values) => !values)
    }, [open])

    return (
      <div >
        <div className={styles.route} onClick={toggleOpen}>
          <span>  {route.name}</span>
          <span> {open ? <ImArrowUp2/> : <ImArrowDown2/>}</span>
        </div>
        {open && <div >
          {route.nested.map((item) => (
            <Link key={item.name} href={item.url}>
              <div className={activeRoute(item.url) ? styles.selectedNestedRoute : styles.nestedRoute }>
                <span>{item.name}</span>
                <span>{item?.icon ? item.icon : '😴' }</span>
              </div>
            </Link>
          ))}
        </div> }

      </div>
    )
  }

  return (
    <div className='sticky flex flex-col left-0 top-0 p-8 h-screen justify-between '>
      <div className='text-white text-2xl font-bold mb-8'>Study Wisely</div>
      <div className='grid grid-flow-row gap-3'>
        {routes.map(({ url, name, nested, icon }) => (
          <>
            {nested?.length
              ? <NestedRoute key={name} route={{ url, name, nested }}/> : <Link key={name} href={url}>
              <div
                className={ activeRoute(url) ? styles.selectRoute : styles.route}
              >
                <span>{name}</span>  <span>{icon}</span>
              </div>
            </Link> }

          </>

        ))}

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
