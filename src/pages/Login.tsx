import Button from "../components/ui/Button";

const LoginPage = () => {
  

  


  return (
    <div className="max-w-md mx-auto">
      <h2 className="mb-4 text-3xl font-semibold text-center">
        Login to get access!
      </h2>
      <form className="space-y-4">
        
        <Button fullWidth >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
