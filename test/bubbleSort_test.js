import chai, { expect } from 'chai'
import bubbleSort from '../src/bubbleSort.js'


describe( 'bubbleSort()', () => {
  it('is a function', () => {
    expect(bubbleSort([1])).to.exist
  })

  it('returns a sorted array', () => {
    expect(bubbleSort([8, 26, 12, 17, 23, 27, 30, 7 ])).to.be.eql([7, 8, 12, 17, 23, 26, 27, 30])
  })

  it('returns the value if less than two values', () => {
    expect(bubbleSort([1])).to.be.eql([1])
  })
})
