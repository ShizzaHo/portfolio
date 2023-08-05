'use client';

import Image from 'next/image';
import styles from './index.module.scss';
import { useCallback } from "react";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function Navigation({exitPage, setExitPage}: any) {
  const router = useRouter();
  const pathname = usePathname();

  const getFigure = (openned: boolean, fill: string) => {
    if (openned) {
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='38'
          height='37'
          viewBox='0 0 38 37'
          fill='none'
          className={styles.selectedMenu}
        >
          <path
            d='M14.136 2.8463C16.6658 -0.194432 21.3342 -0.194431 23.864 2.8463C25.0368 4.25594 26.7635 5.08746 28.5968 5.12549C32.5515 5.20753 35.4622 8.8574 34.6621 12.7312C34.2913 14.527 34.7177 16.3954 35.831 17.8525C38.2326 20.9955 37.1938 25.5468 33.6663 27.3366C32.0311 28.1663 30.8362 29.6647 30.3912 31.4436C29.4312 35.2808 25.2251 37.3064 21.6265 35.6644C19.9582 34.9032 18.0418 34.9032 16.3735 35.6644C12.7749 37.3064 8.56882 35.2808 7.60884 31.4436C7.16381 29.6647 5.96893 28.1663 4.33366 27.3366C0.806218 25.5468 -0.232591 20.9955 2.16896 17.8525C3.28229 16.3954 3.70874 14.527 3.33786 12.7312C2.53785 8.8574 5.44853 5.20753 9.4032 5.12549C11.2365 5.08746 12.9632 4.25594 14.136 2.8463Z'
            fill={fill}
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          className={styles.nonSelectedMenu}
        >
          <path
            d='M5.02189 5.69369C10.9696 -0.641698 21.0304 -0.641699 26.9781 5.69369C28.5671 7.38629 29.7433 9.4234 30.4146 11.6458C32.9273 19.9644 27.8969 28.6773 19.4365 30.6605C17.1761 31.1903 14.8239 31.1903 12.5635 30.6605C4.10307 28.6773 -0.927337 19.9644 1.58542 11.6458C2.25674 9.4234 3.43287 7.38629 5.02189 5.69369Z'
            fill={fill}
          />
        </svg>
      );
    }
  };

  const callbacks = {
    changePage: useCallback((url: string) => {
      if(pathname != url) {
        setExitPage(true);
        setTimeout(()=>{
          router.push(url);
        }, 1500)
      }
    }, []),
  };

  return (
    <nav className={styles.nav} style={{animationName: exitPage ? styles.showOut : styles.showIn}}>
      <div className={styles.homeMenu} onClick={()=>{callbacks.changePage("/")}}>
        <span>Главная</span>
        {getFigure(pathname == "/" ? true : false, "#FFA800")}
      </div>
      <div className={styles.infoMenu} onClick={()=>{callbacks.changePage("/info")}}>
        <span>Подробнее обо мне</span>
        {getFigure(pathname == "/info" ? true : false, "#C9F600")}
      </div>
      <div className={styles.projectsMenu} onClick={()=>{callbacks.changePage("/projects")}}>
        <span>Мои проекты</span>
        {getFigure(pathname == "/projects" ? true : false, "#AA00A2")}
      </div>
      <div className={styles.contactsMenu} onClick={()=>{callbacks.changePage("/contacts")}}>
        <span>Обратная связь</span>
        {getFigure(pathname == "/contacts" ? true : false, "#0B5FA5")}
      </div>
    </nav>
  );
}
