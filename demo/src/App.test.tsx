// Tests the get-items-total.tsx 
import { CartItem, getItemsTotal } from "./get-items-total"

describe("the application", ()=>{
  // 	it.todo("should display as expected") //.todo means that test has yet to be written

  describe("getItemsTotal", ()=>{

    const specItems : CartItem[] = [
      {name: "item 1", cost: 100},
      {name: "item 2", cost: 200},
      {name: "item 3", cost: 300}
    ]

    it("should return 0 for an empty list", ()=>{
      expect(getItemsTotal([])).toBe(0)
    })
    it("should return the sum of a list of numbers", ()=>{

      expect(getItemsTotal(specItems)).toBe(600)

    })

    it ("should throw an error on a non number", ()=>{
      expect(()=>getItemsTotal([{name: "item 1", cost: "100"} as any])).toThrow()
    })


    const generatedSpecs : CartItem[] = [];
    const generatedSpecsCount = 10;

    for (let i = 0; i < generatedSpecsCount; i++) {
		const minValid = 0;
		const maxValid = 10000;
		generatedSpecs.push({
			name : "",
			cost: Math.random() * maxValid - minValid
		})
    }

	it ("should work with generated values", () => {
		const expected = generatedSpecs.reduce((acc,item) =>acc + item.cost, 0)
		expect(getItemsTotal(generatedSpecs)).toBeCloseTo(expected)
	})
  })

})

// Tests convertCurrency.ts using mocks
jest.mock('./effects/getConversionMap'); // Tells jest to use the mock

import { convertCurrency, Currency } from "./convertCurrency"

describe("Convert currency", ()=>{
  it("Should convert as expected", async()=>{
    const value = 1
    const rootCurrency = Currency.USD
    const targetCurrency = Currency.CAD

    expect(await convertCurrency(value, rootCurrency, targetCurrency)).toBeCloseTo(1.5)
  })
})

// Tests using snapshot tests
// import { CartItemsDisplay } from "./components/CartItemsDisplay"
// import { render, screen } from "@testing-library/react"
// import React from "react"

// describe("The cart list component", () => {
//   it("Should match the snapshot", ()=>{
//     const items : CartItem[] = [
//       {name: "A", cost: 100},
//       {name: "B", cost: 200},
//       {name: "C", cost: 300}
//     ]
//     const {container} = render(<CartItemsDisplay shoppingCartItems={items}/>)
//     console.info(container);

// 	expect(container).toMatchSnapshot() // Take a snapshot (or capture output) of container to a file
//   })
// })


