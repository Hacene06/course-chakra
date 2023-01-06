import React from 'react';
import { Box, Flex, HStack, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { FiBell, FiChevronDown, FiUser } from 'react-icons/fi';
//import { Test } from './Header.styles';

const Header = (props) => (
  <HStack spacing={{ base: '0', md: '6' }}>
    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
    <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          DIGITALIZONE
        </Text>
      </Flex>
      <Spacer />
  <IconButton
    size="lg"
    variant="ghost"
    aria-label="open menu"
    icon={<FiBell />}
  />
  
  <Flex>
    <Menu>
      <MenuButton
        py={2}
        transition="all 0.3s"
        _focus={{ boxShadow: 'none' }}>
        <HStack>
          <FiUser />
          <VStack
            display={{ base: 'none', md: 'flex' }}
            alignItems="flex-start"
            spacing="1px"
            ml="2">
            <Text fontSize="sm">philipe Lepalmier</Text>
            <Text fontSize="xs" color="gray.600">
              Student
            </Text>
          </VStack>
          <Box display={{ base: 'none', md: 'flex' }}>
            <FiChevronDown />
          </Box>
        </HStack>
      </MenuButton>
      <MenuList
        bg={useColorModeValue('white', 'gray.900')}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Billing</MenuItem>
        <MenuDivider />
        <MenuItem>Sign out</MenuItem>
      </MenuList>
    </Menu>
  </Flex>
</HStack>
);

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
