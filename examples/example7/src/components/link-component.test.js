import { describe, expect, it, beforeEach } from 'vitest'
import { dateFormat } from '../common/utils'
import { render, localServerAddress } from '../../test-setup/test-utils'
import appConstants from '../common/constants'


describe('LinkComponent', () => {
    const currentHref = appConstants.routes.index
    const currentText = 'Home'
    const currentClass = 'home-link'

    beforeEach(async () => {
        await import('./index')
        render(`<nav-link href="${currentHref}" text="${currentText}" class="${currentClass}"></nav-link>`)
    })

    it('check LinkComponent creating', () => {
        expect(document.querySelector('nav-link')).toBeInTheDocument()
    })

    it('check LinkComponent structure', () => {
        const shadow = document.querySelector('nav-link').shadowRoot
        expect(shadow).not.toBeNull()
        expect(shadow.querySelector('a')).toBeInTheDocument()
        expect(document.querySelector('.'+currentClass)).toBeInTheDocument()
        expect(shadow.querySelector('a').href).toEqual(`${localServerAddress}${appConstants.routes.index}`)
        expect(shadow.querySelector('a').textContent).toEqual(currentText)
    })
})