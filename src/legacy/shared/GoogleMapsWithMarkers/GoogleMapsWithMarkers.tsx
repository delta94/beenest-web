import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { compose, withProps } from 'recompose';
import { InfoWindow, Marker, GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

import { SETTINGS } from 'configs/settings';
const { GOOGLE_MAPS_KEY } = SETTINGS;

import { ListingCard } from 'legacy/shared/ListingCard';
import { LatLngBounds, ListingShort } from 'networking/listings';

import GoogleMapsWithMarkersContainer from './GoogleMapsWithMarkers.container';

interface Props extends RouterProps {
  bounds?: LatLngBounds;
  children?: React.ReactNode;
  className?: string;
  height?: string;
  listings: ListingShort[];
  near?: google.maps.places.PlaceResult;
  width?: string;
}

interface State {
  selectedListing?: ListingShort
}

class GoogleMapsWithMarkers extends React.Component<Props, State> {
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();

  state: State = {}

  handleMapMounted = (map: GoogleMap) => {
    if (!map) {
      return;
    }
    const googleMap: google.maps.Map = map.____SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    this.directionsDisplay.setMap(googleMap);

    const { bounds, listings } = this.props;
    if (bounds) {
      map.fitBounds(bounds);
      return;
    }
    if (listings && listings.length > 1) {
      map.fitBounds(listings.reduce(({north, south, east, west}, {lat, lng}) => ({
        north: Math.max(north, lat),
        south: Math.min(south, lat),
        east: Math.max(east, lng),
        west: Math.min(west, lng)
      }), {
        north: -90,
        south: 90,
        east: -180,
        west: 180
      }));
    }
  }

  render() {
    const { listings, near } = this.props;
    const { selectedListing } = this.state;

    if (selectedListing && near) {
      console.log('DIRECTIONS');
      this.directionsService.route({
        origin: { lat: selectedListing.lat, lng: selectedListing.lng },
        destination: near.geometry.location,
        travelMode: google.maps.TravelMode.DRIVING
      }, (response, status) => {
        console.log(status);
        console.log(response);
        if (status === google.maps.DirectionsStatus.OK) {
          console.log('setting...')
          this.directionsDisplay.setDirections(response);
          console.log('???');
        } else {
          console.log(`Failed to retrieve directions: ${status}`);
        }
      });
    }

    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={getCenterCoordinates(listings)}
        ref={this.handleMapMounted}
      >
        {near && <Marker
          icon={{
            fillColor: '#AADBFF',
            fillOpacity: 1,
            labelOrigin: { x: 0, y: -5 },
            scale: 4,
            strokeColor: '#1164FF',
            path: google.maps.SymbolPath.CIRCLE,
            strokeWeight: 2
          }}
          label={{
            color: '#333',
            fontSize: '1rem',
            text: near.name
          }}
          position={near.geometry.location}
          title={near.name}
          zIndex={1000}
        />}
        {listings.map(listing => (
          <Marker key={listing.id}
            position={{ lat: listing.lat, lng: listing.lng }}
            onClick={() => this.setState({ selectedListing: listing })} />
        ))}
        {!!selectedListing && <InfoWindow
          position={{ lat: selectedListing.lat, lng: selectedListing.lng }}
          onCloseClick={() => this.setState({ selectedListing: undefined })} >
          <ListingCard target="_blank" {...selectedListing} />
        </InfoWindow>}
      </GoogleMap>
    );
  }
}

export default withRouter(
  compose<{}, Props>(
    withProps(({ className, height, width }: Props) => ({
      googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`,
      loadingElement: <div style={{ height: '100%' }} />,
      mapElement: <div style={{ height: '100%' }} />,
      containerElement: (
        <GoogleMapsWithMarkersContainer
          className={`bee-google-maps-markers ${className || ''}`.trim()}
          height={height}
          width={width}
        />
      ),
    })),
    withScriptjs,
    withGoogleMap
  )(GoogleMapsWithMarkers)
);

// Depreciate later and use google api for getting center;
function getCenterCoordinates(listings: ListingShort[]) {
  let lat = 0;
  let lng = 0;
  const length = listings.length;
  for (let i = 0; i < length; i++) {
    lat += listings[i].lat;
    lng += listings[i].lng;
  }
  return {
    lat: lat / (length || 1),
    lng: lng / (length || 1),
  };
}
