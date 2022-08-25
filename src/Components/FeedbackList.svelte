<script>
  // import {onMount, onDestroy} from 'svelte'
  import {FeedbackStore} from '../stores' 
  import { fade, scale } from 'svelte/transition'
  import FeedbackItem from "./FeedbackItem.svelte"
  // let feedBack = []

  // const unsubscribe = FeedbackStore.subscribe((data) => feedBack = data)

  // onMount(() => {
  //   console.log('Mounted')
  // })

  // onDestroy(() => {
  //   unsubscribe()
  // })
</script>

{#each $FeedbackStore as fb (fb.id)}
  <div in:scale out:fade="{{ duration: 500 }}"> 
    <FeedbackItem item={fb}  /> 
    <!-- on:delete-feedback -->
  </div>
{/each}