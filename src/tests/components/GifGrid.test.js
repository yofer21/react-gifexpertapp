import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {

  const category = 'Dragon Ball';

  test('debe mostrarse correctamente', () => {

    useFetchGifs.mockReturnValue({ data: [], loading: true });
    const wrapper = shallow(<GifGrid category={ category }/>);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrarse items cuando se cargan imagenes', () => {

    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/cualquier.cosa.jpg',
        title: 'Cualquier cosa',
      },
      {
        id: '123',
        url: 'https://localhost/cualquier.cosa.jpg',
        title: 'Cualquier cosa',
      },
    ];

    useFetchGifs.mockReturnValue({ data: gifs, loading: false });

    const wrapper = shallow(<GifGrid category={ category }/>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBeFalsy();
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

  });
});