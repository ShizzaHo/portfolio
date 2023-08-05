'use client';

import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import styles from './index.module.scss';
import { useRouter } from 'next/navigation';

export default function SectionInfo({ exitPage, setExitPage }: any) {
  const animationConfig = {
    info: {
      in: styles.infoIn,
      out: styles.infoOut,
    },
    info2: {
      in: styles.infoTwoIn,
      out: styles.infoTwoOut,
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
        <h1 className={styles.info__title}>ПОДРОБНЕЕ ОБО МНЕ</h1>
        <p className={styles.info__desc}>
          Я готов вести разработку как в офисе, так и удаленно. Мне важно, чтобы
          мои навыки и творческий подход приносили пользу и удовлетворение
          независимо от места работы. <br />
          <br /> Я уверен, что могу внести ценный вклад в проекты как в офисной,
          так и в удаленной команде. Моя готовность принимать новые вызовы и
          постоянно совершенствоваться делает меня отличным кандидатом для
          разнообразных задач и проектов. <br />
          <br /> Я всегда открыт и готов рассмотреть новые предложения работы.
          Моя гибкость и стремление к профессиональному росту позволяют мне
          взять на себя новые вызовы и искать интересные возможности и
          знакомства.
        </p>
      </div>
      <div
        className={styles.workExperience}
        style={{
          animationName: exitPage
            ? animationConfig.info2.out
            : animationConfig.info2.in,
        }}
      >
        <h1 className={styles.workExperience__title}>ОПЫТ РАБОТЫ</h1>
        <h2 className={styles.workExperience__subtitle}>Алгоритмика</h2>
        <p className={styles.workExperience__desc}>
          За год работы в компании "Алгоритмика" я выполнял две ключевые роли
          <br />
          <br />
          <b>Frontend разработчик:</b>
          <br /> Создавал новые решения для внутреннего устройства компании,
          фокусируясь на использовании React и WordPress. Обеспечивал
          качественные и удобные интерфейсы, способствующие повышению
          эффективности работы компании. <br />
          <br />
          <b>Преподаватель программирования для детей:</b>
          <br /> Вдохновлял и учил детей программированию, используя простые
          объяснения и примеры. Помогал развить у них интерес и любовь к
          технологиям.
        </p>
      </div>
    </section>
  );
}
