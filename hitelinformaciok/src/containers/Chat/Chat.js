import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import './Chat.css';
import { FACEBOOK_APP_ID, FACEBOOK_PAGE_ID } from '../../shared/configuration';

const Chat = (props) => (
  <div>
    <MessengerCustomerChat
      pageId={FACEBOOK_PAGE_ID}
      appId={FACEBOOK_APP_ID}
      loggedInGreeting={'Miben segíthetünk Neked?'}
      loggedOutGreeting={'Miben segíthetünk Neked?'}
      language={'hu_HU'}
      greetingDialogDisplay={'show'}
      greetingDialogDelay={10}
    />
  </div>
);

export default Chat;
