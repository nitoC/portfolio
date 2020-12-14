import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Route from './Home';

export default function Home() {
  return (
    <div className={styles.container}>
        <Route/>
    </div>
  )
}
