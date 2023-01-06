import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Box } from '@chakra-ui/react'
//import { Test } from './Courses.styles';

const Course = ({ image, titre, description, price }) => (
  <Stack p={{ base: "0 2rem" }} borderRadius='md' padding='3'>
 <Card maxW='sm'>
  <CardBody>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{titre}</Heading>
      <Text>
       {description}
      </Text>
      <Text color='teal.600' fontSize='2xl'>
        {price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='green'>
        Startt now!
      </Button>
      <Button variant='ghost' colorScheme='green'>
        Add to favorite
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</Stack>
);

Course.propTypes = {
  // bla: PropTypes.string,
};

Course.defaultProps = {
  // bla: 'test',
};

export default Course;
