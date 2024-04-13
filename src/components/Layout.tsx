import React from "react";
import { Footer } from "@/components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
