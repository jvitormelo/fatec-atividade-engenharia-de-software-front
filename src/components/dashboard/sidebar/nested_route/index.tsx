import React, { useCallback, useState } from 'react'
import styles from '../sidebar.module.css'
import { ImArrowDown2, ImArrowUp2 } from 'react-icons/im'
import Link from 'next/link'

interface INestedRoute {
  route: { name: string, url: string, nested: { name: string, url: string, icon?:string }[] },
  activeRoute: (e: string) => boolean
}

export const NestedRoute = ({ route, activeRoute }:INestedRoute) => {
  const [open, setOpen] = useState(false)
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
