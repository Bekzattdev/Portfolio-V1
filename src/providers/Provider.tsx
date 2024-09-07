import React, { FC, ReactNode } from "react";

interface ReduxProviderType {
  children: ReactNode;
}
export const Provider: FC<ReduxProviderType> = ({ children }) => {
  return <>{children}</>;
};
