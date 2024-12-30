import React from "react";

function PointsCard({ Icon, title, points }) {
  return (
    <div className="w-full p-6 border border-gray-100 rounded-lg shadow-lg bg-white">
      <div className="flex justify-center">
        <Icon />
      </div>
      <ul className="text-stone-900 pr-6 list-disc text-base font-normal leading-none">
        {points.map((text, i) => (
          <li key={i} className="pt-4">
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PointsCard;
