import React from 'react';
import create from 'zustand';

const useStore = create((set) => ({
  fontSize: 14,
  increaseFontSize: () => set((state) => ({ fontSize: state.fontSize + 1 })),
}));

export default function Text() {
  const fontSize = useStore((state) => state.fontSize);
  const increaseFontSize = useStore((state) => state.increaseFontSize);

  return (
    <>
      <p style={{ fontSize }}>This text will increase in size too.</p>
      <button onClick={increaseFontSize}>size up</button>
    </>
  );
}
