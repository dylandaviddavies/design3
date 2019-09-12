export default class InputContainer{  
    constructor( inputContainer ){
        this._container = inputContainer;
        this._label = this._container.querySelector(".input-container__label");
        this._input = this._container.querySelector(".input-container__input");
        this.init();
    }
    init(){
        var self = this;
        this._input.addEventListener("focusin", () => {
            self._container.classList.add("input-container--focused");
        });
        this._input.addEventListener("focusout", () => {
            self._container.classList.remove("input-container--focused");
        });
        this._input.addEventListener("change", ()=> {            
            if (self._input.value !== '') {
                self._container.classList.add("input-container--has-value");
            }
            else {
                self._container.classList.remove("input-container--has-value");
            }
        });         
        if (self._input.value !== '') {
            self._container.classList.add("input-container--has-value");
        }
        else {
            self._container.classList.remove("input-container--has-value");
        }
    }
}