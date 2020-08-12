import Link from 'next/link';

const Nav = () => (
    <div className='my-nav'>
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
        <Link href='/news/?searchTerm=react'><a>News</a></Link>
    </div>
);

export default Nav;