import React from "react";
import { useSelector } from "react-redux";
import { useWords } from "@/hooks";

const PreviewProjects = () =>{
	
  const { projects } = useSelector((state) => state.form);
  const { colors } = useSelector((state) => state.site);
  const words = useWords();

  let items;

  if (projects.length !== 0) {
    items = React.Children.toArray(
      projects.map((item) => {
        let prefix = "";

        if (!item.link.includes("https://") && !item.link.includes("http://"))
          prefix = "https://";

        return (
          <div className="flex flex-col mb-4">
            <div className="flex flex-wrap justify-between">
              <strong>{item.name}</strong>
              <a
                href={prefix + item.link}
                className="break-words overflow-hidden"
                target="_blank"
              >
                {item.link}
              </a>
            </div>
            <div className="text-sm">{item.description}</div>
          </div>
        );
      })
    );
  }

  return (
    <div className="flex flex-col w-full px-6 mt-2">
      {projects.length !== 0 && (
        <>
          <div
            className="p-2 mb-4 mt-4 font-bold text-center tracking-widest"
            style={{ background: colors.primary, color: colors.titles }}
          >
            {words.projects_upper}
          </div>
          {items}
        </>
      )}
    </div>
  );
}

export default PreviewProjects;