import { useState } from "react";
import menuData from "./data/menuData";
import QuantitySelector from "./components/QuantitySelector";

function App() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (ingredient, level) => {
    setQuantities((prev) => ({
      ...prev,
      [ingredient]: level,
    }));
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>나만의 밀키트</h1>

      <h2>메뉴 선택</h2>
      <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
        {Object.entries(menuData).map(([menu, { image }]) => (
          <div key={menu} style={{ textAlign: "center" }}>
            <img
              src={image}
              alt={menu}
              style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "8px" }}
            />
            <br />
            <button onClick={() => setSelectedMenu(menu)}>{menu}</button>
          </div>
        ))}
      </div>

      {selectedMenu && (
        <>
          <h3>{selectedMenu} 재료 구성</h3>
          {menuData[selectedMenu].ingredients.map((ingredient) => (
            <QuantitySelector
              key={ingredient}
              ingredient={ingredient}
              selected={quantities[ingredient] || "보통"}
              onChange={(level) => handleQuantityChange(ingredient, level)}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
