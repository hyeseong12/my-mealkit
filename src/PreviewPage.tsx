import React, { useState } from "react";

const PreviewPage = () => {
  const ingredients = ["두부", "감자", "고기"]; // 예시
  const quantityLevels = ["조금만", "보통", "많이", "제외"] as const;

  const [selectedQuantities, setSelectedQuantities] = useState<{
    [ingredient: string]: typeof quantityLevels[number];
  }>({
    두부: "보통",
    감자: "보통",
    고기: "보통",
  });

  const handleChange = (ingredient: string, level: typeof quantityLevels[number]) => {
    setSelectedQuantities((prev) => ({
      ...prev,
      [ingredient]: level,
    }));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">구성 미리보기</h1>

      {ingredients.map((ingredient) => (
        <div key={ingredient} className="mb-4">
          <div className="font-semibold mb-1">{ingredient}</div>
          <div className="flex gap-3">
            {quantityLevels.map((level) => (
              <label key={level} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  checked={selectedQuantities[ingredient] === level}
                  onChange={() => handleChange(ingredient, level)}
                />
                <span>{level}</span>
              </label>
            ))}
          </div>
        </div>
      ))}

      {/* 확인용 출력 */}
      <pre className="mt-6 bg-gray-100 p-2 text-sm">
        {JSON.stringify(selectedQuantities, null, 2)}
      </pre>
    </div>
  );
};

export default PreviewPage;
