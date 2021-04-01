export default {
    setOwners: ((state , Owners) => state.Owners = Owners),

    setEditOwnerId: ((state , id ) => state.editedOwnerId = id),

    setEditOwner: ((state , Owner) => state.editedOwner = Owner),

    resetEditedOwnerId:((state ) => state.editedOwnerId = ''),

    resetEditedOwner: ((state ) => {
        for (const key of state.editedOwner){
            state.editedOwner[key] = ''
j
        }
       delete state.editedOwner.id
    }),

    editOwner: ((state , Owner ) => {
        const index = state.Owners.findIndex(p => p.id === Owner.id)
        state.Owners.splice(index , 1, Owner)
    }),

    deleteOwner: ((state , OwnerId ) => {
        const index = state.Owners.findIndex(p => p.id ===  OwnerId )
        state.Owners.splice(index , 1)
    }),

    insertOwner: ((state ,Owner ) =>{
        state.Owners.push(Owner)
    })











}