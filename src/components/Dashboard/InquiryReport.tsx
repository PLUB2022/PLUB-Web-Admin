import styled from '@emotion/styled';

const InquiryReport = () => {
  return (
    <>
      <Row>
        <Category>[기능제안]</Category> 비용 정산할 수 있는 기능을 만들어주세요
      </Row>
      <Row>
        <Category>[문의]</Category> 꼭 오프라인 모임만 만들어야 하나요
      </Row>
      <Row>
        <Category>[신고]</Category> 유저이름 : 김XX 욕설 제제 부탁드립니다.
      </Row>
      <Row>
        <Category>[문의]</Category> 문의합니다
      </Row>
      <Row>
        <Category>[신고]</Category> 모임이름 : XXX 해당 모임은 마약 모임입니다.
      </Row>
    </>
  );
};

export default InquiryReport;

export const Row = styled.div`
  padding: 8px;
`;

const Category = styled.span`
  font-weight: 600;
`;
