import Image from "next/image";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { shimmerImg } from "~/utils/image";
import { BackdropImage, PosterImage } from "~/utils/media";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MediaPage = () => {
  const router = useRouter();
  const { data: mediaDetails } = api.media.getMediaDetails.useQuery({
    id: router.query.id as string,
  });

  console.log(mediaDetails);
  return (
    <div className="h-full w-full">
      <div className="  h-[200px] w-full sm:h-[300px] md:h-[400px] lg:h-[500px]">
        <div className=" absolute left-0 right-0 top-14 w-full lg:h-[500px]">
          {mediaDetails?.backdrop_path ? (
            <div className="relative h-[200px] w-full sm:h-[300px] md:h-[400px] lg:h-[500px] ">
              <Image
                alt="image"
                fill
                src={BackdropImage({ src: mediaDetails?.backdrop_path })}
                sizes="(max-width: 900px) 500px, (max-width: 1200px) 1000px"
                className="object-scale-down sm:object-cover "
                blurDataURL={shimmerImg}
                placeholder="blur"
              />
              <div className="absolute bottom-0 h-full w-full bg-gradient-to-t from-background to-transparent" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="relative bottom-20 w-full md:bottom-0">
        <div className="flex flex-col justify-center gap-2 lg:flex-row">
          <div className="relative self-center md:bottom-36 h-[410px] w-[260px] lg:w-[320px] ">
            {mediaDetails?.poster_path ? (
              <Image
                alt="image"
                src={PosterImage({
                  src: mediaDetails?.poster_path,
                  size: "large",
                })}
                fill
                sizes="(max-width: 900px) 300px, (max-width: 1200px) 600px"
                blurDataURL={shimmerImg}
                placeholder="blur"
              />
            ) : (
              ""
            )}
          </div>
          <div className="z-50  px-4 text-center w-full">
            <h1 className="text-3xl font-bold  sm:text-4xl md:text-5xl lg:text-6xl">
              {mediaDetails?.name}
            </h1>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Overview</AccordionTrigger>
                <AccordionContent>{mediaDetails?.overview}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPage;
