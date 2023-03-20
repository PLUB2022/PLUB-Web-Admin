import { TabTitle } from '../styles/Common';
import { nowCategory } from '../utils/nowPath';
import { Container } from './AdminInfo';

const Members = () => {
  const { section, tab } = nowCategory('user');
  return (
    <Container>
      <TabTitle>
        {tab}
        <TabTitle id='sub'>/ {section}</TabTitle>
      </TabTitle>
    </Container>
  );
};

export default Members;
