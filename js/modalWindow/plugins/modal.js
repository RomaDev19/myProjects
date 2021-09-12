function _createModal(options) {
    const modal = document.createElement('div')
    const DEFAULT_WIDTH = '600px'
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay" data-close="true">
        <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
            <div class="modal-header">
                <span class="modal-title">${options.title || 'Modal window'}</span>
                ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
            </div>
            <div class="modal-body">
                ${options.content || ''}
            </div>
            <div class="modal-footer"> 
                <button>Ok</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
    `)
    document.body.appendChild(modal)// помещяем в DOM дерево
    return modal
}
/*
  title: string 
  closable: boolean
  content: string
  width: string (400px)
  destroy(): void
  window must close
  --------------
  setContent(html: string): voisd | PUBLIC
  onClose(): void
  onOpen(): void
  beforeClose(): boolean 
  animate.css 

*/
$.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options) // системная/приватная функция
    let closing = false

    const modal = {
        open() {
            !closing && $modal.classList.add('open') 
        },
        close() {
            closing = true
            $modal.classList.remove( 'open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
        }
    }

    $modal.addEventListener('click', event => {
        console.log('Clicked', event.target.dataset.close)
        if (event.target.dataset.close) {
            modal.close()
        }
    })


    return modal
}