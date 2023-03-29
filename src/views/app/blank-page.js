import React from 'react';
import { Row } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import TabCardExamples from 'containers/ui/TabCardExamples';

const BlankPage = ({ match }) => {
  return (
    <>
      <Row>
        <TabCardExamples />
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <p>
            <IntlMessages id="menu.blank-page" />
          </p>
          <TabCardExamples />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <TabCardExamples />
        </Colxx>
      </Row>
    </>
  );
};

export default BlankPage;
