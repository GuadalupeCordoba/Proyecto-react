import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    } from '@chakra-ui/react'
import { FaAngleDoubleDown } from "react-icons/fa";


const NavBar = () => {
    return (
        <div>
            <Heading>Logo</Heading>
            <Menu>
                <MenuButton as={Button} rightIcon={<FaAngleDoubleDown />}>
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
            <CartWidget>
        </div>
    );
}

export default NavBar
