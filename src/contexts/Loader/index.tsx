import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import "./style.min.css";

type LoaderContextProps = {
  handleLoader(load: boolean): void;
};

type LoaderProviderProps = {
  children: ReactNode;
};

export const LoaderContext = createContext({} as LoaderContextProps);

export const useLoader = () => useContext(LoaderContext);

export function LoaderProvider(props: LoaderProviderProps) {
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (isLoad) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [isLoad]);

  const handleLoader = (load: boolean) => setIsLoad(load);

  return (
    <LoaderContext.Provider value={{ handleLoader }}>
      <div className={`dua-loader  ${isLoad ? "loading" : ""}`}>
        <div className="dua-loader__container" />
      </div>
      {props.children}
    </LoaderContext.Provider>
  );
}