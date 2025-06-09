import React from 'react';
import { useNavigate } from 'react-router-dom';

const menus = [
  {
    id: 'budae',
    name: '부대찌개',
    image: process.env.PUBLIC_URL + '/images/budae.png',
  },
  {
    id: 'doenjang',
    name: '된장찌개',
    image: process.env.PUBLIC_URL + '/images/doenjang.png',
  },
  {
    id: 'tofu',
    name: '두부조림',
    image: process.env.PUBLIC_URL + '/images/tofu.png', 
  },
  {
    id: 'salad',
    name: '샐러드',
    image: process.env.PUBLIC_URL + '/images/salad.png',
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  const handleSelect = (menu: any) => {
    navigate('/preview', { state: { menu } });
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>나만의 밀키트</h1>
      <p>[한식] 메뉴를 선택하세요</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {menus.map((menu) => (
          <button
            key={menu.id}
            onClick={() => handleSelect(menu)}
            style={{
              border: '1px solid #ccc',
              borderRadius: '12px',
              padding: '1rem',
              cursor: 'pointer',
              background: '#f8f8f8',
            }}
          >
            <img
              src={menu.image}
              alt={menu.name}
              style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <div style={{ marginTop: '0.5rem', fontWeight: '500', fontSize: '0.95rem' }}>
              {menu.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
