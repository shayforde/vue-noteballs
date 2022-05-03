<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            ref="newNoteRef"
            v-model="newNote"
            class="textarea"
            placeholder="Add a New Note"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
           
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note 
      v-for="note in notes" 
      :key="note.id" 
      :note="note"
       @deleteClicked="deleteNote"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from '@/components/Notes/Note.vue'

const newNote = ref("");
const newNoteRef = ref(null);

const deleteNote = idToDelele => {
 // console.log("deleteNote clicked ", idToDelele )
 notes.value= notes.value.filter(note => { return note.id !== idToDelele })
}
const addNote = () => {
  console.log("%caddNote", "color: green;");
  let currentDate = new Date().getTime(),
    id = currentDate.toString();

  let note = {
    id,
    content: newNote.value,
  };

  console.log(note);

  notes.value.unshift(note);
  newNote.value = "";
  newNoteRef.value.focus();
};

const notes = ref([
  {
    id: "id1",
    content:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia asperiores aspernatur labore quo voluptatibus a similique vitae ratione eveniet possimus unde eum quos. Mollitia rem atque nemo  reiciendis corporis.",
  },
  {
    id: "id2",
    content: "This is a shoretr note here",
  },
]);
</script>