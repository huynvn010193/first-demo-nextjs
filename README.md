This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

- Có 2 loai get router: useRouter and withRouter

  - useRouter : dùng funciton component.
  - withRouter: dùng cả 2.

- <Component users={pageProps.user} posts={pageProps.posts} /> === <Component {...pageProps} />

//@ts-ignore => type script không check.

- UNSAFE_componentWillUpdate: Mọi state thay đổi đều chạy (Phải tự kiểm tra state) => useEffect -> quy định được state nào thay đổi.
- Lần đầu tiên -> useEffect nào cũng chạy 1 lần. Lần thứ 2 mới dựa vào dependency.
- useEffect: trả về void. useMemo: nhận vào hàm -> return về hàm.
- useEffect: chạy ở phía client, useMemo chạy ở client lẫn server.

API là gì ?

- Aplication Programing Interface
  -> Giao diện lập trình ứng dụng
  -> Giúp ứng dụng của mình tương tác vs "ứng dụng người dùng khác"
  => Thư viện bên ngoài..
  => Hệ thống BE ..
  => API gửi dữ liệu lên Server -> Và nhận data trả về(dạng URL)

= GetServerSide: Khi dùng Next/Link

1. getInitialProps: -> trực tiếp gọi sang API của herokuapp
2. getServerSideProps:
   -> Gọi API và Server NextJS \*\*\* Bước trung gian này NextJS tự động làm cho mình
   -> Server NextJS -> Gọi sang API của HerokuAPP -> Che giấu dc API phía herokuAPP
3. Nếu chạy trên môi trường development thì getStaticPorps và getServerSideProps giống nhau khác tên.
   Khi chạy trên môi trường production mới khác biệt.
   getStaticProps: gọi API lên server 1 lần duy nhất trong thời điểm build, sau khi build rồi, đưa lên production -> như là 1 static page -> vì dữ liệu đã có sẵn không gọi API lần nữa.
   _ Ưu điểm: gọi nhanh hơn.
   _ Nhược: nếu data thay đổi trên server thì ứng dụng không cập nhật lại -> nếu muốn có dữ liệu mới thì phải build lại. -> nhu cầu tạo web tĩnh trong thời gian ngắn hạn.
4. getStaticPaths: -> Phải kết hợp đi chung vs getStaticProps.
   \_ List bài viết
   -> Trong lần build code -> Biết được API nào được gọi trước (API get list posts)
   \_ Có những trang dùng Dynamic Routing (đường dẫn động) -> không dùng được getStaticProp
   -> Ví dụ : trang bài viết chi tiết
   URL: /post/[id].tsx
   id = 20 -> gọi id = 20
   Giả sử trên server(Heruko app) có 5 bài viết lần lượt có id = 20, 30, 40, 50 và 60.
   Dùng thằng getStaticPaths
   return {
   paths: [
   { params: { id: 20 }},
   { params: { id: 30 }},
   ],
   fallback: false(Link dự phòng = false)
   }
   -> Nếu User truy cập vào URL khác id 20 và 30 -> không có link dự phòng -> Đây ngay qua 404.
   -> Nếu khai báo falseback: true.
