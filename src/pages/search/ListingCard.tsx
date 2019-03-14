import * as React from 'react';
import { Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle, Fade } from 'reactstrap';

import { ListingShort } from 'networking/listings';

const ListingCard = ({
  homeType,
  listingPicUrl,
  pricePerNightUsd,
  rating,
  title
}: ListingShort) => (
  <Card tag={Fade} className="w-100 h-100 shadow border-0">
    <div className="embed-responsive embed-responsive-4by3">
      <div className="embed-responsive-item">
        <CardImg className="w-100" src={listingPicUrl} alt={`Photo of ${title}`} />
      </div>
    </div>
    <CardBody>
      <CardSubtitle className="small text-secondary">
        {homeType}
        {rating && <span> &middot; {rating.average}/10 rating</span>}
      </CardSubtitle>
      <CardTitle tag="h6">{title}</CardTitle>
    </CardBody>
    <CardFooter>
      <CardText>${pricePerNightUsd} per night</CardText>
    </CardFooter>
  </Card>
);

export default ListingCard;
