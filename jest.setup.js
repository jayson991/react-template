import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { mount, render, shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })

global.mount = mount
global.render = render
global.shallow = shallow
global.toJson = toJson
