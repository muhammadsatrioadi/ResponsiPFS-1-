// src/components/Saran.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Alert, ListGroup } from 'react-bootstrap';
import './Saran.css';


function Saran() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [saran, setSaran] = useState('');
  const [saranList, setSaranList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Menangani submit untuk create dan update saran
  const handleSubmit = (event) => {
    event.preventDefault();

    if (nama && email && saran) {
      const newSaran = { nama, email, saran };

      if (editIndex !== null) {
        // Jika ada saran yang sedang diedit, update saran
        const updatedSaranList = [...saranList];
        updatedSaranList[editIndex] = newSaran;
        setSaranList(updatedSaranList);
        setAlertMessage('Saran berhasil diperbarui!');
      } else {
        // Jika tidak ada saran yang sedang diedit, buat saran baru
        setSaranList([...saranList, newSaran]);
        setAlertMessage('Saran berhasil ditambahkan!');
      }

      // Reset form dan state
      setNama('');
      setEmail('');
      setSaran('');
      setEditIndex(null);
      setAlertType('success');
      setShowAlert(true);
    } else {
      setAlertMessage('Semua kolom harus diisi!');
      setAlertType('danger');
      setShowAlert(true);
    }
  };

  // Menangani edit saran
  const handleEdit = (index) => {
    const saranToEdit = saranList[index];
    setNama(saranToEdit.nama);
    setEmail(saranToEdit.email);
    setSaran(saranToEdit.saran);
    setEditIndex(index);
  };

  // Menangani delete saran
  const handleDelete = (index) => {
    const updatedSaranList = saranList.filter((_, i) => i !== index);
    setSaranList(updatedSaranList);
    setAlertMessage('Saran berhasil dihapus!');
    setAlertType('danger');
    setShowAlert(true);
  };

  return (
    <Container className="saran-container">
      <Row>
        <Col>
          <h2>Berikan Saran Anda</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNama">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan nama Anda"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Masukkan email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formSaran">
              <Form.Label>Saran</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Tuliskan saran atau masukan Anda"
                value={saran}
                onChange={(e) => setSaran(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {editIndex !== null ? 'Perbarui Saran' : 'Kirim Saran'}
            </Button>
          </Form>

          {showAlert && (
            <Alert variant={alertType} onClose={() => setShowAlert(false)} dismissible>
              {alertMessage}
            </Alert>
          )}

          <h3>Daftar Saran</h3>
          <ListGroup>
            {saranList.map((item, index) => (
              <ListGroup.Item key={index}>
                <strong>{item.nama}</strong> ({item.email})
                <p>{item.saran}</p>
                <Button variant="warning" onClick={() => handleEdit(index)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>
                  Hapus
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Saran;
