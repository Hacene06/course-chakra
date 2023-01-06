import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box } from '@chakra-ui/react'
//import { Test } from './Courses.styles';

const Course = ({ image, titre, description, price }) => (
  <Stack p={{ base: "0 2rem" }} bg='teal.50' borderRadius='md' padding='3'>
  <Image objectFit="cover" src={image} borderRadius='md' />
  <Text color="Gray.800"  fontFamily="monospace" >
    {titre}
  </Text>

  <Heading color="Gray.500" size="md" textTransform="capitalize">
    {description}
  </Heading>
  <Box>
    {price}
    <Box as="span" color="Gray.800" fontSize="sm">
    </Box>
  </Box>
</Stack>
);

Course.propTypes = {
  // bla: PropTypes.string,
};

Course.defaultProps = {
  // bla: 'test',
};

export default Course;
