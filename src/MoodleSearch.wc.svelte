<svelte:options tag="moodle-search" />

<script>
  import MoodleSearch from "./MoodleSearch.svelte";

  document.body.style = "animation: spin-me 2s linear infinite";
  let i = 0;
  const style = document.createElement("style");
  style.innerText = `
@keyframes spin-me {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}`;
  document.head.append(style);
</script>

<MoodleSearch />
