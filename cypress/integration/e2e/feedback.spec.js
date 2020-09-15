import FeedbackPage from "../../page-objects/pages/FeedbackPage"

describe('Feedback Test using fixtures', () => {
    
    before(() => {
       FeedbackPage.load() 
    });

    it('should submit feedback', () => {
        FeedbackPage.submitFeedback()
    });
});