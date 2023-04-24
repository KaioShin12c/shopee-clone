import React, { ReactNode } from "react";
import AuthHeader from "../../components/AuthHeader";
import Footer from "../../components/Footer";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <AuthHeader />
      {children}
      <Footer />
    </div>
  );
};

export default AuthLayout;
