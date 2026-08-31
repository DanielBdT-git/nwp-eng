import {
  lazy,
  LocationProvider,
  ErrorBoundary,
  Router,
  Route
} from 'preact-iso';

// Synchronous
import Home from './routes/Home.tsx';
import Courses from "./routes/Courses.tsx";
import Maps from "./routes/Maps.tsx";

// Asynchronous (throws a promise)
const NotFound = lazy(() => import('./routes/_404.tsx'));

export default function App() {
  return (
      <LocationProvider>
        <ErrorBoundary>
          <Router>
            {/* Alternative dedicated route component for better TS support */}
            <Route path="/" component={Home}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/maps" component={Maps}/>
            
            {/* `default` prop indicates a fallback route. Useful for 404 pages */}
            <Route default component={NotFound}/>
          </Router>
        </ErrorBoundary>
      </LocationProvider>
  );
}
