export const BackdropImage = ({ src }: { src: string }) => {
  return `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${src}`;
};
export const PosterImage = ({
  src,
  size,
}: {
  src: string;
  size: "small" | "large";
}) => {
  return size === "small"
    ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${src}`
    : `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${src}`;
};
