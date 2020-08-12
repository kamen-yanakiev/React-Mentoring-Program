// import {Link, Head} from 'next';
import React, { useState } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import Layout from '../components/Layout';

const searchForNews = async (searchQuery) => {
    try {
        const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
        const result = await res.json();
        return result.hits;
    } catch (err) {
        console.log(`ERROR ${err}`);
        return [];
    }
};

const News = ({ newsProp = [], query = 'react'  }) => {
    const [searchQuery, setSearchQuery] = useState(query);

    const handleTextChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Router.push(`/news/?searchTerm=${searchQuery}`);
    };

    const searchForm = () => (
        <div className='add-padding'>
            <p>Search for news:</p>
            <form onSubmit={handleSubmit}>
                <input type='text' value={searchQuery} onChange={handleTextChange} />
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
                    <hr />
                    {newsProp.map((news, index) => (
                        <p key={index}>
                            <a href={news.url} target='_blank'>{ news.title }</a>
                        </p>
                    ))}
                </div>
            </Layout>
        </div>

    );
};

News.getInitialProps = async ({ query }) => {
    const newsProp = await searchForNews(query.searchTerm);

    return {
        newsProp,
        query: query.searchTerm,
    };
};

export default News;
