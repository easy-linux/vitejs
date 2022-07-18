import { describe, expect, it, beforeEach } from 'vitest'
import { dateFormat } from '../common/utils'
import { render } from '../../test-setup/test-utils'


describe('FakeForm', () => {
    const currentText = 'Testing component...'

    beforeEach(async () => {
        await import('./index')
        render(`<fake-form block="${currentText}"></fake-form>`)
    })

    it('check FakeForm creating', () => {
        expect(document.querySelector('fake-form')).toBeInTheDocument()
    })

    it('check FakeForm structure', () => {
        const shadow = document.querySelector('fake-form').shadowRoot
        expect(shadow).not.toBeNull()
        expect(shadow.querySelector('.title')).toBeInTheDocument()
        expect(shadow.querySelector('.title').textContent).toEqual(`Form ${currentText}`)
    })
})