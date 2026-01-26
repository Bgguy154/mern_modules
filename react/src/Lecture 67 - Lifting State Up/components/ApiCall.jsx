// import React, { useEffect, useState } from 'react';

// function ApiCall() {
//   const [resp, setResp] = useState("");

//   //easier way
// //   function getData() {
// //     setResp("https://picsum.photos/seed/picsum/450/300");
// //   }

// async function getData() {
//      try {
//       const response = await fetch("https://picsum.photos/id/77/450/300");
//       setResp(response.url);
//     } catch (error) {
//       console.error("Error fetching image:", error);
//     }
// }

// useEffect(()=>{
//    getData();
// },[])

//   return (
//     <div>
//       <button onClick={getData}>Click me</button>
//       {resp && <img src={resp} alt="Random" />}
//     </div>
//   );
// }

// export default ApiCall;


// 'use client';
import React from "react";
import studyImg from "./study.png";

export default function WhyTejas() {
  return (
    <section style={{
      background: 'white',
      padding: '64px 20px', // Adjusted padding for mobile safety
      overflow: 'hidden'
    }}>
      <div style={{
        minWidth:"100vw",
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap', // Allows wrapping on smaller screens
        alignItems: 'center',
        justifyContent:"center", // Pushes text to left and image to right
        gap: '40px',
      }}>

        {/* Left Content Div */}
        <div style={{
          flex: '1 1 500px', // Grows but stays at a base of 500px
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          justifyContent:"center"
        }}>
          {/* Heading */}
          <h2 style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: 'clamp(32px, 5vw, 48px)', // Responsive font size
            fontWeight: '600',
            lineHeight: '1.2',
            textAlign: 'left', // Changed from center for better alignment
            color: '#1e293b',
            margin: 0
          }}>
            WHY TEJAS?
          </h2>

          {/* Description Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#f97316',
              margin: 0,
              fontFamily: 'Roboto, sans-serif'
            }}>
              Because every doubt deserves attention.
            </p>
            <p style={{
              fontSize: '18px',
              color: '#475569',
              lineHeight: '1.5',
              margin: 0,
              fontFamily: 'Roboto, sans-serif'
            }}>
              Whether you're stuck on a concept or just need a quick refresher, Tejas brings expert help to your fingertips — no waiting, no hesitation.
            </p>
          </div>

          {/* Bullet Points */}
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: 0, paddingLeft: 0, listStyle: 'none' }}>
            <li style={{ display: 'flex', gap: '12px', color: '#475569', fontSize: '16px', fontFamily: 'Roboto, sans-serif' }}>
              <span style={{ color: '#f97316', fontWeight: 'bold' }}>•</span>
              <span>Instant 1:1 doubt-solving from qualified tutors</span>
            </li>
            <li style={{ display: 'flex', gap: '12px', color: '#475569', fontSize: '16px', fontFamily: 'Roboto, sans-serif' }}>
              <span style={{ color: '#f97316', fontWeight: 'bold' }}>•</span>
              <span>Designed for school students, competitive exam aspirants & curious minds</span>
            </li>
            <li style={{ display: 'flex', gap: '12px', color: '#475569', fontSize: '16px', fontFamily: 'Roboto, sans-serif' }}>
              <span style={{ color: '#f97316', fontWeight: 'bold' }}>•</span>
              <span>Learn at your pace, without pressure</span>
            </li>
          </ul>
        </div>

        {/* Right Illustration Div */}
        <div style={{
          flex: '0 1 400px', // Prevents image from stretching too wide
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          minWidth: '300px' // Ensures it doesn't get too small on tablets
        }}>
          {/* Light blue gradient background */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            right: '10%',
            bottom: '10%',
            background: 'linear-gradient(135deg, rgba(191, 219, 254, 0.6) 0%, rgba(219, 234, 254, 0.3) 100%)',
            borderRadius: '50%', // Circular glow looks more organic
            filter: 'blur(60px)',
            opacity: 0.6,
            zIndex: 1
          }}></div>

          {/* Image container */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <img
              src={studyImg}
              alt="Tutor helping student with lightbulb idea"
              style={{
                width: '100%',
                maxWidth: '380px', // Fixed max width as requested
                height: 'auto',
                display: 'block',
                borderRadius: '12px'
              }}
            />
          </div>
        </div>

      </div>

      {/* Inline Media Query for Mobile */}
      <style>
        {`
          @media (max-width: 768px) {
            h2 { text-align: center !important; }
            ul { padding-left: 10px !important; }
          }
        `}
      </style>
    </section>
  );
}