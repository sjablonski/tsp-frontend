import React from 'react';
import { Media } from 'reactstrap';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledBlank = styled.div`
  min-width: 16.8px;
`;

const LastBillsLabel = () => (
  <Media className="border-bottom pt-4">
    <Media body className="align-self-center mx-4">
      <Paragraph small regular>
        Data wystawienia
      </Paragraph>
    </Media>
    <Media body className="align-self-center mx-4">
      <Paragraph small regular>
        Numer faktury
      </Paragraph>
    </Media>
    <Media body className="align-self-center mx-4">
      <Paragraph small regular>
        Koszt
      </Paragraph>
    </Media>
    <Media body className="align-self-center mx-4">
      <Paragraph small regular>
        Data opłacenia
      </Paragraph>
    </Media>
    <Media right middle className="align-self-center mx-4">
      <StyledBlank />
    </Media>
  </Media>
);

export default LastBillsLabel;
