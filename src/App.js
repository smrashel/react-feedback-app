import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import {FeedbackProvider} from './context/FeedbackContext'

function App()  {
    return (        
        <div>
            <FeedbackProvider>
                <Router>
                    <Header text='Feedback UI' />   
                    <div className="container">
                        <Routes>
                            <Route exact path="/"
                                element={
                                    <>
                                        <FeedbackForm />
                                        <FeedbackStats />
                                        <FeedbackList />
                                    </>
                                }                        
                            />
                            <Route path="/about" element={<AboutPage />} />
                        </Routes>
                        <AboutIconLink />
                    </div>
                </Router>
            </FeedbackProvider>
        </div>
    )
}

export default App