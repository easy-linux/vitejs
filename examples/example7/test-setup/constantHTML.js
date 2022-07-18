const html = `
<div id="app"></div>
<template id="modal-dialog-template">
        <div class="modal-dialog">
            <div class="modal-dialog-backdrop">
            </div>
            <div class="modal-dialog-wrapper">

                <div class="modal-dialog-title">
                    <slot name="title"></slot>
                </div>
                <div class="modal-dialog-message">
                    <slot name="message"></slot>
                </div>

                <div class="buttons">
                    <button class='ok-button'>Ok</button>
                    <button class='cancel-button'>Cancel</button>
                </div>
            </div>
        </div>
    </template>
`

export default html