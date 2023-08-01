import { useState } from "react";
import Heading from "./components/Heading";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

function  App() {
        const [feedback, setFeedback] = useState(FeedbackData)


    return (
     <>
        <Heading/>
        <div className="container">
            <FeedbackList feedback = {feedback} />
            

        </div>
     </>
    )
}


export default App;