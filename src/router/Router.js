import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import TestComponent from '../components/TestComponent'

const appRoutes: Routes = [
  { path: 'test-component',
    component: TestComponent
  }
];
