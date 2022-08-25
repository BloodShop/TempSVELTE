<script>
	import FeedbackList from './Components/FeedbackList.svelte'
	import FeedbackStats from './Components/FeedbackStats.svelte'
	import FeedbackForm from './Components/FeedbackForm.svelte'

	// const addFeedback = (e) => {
	// 	const newFeedback = e.detail
	// 	feedBack = [newFeedback, ...feedBack]
	// }
	// const deleteFeedback = (e) => {
	// 	const itemId = e.detail
	// 	feedBack = feedBack.filter((item) => item.id != itemId)
	// }
</script>

<main class="container">
	<FeedbackForm /> <!-- on:add-feedback={addFeedback} -->
	<FeedbackStats /> <!-- {count} {average}  -->
	<FeedbackList /> <!-- on:delete-feedback={deleteFeedback} -->
</main>