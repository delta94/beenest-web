import { LocationDescriptor } from 'history';
import * as React from 'react';
import { withRouter } from 'react-router-dom';

import BannerContainer from './Banner.container';
import BeeLink from 'legacy/shared/BeeLink';
import CloseButton from 'legacy/shared/CloseButton';

interface Props extends RouterProps {
  background?: string;
  href?: string | null;
  message: string;
  onClose: () => void;
  textColor?: string;
  to?: LocationDescriptor | null;
}

const Banner = (props: Props) => {
  return (
    <BannerContainer className="bee-banner" {...props}>
      <div className="bee-banner-content">
        {props.href &&
          <BeeLink
            href={props.href}
            target={props.href ? '_blank' : '_self'}>
            <span>{props.message}</span>
          </BeeLink>
        }

        {props.to &&
          <a onClick={() => props.history.push(`${props.to}`)}>
            <span>{props.message}</span>
          </a>
        }

        {(!props.to && !props.href) &&
          <span>{props.message}</span>
        }
      </div>
      <CloseButton
        className="d-flex d-md-none close"
        height="32px"
        iconColor="upper"
        onClose={props.onClose}
        width="32px" />
      <CloseButton
        className="d-none d-md-flex close"
        height="56px"
        iconColor="upper"
        onClose={props.onClose}
        width="56px" />
    </BannerContainer>
  );
};

export default withRouter(Banner);
