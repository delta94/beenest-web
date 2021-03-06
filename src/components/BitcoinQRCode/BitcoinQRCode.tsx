import * as React from 'react';
import URL from 'url';
import { QRCode } from 'react-qr-svg';

// Interface designed for compatibility with react-bitcoin-qr
interface Props {
  address: string;
  amount: string;
  label?: string;
  message?: string;
}

const toBitcoinUri = ({ address, amount, label, message }: Props) => URL.format({
  protocol: 'bitcoin',
  host: address,
  query: { amount, label, message }
});

const BitcoinQRCode = (props: Props) => <QRCode value={toBitcoinUri(props)} />;

export default BitcoinQRCode;
