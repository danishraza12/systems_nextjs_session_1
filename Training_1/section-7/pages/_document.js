import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head /> {/* This head is different from next/head */}
        <body>
          <div id='overlays' /> {/* This component will run outside of app/root component */}
          <Main /> {/* App Component from _app.js */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
