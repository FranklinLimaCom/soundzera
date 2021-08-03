import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

const Ohmify = () => {
    return(
        <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
    )
}

export default Ohmify