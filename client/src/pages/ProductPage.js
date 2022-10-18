import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import magnetofon from '../data/magnetofon.jpg'


export default function ProductPage() {
      return (
        <>
          <div id="product-page">
          <Form onSubmit="#" className="form-container">
            <img src={magnetofon} alt="Magnetofon Akai GX-1730SS" />

            <h1>Magnetofon Akai GX-1730SS</h1>
            <h3>950 lei</h3>
            <h5>Descriere</h5>
            <p>Vand magnetofon Akai GX-1730SS,model foarte rar,in stare buna de functionare,estetic prezinta cateva zgarieturi,si pe capacul capetelor,am pus poze.</p>

            </Form>
          </div>
        </>
)
};
