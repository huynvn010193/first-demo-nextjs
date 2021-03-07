import Link from "next/link";

export default function Test() {
  return (
    <div className="container">
      <h1>GetServerSideProps</h1>
      <Link href="/playground/getServerSideProps">
        <a>Quay trở lại trang getServerSideProps</a>
      </Link>
    </div>
  );
}
