import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Component1 from '../components/Component1';

export default function Home() {
  return (
    <div id="outermost">
      <nav>
        <Link href="/">Home |</Link>
        <Link href="/about"> About</Link>
      </nav>
      You're on About Page
      <Component1 />
    </div>
  );
}
