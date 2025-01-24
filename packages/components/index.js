import sButton from './button'
import * as types from '../utils/type'
const components = [
  sButton,
]
const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export {
  sButton,
  types
}

export default install
