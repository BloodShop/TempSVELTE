<script>
	import FeedbackList from './Components/FeedbackList.svelte'
	import FeedbackStats from './Components/FeedbackStats.svelte'
	import FeedbackForm from './Components/FeedbackForm.svelte'

	let feedBack = [
		{
			id: 1,
			rating: 10,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur est magni at, libero et vel provident omnis. Soluta temporibus, sapiente possimus officia quis enim culpa!',	
		},
		{
			id: 2,
			rating: 9,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero totam enim dolore mollitia tempora iusto, nisi eveniet incidunt ipsa excepturi iure blanditiis, quod earum possimus ducimus, recusandae consequatur soluta. Quos perspiciatis assumenda eveniet veritatis autem reprehenderit. Libero nulla dolor minima, quae sequi quibusdam dolorem nobis',
		},
		{
			id: 3,
			rating: 7,
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, exercitationem!',
		},
	]

	// Reacted Values
	$: count = feedBack.length 
	$: average = feedBack.reduce((a, {rating}) => a + rating, 0) / 
		feedBack.length

		const addFeedback = (e) => {
			const newFeedback = e.detail
			feedBack = [newFeedback, ...feedBack]
		}

	const deleteFeedback = (e) => {
		const itemId = e.detail
		feedBack = feedBack.filter((item) => item.id != itemId)
	}
</script>

<main class="container">
	<!-- <h1>{count}</h1> -->
	<!-- <h1>{average}</h1> -->
	<FeedbackForm on:add-feedback={addFeedback}/>
	<FeedbackStats {count} {average} />
	<FeedbackList {feedBack} on:delete-feedback={deleteFeedback}/>
</main>