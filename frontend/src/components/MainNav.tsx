import UsernameMenu from "./UsernameMenu";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

function MainNav() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
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
      )}
    </span>
  );
}

export default MainNav;
