import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
  username: string,
  email:string,
  password:string
}

const RegisterPage = () => {
 
  const { register, handleSubmit,formState:{errors} } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  console.log(errors)

  // Renders

  return (
    <div className="max-w-md mx-auto">
      <h2 className="mb-4 text-3xl font-semibold text-center">
        Register to get access!
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="username"  {...register("username",{required:"username is requird"})} />
        <p>{errors?.username?.message}</p>
        <Input placeholder="email"  {...register("email",{required:"email is requird"})}/> 
        <Input placeholder="password"  {...register("password",{required:"password is requird"})}/> 

      
        <Button fullWidth >
          Register n
          
        </Button>
      </form>
    </div>
  ); 
};

export default RegisterPage;
