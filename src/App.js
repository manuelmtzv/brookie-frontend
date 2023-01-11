import { Routes, Route, useLocation } from 'react-router-dom';
import { useUserContext } from './hooks/useUserContext';
import { AnimatePresence } from 'framer-motion';

// Pages & components
import Header from './components/Header'
import Home from './pages/Home';
import Signup from './pages/Signup'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Footer from './components/Footer';
import ReviewDetails from './pages/ReviewDetails';
import CreateReview from './pages/CreateReview';
import YourReviews from './pages/YourReviews';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const { user } = useUserContext();
  const location = useLocation();

  return (
    <div className="App">
      <Header />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>    
            {/* Routes without user     */}
            <Route element={<ProtectedRoute isAllowed={!user} redirectPath={"/home"} />}>
              <Route path="/"
                element={<Landing />} /> 
              <Route path="/login"
                element={<Login />} />
              <Route path="/signup"
                element={<Signup />} />  
            </Route>               
          
            {/* Routes with user */}
            <Route element={<ProtectedRoute isAllowed={user}/>}>
              <Route path="/home"
                element={<Home />} />   
              <Route path="/your-reviews"
                element={<YourReviews />} />                                       
              <Route path="/create-review"
                element={<CreateReview />} /> 
            </Route>     
            
            {/* Independient routes without user */}
            <Route path="/reviews/:id"
              element={<ReviewDetails />} /> 
            
            <Route path='*'
              element={<NotFound 
                title={"404 - Page Not Found"}
                message={"The page you were looking for does not exist. It might have been removed, had its name changed or is temporaly unavailable"} />} />
          </Routes>
        </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App;
