import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import { FACEBOOK_APP_ID, FACEBOOK_PAGE_ID } from '../../shared/configuration';

const Chat = (props) => (
  <div>
    <MessengerCustomerChat pageId={FACEBOOK_PAGE_ID} appId={FACEBOOK_APP_ID} />
  </div>
);

export default Chat;
