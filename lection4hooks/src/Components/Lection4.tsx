import CustomHook from './CustomHook/CustomHook'
import UseCallback from './UseCallback/UseCallback'
import UseContext from './UseContext/contextExample'
import UseEffect from './UseEffect/UseEffect'
import UseState from './UseState/UseState'

const Lection4 = () => {
  return (
    <div>
      <UseState />
      <hr style={{ borderColor: '#222' }} />
      <br />
      <UseEffect />
      <hr style={{ borderColor: '#222' }} />
      <br />
      <UseContext />
      <hr style={{ borderColor: '#222' }} />
      <br />
      <UseCallback />
      <hr style={{ borderColor: '#222' }} />
      <br />
      <CustomHook />
    </div>
  )
}

export default Lection4