import React, { PropTypes } from 'react';
import {
  Navigation,
  NavigationLink
} from './materialDesign';

export default class HeaderContent extends React.Component {
  static propTypes = {
  };

  render () {
    return <Navigation>
      <NavigationLink href=''>Link</NavigationLink>
      <NavigationLink href=''>Link</NavigationLink>
      <NavigationLink href=''>Link</NavigationLink>
      <NavigationLink href=''>Link</NavigationLink>
    </Navigation>
  }
}