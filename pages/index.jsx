import Head from 'next/head';
import Layout from '../components/Layout';

const Index = () => (
    <Layout mainTitle='Home Page built with NextJS' footer={`Copyright ${new Date().getFullYear()}`}>
        <Head>
            <title>Home</title>
        </Head>
        <h2>Home Page</h2>
    </Layout>
);

export default Index;
