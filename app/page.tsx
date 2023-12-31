'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import SectionMyName from './containers/sectionMyName';
import Navigation from './components/navigation';
import { useState } from 'react';

export default function Home() {
  const [exitPage, setExitPage] = useState(false);

  return (
    <main className={styles.main}>
      <Navigation exitPage={exitPage} setExitPage={setExitPage} />
      <SectionMyName exitPage={exitPage} setExitPage={setExitPage} />
    </main>
  );
}
