import React from 'react';
import { Collapse, Media } from 'reactstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.blue};
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  user-select: none;
  :hover {
    color: ${({ theme }) => theme.blueDark};
    text-decoration: underline;
  }
`;

const StyledParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.blue};
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  user-select: none;

  :hover {
    color: ${({ theme }) => theme.blueDark};
    text-decoration: underline;
  }
`;

class LastBills extends React.Component {
  state = {
    collapse: false,
    icon: 'chevron-down',
  };

  toggle = () => {
    this.setState(prevState => ({
      collapse: !prevState.collapse,
      icon: prevState.collapse ? 'chevron-down' : 'chevron-up',
    }));
  };

  render() {
    const { collapse, icon } = this.state;
    return (
      <>
        <Media className="border-bottom py-4">
          <Media body className="align-self-center mx-4">
            <Paragraph small>01.01.2019</Paragraph>
          </Media>
          <Media body className="align-self-center mx-4">
            <StyledParagraph small regular onClick={this.toggle}>
              000000001
            </StyledParagraph>
            <Collapse isOpen={collapse}>
              <Paragraph small>Instalacja internetu bezprzewodowego</Paragraph>
            </Collapse>
          </Media>
          <Media body className="align-self-center mx-4">
            <Paragraph small>50,00zł</Paragraph>
          </Media>
          <Media body className="align-self-center mx-4">
            <Paragraph small>01.01.2019</Paragraph>
          </Media>
          <Media right middle className="align-self-center mx-4">
            <StyledFontAwesomeIcon
              className="collapseIcon link"
              onClick={this.toggle}
              icon={icon}
            />
          </Media>
        </Media>
      </>
    );
  }
}

export default LastBills;
