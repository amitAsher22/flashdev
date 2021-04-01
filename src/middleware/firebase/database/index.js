import firebaseInstance from '../'
import database from 'firebase/database'


function get(option){
    return firebaseInstance.firebase.database().ref(`Owners/${window.user.uid}/data/${option.entity}`).once('value')
        .then(res => {
            const arr = []
            const map = res.val()
           for (const Owner in map){
               const item = map[Owner]
               item.id = Owner
              arr.push(item)
           }

            return arr
        })

}

function create(option){
    return firebaseInstance.firebase.database().ref(`Owners/${window.user.uid}/data/${option.entity}`)
        .push(option.Owner)
}

function removeId(option){
  return firebaseInstance.firebase.database().ref(`Owners/${window.user.uid}/data/${option.entity}/${option.id}`).remove()
}

function update(option){
    return firebaseInstance.firebase.database().ref(`Owners/${window.user.uid}/data/${option.entity}/${option.id}`)
        .update(option.Owner)
}


export default {
    get,
    create,
    removeId,
    update,

}
