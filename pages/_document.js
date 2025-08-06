import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta
            name="description"
            content="Site do Personal Trainer Dieisson Vasques, com foco em emagrecimento, hipertrofia e bem-estar."
          />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:title"
            content="Personal Trainer Dieisson Vasques"
          />
          <meta
            property="og:description"
            content="Acompanhamento personalizado para emagrecimento e hipertrofia."
          />
          <meta property="og:image" content="URL da imagem para social media" />
          <meta property="og:url" content="URL do site" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
