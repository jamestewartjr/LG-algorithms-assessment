import chai, { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe.only('binarySearch()', () => {
  it('is a function that exists', () => {
    expect(binarySearch([1], 1  )).to.exist
    expect(binarySearch([1], 1)).to.be.a('function')
  })

  it('returns the index of found value', () => {
    expect(binarySearch([1,2,3], 3)).to.be.equal(3)
  })
})
