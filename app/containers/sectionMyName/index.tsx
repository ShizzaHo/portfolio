"use client";

import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import { useRouter  } from 'next/navigation';

export default function SectionMyName({exitPage, setExitPage}: any) {
  const animationConfig = {
    info: {
      in: styles.infoIn,
      out: styles.infoOut,
    },
    figure1: {
      in: styles.figureIn,
      out: styles.figureOut,
    },
    figure2: {
      in: styles.figureInTwo,
      out: styles.figureOutTwo,
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.abstractFigure} style={{animationName: exitPage ? animationConfig.figure1.out : animationConfig.figure1.in}} />
      <div className={styles.abstractFigureTwo} style={{animationName: exitPage ? animationConfig.figure2.out : animationConfig.figure2.in}} />
      <div className={styles.info} style={{animationName: exitPage ? animationConfig.info.out : animationConfig.info.in}}>
        <img
          className={styles.info__image}
          src='https://imgholder.ru/160/8a8a8a/ffffff&text=IMAGE+HOLDER'
        ></img>
        <h1 className={styles.info__title}>КОНСТАНТИН ЧЕКАН</h1>
        <p className={styles.info__desc}>
          Привет! Меня зовут Константин Чекан, и я занимаюсь front-end
          разработкой с фокусом на React. В моих проектах я предпочитаю
          использовать Next.js и MobX, а также имею небольшой опыт в backend,
          основном я пишу backend на Next.js и Express.js.
        </p>
      </div>
    </section>
  );
}
