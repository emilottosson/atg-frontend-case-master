import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Table from './Table';

const TrackProps = {
  id: 6,
  name: 'Åby',
};
const TableDataProps = {
  id: 'V75_2022-10-08_6_5',
  startTime: '2022-10-08T16:22:08',
  tracks: [TrackProps],
};

test('Renders track name', () => {
  render(<Table data={TableDataProps} />);
  const anchorElements = screen.getByRole('paragraph');
  expect(anchorElements).toHaveTextContent(TrackProps.name);
});

test('Handles onclick on race horse', async () => {
  const id = '2022-10-08_6_5';
  const i = '4';

  render(<Table data={TableDataProps} />);

  const buttonElement = await waitFor(() => screen.getAllByRole('button')[i]);
  fireEvent.click(buttonElement);

  const divElement = await waitFor(() => screen.getAllByRole('contentinfo')[0]);
  expect(divElement).toHaveAttribute('id', id + '_' + i);
  expect(divElement).toHaveStyle('display: block;');

  fireEvent.click(buttonElement, { target: { tabName: id + '_' + i } });
  expect(divElement).toHaveStyle('display: none;');
});
