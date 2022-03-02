import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';

export default function Slider() {
  return <Nouislider range={{min: 0, max: 100}} step={1} start={[0, 100]} />;
}
