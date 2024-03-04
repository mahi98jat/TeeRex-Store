import React, { FC } from "react";
import { Flex, Link } from "../Atoms";

const Navigation: FC = () => {
  const NavBar = () => (
    <Flex justify="space-between">
      <h3>TeeRex Store</h3>
      <Flex>
        <Link text={"products"} onClick={() => {}} url="#" />
        <Link text={"cart"} onClick={() => {}} url="#" />
      </Flex>
    </Flex>
  );
  return <NavBar />;
};

export default Navigation;
