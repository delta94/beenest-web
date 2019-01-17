import * as React from 'react';
import { Query } from 'react-apollo';

import AccountNavContainer from './AccountNav.container';

import { AppConsumer, AppConsumerProps, ScreenType } from 'components/App.context';
import { GET_USER } from 'networking/users';
import BeeLink from 'shared/BeeLink';
import Svg from 'shared/Svg';
import TabNav from 'shared/TabNav/TabNav';

interface Props {
  config: TabNavItem[];
}

interface TabNavItem {
  showBadge?: boolean | null;
  src: string;
  title: string;
  to: string;
}

const AccountNav = ({ config }: Props): JSX.Element => (
  <AccountNavContainer>
    <AppConsumer>
      {({ screenType }: AppConsumerProps) => {
        if (screenType < ScreenType.TABLET) {
          return (
            <>
              {config.map(({ showBadge, src, to}: TabNavItem)=> {
                if (showBadge) {
                  return (
                    <div className="verification-needed-container">
                      <span className="verification-badge">!</span>
                      <BeeLink to={to} isNav activeClassName="active">
                        <Svg src={src} />
                      </BeeLink>
                    </div>
                  );
                }

                return (
                  <BeeLink to={to} isNav activeClassName="active">
                    <Svg src={src} />
                  </BeeLink>
                );
              })}
            </>
          );
        };

        return (
          <TabNav config={config} height={48} />
        );
      }}
    </AppConsumer>
  </AccountNavContainer>
);

export default AccountNav;
