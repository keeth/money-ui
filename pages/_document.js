import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage();
    const styles = flush();
    return { html, head, styles };
  }

  render () {
    const script = `window.ENV = '${process.env.ENV || 'dev'}';`;
    return (
      <html>
      <Head>
        <script dangerouslySetInnerHTML={{__html: script}}/>
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}
