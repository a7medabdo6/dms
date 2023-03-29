// export default index;
import React, { Suspense } from 'react';
import { Row } from 'reactstrap';
import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import TabCardExamples from './Tabs';
import AppLayout from 'layout/AppLayout';

const index = ({ match }) => {
  return (
    <>
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <TabCardExamples />
          </Suspense>
        </div>
      </AppLayout>
    </>
  );
};

export default index;
