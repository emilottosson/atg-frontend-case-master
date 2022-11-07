import { useEffect, useState } from 'react';
import Table from '../../../../common/components/Table';
import { productApi } from '../../../../api/Api';
import {
  Products,
  Result,
} from '../../../../types/horseBetting/HorseBettingInfo';
import { Wrapper, Select, Tracks } from './HorseBetting.styles';

const HorseBetting = () => {
  const dropDownOptions: { label: string; value: string }[] = [
    { label: 'V75', value: 'V75' },
    { label: 'V86', value: 'V86' },
    { label: 'GS75', value: 'GS75' },
  ];
  const [products, setProduct] = useState<Products>();
  const [betType, setBetType] = useState<string>();

  useEffect(() => {
    const abortController = new AbortController();
    if (betType) {
      fetch(`${productApi}/${betType}`, {
        signal: abortController.signal,
      })
        .then((response) => response.json())
        .then((response) => setProduct(response))
        .catch((error) => {
          if (error.name === 'AbortError') {
            console.log('request was cancelled');
          } else {
            console.log(error.message);
          }
        });
    } else {
      setProduct({ betType: '', results: [] });
    }
    return () => abortController.abort();
  }, [betType]);

  return (
    <Wrapper>
      <Select
        onChange={(e) => {
          setBetType(e.target.value);
        }}
      >
        <option value="">Select</option>
        {dropDownOptions.map((options) => (
          <option key={options.label} value={options.value}>
            {options.label}
          </option>
        ))}
      </Select>
      <Tracks>
        {products?.results.map((result: Result, i) => {
          return <Table data={result} key={i}></Table>;
        })}
      </Tracks>
    </Wrapper>
  );
};

export default HorseBetting;
