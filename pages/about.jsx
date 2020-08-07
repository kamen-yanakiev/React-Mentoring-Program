import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';

const About = () => (
    <Layout mainTitle='About Page built with NextJS' footer={`Footer`}>
        <Head>
            <title>About</title>
        </Head>
        <h2>About Page</h2>
    </Layout>
);

export default About;
