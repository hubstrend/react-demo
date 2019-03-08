import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    
    render() {
        return (
            <html lang="en">

                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>

                    {/* Google Fonts */}
                    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500" rel="stylesheet" />

                    {/* Font Awesome */}                    
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
                    
                    
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>

            </html>
        );
    }
}

export default MyDocument;