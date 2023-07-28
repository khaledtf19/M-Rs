import Image from "next/image";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { BackdropImage, PosterImage } from "~/utils/media";

const MediaPage = () => {
  const router = useRouter();
  const { data: mediaDetails } = api.media.getMediaDetails.useQuery({
    id: router.query.id as string,
  });

  console.log(mediaDetails);
  return (
    <div className="w-full h-full">
      <div className="h-full">
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
        <div className="mt-[310px]">
          {mediaDetails?.poster_path? (
            <div className="h-[450px] relative w-[300px]">
              <Image
                alt="image"
                src={PosterImage({ src: mediaDetails?.poster_path, size:"large" })}
                fill
                sizes="(max-width: 900px) 300px, (max-width: 1200px) 600px"
              />
            </div>
          ):""}
          <div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MediaPage;
