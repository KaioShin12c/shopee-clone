import Button from "@/components/Button";
import Input from "@/components/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface Login {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().required("Trường này là bắt buộc").email("Định dạng phải là email"),
  password: yup.string().required("Trường này là bắt buộc"),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({ resolver: yupResolver(schema) });

  function onSubmit(data: Login) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" bg-white p-8 w-[400px]">
        <h1 className="text-lg mb-8 text-primary-black">Đăng nhập</h1>
        <Input
          placeholder="Enter your email"
          errorMessage={errors.email?.message}
          {...register("email")}
        />
        <Input
          placeholder="Enter your password"
          errorMessage={errors.password?.message}
          {...register("password")}
        />
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
    </form>
  );
};

export default LoginForm;
