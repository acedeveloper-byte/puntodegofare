'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, InputGroup } from 'react-bootstrap';
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch } from 'react-icons/fa';

const SearchEngine = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [flightClass, setFlightClass] = useState('Economy');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({
      from,
      to,
      departureDate,
      returnDate,
      passengers,
      flightClass,
    });
    alert(`Searching flights from ${from} to ${to}`);
  };

  return (
    <Container className="my-5 form-container">
      <Card className="p-4 shadow rounded-4" style={{ background: 'rgba(255,255,255,0.95)' }}>
        <Form onSubmit={handleSearch}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label className="fw-bold text-uppercase">desde origen</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-white border-0 border-bottom  rounded-0">
                  <FaMapMarkerAlt style={{color: '#2727b3'}} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="desde origen"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  required
                  className="border-0 border-bottom  rounded-0"
                />
              </InputGroup>
            </Col>

            <Col md={6}>
              <Form.Label className="fw-bold text-uppercase">al origen</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-white border-0 border-bottom  rounded-0">
                  <FaMapMarkerAlt style={{color: '#2727b3'}} />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="al origen"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  required
                  className="border-0 border-bottom  rounded-0"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Label className="fw-bold text-uppercase">Seleccionar fecha</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-white border-0 border-bottom  rounded-0">
                  <FaCalendarAlt style={{color: '#2727b3'}} />
                </InputGroup.Text>
                <Form.Control
                  type="date"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  required
                  className="border-0 border-bottom  rounded-0"
                />
              </InputGroup>
            </Col>

            <Col md={6}>
              <Form.Label className="fw-bold text-uppercase">Seleccionar fecha</Form.Label>
              <InputGroup>
                <InputGroup.Text className="bg-white border-0 border-bottom  rounded-0">
                  <FaCalendarAlt style={{color: '#2727b3'}} />
                </InputGroup.Text>
                <Form.Control
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  required
                  className="border-0 border-bottom  rounded-0"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row className="align-items-end">
            <Col md={4}>
              <Form.Label className="fw-bold text-uppercase">Pasajeras</Form.Label>
              <Form.Select
                className="border-0 border-bottom  rounded-0"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              >
                {[...Array(9)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} Pasajeras
                  </option>
                ))}
              </Form.Select>
            </Col>

            <Col md={4}>
              <Form.Label className="fw-bold text-uppercase">Clase de vuelo</Form.Label>
              <Form.Select
                className="border-0 border-bottom  rounded-0"
                value={flightClass}
                onChange={(e) => setFlightClass(e.target.value)}
              >
                <option>Economía</option>
                <option>Negocio</option>
                <option>Clase primera</option>
              </Form.Select>
            </Col>

            <Col md={4} className="mt-3 mt-md-0 d-grid">
              <Button  type="submit" className="d-flex align-items-center justify-content-center gap-2" style={{background: '#2727b3',
    border: 'none'}}>
                <FaSearch /> Buscar
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default SearchEngine;
