import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { menuData } from './data/menuData';

type Ingredient = {
  name: string;
  amount: number;
  unit: string;
};

type Menu = {
  name: string;
  ingredients: Ingredient[];
};

export default function PreviewPage() {
  const location = useLocation();
  const selectedMenu = location.state?.menu;

  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const menuId = selectedMenu?.id;
  const menu: Menu | null = menuId ? menuData[menuId as keyof typeof menuData] : null;

  const handleChange = (ingredientName: string, value: number) => {
    setQuantities((prev) => ({ ...prev, [ingredientName]: value }));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>{menu?.name} 구성 미리보기</h1>
      {menu ? (
        <div>
          {menu.ingredients.map((ingredient: Ingredient) => (
            <div key={ingredient.name} style={{ marginBottom: '1rem' }}>
              <div style={{ marginBottom: '0.3rem' }}>
                {ingredient.name} ({quantities[ingredient.name] ?? ingredient.amount}
                {ingredient.unit})
              </div>
              <input
                type="range"
                min={ingredient.amount * 0.5}
                max={ingredient.amount * 1.5}
                step="1"
                value={quantities[ingredient.name] ?? ingredient.amount}
                onChange={(e) =>
                  handleChange(ingredient.name, Number(e.target.value))
                }
              />
            </div>
          ))}
        </div>
      ) : (
        <p>선택된 메뉴가 없습니다.</p>
      )}
    </div>
  );
}
