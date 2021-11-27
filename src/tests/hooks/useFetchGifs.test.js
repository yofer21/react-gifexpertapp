import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en useFetchGifs', () => {

  test('debe retornar el estado inicial', async () => {

    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
    const { data, loading } = result.current;

    await waitForNextUpdate({ timeout: 3000 });

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();

  });

  test('debe retornar un arreglo de imgs y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
    await waitForNextUpdate({ timeout: 3000 });

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });

});