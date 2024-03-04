import React from "react";
import { Button } from "./ui/button";

function MainNav() {
  return (
    <div>
      <Button
        variant="ghost"
        className="
        ont-bold hover:text-green-500 hover:bg-white"
      >Sign In</Button>
    </div>
  );
}

export default MainNav;
