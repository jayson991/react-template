import toJson from 'enzyme-to-json'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { mount, render, shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })

global.mount = mount
global.render = render
global.shallow = shallow
global.toJson = toJson
