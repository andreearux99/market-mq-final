import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import seller from '../data/magnetofon/seller.jpg';
import m1 from '../data/magnetofon/m1.jpg';




export default function ProductPage() {
      return (
        <>
          <div id="product-page">

            <div id="product-description">
              <img src={m1} alt="Magnetofon Akai GX-1730SS" />
              <h1>Magnetofon Akai GX-1730SS</h1>
              <h3>950 lei</h3>
              <h5>Descriere</h5>
              <p>Vand magnetofon Akai GX-1730SS,model foarte rar,in stare buna de functionare,estetic prezinta cateva zgarieturi,si pe capacul capetelor,am pus poze.</p>
            </div>

            <div id="seller-details">
              <div>
                <img src={seller} alt="Negulescu Liviu" />
                <p>
                  <span>Negulescu Liviu</span><br />
                  Pe Metaquantum din <b>iulie 2011</b><br/>
                  Activ azi la 12:34
                </p>
              </div>

              <div class="account-details">
                <p>
                  Intră în contul tău Metaquantum sau creează un cont nou pentru a contacta acest vânzător
                  <br/><br/>
                  <a href="#">Intra in cont</a><span> / </span><a href="#">Cont nou</a>
                </p>
              </div>

              <div>
                <button>Suna vanzatorul</button>
                <button>Trimite mesaj</button>
              </div>

            </div>

          </div>
        </>
)
};
