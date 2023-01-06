import React from 'react';
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import Course from '../../components/Course/Course';
//import { Test } from './Courses.styles';

const data = [
  {
    id:1 ,
    image: 'https://www.aps.dz/media/k2/items/cache/0267f63f2ceb8f7fa16d851500594f4d_L.jpg',
  titre: 'Plastic arts',
  description: 'we will learn basic with doing, you will have fun and learn, don\'t esitate t contact me',
  price: '12$/heure',
},
{
  id:2 ,
  image: 'https://www.aps.dz/media/k2/items/cache/0267f63f2ceb8f7fa16d851500594f4d_L.jpg',
titre: 'Plastic arts',
description: 'we will learn basic with doing, you will have fun and learn, don\'t esitate t contact me',
price: '12$/heure',
},
{
  id:3 ,
  image: 'https://www.aps.dz/media/k2/items/cache/0267f63f2ceb8f7fa16d851500594f4d_L.jpg',
titre: 'Plastic arts',
description: 'we will learn basic with doing, you will have fun and learn, don\'t esitate t contact me',
price: '12$/heure',
}, {
  id:4 ,
  image: 'https://www.aps.dz/media/k2/items/cache/0267f63f2ceb8f7fa16d851500594f4d_L.jpg',
titre: 'Plastic arts',
description: 'we will learn basic with doing, you will have fun and learn, don\'t esitate t contact me',
price: '12$/heure',
}, {
  id:5 ,
  image: 'https://www.aps.dz/media/k2/items/cache/0267f63f2ceb8f7fa16d851500594f4d_L.jpg',
titre: 'Plastic arts',
description: 'we will learn basic with doing, you will have fun and learn, don\'t esitate t contact me',
price: '12$/heure',
}, {
  id:6 ,
  image: 'https://www.aps.dz/media/k2/items/cache/0267f63f2ceb8f7fa16d851500594f4d_L.jpg',
titre: 'Plastic arts',
description: 'we will learn basic with doing, you will have fun and learn, don\'t esitate t contact me',
price: '12$/heure',
},
];

const Courses = (props) => (
  <Flex
  direction="column"
  justifyContent="center"
  maxW={{ xl: "1200px" }}
  m="0 auto"
  minH="100vh"
>
  <Grid
    w="full"
    gridGap="5"
    gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
  >
    {data.map((p) => (
      <Course key={p.id} {...p} />
    ))}
  </Grid>
</Flex>
);

Courses.propTypes = {
  // bla: PropTypes.string,
};

Courses.defaultProps = {
  // bla: 'test',
};

export default Courses;
