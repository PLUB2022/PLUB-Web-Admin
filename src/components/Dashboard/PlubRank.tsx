import styled from '@emotion/styled';
import { useQuery } from 'react-query';

import { getPlubbingRanking } from '../../apis/Dashboard';
import { QUERYKEY } from '../../constants/queryKey';
import { Row } from './InquiryReport';

const PlubRank = () => {
  const { data: plubbingRank } = useQuery(
    QUERYKEY.PLUBRANK,
    getPlubbingRanking
  );
  const topRank = plubbingRank?.slice(0, 5);
  const bottomRank = plubbingRank?.slice(-5);

  return (
    <Container>
      <div>
        {topRank?.map(({ plubbingId: id, title }, idx) => (
          <Row key={id}>
            {idx + 1}. {title}
          </Row>
        ))}
      </div>
      <div>
        {bottomRank?.map(({ plubbingId: id, title }, idx) => (
          <Row key={id}>
            {idx + 6}. {title}
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default PlubRank;

const Container = styled.div`
  font-size: 1.6rem;
  display: flex;
  gap: 40px;
`;
