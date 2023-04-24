import AuthLayout from "@/layouts/AuthLayout";
import React from "react";
import LoginForm from "./components/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout>
      <div className="bg-primary  ">
        <div className="p-8 h-[600px] flex items-center justify-between bg-contain bg-no-repeat bg-center bg-[url('https://down-vn.img.susercontent.com/file/sg-11134004-23030-0zzd19u7qvov47')]">
          <div />
          <LoginForm />
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
