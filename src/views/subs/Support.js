import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const Main = styled.main`
  margin: 48px;
`;

const Select = styled.select`
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 24px !important;
`;

const Textarea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 24px !important;
  padding: 16px;
  width: 100% !important;
  min-height: 200px;
`;

const Support = () => (
  <UserPageTemplate>
    <Main as="main">
      <Row className="justify-content-md-center text-center">
        <Col>
          <Heading>Formularz zgłoszenia</Heading>
        </Col>
      </Row>
      <Row>
        <Col>
          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={({ description }) => {
              console.log(description);
            }}
          >
            {() => {
              return (
                <Row className="justify-content-md-center text-center">
                  <Col sm="4">
                    <Form>
                      <Select className="custom-select mb-4">
                        <option>Wybierz rodzaj zgłoszenia...</option>
                        <option value="1">Problem z usługą internetową</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Select>
                      <Textarea name="description" placeholder="Opis problemu" className="mb-3" />

                      <Button type="submit">Wyślij zgłoszenie</Button>
                    </Form>
                  </Col>
                </Row>
              );
            }}
          </Formik>
        </Col>
      </Row>
    </Main>
  </UserPageTemplate>
);

export default Support;
