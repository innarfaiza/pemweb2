"use client";

import { useState } from "react";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  const [bravo, setBravo] = useState(0);
  const [nama, setNama] = useState("Innar Faiza Syahrani");

  function handlerTambahBravo() {
    setBravo(bravo + 1);
  }

  function handlerGantiNama() {
    setNama("Faiza Innar");
  }

  return (
    <div className="body">
      <div className="banner-container">
        <div className="header-banner-wrapper">
          <div className="profile-header-banner">
            <Image
              src="/assets/foto.png"
              alt="Picture of the author"
              fill
              objectFit="contain"
            />
          </div>
          <div className="content-header-banner">
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
              <p>D121211021</p>
              <p>Sudah {bravo} kali terpencet</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          <div className="cta-button" onClick={handlerTambahBravo}>
            <p>Pencet!</p>
          </div>
          <div
            className="cta-button"
            style={{
              marginTop: "12px",
            }}
            onClick={handlerGantiNama}
          >
            <p>Nama lain</p>
          </div>
        </div>
      </div>
    </div>
  );
}
