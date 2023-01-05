import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    HStack,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export default function MainMenu() {
    return (
        <HStack spacing={4} pt={4}>
            <Menu>
                <Link to='/'>
                    <MenuButton>
                        Inicio
                    </MenuButton>
                </Link>
            </Menu>
            <Menu>
                <MenuButton rightIcon={<ChevronDownIcon />}>
                    Cursos
                    <ChevronDownIcon />
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <Link to='/personal-industrial'>
                            Personal Industrial
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/seguridad-e-higiene'>
                            Seguridad e higiene
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/mantenimiento'>
                            Mantenimiento
                        </Link>
                    </MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <Link to="/empresa">
                    <MenuButton>
                        Empresa
                    </MenuButton>
                </Link>
            </Menu>
        </HStack>
    )
}
