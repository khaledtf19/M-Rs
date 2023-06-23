import Head from "next/head";
import { cn } from "~/lib/utils";
import Navbar from "../Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isDark = true;
  return (
    <div className={cn({"dark": isDark })}>
      <Head>
        <title>MRs</title>
        <meta name="description" content="Movies Reviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={cn("bg-background min-h-screen", {"dark": isDark })}>
        <div className="container">
        {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
