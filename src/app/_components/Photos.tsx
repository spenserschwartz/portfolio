import clsx from "clsx";
import Image from "next/image";

const Photos = () => {
  const rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  const images = [
    {
      src: "/images/peru.jpg",
      width: 1200,
      height: 1600,
      position: "object-[60%_center]"
    },
    {
      src: "/images/peru.jpg",
      width: 1200,
      height: 1600,
      position: "object-[60%_center]"
    },
    {
      src: "/images/peru.jpg",
      width: 1200,
      height: 1600,
      position: "object-[60%_center]"
    },
    {
      src: "/images/peru.jpg",
      width: 1200,
      height: 1600,
      position: "object-[60%_center]"
    },
   
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 dark:border-none dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image.src}
              alt={image.src}
              // width={image.width}
              // height={image.height}
              fill
              className={clsx(
                "absolute inset-0 h-full w-full object-cover",
                image.position
              )}
              priority={imageIndex === 0}
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
