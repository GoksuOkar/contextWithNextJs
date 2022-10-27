import { useEffect, useContext } from 'react';
import { AppContext } from '../context';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const context = useContext(AppContext);
  return (
    <div id="outermost">
      <nav>
        <a>Home |</a>
        <a> About</a>
      </nav>
      <div id="innerOne">
        Inside One
        <div id="innerTwo">
          Context Name: {context.nameContext}
          <button>Change Context</button>
        </div>
      </div>
    </div>
  );
}
