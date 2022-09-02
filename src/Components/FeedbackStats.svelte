<script>
  import {FeedbackStore} from '../stores'

  // Reactive Values
	$: count = $FeedbackStore.length 
	$: average = $FeedbackStore.reduce((a, {rating}) => a + rating, 0) / 
    $FeedbackStore.length
</script>

<div class="feedback-stats">
  <h4>{count} Reviews</h4>
  <h4>Rating Average: {Math.round((average + Number.EPSILON) * 100 ) / 100}</h4>
</div>

<style> 
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>