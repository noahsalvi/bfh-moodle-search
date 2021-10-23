<script lang="ts">
  import { onMount } from "svelte";
  import TypeAhead from "svelte-typeahead";
  import { REQUEST_CONFIG, STORAGE_KEY } from "./config";

  let show = false;
  let courses = [];

  async function fetchCourses() {
    // return (courses = dummyCourses);
    const sessKey = document.head.textContent.match(/sesskey":"(.*?)"/)?.[1];
    if (!sessKey) return;
    const path = `https://moodle.bfh.ch/lib/ajax/service.php?sesskey=${sessKey}&info=core_course_get_enrolled_courses_by_timeline_classification`;

    courses = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    if (!courses) {
      const response = await fetch(path, {
        method: "POST",
        body: JSON.stringify(REQUEST_CONFIG),
      });
      if (!response.ok) return;

      const json = (await response.json())?.[0];
      if (json.error) return;

      courses = json.data.courses;
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
    }
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
      autofocus
      hideLabel
      placeholder="Modul Suche"
      data={courses}
      extract={(item) => item["fullname"]}
      on:select={select}
      on:blur={() => (show = false)}
    />
  </div>
{/if}

<style lang="scss">
  $border-color: rgba(133, 133, 133, 0.7);
  .container {
    z-index: 1000000;
    position: fixed;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
    width: 500px;
  }

  :global([data-svelte-typeahead]) {
    background: none !important;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  :global([data-svelte-typeahead] [data-svelte-search] input) {
    margin: 0;
    background: rgba(0, 0, 0, 0.7);
    -webkit-backdrop-filter: blur(5px);

    border: 2px solid $border-color;
    border-radius: 5px;
    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    color: white;
    padding: 10px 10px;
    padding-bottom: 5px;
    font-size: 20px;

    box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.2),
      0 -6px 20px 0 rgba(0, 0, 0, 0.19);

    &:focus {
      outline: none;
    }
  }

  :global([data-svelte-typeahead] ul.svelte-typeahead-list) {
    margin: 0;
    box-sizing: border-box;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 2px solid $border-color;
    border-top: none;
    max-width: 100%;
    min-height: 5px;

    background: rgba(0, 0, 0, 0.7);
    -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2),
      0 12px 20px 0 rgba(0, 0, 0, 0.19);

    &::before {
      content: "";
      z-index: -5;
      position: absolute;
      height: 100%;
      width: 100%;

      backdrop-filter: blur(5px);
    }
  }

  :global(.svelte-typeahead-list li) {
    background: none;
    color: whitesmoke;
    border-radius: 5px;
    border-bottom: none !important;
    margin: 0 8px;

    &:hover {
      background: rgb(23, 111, 198) !important;
    }

    &:first-child {
      margin-top: 5px;
    }

    &:last-child {
      margin-bottom: 5px;
    }
  }

  :global(.svelte-typeahead-list li.selected) {
    background: #4b647d;
  }

  :global(.svelte-typeahead-list li mark) {
    background: none;
    color: white;
  }

  :global([data-svelte-typeahead]) {
    &::before {
      content: "";
      z-index: -5;
      position: absolute;
      height: 100%;
      width: 100%;

      backdrop-filter: blur(5px);
    }
  }
</style>
