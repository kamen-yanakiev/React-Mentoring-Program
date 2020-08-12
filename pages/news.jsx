// import {Link, Head} from 'next';
import { useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import Layout from '../components/Layout';
import fetch from 'isomorphic-fetch';

const News = ({ news }) => {
    const [searchQuery, setSearchQuery] = useState('react');

    const handleTextChange = e => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        Router.push(`/news/?searchTerm=${searchQuery}`);
    }

    const searchForm = () => (
        <div className='add-padding'>
            <p>Search for news:</p>
            <form onSubmit={ handleSubmit }>
                <input type='text' value={searchQuery} onChange={ handleTextChange } />
                <button>Search</button>
            </form>
        </div>
    );

    return (
        <div>
            <Head>
            <title>News</title>
            </Head>
            <Layout mainTitle='News'>
                <div>
                    {searchForm()}
                    <hr/>
                    {news.map((news, index) => (
                        <p key={index}>
                            <a href={news.url} target='_blank'>{ news.title }</a>
                        </p>
                    ))}
                </div>
            </Layout>
        </div>
        
    )
}

News.getInitialProps = async ({ query }) => {
    let news;
    try {
        const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${query.searchTerm}`);
        news = await res.json();
    } catch (err) {
        console.log(`ERROR ${err}`);
        news = [];
    }

    return {
        news: news.hits
    }
}

export default News;