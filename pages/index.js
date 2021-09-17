import Head from "next/head";
import Header from "@/components/organisms/Header";
import Main from "@/components/organisms/Main";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
    </div>
  );
}
