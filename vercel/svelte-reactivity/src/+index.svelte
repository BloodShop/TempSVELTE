<script>
  let quantity = 0;
  function addToCart() {
    inventory.push(quantity)
    quantity++
  };
  let inventory = [1,2,3];
</script>

<h1>hi there looking good hwew ia {quantity}.</h1>
<button on:click={addToCart}>
  Add To Cart
</button>
<h2>{inventory}</h2>