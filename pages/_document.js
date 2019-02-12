import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {


    render() {
        return(
            <html lang="en">
                <Head>
                    <meta charset="utf-8" />
                    <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <meta name="theme-color" content="#000000" />

                    {/* FONT GOOGLE */}
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
                    {/* FONT AWESOME */}
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    {/* CSS SLICK */}
                    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
                
                 
                <style global jsx>{`
                    body {
                        font-family: 'Roboto', sans-serif;
                        margin: 0;
                        padding: 0;
                        background: #ececec;
                        font-family: 'Roboto', sans-serif;
                    }
                    
                    a {
                        text-decoration: none;
                    }
                `}</style>
            </html>
        )
    }
}