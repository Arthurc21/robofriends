import { shallow, mount, render} from 'enzyme';
//shallow renderea el componente dentro de el, asi es posible testear un componente a la vez
//mount genera un render en dom, tambien se utiliza para testear lyfe cycle methods
//render genera un html estatico
import React from 'react';
import Card from "./Card";


it('expect to render Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
});
