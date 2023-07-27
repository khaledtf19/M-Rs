import Image from "next/image";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { BackdropImage } from "~/utils/media";

const MediaPage = () => {
  const router = useRouter();
  const { data: mediaDetails } = api.media.getMediaDetails.useQuery({
    id: router.query.id as string,
  });

  console.log(mediaDetails);
  return (
    <div>
      <div className="absolute w-full h-[500px] top-14 left-0 right-0">
        {mediaDetails?.backdrop_path ? (
          <div className="h-[500px] relative w-full">
            <Image
              alt="image"
              fill
              src={BackdropImage({ src: mediaDetails?.backdrop_path })}
              sizes="(max-width: 900px) 700px, (max-width: 1200px) 1000px"
              className="object-cover "
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MediaPage;
