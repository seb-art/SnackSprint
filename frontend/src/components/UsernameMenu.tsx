import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

function UsernameMenu() {
  const { user, logout } = useAuth0();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-green-500 gap-2">
          <CircleUserRound className="text-green-500" />
          {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link to="/user-profile" className="font-bold hover:text-green-500">
              UserProfile
            </Link>
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem>
            <Button
              onClick={() => logout()}
              className="flex flex-1 font-bold bg-green-500"
            >
              Log out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UsernameMenu;
