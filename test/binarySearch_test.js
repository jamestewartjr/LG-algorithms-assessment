import chai, { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe.only('binarySearch()', () => {
  it('is a function that exists', () => {
    expect(binarySearch([1], 1  )).to.exist
  })

  it('returns the index of found value', () => {
    expect(binarySearch([1,2,3], 3)).to.be.equal(2)
  })

  it('returns -1 if the search value is not found', () => {
    expect(binarySearch([1,2,3], 4)).to.be.equal(-1)
  })
})
