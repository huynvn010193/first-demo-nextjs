import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import "../assets/style.scss";
import "../components/ModalSolution/modal.scss";

// type AppProps = {
//   isLogin: boolean;
// }

// Cách 1: khai báo class component.
// export default class CustomApp extends React.Component<AppProps> {

//   render() {
//     return (
//       <div className="root-app">
//       <Head>
//         <title>Create Next App Edit</title>
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="stylesheet" href="/css/global.css" />
//       </Head>
//       <this.props.Component {...this.props.pageProps}/>
//     </div>
//     )
//   }
// }

const CustomAppFC: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="root-app">
    <Head>
      <title>Create Next App Edit</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/css/global.css" />
    </Head>
    <Component {...pageProps}/>
    </div>
  )
}

export default CustomAppFC;


// export default function MyApp({ Component, pageProps }) {
//   // Component -> đại diện cho 1 Page match vs url.
//   return (
//     <div className="root-app">
//       <Head>
//         <title>Create Next App Edit</title>
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="stylesheet" href="/css/global.css" />
//       </Head>
//       <Component {...pageProps}/>
//     </div>
//   ) 
// }

