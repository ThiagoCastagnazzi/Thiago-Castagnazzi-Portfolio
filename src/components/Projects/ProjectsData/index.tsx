import Link from "next/link";

interface ProjectsDataProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectsData({
  title,
  description,
  image,
  link,
}: ProjectsDataProps) {
  return (
    <Link href={link} target="_blank">
      <div
        className="
        flex flex-col
        justify-center
        items-center
        text-center
        w-[300px]
        h-[300px]
        bg-[rgb(36,36,36)]
        border-2
        border-gray-500
        rounded-xl
        shadow-xl
        m-10
        cursor-pointer
        transition
        duration-500
        ease-in-out
        transform
        hover:-translate-y-1
        hover:scale-110
        gap-3
        p-2
      "
      >
        <img
          src={image}
          alt=""
          className="w-[500px] h-[50200px0px] object-cover"
        />
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl text-white">{title}</h3>
          <p className="text-gray-100">{description}</p>
        </div>
      </div>
    </Link>
  );
}
