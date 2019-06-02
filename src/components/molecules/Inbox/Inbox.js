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

const StyledH5 = styled.h5`
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

class Inbox extends React.Component {
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
          <Media left middle className="align-self-center mx-4">
            <Paragraph small regular>
              01.01.2019
            </Paragraph>
          </Media>
          <Media body>
            <StyledH5 onClick={this.toggle}>Temat</StyledH5>
            <Paragraph small className="pl-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Paragraph>
            <Collapse isOpen={collapse}>
              <Paragraph small className="pl-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas
                debitis similique porro a molestias consequuntur earum odio officiis natus, amet
                hic, iste sed dignissimos esse fuga! Minus, alias.
              </Paragraph>
            </Collapse>
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

export default Inbox;
