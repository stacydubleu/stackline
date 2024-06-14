import Link from 'next/link';
import StacklineLogo from '../StacklineLogo';
import styles from './Header.module.scss';
import { usePathname } from 'next/navigation';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link
        href='/'
        className={styles.logoWrapper}
        target='_blank'
        rel='noopener noreferrer'
      >
        <StacklineLogo width={30} height={24} viewBox={'0 0 100 600'} />
      </Link>
    </div>
  );
}
