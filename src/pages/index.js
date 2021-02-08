import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Layout from '../layouts/layout';
import { FirstView } from '../components/first-view';
import { Menus } from '../components/menus';
import { Staff } from '../components/staff';
import { Access } from '../components/access';

export default function Home() {
  return (
    <Layout>
      <FirstView />
      <hr />
      <Menus />
      <hr />
      <Staff />
      <hr/>
      <Access />
    </ Layout>
  )
}
