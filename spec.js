const generator = require('./src/generator')
const { expect } = require('chai')
describe('L-system generator', () => {
  it('should return a string', () => {
    const actual = generator('1', 1)
    expect(actual).to.be.a('string')
  })
  xdescribe('Works for simple test cases', () => {
    it('can handle a "1" seed', () => {
      const actual = generator('1', 1)
      expect(actual).to.equal('11')
    })

    it('can handle a "0" seed', () => {
      const actual = generator('0', 1)
      expect(actual).to.equal('1[0]0')
    })

    it('can handle a "11" seed', () => {
      const actual = generator('11', 1)
      expect(actual).to.equal('1111')
    })

    it('can handle a "00" seed', () => {
      const actual = generator('00', 1)
      expect(actual).to.equal('1[0]01[0]0')
    })

    it('can handle a "10" seed', () => {
      const actual = generator('10', 1)
      expect(actual).to.equal('111[0]0')
    })

    it('can handle a "01" seed', () => {
      const actual = generator('01', 1)
      expect(actual).to.equal('1[0]011')
    })
  })

  xdescribe('Works for more complex test cases', () => {
    it('can handle 2 iterations with seed of "0"', () => {
      const actual = generator('0', 2)
      expect(actual).to.equal('11[1[0]0]1[0]0')
    })

    it('can handle 3 iterations with seed of "0"', () => {
      const actual = generator('0', 3)
      expect(actual).to.equal('1111[11[1[0]0]1[0]0]11[1[0]0]1[0]0')
    })
  })
})
