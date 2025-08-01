'use client';

import { AppContext } from "@/context";
import React from "react";

export default function AppContextProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: any;
}) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
