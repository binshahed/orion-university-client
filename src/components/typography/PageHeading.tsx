import { ReactNode } from "react";

const PageHeading = ({ children }: { children: ReactNode }) => {
  return (
    <p style={{ fontSize: "22px", fontWeight: "bold", paddingBottom: "20px" }}>
      {children}
    </p>
  );
};

export default PageHeading;
