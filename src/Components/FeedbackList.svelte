<script>
  import { fade, scale } from 'svelte/transition'
  import FeedbackItem from "./FeedbackItem.svelte"
  export let feedBack = []

  // console.log(feedBack)
</script>

{#each feedBack as fb (fb.id)}
  <div transition:fade> 
    <FeedbackItem item={fb} on:delete-feedback /> 
  </div>
{/each}