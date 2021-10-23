<script lang="ts">
  import { onMount } from "svelte";
  import TypeAhead from "svelte-typeahead";
  import { REQUEST_CONFIG } from "./config";

  let show = false;
  let courses = [];

  async function fetchCourses() {
    // return (courses = dummyCourses);
    const sessKey = document.head.textContent.match(/sesskey":"(.*?)"/)?.[1];
    if (!sessKey) return;
    const path = `https://moodle.bfh.ch/lib/ajax/service.php?sesskey=${sessKey}&info=core_course_get_enrolled_courses_by_timeline_classification`;

    const response = await fetch(path, {
      method: "POST",
      body: JSON.stringify(REQUEST_CONFIG),
    });
    if (!response.ok) return;

    const json = (await response.json())?.[0];
    if (json.error) return;

    courses = json.data.courses;
  }

  function moodleSearchShortcut(e) {
    if (e.key === "k" && e.metaKey) {
      show = !show;
    } else if (show && e.key === "Escape") show = false;
  }

  function select(e) {
    const course = e.detail.original;

    if (!course) return;
    location.href = "https://moodle.bfh.ch/course/view.php?id=" + course.id;
  }

  onMount(() => {
    fetchCourses();
  });
</script>

<svelte:window on:keydown={moodleSearchShortcut} />

{#if show}
  <div class="container">
    <!-- svelte-ignore a11y-autofocus -->
    <TypeAhead
      placeholder="Modul suche"
      data={courses}
      extract={(item) => item["fullname"]}
      autofocus
      on:select={select}
      hideLabel
      class="type-ahead"
      on:blur={() => (show = false)}
    />
  </div>
{/if}

<style global>
  .container {
    z-index: 1000000;
    position: fixed;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    width: 500px;

    padding: 20px;
    border-radius: 20px;
  }

  :global([data-svelte-typeahead]) {
    background: none !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  :global([data-svelte-typeahead] [data-svelte-search] input) {
    margin: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 0;
    border-radius: 5px;
    color: white;
    position: relative;
    padding: 10px 10px;
    font-size: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  :global([data-svelte-typeahead] [data-svelte-search] input:focus) {
    outline: none;
    border: 2px solid rgba(133, 133, 133, 0.7);
  }

  :global(.svelte-typeahead-list li) {
    background: black;
    color: white;
    border-radius: 5px;
  }

  :global(.svelte-typeahead-list li.selected) {
    background: #4b647d;
  }

  :global(.svelte-typeahead-list li:hover) {
    background: rgb(16, 50, 84) !important;
  }

  :global(.svelte-typeahead-list li mark) {
    background: whitesmoke;
  }
</style>
