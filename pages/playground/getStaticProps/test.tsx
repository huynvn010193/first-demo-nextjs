import Link from "next/link";

export default function Test() {
  return (
    <div className="container">
      <h1>GetStaticProps</h1>
      <Link href="/playground/getStaticProps">
        <a>Quay trở lại trang getStaticProps</a>
      </Link>
    </div>
  );
}
