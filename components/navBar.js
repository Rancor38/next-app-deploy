// nextjs includes a built in Link
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const NavBar = () => {
    return (
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
        </nav>
    );
};

export default NavBar;