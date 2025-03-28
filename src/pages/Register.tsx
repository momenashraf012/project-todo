import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
  username: string,
  email:string,
  password:string
}

const RegisterPage = () => {
 
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  // Renders

  return (
    <div className="max-w-md mx-auto">
      <h2 className="mb-4 text-3xl font-semibold text-center">
        Register to get access!
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="username"  {...register("username")} />
        <Input placeholder="email"  {...register("email")}/> 
        <Input placeholder="password"  {...register("password")}/> 

      
        <Button fullWidth >
          Register n
          
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
