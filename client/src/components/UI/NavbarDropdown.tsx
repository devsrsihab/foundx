"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";
import { useRouter } from "next/navigation";
import { logOutUser } from "@/src/services/AuthService";

const NavbarDropdown = () => {
  const router = useRouter();
  const handleNavigation = (path: string) => router.push(path);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar className="cursor-pointer" name="Sohan" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleNavigation("/profile")}>
          Profile
        </DropdownItem>
        <DropdownItem
          onClick={() => handleNavigation("/profile/claim-requests")}
        >
          Claim Request
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/profile/create-post")}>
          Create Request
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/settings")}>
          Settings
        </DropdownItem>
        <DropdownItem
          onClick={() => logOutUser()}
          className="text-danger"
          color="danger"
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropdown;
