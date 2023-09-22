import Layout from '../components/layout/layout';
import React from 'react';
import '../app/globals.css';

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}