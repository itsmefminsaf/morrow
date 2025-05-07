"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";

export type userType = {
  name: string;
};

type LayoutDataType = {
  user: userType | null;
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
};

export const LayoutDataContext = createContext<LayoutDataType>({
  user: null,
  navOpen: false,
  setNavOpen: () => {},
});

export const LayoutDataProvider = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user: userType;
}) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <LayoutDataContext.Provider value={{ navOpen, setNavOpen, user }}>
      {children}
    </LayoutDataContext.Provider>
  );
};
