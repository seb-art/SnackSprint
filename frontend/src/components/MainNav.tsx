import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

function MainNav() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Button
        variant="ghost"
        className="
        ont-bold hover:text-green-500 hover:bg-white"
        onClick={async () => await loginWithRedirect()}
      >
        Sign In
      </Button>
    </div>
  );
}

export default MainNav;
