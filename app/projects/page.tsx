'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import { useState } from 'react';
import Navigation from '../components/navigation';
import SectionInfo from '../containers/sectionInfo';

export default function Info() {
  const [exitPage, setExitPage] = useState(false);

  return (
    <main className={styles.main}>
      <Navigation exitPage={exitPage} setExitPage={setExitPage} />
      <SectionInfo exitPage={exitPage} setExitPage={setExitPage} />
    </main>
  );
}
