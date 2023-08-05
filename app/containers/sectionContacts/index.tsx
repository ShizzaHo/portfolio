'use client';

import React from 'react';
import styles from './index.module.scss';

import email from '../../../public/icons/email.svg';
import telegram from '../../../public/icons/telegram.svg';
import hh from '../../../public/icons/hh.svg';

export default function SectionContacts({ exitPage, setExitPage }: any) {
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
    },
  };

  return (
    <section className={styles.section}>
      <div
        className={styles.abstractFigure}
        style={{
          animationName: exitPage
            ? animationConfig.figure1.out
            : animationConfig.figure1.in,
        }}
      />
      <div
        className={styles.abstractFigureTwo}
        style={{
          animationName: exitPage
            ? animationConfig.figure2.out
            : animationConfig.figure2.in,
        }}
      />
      <div
        className={styles.info}
        style={{
          animationName: exitPage
            ? animationConfig.info.out
            : animationConfig.info.in,
        }}
      >
        <h1 className={styles.info__title}>ОБРАТНАЯ СВЯЗЬ</h1>
        <p className={styles.info__desc}>
          Пишите в любое удобное для вас время, я с радостью отвечу на любые
          ваши вопросы, и рассмотрю любые ваши предложения!
        </p>
        <div className={styles.info__controls}>
          <button className={styles.info__button}>
            <img src={email.src}></img>
          </button>
          <button className={styles.info__button}>
            <img src={telegram.src}></img>
          </button>
          <button className={styles.info__button}>
            <img src={hh.src}></img>
          </button>
        </div>
      </div>
    </section>
  );
}
