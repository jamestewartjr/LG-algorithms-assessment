import chai, { expect } from 'chai'
import mergeSort from '../src/mergeSort.js'

describe.only('mergeSort()', () => {
  it('is a function', () => {
    expect(mergeSort).to.be.a('function')
  })

  it('merges sub arrays until there is one sorted array left', () => {
    expect(mergeSort([ 2, 42, 4, 6, 1, 23 ])).to.be.equal([1, 2, 4, 6, 23, 42])
  })

  it('returns the array if its length is less than 2', () => {
    expect(mergeSort([1]) ).to.equal( [1] )
  })
})
