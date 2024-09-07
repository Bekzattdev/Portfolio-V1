"use client";
import { Provider } from "@/providers/Provider";
import React, { FC, ReactNode } from "react";
interface RootLayoutProps {
  children: ReactNode;
}
const RootLayoutCLient: FC<RootLayoutProps> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default RootLayoutCLient;
