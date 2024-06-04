import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { projectKeyChanged } from "@feature/projectListSlice";

const Content = (props: { projects: Array<{ key: string; iframe: string; source: string }> }) => {
  const { projects } = props;
  const [selectedKey, setSelectedKey] = useState("morph");
  const dispatch = useDispatch();
  const selectChanged = (key: string) => {
    setSelectedKey(key);
    dispatch(projectKeyChanged(key));
  };
  return (
    <>
      <div>TSAI</div> 
      <div>becauseu8s@gmail.com</div>
      <h2>LIST</h2>
      {projects.map((el) => {
        return <div key={el.key}>{el.key}</div>;
      })}
      <h2>PROJECT</h2>
      {projects.map((el) => {
        return (
          <a key={el.key} href={el.iframe} target="viewer" onClick={() => selectChanged(el.key)}>
            <div className={selectedKey == el.key ? "card selected" : "card"}>
              <div className="cover">
                <Image src={`/${el.key}.png`} width="310" height="240" alt="project list" priority={true} />
              </div>
              <div className="title">{el.key}</div>
            </div>
          </a>
        );
      })}
    </>
  );
};
export default Content;
