import {
  Client, FeedbackController,
} from 'blips-and-chitz-feedback-api-sdk';
const client = new Client({
  timeout: 0,
  xRapidAPIKey: '637316bb60msh72029ce58a98a83p19d6d5jsnb9fefc607f61',
})
const publicController = new FeedbackController(client);
function useFeedbackApi() {
  function postRating(rating: number) {
    publicController.createFeedback({
      rating,
      page: 'snake',
      id: "",
      createdAt: "",
      userIP: "",
      tenantId: "",
      userAgent: ""
    });
  }
  return { postRating };
}

export default useFeedbackApi;
