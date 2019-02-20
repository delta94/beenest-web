import * as React from 'react';
import { ListGroup, ListGroupItem, Row, Col, Modal, ModalHeader, ModalBody, Alert } from 'reactstrap';
import { Query } from 'react-apollo';
import { GET_PAYMENT_SOURCES, PaymentSource } from 'networking/paymentSources';
import AudioLoading from 'shared/loading/AudioLoading';
import { CreditBalance } from 'networking/users';
import NewCardForm from './NewCardForm';
import DeleteCardForm from './DeleteCardForm';

interface Props extends RouterProps {
  creditBalance: CreditBalance;
}

enum ModalType {
  ADD_NEW_CARD = 'ADD_NEW_CARD',
  DELETE_CARD = 'DELETE_CARD',
}

const AccountPayment = ({ creditBalance }: Props) => {
  const [modal, setModal] = React.useState<ModalType | undefined>(undefined);
  const [alert, setAlert] = React.useState<string>('');
  const [paymentSource, setPaymentSource] = React.useState<PaymentSource | undefined>(undefined);

  function handleModal(modal?: ModalType, paymentSource?: PaymentSource) {
    setModal(modal);
    setPaymentSource(paymentSource);
  }
  
  return (
    <Query query={GET_PAYMENT_SOURCES}>
      {({ loading, error, data }) => {
        if (loading) {
          return <AudioLoading height={48} width={96} />;
        }
        if (error || !data) {
          return <h4>{error ? error.message : 'Error / No Data'}</h4>;
        }
        const paymentSources = data.getPaymentSources;
        const renderPaymentSources = paymentSources.map((paymentSource: PaymentSource) => (
          <ListGroupItem
            key={paymentSource.id}
            id={paymentSource.id}
            className="w-100 d-flex justify-content-between align-items-center"
          >
            <h6 className="mb-0">
              {paymentSource.stripeBrand}&nbsp;(...{paymentSource.stripeLast4})
            </h6>
            <i onClick={() => handleModal(ModalType.DELETE_CARD, paymentSource)} className="fas fa-trash-alt" />
          </ListGroupItem>
        ));

        return (
          <section>
            {alert && <Alert color="success">{alert}</Alert>}

            <Row>
              <Col xs="12">
                <p>Credit Balance: {creditBalance.amountUsd}</p>
              </Col>
            </Row>
            <h4>Credit Cards:</h4>
            <ListGroup className="mb-2 d-flex flex-column">{renderPaymentSources}</ListGroup>

            <Row>
              <Col xs="12">
                <div onClick={() => handleModal(ModalType.ADD_NEW_CARD)} className="w-auto d-inline-block align-items-center">
                  <i className="fas fa-plus-circle" />
                  <h6 className="ml-2 mb-0 d-inline-block">Add New Card</h6>
                </div>
              </Col>
            </Row>

            {modal === ModalType.ADD_NEW_CARD && (
              <Modal isOpen toggle={handleModal}>
                <ModalHeader>Add New Card</ModalHeader>
                <ModalBody>
                  <NewCardForm handleModal={handleModal} setAlert={setAlert} />
                </ModalBody>
              </Modal>
            )}

            {modal === ModalType.DELETE_CARD && (
              <Modal isOpen toggle={handleModal}>
                <ModalHeader>Delete Card</ModalHeader>
                <ModalBody>
                  <DeleteCardForm handleModal={handleModal} paymentSource={paymentSource} setAlert={setAlert} />
                </ModalBody>
              </Modal>
            )}
          </section>
        );
      }}
    </Query>
  );
};

export default AccountPayment;
