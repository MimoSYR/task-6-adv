import { MdArrowOutward } from "react-icons/md";
import type { PostProps } from "../../interfaces/interfaces";

const createdDate = "1 Jan 2023";

interface CategoryClass {
  name: string;
  colorClass: string;
}

const categoriesClasses: CategoryClass[] = [
  {
    name: "UI/UX",
    colorClass: "bg-purple-50 text-purple-700 ",
  },
  {
    name: "Design",
    colorClass: "bg-pink-50 text-pink-700 ",
  },
  {
    name: "Web Development",
    colorClass: "bg-sky-50 text-sky-700 ",
  },
  {
    name: "Tools",
    colorClass: "bg-amber-50 text-amber-700 ",
  },
  {
    name: "SaaS",
    colorClass: "bg-emerald-50 text-emerald-700 ",
  },
  {
    name: "Performance",
    colorClass: "bg-blue-50 text-blue-700 ",
  },
  {
    name: "Frameworks",
    colorClass: "bg-indigo-50 text-indigo-700 ",
  },
  {
    name: "Mobile",
    colorClass: "bg-cyan-50 text-cyan-700 ",
  },
  {
    name: "Animation",
    colorClass: "bg-fuchsia-50 text-fuchsia-700 ",
  },
  {
    name: "Research",
    colorClass: "bg-orange-50 text-orange-700 ",
  },
  {
    name: "Data Visualization",
    colorClass: "bg-teal-50 text-teal-700 ",
  },
  {
    name: "Analytics",
    colorClass: "bg-lime-50 text-lime-700 ",
  },
  {
    name: "Components",
    colorClass: "bg-rose-50 text-rose-700 ",
  },
  {
    name: "Standards",
    colorClass: "bg-violet-50 text-violet-700 ",
  },
  {
    name: "Visual Design",
    colorClass: "bg-yellow-50 text-yellow-700 ",
  },
  {
    name: "Psychology",
    colorClass: "bg-red-50 text-red-700 ",
  },
];

const PostItem = ({
  image,
  author,
  title,
  paragraph,
  categories,
}: PostProps) => {
  const getCategoryColor = (categoryName: string) => {
    const foundCategory = categoriesClasses.find(
      (item) => item.name === categoryName
    );
    return foundCategory
      ? foundCategory.colorClass
      : "bg-gray-100 text-gray-800";
  };

  return (
    <div className="w-fit rounded-sm p-2 group flex flex-col gap-8 cursor-pointer  hover:shadow-lg transition-all duration-300">
      {/* card image */}
      <img
        className="h-[240px] object-cover group-hover:opacity-80 bg-black mx-auto transition-all duration-300"
        src={image}
        alt=""
      />
      <div className="flex flex-col gap-6">
        {/* card info */}
        <div className="flex flex-col gap-3">
          <h4 className="text-violet-700  font-semibold">
            {author} • {createdDate}
          </h4>
          <div className="flex justify-between">
            <h3 className="text-2xl font-semibold line-clamp-2">{title}</h3>
            <MdArrowOutward className="ms-4" size={"38px"} />
          </div>
          <p className="line-clamp-2">{paragraph}</p>
        </div>
        {/* card categories */}
        <div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category: string) => {
              const categoryClass = getCategoryColor(category);
              console.log(categoryClass);

              return (
                <p
                  key={category}
                  className={`py-0.5 px-2.5 font-medium rounded-full ${categoryClass}}`}>
                  {category}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
