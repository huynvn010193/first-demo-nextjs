import Head from "next/head";
import Link from 'next/link'
import { useRouter } from 'next/router';

// Demo Client Side Rendering.
export default function AdminUser() {
  const router = useRouter();
  console.log("AdminUser -> router", router.query.id);

  function handleOnClick() {
    router.push('/login');
  }

  return (
    <>
      <Head>
        <title>User detail</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
      </Head>
      <h1>Admin - User Page {router.query.id} </h1>
      <Link href="/login">
        <a className="active">Go to homepage</a>
      </Link>
      <button onClick={handleOnClick}>Go to homepage</button>
    </>
  );
}
