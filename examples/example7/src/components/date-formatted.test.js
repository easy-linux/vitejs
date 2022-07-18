import { describe, expect, it, beforeEach } from 'vitest'
import { dateFormat } from '../common/utils'
import { render } from '../../test-setup/test-utils'


describe('DateFormatted', () => {
    const currentDate = new Date()

    beforeEach(async () => {
        await import('./index')
        render(`<date-formatted date="${currentDate}"></date-formatted>`)
    })

    it('check DateFormatted creating', () => {
        expect(document.querySelector('date-formatted')).toBeInTheDocument()
    })

    it('check DateFormatted structure', () => {
        const shadow = document.querySelector('date-formatted').shadowRoot
        expect(shadow.querySelector('.date-formatted')).toBeInTheDocument()
        expect(shadow.querySelector('.date-formatted').textContent).toEqual(dateFormat(`${currentDate}`))
    })
})