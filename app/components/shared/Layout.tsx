"use client";
import React from "react";
import InteractiveCursorEffect from "./InteractiveCursorEffect";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <InteractiveCursorEffect />
      {children}
    </>
  );
}
