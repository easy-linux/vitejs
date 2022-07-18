import { describe, expect, it, beforeEach } from 'vitest'
import { dateFormat } from '../common/utils'
import { render } from '../../test-setup/test-utils'


describe('UserAvatar', () => {
    const userName = 'qwerty.asdfgh'

    beforeEach(async () => {
        await import('./index')
        render(`<user-avatar user-name="${userName}"></user-avatar>`)
    })

    it('check UserAvatar creating', () => {
        expect(document.querySelector('user-avatar')).toBeInTheDocument()
    })

    it('check UserAvatar structure', () => {
        const shadow = document.querySelector('user-avatar').shadowRoot
        expect(shadow).not.toBeNull()
        expect(shadow.querySelector('.avatar-text')).toBeInTheDocument()
        expect(shadow.querySelector('.avatar-text').textContent).toEqual('qa')
    })
})