import { CodeSquareIcon } from "lucide-react";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-blue-800 dark:bg-blue-500 w-10 h-10 rounded-lg flex items-center justify-center flex-col">
        <CodeSquareIcon className="w-6 h-6 text-white" />
      </div>
      <h1 className="sm:text-xl md:text-2xl font-bold hidden sm:block text-blue-800 dark:text-blue-400">
        {"<DevCV />"}
      </h1>
    </div>
  );
};

export default Logo;
