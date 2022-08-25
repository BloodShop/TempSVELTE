import { writable, Writable } from "svelte/store"

export const FeedbackStore = writable([
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
])