import { useNavigate } from "react-router-dom";
import { cn } from "../../utils/cn";

function ContentRenderer({
  title,
  content,
  Image,
  disabled = false,
  link,
  reverse = false,
}) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(link);
  };

  return (
    <div
      className={cn(
        "w-full h-fit flex p-4 flex-col lg:flex-row lg:items-center lg:justify-between",
        {
          "lg:flex-row-reverse": reverse,
        }
      )}
      // className="w-full h-full p-4 flex flex-col"
    >
      <div className="w-fit self-end lg:self-auto">
        <Image />
      </div>
      <div className="w-[440px]">
        <h1 className="text-3xl font-medium">{title}</h1>
        <p className="my-4 text-gray-600">{content}</p>

        <button
          type="submit"
          className="w-40 h-12 mt-4 bg-[#6A2588] rounded-lg shadow-xl text-white text-lg font-normal disabled:bg-gray-500"
          onClick={handleOnClick}
          disabled={disabled}
        >
          {disabled ? "Coming soon" : "Try now"}
        </button>
      </div>
    </div>
  );
}

export default ContentRenderer;
