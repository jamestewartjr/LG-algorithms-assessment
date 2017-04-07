import chai, { expect } from 'chai'
import closestPair from '../src/closestPair.js'

describe('closestPair()', () => {
  const points = [ [2,1], [4,0], [-1,0], [5,3], [-2,5], [3,-3], [-2,0], [3,4], [5,-4], [0,-2] ]

  it('exists', () => {
    expect(closestPair(points)).to.exist
  })

  it('finds the distance between two points', () => {
    expect(closestPair(points)).to.be.equal({ pair: [[-1, 0], [-2, 0]], distance: 1 })
  })

})
