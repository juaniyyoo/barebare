import React from 'react';
import Dashboard from '../../../app/components/Dashboard.js';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Dashboard>Facebook</Dashboard>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
