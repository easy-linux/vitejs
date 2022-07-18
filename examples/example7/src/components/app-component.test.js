import { describe, expect, it, beforeEach } from 'vitest'
import { dateFormat } from '../common/utils'
import { render, mockPost } from '../../test-setup/test-utils'
import { apiServer } from '../api/baseApi'
import { fireEvent, getByText, waitFor } from '@testing-library/dom'
import appConstants from '../common/constants'


describe('AppComponent', () => {
  const topBlock = '__topBlock__'
  const leftBlock = '__leftBlock__'
  const rightBlock = '__rightBlock__'
  const bottomBlock = '__bottomBlock__'

  beforeEach(async () => {
    await import('./index')
    window.sessionStorage.clear()
    render(`
        <app-component>
          <div slot="block-top" class="block">${topBlock}</div>
          <div slot="block-left" class="block">${leftBlock}</div>
          <div slot="block-right" class="block">${rightBlock}</div>
          <div slot="block-bottom" class="block">${bottomBlock}</div>
        </app-component>`)
  })

  it('check AppComponent creating', () => {
    expect(document.querySelector('app-component')).toBeInTheDocument()
  })

  it('check AppComponent structure', () => {
    const shadow = document.querySelector('app-component').shadowRoot
    expect(shadow).not.toBeNull()
    const blocks = ['block-top', 'block-left', 'block-right', 'block-bottom']
    blocks.forEach((block) => {
      const slot = shadow.querySelector(`slot[name=${block}`)
      const  div = document.querySelector(`div[slot=${block}]`) 
      expect(slot).toBeInTheDocument()
      expect(div).toBeInTheDocument()
      expect(slot).toContain(div)
    })
    
  })

  it('check AppComponent login', async () => {
    const shadow = document.querySelector('app-component').shadowRoot
    expect(shadow).not.toBeNull()
    const form = shadow.querySelector('.login-form')
    expect(form).toBeInTheDocument()

    const fakeToken = '_fake-token__'
    const userName = '__fake_user__'
    const userPassword = '__fake_pass__'

    const mock = mockPost('/login').willResolve({token: fakeToken})
    fireEvent.change(form.querySelector('.input-user'), {target: {value: userName}})
    fireEvent.change(form.querySelector('.input-password'), {target: {value: userPassword}})
    fireEvent.click(form.querySelector('button'))
    expect(mock).toHaveFetchedWithBody({
      "login": userName,
      "password": userPassword
    })

    await waitFor(() => expect(window.sessionStorage.getItem(appConstants.storage.keys.token)).toEqual(fakeToken))
  })
})