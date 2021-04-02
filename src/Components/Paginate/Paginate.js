import React from 'react';
import { Row, Col, Pagination } from 'react-bootstrap';
import './paginate.css';

const Paginate = ({ next, previous, handlePages }) => {
  const handlerNext = () => {
    const [, query] = next.split('?');
    handlePages(query);
  };

  const handlerPrev = () => {
    const [, query] = previous.split('?');
    handlePages(query);
  };
  return (
    <div className="container-paginate">
      <Row>
        <Col>
          <Pagination>
            {previous !== null && <Pagination.Prev onClick={handlerPrev} />}
            {next !== null && <Pagination.Next onClick={handlerNext} />}
          </Pagination>
        </Col>
      </Row>
    </div>
  );
};

export default Paginate;
