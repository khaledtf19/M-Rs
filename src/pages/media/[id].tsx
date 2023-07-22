import { useRouter } from "next/router";

const MediaPage = () => {
  const router = useRouter();

  return <div>{router.query.id}</div>;
};

export default MediaPage;
