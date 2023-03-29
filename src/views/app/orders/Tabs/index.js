import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardHeader,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Button,
  Badge,
  Col,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import ImageCards from '../../../../containers/ui/ImageCards';
import classnames from 'classnames';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';

const index = () => {
  const [activeFirstTab, setActiveFirstTab] = useState('1');
  const [activeSecondTab, setActiveSecondTab] = useState('1');

  return (
    <Row>
      <Colxx xxs="12">
        {/* <CardTitle className="mb-4">
          <IntlMessages id="cards.tab-card" />
        </CardTitle> */}
        <Row>
          <Colxx xxs="12" xs="12" lg="12">
            <Card className="mb-4">
              <CardHeader>
                <Nav tabs className="card-header-tabs ">
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '1',
                        'nav-link': true,
                        'd-flex flex-row justify-content-between align-items-center': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('1');
                      }}
                    >
                      <h3 className="m-0 ml-1 mr-1">Tab 1</h3>
                      <Badge
                        color="success"
                        pill
                        className="position-relative badge-right justify-content-between d-flex flex-row align-items-center"
                      >
                        NEW
                      </Badge>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '2',
                        'nav-link': true,
                        'd-flex flex-row justify-content-between align-items-center': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('2');
                      }}
                    >
                      <h3 className="m-0 ml-1 mr-1">Tab 2</h3>
                      <Badge
                        color="secondary"
                        pill
                        className="position-relative badge-right justify-content-between d-flex flex-row align-items-center"
                      >
                        NEW
                      </Badge>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '3',
                        'nav-link': true,
                        'd-flex flex-row justify-content-between align-items-center': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('3');
                      }}
                    >
                      <h3 className="m-0 ml-1 mr-1">Tab 3</h3>
                      <Badge
                        color="warning"
                        pill
                        className="position-relative badge-right justify-content-between d-flex flex-row align-items-center"
                      >
                        NEW
                      </Badge>
                    </NavLink>
                  </NavItem>{' '}
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '4',
                        'nav-link': true,
                        'd-flex flex-row justify-content-between align-items-center': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('4');
                      }}
                    >
                      <h3 className="m-0 ml-1 mr-1">Tab 4</h3>
                      <Badge
                        color="danger"
                        pill
                        className="position-relative badge-right justify-content-between d-flex flex-row align-items-center"
                      >
                        NEW
                      </Badge>
                    </NavLink>
                  </NavItem>{' '}
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '5',
                        'nav-link': true,
                        'd-flex flex-row justify-content-between align-items-center': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('5');
                      }}
                    >
                      <h3 className="m-0 ml-1 mr-1">Tab 1</h3>
                      <Badge
                        color="secondary"
                        pill
                        className="position-relative badge-right justify-content-between d-flex flex-row align-items-center"
                      >
                        NEW
                      </Badge>
                    </NavLink>
                  </NavItem>{' '}
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '6',
                        'nav-link': true,
                        'd-flex flex-row justify-content-between align-items-center': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('6');
                      }}
                    >
                      <h3 className="m-0 ml-1 mr-1">Tab 1</h3>
                      <Badge
                        color="warning"
                        pill
                        className="position-relative badge-right justify-content-between d-flex flex-row align-items-center"
                      >
                        NEW
                      </Badge>
                    </NavLink>
                  </NavItem>{' '}
                  <NavItem>
                    <NavLink
                      to="#"
                      location={{}}
                      className={classnames({
                        active: activeFirstTab === '7',
                        'nav-link': true,
                        'd-flex flex-row justify-content-between align-items-center': true,
                      })}
                      onClick={() => {
                        setActiveFirstTab('7');
                      }}
                    >
                      <h3 className="m-0 ml-1 mr-1">Tab 1</h3>
                      <Badge
                        color="danger"
                        pill
                        className="position-relative badge-right justify-content-between d-flex flex-row align-items-center"
                      >
                        NEW
                      </Badge>
                    </NavLink>
                  </NavItem>{' '}
                </Nav>
              </CardHeader>

              <TabContent activeTab={activeFirstTab}>
                <TabPane tabId="1">
                  <Row>
                    <Colxx sm="6">
                      <ImageCards />
                    </Colxx>
                    <Colxx sm="6">
                      <ImageCards />
                    </Colxx>
                    <Colxx sm="6">
                      <ImageCards />
                    </Colxx>{' '}
                    <Colxx sm="6">
                      <ImageCards />
                    </Colxx>{' '}
                    <Colxx sm="6">
                      <ImageCards />
                    </Colxx>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Colxx sm="12">
                      <CardBody>
                        <CardTitle className="mb-4">
                          Wedding Cake with Flowers Macarons and Blueberries
                        </CardTitle>
                        <Button outline size="sm" color="primary">
                          Edit
                        </Button>
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Colxx sm="12">
                      <CardBody>
                        <CardTitle className="mb-4">
                          Cheesecake with Chocolate Cookies and Cream Biscuits
                        </CardTitle>
                        <Button outline size="sm" color="primary">
                          Edit
                        </Button>
                      </CardBody>
                    </Colxx>
                  </Row>
                </TabPane>
              </TabContent>
            </Card>
          </Colxx>
        </Row>
      </Colxx>
    </Row>
  );
};

export default index;
