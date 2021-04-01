import database from "../../middleware/firebase/database"

export default {
    getOwners: async ({ commit }) =>{
        const Owners = await database.get({entity: 'Owners'});
        commit('setOwners' , Owners)

    },

    deleteOwners : async ({state , commit}) => {
        await database.removeId({entity:'Owners' , id: state.editedOwnerId});

        const OwnerId = state.editedOwnerId;

        commit('resetEditedOwnerId');
        commit('deleteOwner' , OwnerId)
    },

    updateOwner: async ({state , commit}) => {

        const Owner = {}
        Object.assign( Owner , state.editedOwner)
        Owner.id = state.editedOwnerId

        await database.update({entity: 'Owners' , id: Owner.editedOwnerId , Owner : Owner.editedOwner})

        commit('resetEditedOwner')
        commit('resetEditedOwnerId')

        commit('editOwner' , Owner )
    }


}