import React from 'react';
import {
  CardText,
  CardSubtitle,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Badge,
  Col,
} from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
import DropDownsUi from './dropdowns';

const ImageCards = () => {
  return (
    <Row>
      <Colxx xxs="12">
        <Row>
          <Colxx xxs="12" xs="12" lg="12">
            <Card className="mb-4 m-2">
              <div className="position-relative">
                <Badge
                  color="primary"
                  pill
                  className="position-absolute badge-top-left"
                >
                  NEW
                </Badge>
              </div>
              <div className=" d-flex flex-grow-1 min-width-zero">
                <CardBody className="  align-self-center d-flex flex-column flex-lg-column justify-content-between min-width-zero">
                  <div className="min-width-zero">
                    <CardTitle className="truncate mb-1  d-flex flex-row justify-content-between">
                      Sarah Kortney
                      <div>0 KD</div>
                    </CardTitle>
                    <CardSubtitle className="truncate mb-1  d-flex flex-row justify-content-between">
                      22 April 2023 at 06:12
                      <div>-</div>
                    </CardSubtitle>
                    <CardText className="text-muted text-small mb-2  d-flex flex-row justify-content-between">
                      No Establishment
                      <i
                        className="simple-icon-eye"
                        style={{ fontSize: '19px', color: '#393486 ' }}
                        color="primary"
                      />
                    </CardText>
                  </div>
                  <Row>
                    <Col md={4}>
                      <DropDownsUi background="success" />
                    </Col>
                    <Col md={4}>
                      <DropDownsUi background="danger" />
                    </Col>
                    <Col md={4}>
                      <DropDownsUi background="secondary" />
                    </Col>
                  </Row>
                </CardBody>
              </div>
            </Card>
          </Colxx>
        </Row>
      </Colxx>
    </Row>
  );
};

export default ImageCards;
