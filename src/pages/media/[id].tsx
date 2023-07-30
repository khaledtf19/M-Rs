import Image from "next/image";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { BackdropImage, PosterImage } from "~/utils/media";

const MediaPage = () => {
  const router = useRouter();
  const { data: mediaDetails } = api.media.getMediaDetails.useQuery({
    id: router.query.id as string,
  });

  return (
    <div className="w-full h-full">
      <div className="h-full">
        <div className="absolute w-full lg:h-[500px] top-14 left-0 right-0">
          {mediaDetails?.backdrop_path ? (
            <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] relative w-full">
              <Image
                alt="image"
                fill
                src={BackdropImage({ src: mediaDetails?.backdrop_path })}
                sizes="(max-width: 900px) 500px, (max-width: 1200px) 1000px"
                className="object-scale-down sm:object-cover "
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex mt-32 lg:mt-[310px] lg:flex-row flex-col items-center justify-center">
          {mediaDetails?.poster_path ? (
            <div className="h-[200px] md:h-[450px] relative w-[150px] md:w-[300px]">
              <Image
                alt="image"
                src={PosterImage({
                  src: mediaDetails?.poster_path,
                  size: "large",
                })}
                fill
                sizes="(max-width: 900px) 300px, (max-width: 1200px) 600px"
              />
            </div>
          ) : (
            ""
          )}
          <div className="z-50 md:mt-20 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {mediaDetails?.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;
