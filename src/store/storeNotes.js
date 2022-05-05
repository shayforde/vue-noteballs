import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
        notes: [
            {
                id: "id1",
                content:
                  "from the store Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quia asperiores aspernatur labore quo voluptatibus a similique vitae ratione NO",
              },
              {
                id: "id2",
                content: "This is a shorter note here from the store",
              },
        ] 
    }
  },
  actions: {
      addNote(newNoteContent) {
          console.log("Add Note to store ", newNoteContent)
    let currentDate = new Date().getTime(),
    id = currentDate.toString();

  let note = {
    id,
    content: newNoteContent,
  };

  //console.log(note);

        this.notes.unshift(note);
      },
      deleteNote(idToDelete){
      //  console.log("delete note ", idToDelete)

      this.notes = this.notes.filter(note => {
        return  note.id != idToDelete
      })
      }
  }

})

