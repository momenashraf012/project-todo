import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { useForm, SubmitHandler } from "react-hook-form"
import InputErrorMessage from "../components/ui/InputErrorMessage";

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
        <div>
        <Input placeholder="username"  {...register("username",{required:"username is requird",minLength:5})} />
       {errors?.username && errors.username.type==="required" && <InputErrorMessage msg="User is required" /> }
       {errors?.username && errors.username.type==="minLength" && <InputErrorMessage msg="Not valid username"/>}
       
          </div>
      
       <div>
       <Input placeholder="email"  {...register("email",{required:"email is requird",pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})}/> 
        {errors?.email && errors.email.type==="required" && <InputErrorMessage msg="email is require"/>}
       {errors?.email && errors.email.type==="pattern" && <InputErrorMessage msg="Not valid email"/>}

        
        
       </div>
       <div>
       <Input placeholder="password"  {...register("password",{required:"password is requird",minLength:6})}/> 
        {errors?.password && errors.password.type==="required" && <InputErrorMessage msg="password is require"/>}
       {errors?.password && errors.password.type==="minLength" && <InputErrorMessage msg="Not valid password "/>}

       </div>
       
     

      
        <Button fullWidth >
          Register n
          
        </Button>
      </form>
    </div>
  ); 
};

export default RegisterPage;
