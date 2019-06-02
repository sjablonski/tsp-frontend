import React from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Label = styled(Col)`
  font-weight: ${({ theme }) => theme.light};
`;

const Value = styled(Col)`
  color: ${({ theme }) => theme.blue};
  font-weight: ${({ theme }) => theme.light};
`;

const StyledCol = styled(Col)`
  position: relative;
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

const Bill = () => (
  <Row className="justify-content-md-center text-center border-bottom pt-4">
    <Col sm="6">
      <Row className="my-3">
        <Label className="text-right text-secondary px-0">Numer rachunku: </Label>
        <Value className="text-left text-primary">000001</Value>
      </Row>
      <Row className="my-3">
        <Label className="text-right text-secondary px-0">Data wystawienia: </Label>
        <Value className="text-left text-primary">01 Marzec 2019</Value>
      </Row>
      <Row className="my-3">
        <Label className="text-right text-secondary px-0">Status: </Label>
        <Value className="text-left text-primary">Nieopłacony</Value>
      </Row>
      <Row className="my-3">
        <Label className="text-right text-secondary px-0">Opis: </Label>
        <Value className="text-left text-primary">
          Opłata naliczona za przeprowadzoną naprawę.
        </Value>
      </Row>
    </Col>
    <StyledCol className="text-right">
      <Wrapper>
        <Paragraph regular>
          Kwota rachunku: <div className="text-primary d-inline-block">20.00 zł</div>
        </Paragraph>
        <Button>Zapłać</Button>
      </Wrapper>
    </StyledCol>
  </Row>
);

export default Bill;
