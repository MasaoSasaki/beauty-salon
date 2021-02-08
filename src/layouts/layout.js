import styles from './layout.module.scss';
import Head from 'next/head';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { BottomMenu } from '../components/bottom-menu';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Beauty Salon</title>
      </Head>
      <Header />
      <main className={styles.container}>{children}</main>
      <BottomMenu />
      <Footer />
    </>
  )
}
