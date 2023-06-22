import Head from "next/head";
import { cn } from "~/lib/utils";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isDark = true;
  return (
    <>
      <Head>
        <title>MRs</title>
        <meta name="description" content="Movies Reviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={cn("bg-background min-h-screen", {"dark": isDark })}>
        {children}
      </main>
    </>
  );
};

export default Layout;
