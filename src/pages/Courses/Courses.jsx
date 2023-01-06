import React from 'react';
import { Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import Course from '../../components/Course/Course';
//import { Test } from './Courses.styles';

const data = [
  {
    id:1 ,
    image: 'https://www.aps.dz/media/k2/items/cache/0267f63f2ceb8f7fa16d851500594f4d_L.jpg',
  titre: 'Plastic arts',
  description: 'we will learn basic with doing, you will have fun and learn, don\'t esitate to contact me',
  price: '12$/heure',
},
{
  id:2 ,
  image: 'https://blog.e2.com.vn/wp-content/uploads/2021/05/schoolgirl-pointing-up-blackboard.jpg',
titre: 'Mathematics',
description: 'we will prepare your bacaloriat, we will practice exsercises of different years and coutries. you will be ready to your exam with us',
price: '8$/heure',
},
{
  id:3 ,
  image: 'https://www.coderspassion.com/wp-content/uploads/2019/08/10-Best-Ways-to-Learn-Everything-About-Web-Development-.jpg',
titre: 'Web developemets',
description: 'let\'s build together wenderfuls web site with new technologies: ReactJs, NodesJs and mongo Db',
price: '20$/heure',
}, {
  id:4 ,
  image: 'https://itchronicles.com/wp-content/uploads/2021/02/agile-scrum-1024x683.jpg',
titre: 'Scrum',
description: 'you want to be agile in your developement? you want to be more eficient? let\'s learn Scrum',
price: '60$/heure',
}, {
  id:5 ,
  image: 'https://3arts.sg/wp-content/uploads/2022/01/potterysg_1920x1080-lead.jpg',
titre: 'Potery',
description: 'have fun and build with our potery sessioon',
price: '15$/heure',
}, {
  id:6 ,
  image: 'https://www.aps.dz/media/k2/items/cache/0267f63f2ceb8f7fa16d851500594f4d_L.jpg',
titre: 'Français',
description: 'learn french with us and be ready to face french people :)',
price: '22$/heure',
},
];

const Courses = (props) => (
  <Flex
  direction="column"
  justifyContent="center"
  maxW={{ xl: "1200px" }}
  m="0 auto"
  minH="100vh"
  paddingTop='10'
>
<Heading as='h1' size='lg'>Find your courses on DIGITALIZONE learning web app</Heading>
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
