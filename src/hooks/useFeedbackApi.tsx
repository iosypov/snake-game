import { Client, FeedbackController } from 'blips-and-chitz-feedback-api-sdk';
const client = new Client({
  timeout: 0,
  xRapidAPIKey: process.env['REACT_APP_RAPID_API_KEY'],
});
const publicController = new FeedbackController(client);
function useFeedbackApi() {
  async function postRating(rating: number) {
    const id = localStorage.getItem('feedbackId');
    if (id) {
      publicController.updateFeedbackById(id, {
        rating,
        tags: ['snake-game'],
      });
    } else {
      const feedback = await publicController.createFeedback({
        rating,
        tags: ['snake-game'],
      });
      localStorage.setItem('feedbackId', feedback.result.id);
    }
  }
  return { postRating };
}

export default useFeedbackApi;
