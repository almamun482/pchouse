"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function QuantitySelector({
  onChange,
}: {
  onChange?: (qty: number) => void;
}) {
  const [qty, setQty] = useState(1);

  const update = (next: number) => {
    const clamped = Math.max(1, next);
    setQty(clamped);
    onChange?.(clamped);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    if (raw === "") {
      setQty(1);
      return;
    }
    update(parseInt(raw, 10));
  };

  return (
    <div className="flex items-center border border-gray-200 rounded-md">
      <button
        onClick={() => update(qty - 1)}
        className="p-2.5 hover:text-brand"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <input
        type="text"
        inputMode="numeric"
        value={qty}
        onChange={handleInputChange}
        onBlur={() => update(qty)}
        className="w-12 text-center text-sm border-x border-gray-200 outline-none py-2.5"
        aria-label="Quantity"
      />
      <button
        onClick={() => update(qty + 1)}
        className="p-2.5 hover:text-brand"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}