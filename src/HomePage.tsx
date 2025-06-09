import React from 'react';

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
];

export default function HomePage() {
  const handleSelect = (id: string) => {
    console.log(`Selected menu: ${id}`);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>나만의 밀키트</h1>
      <p>[한식] 메뉴를 선택하세요</p>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        {menus.map((menu) => (
          <button
            key={menu.id}
            onClick={() => handleSelect(menu.id)}
            style={{
              border: '1px solid #ccc',
              borderRadius: '12px',
              padding: '1rem',
              width: '150px',
              cursor: 'pointer',
              background: '#f8f8f8',
            }}
          >
            <img
              src={menu.image}
              alt={menu.name}
              style={{ width: '100%', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <div style={{ marginTop: '0.5rem', fontWeight: '500' }}>{menu.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
