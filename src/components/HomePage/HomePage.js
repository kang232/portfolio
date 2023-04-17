import React, { useCallback } from "react";
import { useState } from "react"

export default function HomePage(params) {
  const [number, setNumber] = useState(0)

  const handleIncrease = useCallback(() => {
    setNumber(number => number + 1)
  }, [])
  return (
    <>
      <div>
        <h1>{number}</h1>
        <button onClick={handleIncrease}>Click me!</button>
        <button onClick={handleIncrease}>Click me!</button>
        <button onClick={handleIncrease}>Click me!</button>
      </div>
    </>
  )
}