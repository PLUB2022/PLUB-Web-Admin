import styled from '@emotion/styled';

import useGetPlubbingRank from '../../hooks/useGetPlubbingRank';
import { Row } from './InquiryReport';

const PlubRank = () => {
  const { plubbingRank, isLoading } = useGetPlubbingRank();

  if (isLoading || !plubbingRank) return <div>로딩중</div>;
  const topRank = plubbingRank.slice(0, 5);
  const bottomRank = plubbingRank.slice(-5);

  return (
    <Container>
      <div>
        {topRank.map(({ plubbingId: id, title }, idx) => (
          <Row key={id}>
            {idx + 1}. {title}
          </Row>
        ))}
      </div>
      <div>
        {bottomRank.map(({ plubbingId: id, title }, idx) => (
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
  display: flex;
  gap: 40px;
`;
