import React, { useState } from 'react';
import {
  Row,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import IntlMessages from 'helpers/IntlMessages';

const DropDownsUi = ({ match, background }) => {
  const [dropdownBasicOpen, setDropdownBasicOpen] = useState(false);

  return (
    <>
      <Row className="mb-0">
        <Colxx xxs="12">
          <Dropdown
            isOpen={dropdownBasicOpen}
            toggle={() => setDropdownBasicOpen(!dropdownBasicOpen)}
            className="mb-0"
            style={{ width: '100%' }}
          >
            <DropdownToggle caret color={background} outline>
              <IntlMessages id="dropdown" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>
                <IntlMessages id="dropdowns.header" />
              </DropdownItem>
              <DropdownItem disabled>
                <IntlMessages id="dropdowns.action" />
              </DropdownItem>
              <DropdownItem>
                <IntlMessages id="dropdowns.another-action" />
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <IntlMessages id="dropdowns.another-action" />
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Colxx>
      </Row>
    </>
  );
};
export default DropDownsUi;
