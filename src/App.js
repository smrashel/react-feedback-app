import { render } from "react-dom";
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import FeedbackStats from './components/FeedbackStats'
import AboutPage from './pages/AboutPage'

function App()  {
    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete the feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id ))
        }
    }

    return (
        
        <div>
            <Router>
                <Header text='Feedback UI' />   
                <div className="container">
                    <Routes>
                        <Route exact path="/"
                            element={
                                <>
                                    <FeedbackForm handleAdd={addFeedback} />
                                    <FeedbackStats feedback={feedback} />
                                    <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                                </>
                            }                        
                        />
                        <Route path="/about" element={<AboutPage />} />

                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App