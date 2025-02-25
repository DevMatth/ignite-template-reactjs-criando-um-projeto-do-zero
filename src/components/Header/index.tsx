import Link from "next/link";

import styles from './header.module.scss'

export function Header() {
  return (
    <header className={styles.logo}>
      <Link href="/">
        <a>
          <img src="/assets/logo.svg" alt="Logo" />
        </a>
      </Link>
    </header>
  );
}
