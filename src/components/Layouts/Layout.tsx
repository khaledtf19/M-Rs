import Head from "next/head";

import Navbar from "../Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>MRs</title>
        <meta name="description" content="Movies Reviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="bg-background min-h-screen pt-5">
        <div className=" px-2 md:container">{children}</div>
      </main>
    </>
  );
};

export default Layout;
