import Button from "@/components/Button";
import Input from "@/components/Input";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className=" bg-white p-8 w-[400px]">
      <h1 className="text-lg mb-8 text-primary-black">Đăng nhập</h1>
      <Input placeholder="Enter your email" />
      <Input placeholder="Enter your password" />
      <Button type="submit" className="w-full bg-primary">
        Tiếp theo
      </Button>
      <div className="text-center">
        <span className="text-sm text-[rgba(0,0,0,.26)]">
          Bạn mới biết đến Shopee?
          <Link className="text-primary" to="/register">
            Đăng ký
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
