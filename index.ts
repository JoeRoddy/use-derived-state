import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function useDerivedState<T extends any>(data: T): [T, Dispatch<SetStateAction<T>>] {
  const [dataState, setDataState] = useState<T>(data);

  useEffect(() => {
    setDataState(data);
  }, [data]);

  return [dataState, setDataState];
}
