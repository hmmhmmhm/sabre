const Console = require('./console')
const Form = require('./form')

var primaryForm = null
var primaryConsole = null

class Sabre {
    static init(){
        if(primaryForm === null)
            primaryForm = new Form()
    }
    static load(){
        if(primaryConsole === null){
            primaryConsole = new Console()
        }else{
            /**
             * @TODO
             * 이미 생성된 콘솔에 종속
             */
            let subConsole = new Console()
            // TODO
        }
    }
}

module.exports = Sabre