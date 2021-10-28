import { useFetch } from "../../src/hooks/useFetch";
import { renderHook } from '@testing-library/react-hooks';
import { Quote } from "../../src/interfaces/Quote";

describe('useFetch custom hook test', () => {

  beforeEach(() => {
    //Mocking
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([{
        "quote_id": 1,
        "quote": "I am not in danger, Skyler. I am the danger!",
        "author": "Walter White",
        "series": "Breaking Bad"
      }])
    })) as jest.Mock;
  });
  
  it('Should return initial state', () => {
    const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    const {data, isLoading} = result.current;

    console.log("D", data);
    console.log("L", isLoading);

    //Matchers
    expect(data).toEqual([]);
    expect(isLoading).toBe(true);
  });

  test('Should return a quote array and isLoading prop in false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
    
    //Before stract information
    await waitForNextUpdate();

    const { data, isLoading } = result.current;
    console.log("Changed data",      data);
    console.log("Changed isLoading", isLoading);

    //Matchers
    expect(data.length).toBe(1);
    expect(isLoading).toBe(false);

  });



});



